import React, { Component } from 'react';
import './W2a6.css';
import Header from './header';
import Banner from './banner';
import Content from './content';

class W2a6 extends Component {
  constructor(props) {
    super(props);
    this.secondTitle = 'Second Title';
    this.bannerClicked = false;
  }

  render() {
    return (
      <div>
        < Header /> {/*TODO: 迴圈建造 elements*/}
        < Banner /> {/*TODO: 點擊自身按鈕*/}

        <h2>{ this.secondTitle }</h2>

        < Content id="first-content"></Content>
        <div className="btn-div">
          <button type="button" className="action-btn" id="action-btn">Call to Action</button>
        </div>
        < Content id="second-content"></Content>
      </div>
    )
  }
}

export default W2a6;