import React, { Component } from 'react'
import hueVal from './HueSlider'
import saturationVal from './SaturationSlider'
import lightnessVal from './LightnessSlider'
import alphaVal from './AlphaSlider'

export class UserSelection extends Component {
  render() {
    return (
      <div
        style={{
          backgroundColor:
            'hsla({ hueVal }, { saturationVal }, { lightnessVal }, { alphaVal })',
        }}
      ></div>
    )
  }
}

export default UserSelection
