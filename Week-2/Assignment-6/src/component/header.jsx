import React, { Component } from 'react';
import './W2a6.css';

class Header extends Component {
  render() {
    return (
        <header className="main-header">
          <p className="web-title">Website Title / Logo</p>
          <ul className="main-nav">
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
          </ul>
        </header>
    )
  }
}

export default Header;