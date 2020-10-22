import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import Shop from "./pages/shop-page/Shop";
import Header from "./components/header/Header";
import Auth from "./pages/auth/Auth";
import { auth, createUserProfileDocument } from "./firebase";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });

          console.log(this.state);
        });
      }
      else{
        this.setState({ currentUser: userAuth });
      }

      
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
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
