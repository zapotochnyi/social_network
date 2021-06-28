import React from "react";
import "./App.css";
import { HashRouter, Route, withRouter } from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import NavBarContainer from "./components/NavBar/NavBarContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import { initializeApp } from "./redux/appReducer";
import { connect, Provider } from "react-redux";
import { compose } from "redux";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./redux/redux-store";
import withSuspense from "./hoc/withSuspense";

const ProfileContainer = React.lazy(() =>
  import("./components/Profile/ProfileContainer")
);
const MessagesContainer = React.lazy(() =>
  import("./components/Messages/MessagesContainer")
);
const UsersContainer = React.lazy(() =>
  import("./components/Users/UsersContainer")
);
const LoginContainer = React.lazy(() =>
  import("./components/Login/LoginContainer")
);

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) return <Preloader />;

    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <NavBarContainer />
        <Route
          path="/profile/:userId?"
          render={withSuspense(ProfileContainer)}
        />
        <Route path="/messages" render={withSuspense(MessagesContainer)} />
        <Route path="/news" render={() => <News />} />
        <Route path="/music" render={() => <Music />} />
        <Route path="/settings" render={() => <Settings />} />
        <Route path="/users" render={withSuspense(UsersContainer)} />
        <Route path="/login" render={withSuspense(LoginContainer)} />
      </div>
    );
  }
}

let mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

const AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App);

const SocialNetworkApp = () => {
  return (
    <React.StrictMode>
      <HashRouter>
        <Provider store={store}>
          <AppContainer />
        </Provider>
      </HashRouter>
    </React.StrictMode>
  );
};

export default SocialNetworkApp;
