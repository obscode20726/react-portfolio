import React from 'react'
import './App.css';
import Header from './Components/header/Header'
import { BrowserRouter as Router } from 'react-router-dom';
import Main from './Components/main/Main'
import Footer from './Components/footer/Footer'
function App() {
  return (
    <Router>
      <div>
        <Header />
        <Main />
        <Footer />
        
      </div>
    </Router>
  );
}

export default App;
