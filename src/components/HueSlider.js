import React, { Component } from 'react'

export class HueSlider extends Component {
  initial = {
    hue: 60,
  }
  hueSliderTracker = e => {
    this.setState({
      hue: e.target.value,
    })
    console.log(e.target.value)
    const hueVal = e.target.value
    return hueVal
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
          min="0"
          max="360"
        ></input>
      </li>
    )
  }
}

export default HueSlider
