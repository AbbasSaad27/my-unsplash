import React from "react";
import { connect } from "react-redux";

import axios from "axios";

import FormInput from "../form-input/form-input.component";
import FormBtns from "../form-btns/form-btns.component";
import useHandleChange from "../../custom-hooks/useHandleChange/useHandleChange";
import "./delete-form.styles.css";
import { delImage } from "../../redux/user-reducer/user-actions";

class DeleteForm extends React.Component {
  constructor() {
    super();

    this.state = {
      userPassword: "",
    };

    this.handleChange = useHandleChange.bind(this);
  }

  handleSubmit = async (e) => {
    const { delImg, imgToDel } = this.props;
    e.preventDefault();
    const data = JSON.stringify({
      imageId: imgToDel._id,
      userPassword: this.state.userPassword,
    });

    try {
      await axios.post(
        "https://myunsplashmern.herokuapp.com/api/image/delete/",
        data,
        {
          headers: { "Content-type": "application/json" },
        }
      );

      delImg(imgToDel);
    } catch (err) {
      alert(err.response.data.message);
    }
  };

  render() {
    return (
      <div className="form-container">
        <h2 className="modal-title">Are you sure?</h2>
        <form action="" className="upload-form" onSubmit={this.handleSubmit}>
          <p className="label">Password</p>
          <FormInput
            type="password"
            name="userPassword"
            placeholder="***************"
            required
            value={this.state.userPassword}
            onChange={this.handleChange}
            className="user-password-input"
          />
          <FormBtns btnTxt="Delete" variant="delete" />
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    imgToDel: state.deleteImg,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    delImg: (state) => dispatch(delImage(state)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DeleteForm);
