const initState = {};

const listingReducer = (state = initState, action) => {
  //   console.log("inside listing reducer", state, action.payload);
  //listings should be an array
  switch (action.type) {
    case "RETRIEVE_SUCCESS":
      console.log("successfully retrieved api data");
      return {
        ...state,
        listings: action.payload.data,
      };

    case "RETRIEVE_ERROR":
      console.log("Error retrieving listings data");
      return state;
    default:
      return state;
  }
};

export default listingReducer;

// if (state === {}) {
//     return {
//       listings: action.payload.data,
//     };
//   } else {
//     const oldListings = state.listings.filter(
//       (listing) =>
//         !action.payload.data.some(
//           (newListing) => newListing.id === listing.id
//         )
//     );
//     return {
//       ...state,
//       listings: oldListings.concat(action.payload.data),
//     };
//   }
