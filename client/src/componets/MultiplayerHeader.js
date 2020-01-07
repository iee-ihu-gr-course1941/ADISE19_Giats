import React, { Component } from 'react'

import '../css/Header.css';
import {connect} from "react-redux";
import {newGame} from "../actions"

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpenMenu: false
        };
    }
    diffMenuToggle = () => {
        this.setState({ isOpenMenu: !this.state.isOpenMenu });
    }
    render() {
        return (
            <div className="header">
                <div className="header-container">
                    <div className="header-container-button">
                       
                    </div>
                    <div className="header-container-text">
                        <span>{this.props.messageReducer}</span>
                    </div>
                    <div className="header-container-diff">
                        
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) =>{
    return {
        myBoardReducer :state.myBoardReducer,
        messageReducer:state.messageReducer
    }
}

const mapDispatchToProps = () =>{
    return {
        newGame
    }
}
export default connect(mapStateToProps,mapDispatchToProps())(Header);