import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "./../utils/axiosWithAuth";
import { Route } from "react-router-dom";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
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

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
