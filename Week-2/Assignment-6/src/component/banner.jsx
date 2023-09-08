import React, { Component } from 'react';
import './W2a6.css';

class Banner extends Component {
  constructor(props) {
    super(props);
    this.beforeMessage = 'Welcome Message';
    this.afterMessage = 'Have a Good Time!';
    this.Clicked = false;
  }
  render() {
    return (
      <div className="main-banner">
        <h1 id="banner">{ this.beforeMessage }</h1>
      </div>
    )
  }
}

export default Banner;
