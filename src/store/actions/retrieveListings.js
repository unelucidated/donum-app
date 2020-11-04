import Axios from "axios";

export const retrieveListings = () => {
  return (dispatch) => {
    Axios.get("http://localhost:5000/listings", {
      headers: {
        "Access-Control-Allow-Origin": true,
      },
    })
      .then((payload) => {
        //console.log('payload:' , payload.data);
        dispatch({ type: "RETRIEVE_SUCCESS", payload });
      })
      .catch((error) => {
        dispatch({ type: "RETRIEVE_FAILURE", error });
      });
  };
};
