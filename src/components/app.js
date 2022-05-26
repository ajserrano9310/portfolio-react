import React, { Component } from "react";
import moment from "moment";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import PortfolioContainer from "./portfolio/portfolio-container";
import NavigationContainer from "./navigation/navigation-container";
import Home from "./pages/home"; 
import About from "./pages/about"; 
import Contact from "./pages/contact"; 
import Blog from "./pages/blog"; 

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <div>

           <NavigationContainer />
           <Switch>
             <Route exact path="/" component={Home}></Route>
             <Route exact path="/about-me" component={About}></Route>
             <Route exact path="/contact" component={Contact}></Route>
             <Route exact path="/blog" component={Blog}></Route>
           </Switch>

          </div>
        </Router>
        <h1>DevCamp React Starter</h1>

        <div>
          <PortfolioContainer />
        </div>
        <h2>React Redux Router</h2>
      </div>
    );
  }
}
