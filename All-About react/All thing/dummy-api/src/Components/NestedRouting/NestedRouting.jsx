import React from 'react';
import './Nested.css';
import { BrowserRouter, Route, Routes, Link, Outlet } from 'react-router-dom';
import Homer from './Homer';
import Abouter from './Abouter';
import Contacter from './Contacter';
import Other from './Other';
import Channel from './Channel';
import Omnichannel from './Omnichannel';
import Superchannel from './Superchannel';

export default function NestedRouting() {
  return (
    <div>
      <BrowserRouter>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Contact">Contact</Link></li>
            <li><Link to="/Other">Other</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Homer />} />
          <Route path="/About" element={<Abouter />} />
          <Route path="/Other" element={<Other />} />
          <Route path='/contact/' element={<Contacter/>}>
          <Route path="Channel" element={<Channel />} />
          <Route path="Omnichannel" element={<Omnichannel />} />
          <Route path="Superchannel" element={<Superchannel />} />
          
          </Route>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}