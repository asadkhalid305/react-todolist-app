import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Header from './components/layout/header/Header'
import About from './view/about/About'
import Home from './view/home/Home'

function App() {
  return (
    <Router>
      <div id="App">
        <Header />
        <Route exact path="/" render={(props) => <Home />} />
        <Route path="/about/" render={(props) => <About />} />
      </div>
    </Router>
  );
}

export default App;
