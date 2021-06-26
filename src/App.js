import React from 'react';
import './App.css';
import {BrowserRouter, Route, withRouter} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import ProfileContainer from "./components/Profile/ProfileContainer";
import MessagesContainer from "./components/Messages/MessagesContainer";
import NavBarContainer from "./components/NavBar/NavBarContainer";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginContainer from "./components/Login/LoginContainer";
import {initializeApp} from "./redux/appReducer";
import {connect, Provider} from "react-redux";
import {compose} from 'redux';
import Preloader from './components/common/Preloader/Preloader';
import store from "./redux/redux-store";

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) return <Preloader/>

        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <NavBarContainer/>
                <Route path='/profile/:userId?'
                       render={() => <ProfileContainer/>}/>
                <Route path='/messages'
                       render={() => <MessagesContainer/>}/>
                <Route path='/news' render={() => <News/>}/>
                <Route path='/music' render={() => <Music/>}/>
                <Route path='/settings' render={() => <Settings/>}/>
                <Route path='/users' render={() => <UsersContainer/>}/>
                <Route path='/login' render={() => <LoginContainer/>}/>
            </div>
        );
    }
}

let mapStateToProps = (state) => ({
    initialized: state.app.initialized,
});

const AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);

const SocialNetworkApp = () => {
    return (
        <React.StrictMode>
            <BrowserRouter>
                <Provider store={store}>
                    <AppContainer/>
                </Provider>
            </BrowserRouter>
        </React.StrictMode>
    )
};

export default SocialNetworkApp;


