import React, { Component } from 'react'

export class HueSlider extends Component {
  state = {
    hue: Math.round(Math.random * 360),
  }
  hueSliderTracker = e => {
    this.setState({
      hue: e.target.value,
    })
    console.log(e.target.value)
  }

  render() {
    return (
      <li className="Slider">
        <h3>H</h3>
        <input
          onChange={this.hueSliderTracker}
          type="range"
          className="Hue"
          name="hue"
          value={this.state.hue}
          min="0"
          max="360"
        ></input>
      </li>
    )
  }
}

export default HueSlider
