import React from "react";
import { FaSearch } from "react-icons/fa";
import "./index.css";

const Header = () => {
  return (
    <div className="header-container">
      <div className="details">
        <p>Welcome back,</p>
        <div className="profile-details">
          <div className="user-profile-image" alt="profile">
            V
          </div>
          <p>venkatesh_v</p>
        </div>
      </div>
      <div className="search-container">
        <FaSearch className="search-icon" />
        <input placeholder="Search for Characters" />
      </div>
    </div>
  );
};

export default Header;
