import React, { Component } from 'react'

export class AlphaSlider extends Component {
  state = {
    alpha: Math.round(Math.random * 100),
  }

  alphaSliderTracker = e => {
    this.setState({
      alpha: e.target.value,
    })
    console.log(e.target.value)
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
          value={this.state.alpha}
          min="0%"
          max="100%"
        ></input>
      </li>
    )
  }
}

export default AlphaSlider
