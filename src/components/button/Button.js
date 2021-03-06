import React from "react";

import "./Button.styles.scss";

function Button({ children, isGoogleSignIn, ...otherProps }) {
  return (
    <button
      className={`${isGoogleSignIn ? "google-sign-in" : ""} button`}
      {...otherProps}
    >
      {children}
    </button>
  );
}

export default Button;
