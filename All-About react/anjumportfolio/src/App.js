import React from 'react';
import Navbar from '../src/Componets/Navbar/Navbar.jsx';
import Home from '../src/Componets/Home/Home.jsx';
import About from '../src/Componets/About/About.jsx';
import Myservice from '../src/Componets/Myservices/Myservice.jsx';
import Contact from "../src/Componets/contact-us/Contact.jsx";

export default function App() {
  return (
    <>
      <Navbar/>
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="myservices">
        <Myservice />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </>
  );
}
