import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import Home from './Home'
import Abme from './Abme'
import TellContact from './TellContact'
import Ptlogin from "./Ptlogin";
import Protect from "./Protect";

export default function Navbar() {
  return (
    <div>
      <BrowserRouter>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/Abme"}>About-me</Link>
          </li>
          <li>
            <Link to={"/TellContact"}>contact-me</Link>
          </li>
          <li>
            <Link to={"/Ptlogin"}>Login-Page</Link>
          </li>
        </ul>
        <Routes>
          <Route path="/" element={<Protect Component={Home} />} />
          <Route path="/Abme" element={<Protect Component={Abme} />} />
          <Route path="/TellContact" element={<Protect Component={TellContact} />} />
          <Route path="/Ptlogin" element={<Ptlogin/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
