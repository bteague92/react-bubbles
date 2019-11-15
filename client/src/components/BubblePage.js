import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "./../utils/axiosWithAuth";
import { Route } from "react-router-dom";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = (props) => {
  const [colorList, setColorList] = useState([]);
  const newColorList = colorList;

  useEffect(() => {
    axiosWithAuth()
      .get(`/api/colors`)
      .then(res => {
        console.log("res colors", res);
        setColorList(res.data);
      })
      .catch(err => console.log(err))
  }, [])

  const [credentials, setCredentials] = useState({
    username: 'Lambda School',
    password: 'i<3Lambd4'
  });

  const logout = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("/api/login", credentials)
      .then(res => {
        console.log("res", res)
        localStorage.removeItem("token");
        return props.history.push("/")
      })
      .catch(err => console.log(err.response))
  };

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
      <button onClick={logout}>Logout</button>
    </>
  );
};

export default BubblePage;
