import React, { useEffect } from "react";
// import { Link } from "react-router-dom";
import ListingSummary from "./ListingSummary";
import { connect } from "react-redux";
import { retrieveListings } from "../../store/actions/retrieveListings";

const ListingList = (props) => {
  let listings = props.listings;
  let retrieveListings = props.retrieveListings;
  // console.log(listings);
  useEffect(() => {
    retrieveListings();
  }, []);

  return (
    <div className="section listings">
      {listings &&
        listings.map((listing) => {
          return (
              <ListingSummary listing={listing} key={listing._id}/>
          );
        })}
    </div>
  );
};

const mapStateToProps = (state) => {
  // console.log("current state", state);
  return {
    listings: state.listing.listings,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    retrieveListings: () => dispatch(retrieveListings()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListingList);

// {listings &&
//   listings.map((listing) => {
//     return (
//       <Link to={"/listing/" + listing.id} key={listing.id}>
//         <ListingSummary listing={listing} />
//       </Link>
//     );
//   })}
