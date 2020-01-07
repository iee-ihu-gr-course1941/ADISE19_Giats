import React, { Component } from 'react'
import axios from 'axios';
import '../css/Login.css';


export default class Login extends Component {
    constructor(props) {
        super(props)
        
        this.registerToggle = this.registerToggle.bind(this);

        this.buttonname="Κάνε σύνδεση";
        this.loginerror="";
        this.state = {
            isOpenRegister: false,
            isOpenForgot: false,       
            fields: {},
            errors: {},
           
        };
    }
    postuser =(obj) => {
        return axios.post(`https://giats-battleships.herokuapp.com/`,obj)
        .then(response => {
            return response;
        });
    }
    getuser =(obj) => {
        return axios.get(`https://giats-battleships.herokuapp.com/`,{params:{email:obj.email,password:obj.password}})
        .then(response => {
            return response.data;
        });
    }
    getemail =(obj) => {
        return axios.get(`https://giats-battleships.herokuapp.com/getemail`,{params:{email:obj.email}})
        .then(response => {
            return response.data;
        });
    }
    handleValidation(){
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;
        if(this.buttonname==="Κάνε σύνδεση"){
            //Email
            if(!fields["email"]){
                formIsValid = false;
                errors["email"] = "Required Email";
            }
    
            if(typeof fields["email"] !== "undefined"){
                if(!fields["email"].match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
                formIsValid = false;
                errors["email"] = "Only emails";
                }        
            } 

            if(typeof fields["email"] !== "undefined"){
                if(fields["email"][0].match(/^\s+$/)){
                formIsValid = false;
                errors["email"] = "Required Email";
                }        
            }
            
            //password
            if(!fields["password"]){
                formIsValid = false;
                errors["password"] = "Cannot be empty";
            }
            
        }else if(this.buttonname=== "Εγγραφή"){
            //Email
            if(!fields["email"]){
                formIsValid = false;
                errors["email"] = "Required Email";
            }
    
            if(typeof fields["email"] !== "undefined"){
                if(!fields["email"].match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
                formIsValid = false;
                errors["email"] = "Only emails";
                }        
            } 

            if(typeof fields["email"] !== "undefined"){
                if(fields["email"][0].match(/^\s+$/)){
                formIsValid = false;
                errors["email"] = "Required Email";
                }        
            }
            //password
            if(!fields["password"]){
                formIsValid = false;
                errors["password"] = "Cannot be empty";
            }
            //name
            if(!fields["name"]){
                formIsValid = false;
                errors["name"] = "Cannot be empty";
            }
        }else{
            //Email
            if(!fields["email"]){
                formIsValid = false;
                errors["email"] = "Required Email";
            }
    
            if(typeof fields["email"] !== "undefined"){
                if(!fields["email"].match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
                formIsValid = false;
                errors["email"] = "Only emails";
                }        
            } 

            if(typeof fields["email"] !== "undefined"){
                if(fields["email"][0].match(/^\s+$/)){
                formIsValid = false;
                errors["email"] = "Required Email";
                }        
            }
        }
       
       this.setState({errors: errors});
       return formIsValid;
   }
    handleChange(field, e){         
        let fields = this.state.fields;
        fields[field] = e.target.value;        
        this.setState({fields});
    }
    loginSubmit(e){
        e.preventDefault();
        if(this.handleValidation()){     
            if(this.buttonname==="Κάνε σύνδεση"){
                this.getuser(this.state.fields).then(res => {
                    let tempItems= res.map(item =>{
                        return item.users;
                    });
                    if(tempItems[0].length ===0){
                        this.loginerror="Λάθος κωδικός";
                        this.props.action2(false);
                        this.setState({errors: {}});
                    }else{
                        let name= tempItems[0].map(item =>{
                            return item.name;
                        });
                        this.props.action2(name[0]);
                    }
                 });
            }else if(this.buttonname==="Αποστολή"){
                this.getemail(this.state.fields).then(res => {
                    let tempItems= res.map(item =>{
                        return item.users;
                    });
                    let errors={}
                    console.log(tempItems);
                    if(tempItems[0].length ===0){
                        errors["email"] = "Λάθος Email";
                        this.setState({errors: errors});
                    }else{
                        let password= tempItems[0].map(item =>{
                            return item.password;
                        });
                        errors["email"] = password[0];
                        this.setState({errors: errors});
                    }
                 });
            }else{
                this.postuser(this.state.fields).then(res => {
                    if(res.status===200){
                        window.location.href="/";
                    }else{
                        this.loginerror="Κάτι πήγε στραβά"
                        this.setState({errors: {}});
                    }
                });
            }
        }
     }
    registerToggle  = ()=> {
        this.setState({ isOpenRegister: !this.state.isOpenRegister, errors: {}  });  
    };
    forgotpassToggle = () =>{
        this.setState({ isOpenForgot: !this.state.isOpenForgot, errors: {}  }); 
    }
    buttonName = () =>{
        if(this.state.isOpenForgot){
            this.buttonname="Αποστολή";
            if(this.loginerror==="Λάθος κωδικός" || this.loginerror==="Το email υπάρχει"){
                this.loginerror="";
            }
        }else{
            if(this.state.isOpenRegister){
                this.buttonname= "Εγγραφή";
                if(this.loginerror==="Λάθος κωδικός" || this.loginerror==="Λάθος email"){
                    this.loginerror="";
                }
             }else{
                if(this.loginerror==="Λάθος email" || this.loginerror==="Το email υπάρχει" ){
                    this.loginerror="";
                }
                this.buttonname= "Κάνε σύνδεση";
            }
        }
    }
    render() {
        this.buttonName();
        return (
            <div style={this.props.opened ? {display:"block"} : {display:"none"}} className="login-register">
                <div className="login-register-container">
                    <div className="login-register-container-dialog">
                        <div className="login-register-header">
                            <div className="login-register-header-container">
                                <h2>
                                    <strong>{this.state.isOpenForgot ? "Υπευνθύμιση κωδικού" : "Είσοδος στο Battleship"} </strong>
                                </h2>
                                <button  onClick={() => this.props.action()}>
                                    <span>Χ</span>
                                </button>
                            </div>
                            <ul style={this.state.isOpenForgot ? {display:"none"} : {display:"flex"}}>
                                <li className={this.state.isOpenRegister ? "login-register-header-closed" : "login-register-header-opened"}>
                                    <span className={this.state.isOpenRegister ? "" : "login-register-header-a-opened"} onClick={this.registerToggle}>Σύνδεση</span>
                                </li>
                                <li className={this.state.isOpenRegister ? "login-register-header-opened" : "login-register-header-closed"}>
                                    <span className={this.state.isOpenRegister ? "login-register-header-a-opened" : ""} onClick={this.registerToggle}>Εγγραφή</span>
                                </li>
                            </ul>
                        </div>  
                        <p style={this.state.isOpenForgot ? {display:"block"} : {display:"none"}} className="forgot-p">Θα σου στείλουμε ένα e-mail για να ορίσεις ένα νέο κωδικό πρόσβασης</p>
                        <div className="login-register-main">
                            <div>
                                <div>
                                    <form method="post" encType="text/plain" onSubmit= {this.loginSubmit.bind(this)}>
                                        <div className="login-email">
                                            <div style={this.state.isOpenRegister ? {display:"block"} : {display:"none"}}>
                                                <input type="text" name="Name" onChange={this.handleChange.bind(this, "name")} value={this.state.fields["name"]} placeholder="Το Ονομά σου"/>
                                                <span className="login-error">{this.state.errors["name"]}</span>
                                            </div>
                                            <div>
                                                <input type="text" name="Email" onChange={this.handleChange.bind(this, "email")} value={this.state.fields["email"]} placeholder="Το Email σου" autoComplete="email"/>
                                                <span className="login-error">{this.state.errors["email"]}</span>
                                            </div>                                           
                                        </div>
                                        <div style={this.state.isOpenForgot ? {display:"none"} : {display:"block"}} className="login-password">
                                            <div>
                                                <input type="password"  placeholder="Ο κωδικός σου" name="Password" onChange={this.handleChange.bind(this, "password")} value={this.state.fields["password"]}/>
                                            </div>
                                            <span className="login-error">{this.state.errors["password"]}</span>
                                            <small style={this.state.isOpenRegister ? {display:"block"} : {display:"none"}}>Ο κωδικός σου πρέπει να είναι τουλάχιστον 8 χαρακτήρες και να περιλαμβάνει τουλάχιστον έναν αριθμό, ένα κεφαλαίο και ένα μικρό γράμμα.</small>
                                        </div>
                                        <span className="login-error">{this.loginerror}</span>
                                        <button className="login-button" id="submit" value="Submit">{this.buttonname}</button>
                                    </form>
                                    <button  onClick={this.forgotpassToggle}  style={this.state.isOpenRegister ? {display:"none"} : {display:"block"}} className="login-button-forgot" type="button"><u>{this.state.isOpenForgot ? "Πίσω στην σύνδεση" : "Ξέχασα τον κωδικό μου"}</u></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
