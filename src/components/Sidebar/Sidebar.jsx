// import React from 'react'
import "./Sidebar.css";

import Dashboard from "../../assets/Sidebar/Dashboard.svg?react";
import Award from "../../assets/Sidebar/award.svg?react";
import Document from "../../assets/Sidebar/Document.svg?react";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-menu">
        <button className="sidebar-btn">
          <Dashboard />
          <p>Dashboard</p>
        </button>
        <button className="sidebar-btn selected">
          <Award />
          <p>Skill Test</p>
        </button>
        <button className="sidebar-btn ">
          <Document />
          <p>Internships</p>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
