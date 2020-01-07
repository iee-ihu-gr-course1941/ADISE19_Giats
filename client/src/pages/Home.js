import React, { Component } from 'react'

import '../css/Home.css';

class Home extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            backgroundy:0,
            backgroundx:0
        };
    }
    componentDidMount(){
        window.scrollTo(0, 0);
    }
    handleMouseMove = event => {
        if(window.innerWidth/2 < event.clientX){
            this.setState({
                backgroundx: -20,  
              })
        }else{
            this.setState({
                backgroundx: 0,  
              })
        }
        if(window.innerHeight/2 < event.clientY){
            this.setState({
                backgroundy: -20,  
              })
        }else{
            this.setState({
                backgroundy: 0,  
              })
        }
    }
    changePage = (link) =>{
        window.location.href = link;
    }
    render() {
        return (
            <div onMouseMove={this.handleMouseMove} style={{backgroundPosition:`${this.state.backgroundx}px ${this.state.backgroundy}px`}} className="home">
                <div className="home-container">
                    <button onClick={() => this.changePage("/singleplayer")}>Single Player</button>
                    <button onClick={() => this.changePage("/multiplayer")}>Multiplayer</button>
                </div>
            </div>
        );
    }
}
export default Home;