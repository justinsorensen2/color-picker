import React, { Component } from 'react'
import Checker from '../images/7.jpg'

export class Display extends Component {
  render() {
    const newBackgroundColor = `hsla(${this.props.hue}, ${this.props.saturation}%, ${this.props.lightness}%, ${this.props.alpha})`
    console.log(newBackgroundColor)
    return (
      <aside className="Display">
        <article style={{ backgroundImage: `url(${Checker})` }}>
          <sub
            className="UserSelection"
            style={{
              backgroundColor: newBackgroundColor,
            }}
          ></sub>
        </article>
      </aside>
    )
  }
}

export default Display
