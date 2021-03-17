import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import {Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import ProfileContainer from "./components/Profile/ProfileContainer";
import MessagesContainer from "./components/Messages/MessagesContainer";
import NavBarContainer from "./components/NavBar/NavBarContainer";
import Users from "./components/Users/Users";
import UsersContainer from "./components/Users/UsersContainer";

const App = (props) => {
    return (
        <div className="app-wrapper">
            <Header/>
            <NavBarContainer/>
            <Route path='/profile'
                   render={() => <ProfileContainer/>}/>
            <Route path='/messages'
                   render={() => <MessagesContainer/>}/>
            <Route path='/news' render={() => <News/>}/>
            <Route path='/music' render={() => <Music/>}/>
            <Route path='/settings' render={() => <Settings/>}/>
            <Route path='/users' render={() => <UsersContainer/>}/>
        </div>
    );
}

export default App;
