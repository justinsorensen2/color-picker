import React, { Component } from 'react'

export class LightnessSlider extends Component {
  state = {
    lightness: Math.round(Math.random() * 100),
  }
  lightnessSliderTracker = e => {
    this.setState({
      lightness: e.target.value,
    })
    console.log(e.target.value)
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
          value={this.state.lightness}
          min="0%"
          max="100%"
        ></input>
      </li>
    )
  }
}

export default LightnessSlider
