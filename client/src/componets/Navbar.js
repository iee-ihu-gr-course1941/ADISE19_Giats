import React, { Component } from 'react'

import '../css/Navbar.css';

import {Link} from "react-router-dom";
import Login from './Login';

import user from "../images/user.png";
import LoginValue from "../LoginValue";

export default class Navbar extends Component {
    constructor(props) {
        super(props)

        this.loginToggle = this.loginToggle.bind(this);
        this.loggedin = this.loggedin.bind(this);
        let firsttime;
        if(typeof LoginValue.getLoginValue()==='string' || LoginValue.getLoginValue()===false){
            firsttime=LoginValue.getLoginValue();
        }else{
            firsttime=false;
        }
        this.state = {
            isOpenLogin: false,
            isOpenMenu: false,
            loggedin: firsttime
        };
    }
    
    loginToggle = () => {
        this.setState({ isOpenLogin: !this.state.isOpenLogin });      
    };
    loggedin =(value) =>{
        if(typeof value==='string'){
            LoginValue.ChangeValue(value);
            this.setState({ isOpenLogin: !this.state.isOpenLogin,loggedin:LoginValue.getLoginValue()});  
        }
    }
    usermenuToggle = () => {
        this.setState({ isOpenMenu: !this.state.isOpenMenu });
    }
    dissconectToggle = () =>{
        LoginValue.ChangeValue(false);
        this.setState({ isOpenLogin: false,isOpenMenu:false,loggedin:LoginValue.getLoginValue() }); 
    }
    render() {
        return (
            <nav className="navbar">
                <div className="navbar-container">
                    <div className="navbar-container-logo">
                        <Link to='/'>
                            <div className="logo-image"/>
                        </Link>
                    </div>
                    <div className="navbar-container-login">
                        {this.state.loggedin ? 
                            null 
                        :
                            <button  onClick={this.loginToggle}>
                                <strong>Σύνδεση/Εγγραφή</strong>
                            </button>    
                        }
                        {this.state.loggedin ?
                            <div className="acccount">
                                <span onClick={this.usermenuToggle} className="account-container" >
                                    <div className="account-image">
                                        <img alt="user-icon" src={user}/>
                                    </div>
                                    <div className="account-name">
                                        <span>
                                            <strong>{LoginValue.getLoginValue()}</strong>
                                        </span>
                                    </div>
                                </span>
                                {this.state.isOpenMenu ?
                                    <div className="account-menu">
                                        <ul>
                                            <li>
                                                <Link onClick={this.dissconectToggle} to="/">
                                                    Αποσύνδεση                    
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                :
                                    null
                                }
                            </div> 
                        :
                            null
                        }
                    </div>
                </div>
                <Login action2={this.loggedin} action={this.loginToggle} opened={this.state.isOpenLogin} />
            </nav>
        )
    }
}
