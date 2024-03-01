import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navbar from './Navbar';
import Card from './Card';

function App() {
  return (
    <div className="App">
      <Navbar /> {/* Including the Navbar component */}
            <h1>CS 230L</h1>
      <h2>Section - 002</h2>
      <p>WVU ID: 800405172</p>
      <p>Hi, I am Kumail Abbas!</p>
      <Card /> {/* Including the Card component */}
    </div>
  );
}

export default App;
