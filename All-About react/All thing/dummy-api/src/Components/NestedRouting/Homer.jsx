import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Abouter from './Abouter';

export default function Homer() {
  return (
    
      <div>
        <h3>This is the home page</h3>
        <Link to='/About'>Go to Abouter section</Link>
        <Routes>
          <Route path='/About' element={<Abouter />} />
        </Routes>
      </div>
    
  );
}
