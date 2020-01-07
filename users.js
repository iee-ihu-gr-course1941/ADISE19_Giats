const users = [];
const boards=[];

const addUser = ({ id, name, room }) => {
  name = name.trim().toLowerCase();
  room = room.trim().toLowerCase();

  if(!name || !room) return { error: 'Username and room are required.' };
  let usersinroom=getUsersInRoom(room);
  const user = { id, name, room };
  if(usersinroom.length!==2){
    users.push(user);
  }else{
    return { error: 'Not space in the room.' };
  }
  
  
  return { user };
}

const removeUser = (id) => {
  const index = users.findIndex((user) => user.id === id);
  if(index !== -1) return users.splice(index, 1)[0];
}

const getUser = (id) => users.find((user) => user.id === id);

const getUsersInRoom = (room) => users.filter((user) => user.room === room);

const addBoard = (id,name,room,board) =>{
  boards.push({id,name,room,board});
}
const getBoardsOfRoom = (room) => boards.filter((board) => board.room === room);

const removeBoard = (room) => {
  const index = boards.findIndex((board) => board.room === room,);
  if(index !== -1) return boards.splice(index, 1)[0];
}

module.exports = { addUser, removeUser, getUser, getUsersInRoom,addBoard,getBoardsOfRoom,removeBoard };