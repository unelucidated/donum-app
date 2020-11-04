import Axios from "axios";

export const getListings = () => {
  return (dispatch) => {
    return Axios.get("localhost:5000/listings")
    .then((payload) => {
      dispatch({ type: 'RETRIEVE_SUCCESS', payload });
    })
    .catch( error => {
        dispatch({ type: "RETRIEVE_FAILURE", error });
    })
  };
};
