import React from "react";
import "./dashboard.css";
import Graph from "./Graph";

const Dashboard = () => {
  return (
    <div className="dashboard">
    <div className="dashboard-content">
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div className="search-container">
          <div>
            <i className="fa fa-search search-icon"></i>
            <input
              type="text"
              className="search-input"
              placeholder="Search"
              style={{ paddingLeft: "3rem" }}
            />
          </div>
        </div>
        <p style={{color:'white',margin:'1rem',alignContent:"space-between"}}>John</p>
        <div className="profile-container">
          <img className="profile" src="Avatar.png" alt="Flood" />
        </div>
      </div>
      <div className="text-paragraph">
       <h1 className="text-dashbaord">Dashboard</h1>
      </div>
    </div>
  </div>
  );
};

export default Dashboard;
