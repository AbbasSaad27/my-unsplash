import React from "react";
import { connect } from "react-redux";

import axios from "axios";

import useHandleChange from "../../custom-hooks/useHandleChange/useHandleChange";
import FormBtns from "../form-btns/form-btns.component";
import FormInput from "../form-input/form-input.component";
import "./upload-form.styles.css";
import { addImage } from "../../redux/user-reducer/user-actions";
import { selectImages } from "../../redux/user-reducer/user-selectors";

class UploadForm extends React.Component {
  constructor() {
    super();

    this.state = {
      title: "",
      image_link: "",
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
    try {
      const data = JSON.stringify({ ...this.state });

      await axios.post(
        "https://myunsplashmern.herokuapp.com/api/image/",
        data,
        {
          headers: { "Content-type": "application/json" },
          cancelToken: source.token,
        }
      );

      this.props.addImage({ ...this.state });

      if (this.isMounted !== true) source.cancel("canceling in cleanup");
      this._isMounted &&
        this.setState({
          title: "",
          image_link: "",
        });
      alert("Image uploaded successfully!");
    } catch (err) {
      alert(`${err.response.data.message} Please try again`);
    }
  };

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    const { title, image_link } = this.state;
    return (
      <div className="form-container">
        <h2 className="modal-title">Add a new photo</h2>
        <form action="" className="upload-form" onSubmit={this.handleSubmit}>
          <p className="label">Label</p>
          <FormInput
            type="text"
            name="title"
            placeholder="Suspendisse elit massa"
            required
            value={title}
            onChange={this.handleChange}
            className="photo-name-input"
          />
          <p className="label">Photo URL</p>
          <FormInput
            type="url"
            name="image_link"
            placeholder="https://images.unsplash.com/photo-1584395630827-860eee694d7b?ixlib=r...
"
            value={image_link}
            onChange={this.handleChange}
            className="photo-url-input"
            required
          />
          <FormBtns btnTxt="Upload" />
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    images: selectImages(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addImage: (state) => dispatch(addImage(state)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UploadForm);
