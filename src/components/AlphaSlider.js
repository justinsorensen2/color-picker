import React, { Component } from 'react'

export class AlphaSlider extends Component {
  initial = {
    alpha: Math.floor(Math.random),
  }

  alphaSliderTracker = e => {
    this.setState({
      alpha: e.target.value,
    })
    console.log(e.target.value)
    const alphaVal = e.target.value
    return alphaVal
  }

  render() {
    return (
      <li className="Slider">
        <h3>A</h3>
        <input
          onChange={this.alphaSliderTracker}
          type="range"
          className="Alpha"
          name="alpha"
          min="0"
          max="1"
        ></input>
      </li>
    )
  }
}

export default AlphaSlider
