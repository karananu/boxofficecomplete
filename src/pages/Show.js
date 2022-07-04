import React, { useEffect, useReducer } from "react";
import { useParams } from "react-router-dom";
import { apiGet } from "../misc/config";

const reducer = (prevState, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS": {
      return { isLoading: false, error: null, show: action.show };
    }
    case "FETCH_FAIL": {
      return { ...prevState, isLoading: false, error: action.error };
    }
    default:
      return prevState;
  }
};

const initialState = {
  show: null,
  isLoading: true,
  error: null,
};
const Show = () => {
  const { id } = useParams();
  const [{ show, isLoading, error }, dispatch] = useReducer(
    reducer,
    initialState
  );

  useEffect(() => {
    let IsMounted = true;

    apiGet(`/shows/${id}?embed[]=seasons&embed[]=cast`)
      .then((results) => {
        setTimeout(() => {
          if (IsMounted) {
            dispatch({ type: "FETCH_SUCCESS", show: results });
          }
        }, 2000);
      })
      .catch((err) => {
        if (IsMounted) {
          dispatch({ type: "FETCH_SUCCESS", error: err.message });
        }
      });
    return () => {
      IsMounted = false;
    };
  }, [id]);

  console.log("show", show);

  if (isLoading) {
    return <div>Data is being loaded</div>;
  }

  if (error) {
    return <div>Error occured: {error}</div>;
  }

  return <div>this is show page</div>;
};

export default Show;
