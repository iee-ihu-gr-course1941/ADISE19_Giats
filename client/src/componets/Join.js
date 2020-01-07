import React, { useState } from 'react';
import { Link } from "react-router-dom";

import '../css/Join.css';
import LoginValue from "../LoginValue";

export default function SignIn() {
    const [room, setRoom] = useState('');

    return (
        <div className="joinOuterContainer">
            <div className="joinInnerContainer">
                <h1 className="heading">Host</h1>
                <div>
                    <input placeholder="Name" readOnly="readonly" className="joinInput" type="text" defaultValue={LoginValue.getLoginValue()} />
                </div>
                <Link  to={`/multiplayer/game?name=${LoginValue.getLoginValue()}&room=${LoginValue.getLoginValue()}`}>
                    <button className={'button mt-20'} type="submit">Host Game</button>
                </Link>
            </div>
            <div className="joinInnerContainer">
                <h1 className="heading">Join</h1>
                <div>
                    <input placeholder="Room" className="joinInput mt-20" type="text" onChange={(event) => setRoom(event.target.value)} />
                </div>
                <Link onClick={e => (!room) ? e.preventDefault() : null} to={`/multiplayer/game?name=${LoginValue.getLoginValue()}&room=${room}`}>
                    <button className={'button mt-20'} type="submit">Join Game</button>
                </Link>
            </div>
        </div>
    );
}