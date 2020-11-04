import React from "react";
// import { connect } from "react-redux";
// import { compose } from "redux";
// import { Redirect } from "react-router-dom";
import ListingList from "../listings/ListingList";

const Dashboard = () => {
    return (
    <div className="dashboard container">
      <div className="columns">
        <div className="column is-half">
          <ListingList />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
