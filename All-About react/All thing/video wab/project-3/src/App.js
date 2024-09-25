import React, { useState } from 'react';
import './App.css';
import Campus from './components/Campus/Campus';
import Footer from './components/Footer/Footer';
import About from './components/Navbar/About/About';
import Hero from './components/Navbar/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Program from './components/Navbar/Program/Program';
import Title from './components/Navbar/Title/Title';
import Testimonials from './components/Testimoniols/Testimoniols';
import Videoplayer from './components/VideoPlayer/Videoplayer';
import Contact from './components/contact-us/Contact';

function App() {
  const [playState, setPlayState] = useState(false);
  console.log(playState)
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div className='container'>
        <Title subTitle='OUR PROGRAM' Title='What We Offer' />
        <Program setPlayState={setPlayState} />
        <About setPlayState={setPlayState} />
        <Title subTitle='GALLERY' Title='Campus Photos' />
        <Campus />
        <Title subTitle='TESTIMONIALS' Title='What Students Say' />
        <Testimonials />
        <Title subTitle='CONTACT US' Title='Get in Touch' />
        <Contact />
        <Footer />
      </div>
      <Videoplayer playState={playState} setPlayState={setPlayState} />
    </div>
  );
}

export default App;
