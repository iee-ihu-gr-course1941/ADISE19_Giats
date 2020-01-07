import React, { Component } from 'react'
import queryString from 'query-string';
import io from 'socket.io-client';

import '../css/SinglePlayer.css';
import MultiplayerHeader from "../componets/MultiplayerHeader";
import MultiplayerFleet from "../componets/MultiplayerFleet";
import MultiplayerBottom from "../componets/MultiplayerBottom";

import {connect} from "react-redux";
import {newGame,toBattle,message,setOppShips,setMultiplayerFire,isMyShipDead} from "../actions/"
let socket = io('https://giats-battleships.herokuapp.com/');
class MultiPlayer extends Component {
    componentDidMount(){
        window.scrollTo(0, 0);
        const {name , room} = queryString.parse(this.props.location.search);
        
        socket.emit('join', {name,room}, (info) =>{
            if(info.length===1){
                this.props.message("Wait for opponent");
            }else if(info.length===2){
                socket.emit('startGame');
            }else if(info){
                window.location.href="/multiplayer"
                alert(info)
            }        
        });

        socket.on('info', (info) => {
            alert(info)
            socket.emit('dissconnect');
            window.location.href="/multiplayer"
        });
        
        socket.on('newGame',() => {
            this.props.newGame();       
        })

        socket.on('oppBoard', ({oppboard}) =>{
            this.props.toBattle();
            this.props.setOppShips(oppboard);   
            this.props.message("Wait for opponent");
        })
        
        socket.on('getfire', ({myboard}) =>{
            this.props.setMultiplayerFire(myboard);    
            this.isMyShipDead();
        })
          
    }
    isMyShipDead= () =>{
        let count=0;
                for(let i=0; i<this.props.myShipsReducer.length; i++){
                    for(let j=0; j<this.props.myShipsReducer.length; j++){
                        if(this.props.myShipsReducer[i][j]===3){
                            if(this.props.myBoardReducer[i][j]===2){
                                count++;
                            }
                        }
                    }
                }
                if(count===5){
                    this.props.isMyShipDead(0)
                }
            count=0;
                for(let i=0; i<this.props.myShipsReducer.length; i++){
                    for(let j=0; j<this.props.myShipsReducer.length; j++){
                        if(this.props.myShipsReducer[i][j]===4){
                            if(this.props.myBoardReducer[i][j]===2){
                                count++;
                            }
                        }
                    }
                }
                if(count===4){
                    this.props.isMyShipDead(1)
                }
                count=0;
                for(let i=0; i<this.props.myShipsReducer.length; i++){
                    for(let j=0; j<this.props.myShipsReducer.length; j++){
                        if(this.props.myShipsReducer[i][j]===5){
                            if(this.props.myBoardReducer[i][j]===2){
                                count++;
                            }
                        }
                    }
                }
                if(count===3){
                    this.props.isMyShipDead(2)
                }
                count=0;
                for(let i=0; i<this.props.myShipsReducer.length; i++){
                    for(let j=0; j<this.props.myShipsReducer.length; j++){
                        if(this.props.myShipsReducer[i][j]===6){
                            if(this.props.myBoardReducer[i][j]===2){
                                count++;
                            }
                        }
                    }
                }
                if(count===3){
                    this.props.isMyShipDead(3)
                }
                count=0;
                for(let i=0; i<this.props.myShipsReducer.length; i++){
                    for(let j=0; j<this.props.myShipsReducer.length; j++){
                        if(this.props.myShipsReducer[i][j]===7){
                            if(this.props.myBoardReducer[i][j]===2){
                                count++;
                            }
                        }
                    }
                }
                if(count===2){
                    this.props.isMyShipDead(4)
                }
    }
    render() {
        return (
            <div className="singleplayer">
                <div className="singleplayer-container">
                    <MultiplayerHeader/>
                    <MultiplayerFleet socket={socket}/>
                    <MultiplayerBottom/>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) =>{
    return {
        myBoardReducer :state.myBoardReducer,
        myShipsReducer :state.myShipsReducer,
        oppBoardReducer:state.oppBoardReducer,
        oppShipsReducer:state.oppShipsReducer,
    }
}

const mapDispatchToProps = () =>{
    return {
        newGame,
        toBattle,
        message,
        setOppShips,
        setMultiplayerFire,
        isMyShipDead
    }
}
export default connect(mapStateToProps,mapDispatchToProps())(MultiPlayer);