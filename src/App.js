import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import Shop from "./pages/shop-page/Shop";
import Header from "./components/header/Header";
import Auth from "./pages/auth/Auth";
import { auth } from "firebase";

class App extends React.Component {
  state = {
    currentUser: null,
  };

  unsubscribeFormAuth = null;

  componentDidMount() {
    this.unsubscribeFormAuth = auth().onAuthStateChanged((user) => {
      this.setState({ currentUser: user });

      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFormAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={Shop} />
          <Route path="/auth" component={Auth} />
        </Switch>
      </div>
    );
  }
}

export default App;
