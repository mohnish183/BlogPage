import React from "react";
import { BrowserRouter, NavLink, Routes, Route } from "react-router-dom";
import Home from "./Home";
import BollyWood from "./BollyWood";
import HollyWood from "./HollyWood";
import Tech from "./Tech";
import Food from "./Food";
import Fitness from "./Fitness";
import Store from "../Store/Store";
import "../CompoUI/RouteCompo.css";
import DynamicCompo from "./DynamicCompo";

const RouteCompo = () => {
  return (
    <BrowserRouter>
      <div className="nav-bar">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/bollywood">BollyWood</NavLink>
        <NavLink to="/hollywood">HollyWood</NavLink>
        <NavLink to="/tech">Tech</NavLink>
        <NavLink to="/food">Food</NavLink>
        <NavLink to="/fitness">Fitness</NavLink>
      </div>
      <Store>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/bollywood" element={<BollyWood />}></Route>
          <Route path="/hollywood" element={<HollyWood />}></Route>
          <Route path="/tech" element={<Tech />}></Route>
          <Route path="food" element={<Food />}></Route>
          <Route path="/fitness" element={<Fitness />}></Route>
          <Route path="/detail/:id" element={<DynamicCompo />}></Route>
        </Routes>
      </Store>
    </BrowserRouter>
  );
};

export default RouteCompo;
