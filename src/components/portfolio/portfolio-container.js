import React, { Component } from "react";
import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
  constructor() {
    //.. set up computations
    super();
    this.state = {
      pageTitle: "Welcome to my portfolio",
      data: [
        { title: "quip", category: "eCommerce" },
        { title: "eventbrite", category: "Scheduling" },
        { title: "ministry safe", category: "Enterprise" },
        { title: "Amazon", category: "eCommerce" },
      ],
      isLoading: false
    };

    this.handleFilter = this.handleFilter.bind(this);
  }

  portfolioItems() {
    return this.state.data.map((item) => {
      return <PortfolioItem title={item.title} />;
    });
  }

  handleFilter(filter) {
    this.setState({
      data: this.state.data.filter(item => {
        return item.category === filter;
      })
    })
  }

  render() {

    if(this.state.isLoading){
      return <div>Loading...</div>;
    }
    return (
      <div>
        <h2>{this.state.pageTitle}</h2>

        <button onClick={() => this.handleFilter('eCommerce')}>eCommerce</button>
        <button onClick={() => this.handleFilter('Scheduling')}>Scheduling</button>
        <button onClick={() => this.handleFilter('Enterprise')}>Enterprise</button>

        {this.portfolioItems()}
      </div>
    );
  }
}
