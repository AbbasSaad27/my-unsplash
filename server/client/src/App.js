import axios from "axios";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import "./App.css";
import Home from "./components/home/home.component";
import LoginSignup from "./components/login-signup/login-signup.component";
import { setUser } from "./redux/user-reducer/user-actions";

function App({ user, setUser }) {
  useEffect(() => {
    const fetchUserData = async () => {
      const response = await axios.get(
        "https://myunsplashmern.herokuapp.com/api/user/"
      );
      setUser(response.data.data);
    };
    fetchUserData();
  }, [setUser]);

  return <div className="App">{user ? <Home /> : <LoginSignup />}</div>;
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setUser: (state) => dispatch(setUser(state)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
