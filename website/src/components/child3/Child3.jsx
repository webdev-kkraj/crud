import React, { createContext, useContext } from "react";
import { UserContext } from "../parentaaa/Parentaaa";

const Child3 = () => {
  const getValue = useContext(UserContext);
  return (
    <>
      <div>Child3</div>
      <div>Last value:</div>
    </>
  );
};

export default Child3;
