import React from 'react'
import './App.css';
import Hero from './components/Hero';
import Nav from './components/Nav';
import Tasks from './components/Tasks';

function App() {
  return (
    <div className='app'>
      <Nav />
      <Hero />
      
      <Tasks />
    </div>
  );
}

export default App;
