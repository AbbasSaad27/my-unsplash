import React from "react";
import "./login.styles.css";
import FormInput from "../form-input/form-input.component";
import Button from "../btn/btn.component";
import { ReactComponent as SignupIcon } from "../../icons/signup-icon.svg";
import axios from "axios";

class LogIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    alert("submitted");
    const data = { ...this.state };
    axios
      .post("http://localhost:5000/api/user/signin/", data)
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
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
            type="text"
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
