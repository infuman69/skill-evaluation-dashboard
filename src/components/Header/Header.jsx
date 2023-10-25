// import React from 'react'
import "./Header.css";
import cuvettelogo from "../../assets/cuvettelogo.png";
import profile from "../../assets/profile.png";

const Header = () => {
  return (
    <header className="header">
      <div className="header-auto">
        <div className="logo">
          <img src={cuvettelogo} alt="cuvettelogo" />
        </div>
        <div className="profile">
          <button className="profile-btn">
            <img src={profile} alt="profileimg" />
            <h2 className="profilename">Siddharth Jain</h2>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
