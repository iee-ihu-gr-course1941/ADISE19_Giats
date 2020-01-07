import React, { Component } from 'react'

import '../css/Bottom.css';
import carrier from "../images/carrier-fill.png"
import battleship from "../images/battleship-fill.png"
import destroyer from "../images/destroyer-fill.png"
import submarine from "../images/submarine-fill.png"
import patrolboat from "../images/patrol-boat-fill.png"
import ScrollToBottom from 'react-scroll-to-bottom';
import {connect} from "react-redux";
import {isOppShipDead,isMyShipDead} from "../actions/"
class Bottom extends Component {
    handleChat(chat){
        let ul = chat.map(message => {
            let li;
            if(message.player==="opp"){
                li=<li className="bottom-chat-opp">{message.message}</li>
            }else{
                li=<li className="bottom-chat-me">{message.message}</li>
            }
            return li;
        });
        return ul;
    }
    render() {
        return (
            <div className="bottom">
                <div className="bottom-container">
                    <div className="bottom-ships">
                        <div className="bottom-ships-container">
                            <div className="bottom-ships-container-label">
                                <span>My Fleet Status</span>
                            </div>
                            <div className="bottom-ships-container-ships">
                                <div>
                                    <div><img alt="ship" className={!this.props.isMyShipDeadReducer[0] ? "bottom-ships-container-ships-carrier" : "bottom-ships-container-ships-carrier-dead" } src={carrier}/></div>
                                    <div><img alt="ship" className={!this.props.isMyShipDeadReducer[1] ? "bottom-ships-container-ships-battleship" : "bottom-ships-container-ships-battleship-dead" } src={battleship}/></div>
                                </div>
                                <div>
                                    <div><img alt="ship" className={!this.props.isMyShipDeadReducer[2] ? "bottom-ships-container-ships-destroyer" : "bottom-ships-container-ships-destroyer-dead"} src={destroyer}/></div>
                                    <div><img alt="ship" className={!this.props.isMyShipDeadReducer[3] ? "bottom-ships-container-ships-submarine" : "bottom-ships-container-ships-submarine-dead"} src={submarine}/></div>
                                </div>
                                <div>
                                    <div><img alt="ship" className={!this.props.isMyShipDeadReducer[4] ? "bottom-ships-container-ships-patrolboat" : "bottom-ships-container-ships-patrolboat-dead"} src={patrolboat}/></div>
                                    <div></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bottom-chat">
                        <div className="bottom-chat-container">
                            <ScrollToBottom>
                                <div>
                                    <ul>
                                        {this.handleChat(this.props.chatReducer)}   
                                    </ul>
                                </div>
                            </ScrollToBottom>  
                        </div>
                    </div>
                    <div className="bottom-oppships">
                        <div className="bottom-ships-container">
                            <div className="bottom-ships-container-label">
                                <span>Opponent's Fleet Status</span>
                            </div>
                            <div className="bottom-ships-container-ships">
                                <div>
                                    <div><img alt="ship" className={!this.props.isOppShipDeadReducer[0] ? "bottom-ships-container-ships-carrier" : "bottom-ships-container-ships-carrier-dead" } src={carrier}/></div>
                                    <div><img alt="ship" className={!this.props.isOppShipDeadReducer[1] ? "bottom-ships-container-ships-battleship" : "bottom-ships-container-ships-battleship-dead" } src={battleship}/></div>
                                </div>
                                <div>
                                    <div><img alt="ship" className={!this.props.isOppShipDeadReducer[2] ? "bottom-ships-container-ships-destroyer" : "bottom-ships-container-ships-destroyer-dead"} src={destroyer}/></div>
                                    <div><img alt="ship" className={!this.props.isOppShipDeadReducer[3] ? "bottom-ships-container-ships-submarine" : "bottom-ships-container-ships-submarine-dead"} src={submarine}/></div>
                                </div>
                                <div>
                                    <div><img alt="ship" className={!this.props.isOppShipDeadReducer[4] ? "bottom-ships-container-ships-patrolboat" : "bottom-ships-container-ships-patrolboat-dead"} src={patrolboat}/></div>
                                    <div></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) =>{
    return {
        isMyShipDeadReducer:state.isMyShipDeadReducer,
        isOppShipDeadReducer:state.isOppShipDeadReducer,
        chatReducer:state.chatReducer
    }
}
const mapDispatchToProps = () =>{
    return {
        isOppShipDead,
        isMyShipDead
    }
}
export default connect(mapStateToProps,mapDispatchToProps())(Bottom);