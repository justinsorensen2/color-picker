import React, { Component } from 'react'
import HueSlider from './HueSlider'
import SaturationSlider from './SaturationSlider'
import LightnessSlider from './LightnessSlider'
import AlphaSlider from './AlphaSlider.js'

export class Sliders extends Component {
  render() {
    return (
      <ul className="Sliders">
        <HueSlider></HueSlider>
        <SaturationSlider></SaturationSlider>
        <LightnessSlider></LightnessSlider>
        <AlphaSlider></AlphaSlider>
      </ul>
    )
  }
}

export default Sliders
