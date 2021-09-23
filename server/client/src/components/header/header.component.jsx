import React from "react";
import { connect } from "react-redux";
import axios from "axios";

import Button from "../btn/btn.component";
import FormInput from "../form-input/form-input.component";
import { ReactComponent as SearchIcon } from "../../icons/search-icon.svg";
import "./header.styles.css";
import { openModal, setForm } from "../../redux/modal-reducer/modal-actions";
import Logo from "../logo/logo.component";
import { selectUsername } from "../../redux/user-reducer/user-selectors";
import { changeSearch } from "../../redux/search-reducer/search-action";
import { delUser } from "../../redux/user-reducer/user-actions";

const Header = ({
  setOpenModal,
  username,
  setSearchTxt,
  searchTxt,
  setForm,
  delUser,
}) => {
  const handleChange = (e) => {
    setSearchTxt(e.target.value);
  };

  const handleClick = () => {
    setOpenModal();
    setForm("upload");
  };

  const handleLogOut = async () => {
    delUser();
    await axios.delete(
      "https://myunsplashmern.herokuapp.com/api/user/signout/"
    );
  };

  return (
    <header className="header">
      <div className="header-left">
        <div className="app-details">
          <Logo />
          <div className="app-title">
            <h3 className="title">My Unsplash</h3>
            <p className="welcome-message">
              Welcome, {`${username[0].toUpperCase()}${username.slice(1)}`}
            </p>
          </div>
        </div>
        <div className="search-container">
          <div className="search-icon-container">
            <SearchIcon />
          </div>
          <FormInput
            type="text"
            name="searchTxt"
            placeholder="Search by name"
            className="input-search"
            onChange={handleChange}
            value={searchTxt}
          />
        </div>
      </div>
      <div className="header-btns">
        <Button type="button" classname="btn-add" onClick={handleClick}>
          Add a photo
        </Button>
        <Button type="button" classname="btn-logout" onClick={handleLogOut}>
          Logout
        </Button>
      </div>
    </header>
  );
};

const mapDispatchToProp = (dispatch) => {
  return {
    setOpenModal: () => dispatch(openModal()),
    setSearchTxt: (state) => dispatch(changeSearch(state)),
    setForm: (state) => dispatch(setForm(state)),
    delUser: () => dispatch(delUser()),
  };
};

const mapStateToProps = (state) => {
  return {
    username: selectUsername(state),
    searchTxt: state.searchTxt,
  };
};

export default connect(mapStateToProps, mapDispatchToProp)(Header);
