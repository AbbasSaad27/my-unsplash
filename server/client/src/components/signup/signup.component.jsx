import React from "react";
import Button from "../btn/btn.component";
import FormInput from "../form-input/form-input.component";
import { ReactComponent as LoginIcon } from "../../icons/login-icon.svg";
import "./signup.styles.css";
import useHandleChange from "../../custom-hooks/useHandleChange/useHandleChange";
import axios from "axios";
import Loader from "../loader/loader.component";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      mobile: "",
      password: "",
      confirm_password: "",
    };
    this.handleChange = useHandleChange.bind(this);

    this._isMounted = false;
  }

  componentDidMount() {
    this._isMounted = true;
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    // extracting data from state
    const { confirm_password, loader, ...data } = this.state;

    //will do better error handling later
    if (this.state.password !== confirm_password) {
      alert("Passwords don't match!");
    }

    try {
      const response = await axios.post(
        "https://myunsplashapi.herokuapp.com/api/user/signup/",
        data
      );

      console.log(response);

      this.props.setloginForm(true);

      this._isMounted &&
        this.setState({
          name: "",
          email: "",
          mobile: "",
          password: "",
          confirm_password: "",
          loader: false,
        });
    } catch (err) {
      this.setState({ loader: false });
      console.error(err);
    }
  };

  handleClick = () => {
    this.props.setloginForm(true);
  };

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    const { name, email, mobile, password, confirm_password, loader } =
      this.state;
    return (
      <div className="signup-form" style={{ ...this.props.style }}>
        <h1 className="form-header">SIGN UP</h1>
        <div
          className="icon-container"
          title="login"
          onClick={this.handleClick}
        >
          <LoginIcon />
        </div>
        {loader ? (
          <Loader />
        ) : (
          <form className="form" onSubmit={this.handleSubmit}>
            <FormInput
              type="text"
              name="name"
              id="username-signup"
              className="input input-username"
              value={name}
              onChange={this.handleChange}
              required
            >
              Username
            </FormInput>
            <FormInput
              type="email"
              name="email"
              id="email"
              className="input input-email"
              value={email}
              onChange={this.handleChange}
              required
            >
              Email
            </FormInput>
            <FormInput
              type="tel"
              name="mobile"
              id="tel"
              className="input input-tel"
              value={mobile}
              onChange={this.handleChange}
              pattern="^(?:\+88|01)?\d{11}$"
            >
              Mobile
            </FormInput>
            <FormInput
              type="password"
              name="password"
              id="password-signup"
              className="input input-password"
              value={password}
              onChange={this.handleChange}
              required
            >
              Password
            </FormInput>
            <FormInput
              type="password"
              name="confirm_password"
              id="confirm-password"
              className="input confirm-password"
              value={confirm_password}
              onChange={this.handleChange}
              required
            >
              Confirm Password
            </FormInput>
            <Button type="submit" classname="form-btn">
              Sign Up
            </Button>
          </form>
        )}
      </div>
    );
  }
}

export default SignUp;
