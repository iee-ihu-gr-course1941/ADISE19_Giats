import React, { Component } from 'react'

import '../css/SinglePlayer.css';
import Header from "../componets/Header";
import Fleet from "../componets/Fleet";
import Bottom from "../componets/Bottom";
class SinglePlayer extends Component {
    componentDidMount(){
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <div className="singleplayer">
                <div className="singleplayer-container">
                    <Header/>
                    <Fleet/>
                    <Bottom/>
                </div>
            </div>
        );
    }
}
export default SinglePlayer;