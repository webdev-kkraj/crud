import React, { createContext, useContext, useState, useEffect } from "react";
import Child1 from "../child1/Child1";
import Child3 from "../child3/Child3";
import axios from "axios";

const users = { id: 123, name: "raja", address: "xxxx" };

export const UserContext = createContext();
const Parentaaa = () => {
  const [ustate, setUstate] = useState([]);
  const getallusers = async () => {
    //const astate = await axios.get("http://localhost:8000/allusers");
    await axios.get("http://localhost:8000/allusers").then((res) => {
      setUstate(res.data);
      console.log(res.data);
    });

    /*await axios.get("http://localhost:8000/allusers").then((res) => {
      //setUstate(res.data);
      console.log("===>" + res.data);
    });*/
  };
  /*const getallusers = () => {
    alert("test");
  };*/
  useEffect(() => {
    getallusers();
  }, []);
  return (
    <>
      <UserContext.Provider value={users}>
        <div>Parentaaa</div>
        <Child1 />
        {ustate &&
          ustate.map((val) => {
            return (
              <div>
                <div>{val.empid}</div>
                <div>{val.name}</div>
                <div>{val.email}</div>
                <div>{val.phone}</div>
              </div>
            );
          })}
      </UserContext.Provider>
    </>
  );
};

export default Parentaaa;
