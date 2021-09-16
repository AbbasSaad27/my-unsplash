import React, { useState } from "react";
import Button from "../btn/btn.component";
import FormInput from "../form-input/form-input.component";
import { ReactComponent as SearchIcon } from "../../icons/search-icon.svg";
import "./header.styles.css";

const Header = ({ setOpenModal }) => {
  const [searchTxt, setSearchTxt] = useState("");

  const handleChange = (e) => {
    setSearchTxt(e.target.value);
  };

  return (
    <header className="header">
      <div className="header-left">
        <div className="logo-container">
          <div className="logo-dot"></div>
          <div className="logo-surface"></div>
        </div>
        <div className="app-title">
          <h3 className="title">My Unsplash</h3>
          <p className="welcome-message">Welcome, User</p>
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
      <Button
        type="button"
        classname="btn-add"
        onClick={() => setOpenModal(true)}
      >
        Add a photo
      </Button>
    </header>
  );
};

export default Header;
