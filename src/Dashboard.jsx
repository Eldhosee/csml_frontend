import React from "react";
import "./dashboard.css";
import Graph from "./Graph";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div style={{display:'flex'}}>
        <div class="search-container">
          <div>
            <i class="fa fa-search search-icon"></i>
            <input
              type="text"
              class="search-input"
              placeholder="Search"
              style={{ paddingLeft: "3rem" }}
            />
          </div>
        </div>
        <img src="home-flood" style={{display:'flex'}}></img>
      </div>
    </div>
  );
};

export default Dashboard;
