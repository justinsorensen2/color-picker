import React, { Component } from 'react'

export class SaturationSlider extends Component {
  state = {
    saturation: Math.round(Math.random() * 100),
  }
  saturationSliderTracker = e => {
    this.setState({
      saturation: e.target.value,
    })
    console.log(e.target.value)
  }

  render() {
    return (
      <li className="Slider">
        <h3>S</h3>
        <input
          onChange={this.saturationSliderTracker}
          type="range"
          className="Saturation"
          name="saturation"
          value={this.state.saturation}
          min="0%"
          max="100%"
        ></input>
      </li>
    )
  }
}

export default SaturationSlider
