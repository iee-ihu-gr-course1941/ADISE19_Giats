import React from 'react';
import './App.css';

import Navbar from "./componets/Navbar";
import Home from  "./pages/Home";
import SinglePlayer from  "./pages/SinglePlayer";
import {LoginProtected} from "./LoginProtected"
import Multiplayer from  "./pages/Multiplayer";
import Join from  "./componets/Join";
import {Route, Switch} from "react-router-dom"
function App() {
  return(
  <> 
    <Navbar/>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/singleplayer" component={SinglePlayer} />
      <LoginProtected exact path="/multiplayer" component={Join} />
      <LoginProtected exact path="/multiplayer/game" component={Multiplayer} />
    </Switch>
  </>
  );
}

export default App;
