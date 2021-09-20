import axios from "axios";
import React from "react";
import useHandleChange from "../../custom-hooks/useHandleChange/useHandleChange";
import FormBtns from "../form-btns/form-btns.component";
import FormInput from "../form-input/form-input.component";
import "./upload-form.styles.css";

class UploadForm extends React.Component {
  constructor() {
    super();

    this.state = {
      photoName: "",
      photoUrl: "",
    };

    this.handleChange = useHandleChange.bind(this);
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = JSON.stringify({ ...this.state });

      const response = await axios.post(
        "https://myunsplashmern.herokuapp.com/api/image/",
        data
      );
      console.log(response);
    } catch (err) {
      console.log(err.response.data);
    }
  };

  render() {
    const { photoName, photoUrl } = this.state;
    return (
      <div className="form-container">
        <h2 className="modal-title">Add a new photo</h2>
        <form action="" className="upload-form" onSubmit={this.handleSubmit}>
          <p className="label">Label</p>
          <FormInput
            type="text"
            name="photoName"
            placeholder="Suspendisse elit massa"
            required
            value={photoName}
            onChange={this.handleChange}
            className="photo-name-input"
          />
          <p className="label">Photo URL</p>
          <FormInput
            type="url"
            name="photoUrl"
            placeholder="https://images.unsplash.com/photo-1584395630827-860eee694d7b?ixlib=r...
"
            value={photoUrl}
            onChange={this.handleChange}
            className="photo-url-input"
            required
          />
          <FormBtns />
        </form>
      </div>
    );
  }
}

export default UploadForm;
