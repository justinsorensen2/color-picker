import React, { Component } from 'react'
import Checker from '../images/7.jpg'

export class UserSelection extends Component {
  render() {
    return (
      <article style={{ backgroundImage: `url(${Checker})` }}>
        <sub
          className="UserSelection"
          style={{
            foregroundColor:
              'hsl(${ this.state.hue }, ${ this.state.saturation }%, ${ this.state.lightness }%, ${ this.state.alpha })',
          }}
        ></sub>
      </article>
    )
  }
}

export default UserSelection
