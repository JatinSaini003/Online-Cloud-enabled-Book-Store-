import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/toggle_Navbar/Navbar';
import Header from './components/Navbar/Current_Nav/header';
import Hero from './components/Heropage/Hero';
import Nav from './components/Navbar/New_nav/nav';
import { useState } from 'react';
function App() {
 
  return (
    <div className="App">
      <Nav/>
      
      <Header/>
      <Hero/>
      
      
    </div>
  );
}

export default App;
