import React, { Component } from "react";
import FormInput from "../form-input/FormInput";

import "./SignIn.styles.scss";
import Button from "../button/Button";

import { signInWithGoogle } from "../../firebase";

export class SignIn extends Component {
  state = {
    email: "",
    password: "",
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      email: "",
      password: "",
    });
    console.log(this.state)
  };
  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({
      [name]: value,
    });
    
  };
  
  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            value={this.state.email}
            name="email"
            label="Email"
            handleChange={this.handleChange}
            required
          />

          <FormInput
            type="password"
            value={this.state.password}
            name="password"
            label="Password"
            handleChange={this.handleChange}
            required
          />

          <div className="buttons">
            <Button type="submit">Login</Button>
            <Button isGoogleSignIn onClick={signInWithGoogle}>
              Sign in with google
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
