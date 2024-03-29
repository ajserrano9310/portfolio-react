import React, { Component } from "react";
import axios from "axios";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
      errorText: ""
    });
  }
  handleSubmit(event) {
    axios.post(
      "https://api.devcamp.space/sessions",
      {
        client: {
          email: this.state.email,
          password: this.state.password,
          errorText: ""
        }
      },
      { withCredentials: true }
    ).then(response => {
      if(response.data.status === 'created'){
        this.props.handleSuccessfulAuth(); 
      }
      else{
        this.setState({
          errorText: "Wrong Email or password"
        })
        this.props.handleUnsuccessfulAuth(); 
      }
    }).catch(error => {
      console.log("Got an error");
      this.setState({
        errorText: "An error ocurred"
      });
      this.props.handleUnsuccessfulAuth(); 
    })

    event.preventDefault(); // Don't follow regular behaviour.
  }

  render() {
    return (
      <div>
        <h1> Login to access your dashboard</h1>
        <div>{this.state.errorText}</div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Your email"
            value={this.state.email}
            onChange={this.handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Your password"
            value={this.state.password}
            onChange={this.handleChange}
          />

          <div>
            <button type="submit">Login</button>
          </div>
        </form>
        <div>Button</div>
      </div>
    );
  }
}
