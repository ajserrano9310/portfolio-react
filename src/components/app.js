import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import PortfolioContainer from "./portfolio/portfolio-container";
import NavigationContainer from "./navigation/navigation-container";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Blog from "./pages/blog";
import PortfolioDetail from "./portfolio/portfolio-detail";
import Auth from "./pages/auth";
import NoMatch from "./pages/no-match"

export default class App extends Component {
  constructor(){
    super();
  }
  
  render() {
    return (
      <div className="app">
        <Router>
          <div>
            <NavigationContainer />
            <Switch>
              <Route exact path="/" component={Home}></Route>
              <Route exact path="/auth" component={Auth}></Route>
              <Route exact path="/about-me" component={About}></Route>
              <Route exact path="/contact" component={Contact}></Route>
              <Route exact path="/blog" component={Blog}></Route>
              <Route exact path="/portfolio/:slug" component={PortfolioDetail}></Route>
              <Route component={NoMatch}></Route>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
