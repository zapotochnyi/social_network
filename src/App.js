import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";
import {Route} from "react-router-dom";
import Messages from "./components/Messages/Messages";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

const App = (props) => {
    return (
        <div className="app-wrapper">
            <Header/>
            <NavBar navBar={props.state.navBar}/>
            <Route path='/profile'
                   render={() => <Profile profilePage={props.state.profilePage} dispatch={props.dispatch}/>}/>
            <Route path='/messages'
                   render={() => <Messages messagesPage={props.state.messagesPage} dispatch={props.dispatch}/>}/>
            <Route path='/news' render={() => <News/>}/>
            <Route path='/music' render={() => <Music/>}/>
            <Route path='/settings' render={() => <Settings/>}/>
        </div>
    );
}

export default App;
