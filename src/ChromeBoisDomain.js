import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {

  handleMouseMove = (event) => {
    return drawChromeBoiAtCoords(event.clientX, event.clientY)
  }

  eventHandler = () => {
    return toggleCycling()
  }

  keyPress = (event) => {
    if(event.key === 'a') {
      resize('+')
    } else if(event.key === 's') {
      resize('-')
    }
  }


  render() {
    return (
      <canvas
        onMouseMove={this.handleMouseMove}
        onClick={this.eventHandler}
        onKeyDown={this.keyPress}
        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
}
