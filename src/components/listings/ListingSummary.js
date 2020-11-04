import React from "react";

const ListingSummary = ({ listing }) => {
  return (
    <div className="box">
      <div className="container">
        <h1>Item number: {listing._id} </h1>
        <h2>Item Name: {listing.item}</h2>
        <h3>Description: {listing.description}</h3>
        <h6> {listing.categories[0]}</h6>
      </div>
    </div>
  );
};

export default ListingSummary;
