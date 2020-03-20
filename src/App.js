import React, { Component } from 'react'
import Display from './components/Display'
import Sliders from './components/Sliders'
import Header from './components/Header'

class App extends React.Component {
  state = {
    hue: Math.round(Math.random() * 360),
    saturation: Math.round(Math.random() * 100),
    lightness: Math.round(Math.random() * 100),
    alpha: Math.round(Math.random() * 100),
  }

  hueSliderTracker = e => {
    this.setState({
      hue: e.target.value,
    })
    console.log(e.target.value)
  }

  saturationSliderTracker = e => {
    this.setState({
      saturation: e.target.value,
    })
    console.log(e.target.value)
  }

  lightnessSliderTracker = e => {
    this.setState({
      lightness: e.target.value,
    })
    console.log(e.target.value)
  }

  alphaSliderTracker = e => {
    this.setState({
      alpha: e.target.value,
    })
    console.log(e.target.value)
  }

  randomize = () => {
    this.setState({
      hue: Math.round(Math.random() * 360),
      saturation: Math.round(Math.random() * 100),
      lightness: Math.round(Math.random() * 100),
      alpha: Math.round(Math.random() * 100),
    })
  }

  render() {
    const textBackgroundColor = `hsla(${this.state.hue}, ${this.state.saturation}%, ${this.state.lightness}%, ${this.state.alpha})`
    return (
      <>
        <Header></Header>
        <main>
          <Display
            hue={this.state.hue}
            saturation={this.state.saturation}
            lightness={this.state.lightness}
            alpha={this.state.alpha}
          />
          <ul className="Sliders">
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
            <li className="Slider">
              <h3>A</h3>
              <input
                onChange={this.alphaSliderTracker}
                type="range"
                className="Alpha"
                name="alpha"
                value={this.state.alpha}
                min="0%"
                max="100%"
              ></input>
            </li>
            <li className="Randomize">
              <button onClick={this.randomize}>Randomize</button>
            </li>
          </ul>
        </main>
        <footer>
          <h3>{textBackgroundColor}</h3>
        </footer>
      </>
    )
  }
}
export default App
