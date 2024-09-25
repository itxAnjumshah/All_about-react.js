import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Nested.css';

export default function Contacter() {
  return (
    <div>
      <h3>This is the contacter page</h3> 
      <div className="nested">
        <Link to="Channel">Channel</Link>
        <Link to="omnichannel">Omnichannel</Link>
        <Link to="superchannel">Superchannel</Link>
        <Outlet/>
        
      </div>
     
    </div>
  );
}
