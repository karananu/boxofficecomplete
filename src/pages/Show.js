import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiGet } from "../misc/config";

const Show = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    let IsMounted = true;

    apiGet(`/shows/${id}?embed[]=seasons&embed[]=cast`)
      .then((results) => {
        setTimeout(() => {
          if (IsMounted) {
            setShow(results);
            setIsLoading(false);
          }
        }, 2000);
      })
      .catch((err) => {
        if (IsMounted) {
          setError(err.message);

          setIsLoading(false);
        }
      });
    return () => {
      IsMounted = false;
    };
  }, [id]);
  console.log("show", show);
  if (isLoading) {
    return <div>Data is being Loaded</div>;
  }
  if (error) {
    return <div>Error occured:{error} </div>;
  }
  return <div>{}This is Show Page</div>;
};

export default Show;
