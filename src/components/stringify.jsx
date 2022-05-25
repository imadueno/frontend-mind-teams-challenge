import React from "react";

const Stringify = ({ children, data }) => {
  return <pre>{JSON.stringify(children ?? data, null, 2)}</pre>;
};

export default Stringify;
