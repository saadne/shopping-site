import React from "react";

import "./Auth.styles.scss";
import SignIn from "../../components/sign-in/SignIn";
import SignUp from "../../components/sign-up/SignUp";

function Auth() {
  return (
    <div className='auth'>
      <SignIn />
      <SignUp/>
    </div>
  );
}

export default Auth;
