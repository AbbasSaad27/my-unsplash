import React, { useEffect } from "react";
import "./App.css";
import LoginSignup from "./components/login-signup/login-signup.component";
import { useTransition } from "react-spring";
import Home from "./components/home/home.component";
import { connect } from "react-redux";
import { setUser } from "./redux/user-reducer/user-actions";
import axios from "axios";

function App({ user, setUser }) {
  // const [loggedStatus, setLoggedStatus] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          "https://myunsplashapi.herokuapp.com/api/user/"
        );
        console.log(response);
      } catch (err) {
        console.log(err.response.data);
      }
    };
    fetchUserData();
  });

  const transition = useTransition(user, {
    from: { tranform: "scale(0)", borderRadius: "50%" },
    enter: { transform: "scale(1)", borderRadius: "0%" },
    leave: { tranform: "scale(0)", borderRadius: "50%" },
  });

  return (
    <div className="App">
      {transition((style, item) =>
        item ? <Home style={style} /> : <LoginSignup />
      )}
    </div>
  );
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
