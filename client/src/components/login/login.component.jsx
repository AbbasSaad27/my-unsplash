import axios from "axios";
import React from "react";
import { ReactComponent as SignupIcon } from "../../icons/signup-icon.svg";
import Button from "../btn/btn.component";
import FormInput from "../form-input/form-input.component";
import "./login.styles.css";

class LogIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const data = { ...this.state };
    try {
      const response = await axios.post(
        "https://myunsplashapi.herokuapp.com/api/user/signin/",
        data,
        { withCredentials: true }
      );
      console.log(response);
      this.props.setLoggedStatus(true);
      this.setState({ email: "", password: "" });
    } catch (err) {
      console.error(err);
    }
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleClick = (e) => {
    this.props.setloginForm(false);
  };

  render() {
    const { email, password } = this.state;
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
      </div>
    );
  }
}
export default LogIn;
