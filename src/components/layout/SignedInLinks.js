import React from "react";
import { NavLink } from "react-router-dom";

const SignedInLinks = (props) => {
  return (
    <div className="container">
      <NavLink to="/create" className="button has-text-grey">New Listing</NavLink>
      <button className="button">Log Out</button>
    </div>
  );
};

export default SignedInLinks;
