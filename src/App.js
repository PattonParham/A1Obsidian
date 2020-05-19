import React from 'react';
import logo from './logo.svg';
import './App.css';
import AppStyles from "./AppStyles.styles.tw";
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import Shop from "./components/Shop/Shop";
function App() {
  return (
  <Router>
    <div className="body">
       <Navbar className = "nav"></Navbar>
        <Switch>
          <Route exact path="/" exact component={Shop}></Route>
          <Route exact path="/shop" exact component={Shop}></Route>
          <Route exact path="/about" exact component={About}></Route>
          <Route exact path="/contact" exact component={Contact}></Route>
        </Switch>
      </div>
      </Router>
  )
}

export default App;
