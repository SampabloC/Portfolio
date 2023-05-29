import React from 'react';
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero';
import Contact from './components/Contact';
import Profile from './components/Profile';
import Projects from './components/Projects';
import Footer from './components/Footer';


function App() {
  return (
    <>
    <Navbar />
    <Hero />
    <Profile />
    <Projects />
    <Contact />
    <Footer />
    </>
  );
}

export default App;
