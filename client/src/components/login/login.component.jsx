import React from "react";

import axios from "axios";
import { connect } from "react-redux";
import { animated } from "react-spring";

import { setUser } from "../../redux/user-reducer/user-actions";
import useHandleChange from "../../custom-hooks/useHandleChange/useHandleChange";
import { ReactComponent as SignupIcon } from "../../icons/signup-icon.svg";
import Button from "../btn/btn.component";
import FormInput from "../form-input/form-input.component";
import Loader from "../loader/loader.component";
import "./login.styles.css";

class LogIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      loader: false,
    };
    this.handleChange = useHandleChange.bind(this);
    this._isMounted = false;
  }

  componentDidMount() {
    this._isMounted = true;
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    let source = axios.CancelToken.source();

    this._isMounted && this.setState({ loader: true });

    const { email, password } = this.state;
    const data = JSON.stringify({ email, password });

    try {
      const response = await axios.post(
        "https://myunsplashapi.herokuapp.com/api/user/signin/",
        data,
        {
          headers: { "Content-type": "application/json" },
          cancelToken: source.token,
          withCredentials: true,
          credentials: "include",
        }
      );
      console.log(response);

      // const response = await fetch(
      //   "https://myunsplashapi.herokuapp.com/api/user/signin/",
      //   {
      //     method: "POST",
      //     headers: {
      //       Accept: "application/json",
      //       "Content-type": "application/json",
      //     },
      //     credentials: "include",
      //     body: data,
      //   }
      // );

      // cleanup
      if (this.unmounted === true) source.cancel("canceling in cleanup");
      this._isMounted &&
        this.setState({ email: "", password: "", loader: false });

      // get user data
      const userData = await axios.get(
        "https://myunsplashapi.herokuapp.com/api/user/"
      );
      console.log(userData);
      this.props.setUser(userData);
    } catch (err) {
      this.setState({ loader: false });
      console.error(err.response.data);
    }
  };

  componentWillUnmount() {
    this._isMounted = false;
  }

  handleClick = (e) => {
    this.props.setloginForm(false);
  };

  render() {
    const { email, password, loader } = this.state;
    return (
      <div className="login-form" style={{ ...this.props.style }}>
        <h1 className="form-header">LOGIN</h1>

        <div
          className="icon-container"
          title="signup"
          onClick={this.handleClick}
        >
          <SignupIcon />
        </div>
        {loader ? (
          <Loader />
        ) : (
          <form className="form" onSubmit={this.handleSubmit}>
            <FormInput
              type="email"
              name="email"
              id="email-login"
              className="input input-email"
              value={email}
              onChange={this.handleChange}
              required
            >
              Email
            </FormInput>
            <FormInput
              type="password"
              name="password"
              id="password-login"
              className="input input-password"
              value={password}
              onChange={this.handleChange}
              required
            >
              Password
            </FormInput>
            <Button type="submit" classname="form-btn">
              Let's Go
            </Button>
          </form>
        )}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setUser: (state) => dispatch(setUser(state)),
  };
};

export default connect("", mapDispatchToProps)(animated(LogIn));
