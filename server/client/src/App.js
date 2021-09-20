import axios from "axios";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useTransition } from "react-spring";
import "./App.css";
import Home from "./components/home/home.component";
import LoginSignup from "./components/login-signup/login-signup.component";
import { setUser } from "./redux/user-reducer/user-actions";

function App({ user, setUser }) {
  // const [loggedStatus, setLoggedStatus] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          "https://myunsplashmern.herokuapp.com/api/user/"
        );
        console.log(response);
      } catch (err) {
        console.log(err.response.data);
      }
    };
    fetchUserData();
  }, []);

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
