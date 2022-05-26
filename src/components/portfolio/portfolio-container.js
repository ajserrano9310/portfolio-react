import React, { Component } from "react";
import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
  constructor() {
    //.. set up computations
    super();
    this.state = {
      pageTitle: "Welcome to my portfolio",
      data: [
        { title: "quip", category: "eCommerce", slug: 'quip'},
        { title: "eventbrite", category: "Scheduling", slug: 'eventbrite' },
        { title: "ministry safe", category: "Enterprise", slug: 'ministry-safe' },
        { title: "Amazon", category: "eCommerce", slug:'swingaway'},
      ],
      isLoading: false
    };

    this.handleFilter = this.handleFilter.bind(this);
  }

  portfolioItems() {
    return this.state.data.map((item) => {
      return <PortfolioItem title={item.title} slug={item.slug}/>;
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
