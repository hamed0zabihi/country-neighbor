import React from "react";
import MainLaout from "../../component/styles/mainLayout/MainLaout";
import { Routes, Route } from "react-router";
import Home from "../home/Home";

const MainRoutes = () => {
  return (
    <MainLaout>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </MainLaout>
  );
};

export default MainRoutes;
