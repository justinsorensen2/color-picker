import React, { Component } from 'react'
import hueVal from './HueSlider'
import saturationVal from './SaturationSlider'
import lightnessVal from './LightnessSlider'
import alphaVal from './AlphaSlider'
import Checker from '../images/7.jpg'

export class UserSelection extends Component {
  render() {
    const css = [
      {
        h: hueVal,
        s: saturationVal,
        l: lightnessVal,
        a: alphaVal,
      },
    ]
    return (
      <article style={{ backgroundImage: `url(${Checker})` }}>
        <sub
          className="UserSelection"
          style={{
            foregroundColor:
              'hsla({ this.props.cssh }, { this.props.csss }, { this.props.cssl }, { this.props.cssa })',
          }}
        ></sub>
      </article>
    )
  }
}

export default UserSelection
