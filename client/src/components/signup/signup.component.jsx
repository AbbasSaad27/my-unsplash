import React from "react";
import Button from "../btn/btn.component";
import FormInput from "../form-input/form-input.component";
import { ReactComponent as LoginIcon } from "../../icons/login-icon.svg";
import "./signup.styles.css";
import axios from "axios";

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
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const data = { ...this.state };
    try {
      const response = await axios.post(
        "http://localhost:5000/api/user/signup/",
        data
      );
      console.log(response);
      this.setState({
        name: "",
        email: "",
        mobile: "",
        password: "",
        confirm_password: "",
      });
    } catch (err) {
      console.error(err);
    }
  };

  handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleClick = () => {
    this.props.setloginForm(true);
  };

  render() {
    const { name, email, mobile, password, confirm_password } = this.state;
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
      </div>
    );
  }
}

export default SignUp;
