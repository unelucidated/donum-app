import React from "react";
// import { connect } from "react-redux";
// import { compose } from "redux";
// import { Redirect } from "react-router-dom";
import ListingList from "../listings/ListingList";

const Dashboard = () => {
  const listings = [
    {
      id: 0,
      itemName: "Dog food",
      categories: ["food", "animal"],
      description: "food for my doggies",
    },
    {
      id: 1,
      itemName: "Cat food",
      categories: ["food", "scum"],
      description: "food for my kitties",
    },
  ];
  return (
    <div className="dashboard container">
      <div className="columns">
        <div className="column is-half">
          <ListingList listings={listings} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
