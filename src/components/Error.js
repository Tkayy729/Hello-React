import React from "react";
import { useRouteError } from "react-router";

const Error = () => {
  const err = useRouteError();
  return (
    <div>
      <h1>Oops !!!</h1>
      <h3>Something went wrong!!</h3>
      <h4>
        {err.status}: {err?.statusText}
      </h4>
    </div>
  );
};

export default Error;
