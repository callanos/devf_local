import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
