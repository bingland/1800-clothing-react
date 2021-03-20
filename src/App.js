import { useState } from 'react'
import {BrowserRouter as Router, Route } from 'react-router-dom'
import CostumesPage from './components/CostumesPage/CostumesPage'
import BooksPage from './components/BooksPage/BooksPage'
import MainPage from './components/MainPage/MainPage'
import Navbar from './components/Navbar/Navbar'
import './App.scss'

function App() {

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route path="/" exact component={MainPage} />
        <Route path="/costumes" exact component={CostumesPage} />
        <Route path="/books" exact component={BooksPage} />
        
      </div>
    </Router>
  );
}

export default App;
