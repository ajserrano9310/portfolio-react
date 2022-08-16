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
import axios from "axios";

export default class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      logggedInStatus: "NOT_LOGGED_IN"
    }

    this.handleSuccessfulLogin = this.handleSuccessfulLogin.bind(this); 
    this.handleUnsuccessfulLogin = this.handleUnsuccessfulLogin.bind(this); 
  }

  handleSuccessfulLogin(){
    this.setState({
      logggedInStatus: "LOGGED_IN"
    })
  }

  handleUnsuccessfulLogin(){
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN"
    })
  }

  checkLoginStatus() {
    return axios
      .get("https://api.devcamp.space/logged_in", {
        withCredentials: true
      })
      .then(response => {
        const loggedIn = response.data.logged_in;
        const loggedInStatus = this.state.loggedInStatus;

        // If loggedIn and status LOGGED_IN => return data
        // If loggedIn status NOT_LOGGED_IN => update state
        // If not loggedIn and status LOGGED_IN => update state

        if (loggedIn && loggedInStatus === "LOGGED_IN") {
          return loggedIn;
        } else if (loggedIn && loggedInStatus === "NOT_LOGGED_IN") {
          this.setState({
            loggedInStatus: "LOGGED_IN"
          });
        } else if (!loggedIn && loggedInStatus === "LOGGED_IN") {
          this.setState({
            loggedInStatus: "NOT_LOGGED_IN"
          });
        }
      })
      .catch(error => {
        console.log("Error", error);
      });
  }
  
  componentDidMount(){
    this.checkLoginStatus(); 
  }

  render() {
    return (
      <div className="app">
        <Router>
          <div>
            <NavigationContainer />
            <h1>{this.state.logggedInStatus}</h1>
            <Switch>
              <Route exact path="/" component={Home}></Route>

              <Route exact path="/auth" 
              render={ props => (
                <Auth {...props}
                      handleSuccessfulLogin = {this.handleSuccessfulLogin}
                      handleUnsuccessfulLogin = {this.handleUnsuccessfulLogin}/> 
              )} />

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
