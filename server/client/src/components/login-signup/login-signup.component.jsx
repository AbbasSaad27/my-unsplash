import React, { useState } from "react";
import "./login-signup.styles.css";
import LogIn from "../login/login.component";
import SignUp from "../signup/signup.component";
import { useTransition, animated } from "react-spring";

const LoginSignup = () => {
  const [loginForm, setloginForm] = useState(true);

  const transition = useTransition(loginForm, {
    from: { opacity: 0, transform: `scale(0.8)` },
    enter: { opacity: 1, transform: `scale(1)` },
    leave: { opacity: 0, transform: `scale(1.2)` },
  });

  const AnimatedSignUp = animated(SignUp);
  return (
    <div className="login-signup-container">
      {transition((style, item) =>
        item ? (
          <LogIn style={style} setloginForm={setloginForm} />
        ) : (
          <AnimatedSignUp style={style} setloginForm={setloginForm} />
        )
      )}
    </div>
  );
};

export default LoginSignup;
