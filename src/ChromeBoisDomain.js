import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js';

export default class ChromeBoisDomain extends Component {
  
  handleMouseMove(event) {
    drawChromeBoiAtCoords(event.clientX, event.clientY);
  }
  
  handleClick() {
    toggleCycling();
  }
   
  handleKeyDown(event) {
    if (event.keyCode === 65) {
      resize('+');
    } else if (event.keyCode === 83) {
      resize('-');
    }
  }
  
  render() {
    return (
      <canvas 
        onMouseMove={this.handleMouseMove}
        onKeyDown={this.handleKeyDown}
        onClick={this.handleClick}
        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    );
  }
}
