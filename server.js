const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path =  require('path');
const socketio = require('socket.io');
const http = require('http');

require('dotenv').config();

const app = express();
const server= http.createServer(app);
const io= socketio(server);
const port =  process.env.PORT || 5000;
const { addUser, removeUser, getUser, getUsersInRoom,addBoard,getBoardsOfRoom,removeBoard } = require('./users');

app.use(cors());
app.use(express.json());

//socket
io.on('connection', (socket) =>{

  socket.on('join', ({ name, room }, callback) => {
    const { error, user } = addUser({ id: socket.id, name, room });

    if(error) return callback(error);

    socket.join(user.room);
    callback(getUsersInRoom(user.room));
  });

  socket.on('startGame', () =>{
    const user = getUser(socket.id);
    if(user) {
      io.to(user.room).emit('newGame');
    }
  });
  socket.on('toBattle', ({myboard}) =>{
    const user = getUser(socket.id);
    const userName=user.name;
    const userRoom=user.room;
    const userID=user.id
    addBoard(userID,userName,userRoom,myboard);
    const boardofroom=getBoardsOfRoom(userRoom)
    if(boardofroom.length===2) {
      let oppboard;
      let user2;
      if(boardofroom[0].name!==userName){
        oppboard=boardofroom[0].board;
        user2=boardofroom[0].id
      }else{
        oppboard=boardofroom[1].board;
        user2=boardofroom[1].id;
      }
      io.to(user.id).emit('oppBoard',{oppboard});
      oppboard=myboard;
      io.to(user2).emit('oppBoard',{oppboard});
      const socketid=user2;
      io.to(user2).emit('yourturn',{socketid});
    }
  });

  socket.on('fire', ({oppboard}) =>{
    const user = getUser(socket.id);
    const userName=user.name;
    const userRoom=user.room;
    const users=getBoardsOfRoom(userRoom)
    let myboard=oppboard;
    let user2;
    if(users[0].name!==userName){
      user2=users[0].id
    }else{
      user2=users[1].id;
    }
    io.to(user2).emit('getfire',{myboard});
    const socketid=user2;
    io.to(user2).emit('yourturn',{socketid});
  });
  socket.on('disconnect', () =>{
    const user = removeUser(socket.id);  
    if(user) {
      const userRoom=user.room;
      removeBoard(userRoom);
      io.to(userRoom).emit('info', "Opponent has left the game.You WIN!");
    }
  });
});

//mongodb
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true ,useUnifiedTopology: true,useFindAndModify: false }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

//gets
const getuser =require('./routes/GetUser');
const getemail =require('./routes/GetEmail');
//posts
const postuser =require('./routes/PostUser');

app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use('/',getuser);
app.use('/getemail',getemail);
app.use('/',postuser);

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')))
  // Handle React routing, return all requests to React app
  app.get('*', (request, response) => {
    response.sendFile(path.join(__dirname, 'client/build', 'index.html'))
  })
}
server.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});