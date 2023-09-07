import React, { Component } from 'react';
import './W2a6.css';

class Content extends Component {
  constructor(props) {
    super(props);
    this.Clicked = false;
  }
  render() {
    return (
      <ul className="contents" id = {this.props.id}>
        <li className="content">Content Box 1</li>
        <li className="content">Content Box 2</li>
        <li className="content">Content Box 3</li>
        <li className="content">Content Box 4</li>
      </ul>
    )
  }
}

export default Content;

// TODO: 迴圈建造 elements
// TODO: 依照輸入的 props id 改變內容
// TODO: 接收來自其他按鈕的值 並聆聽內容
