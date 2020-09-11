import React from "react";

import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../asserts/crown.svg";
import "./Header.styles.scss";
import { auth } from "firebase";

function Header({ currentUser }) {
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <Logo className="logo" />
      </Link>

      <div className="options">
        <Link className="option" to="/shop">
          Shop
        </Link>
        <Link className="option" to="">
          Contact
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth().signOut()}>
            Sign out
          </div>
        ) : (
          <Link to="auth">Sign In</Link>
        )}
      </div>
    </div>
  );
}

export default Header;
