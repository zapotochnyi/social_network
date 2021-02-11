import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";
import Messages from "./components/Messages/Messages";
import {Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

const App = (props) => {
    return (

        <div className="app-wrapper">
            <Header/>
            <NavBar navBar={props.state.navBar}/>
            <div className='content'>
                <Route path="/profile"
                       render={() => <Profile profilePage={props.state.profilePage} addPost={props.addPost}
                                              updateNewPostValue={props.updateNewPostValue}/>}/>
                <Route path="/messages"
                       render={() => <Messages messagesPage={props.state.messagesPage} sendMessage={props.sendMessage}
                                               updateNewMessageValue={props.updateNewMessageValue}/>}/>
                <Route path="/news" component={News}/>
                <Route path="/music" component={Music}/>
                <Route path="/settings" component={Settings}/>

            </div>
        </div>

    );
}

export default App;
