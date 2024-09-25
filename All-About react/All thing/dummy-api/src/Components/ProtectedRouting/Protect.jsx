import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Protect(props) {
  const { Component } = props;
  const navigate = useNavigate();

  useEffect(() => {
    let login = localStorage.getItem('Ptlogin');
    if (!login) {
      navigate('/Ptlogin');
    }
  },[] ); 

  return (
    <div>
      
      <Component />
    </div>
  );
}
