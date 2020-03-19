import React, { Component } from 'react'

export class LightnessSlider extends Component {
  initial = {
    lightness: Math.floor(Math.random() * 100),
  }
  lightnessSliderTracker = e => {
    this.setState({
      lightness: e.target.value,
    })
    console.log(e.target.value)
    this.setState({
      lightness: this.state.lightness,
    })
    const lightnessVal = e.target.value
    return lightnessVal
  }

  render() {
    return (
      <li className="Slider">
        <h3>L</h3>
        <input
          onChange={this.lightnessSliderTracker}
          type="range"
          className="Lightness"
          name="lightness"
          min="0%"
          max="100%"
        ></input>
      </li>
    )
  }
}

export default LightnessSlider
