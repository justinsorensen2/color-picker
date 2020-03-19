import React, { Component } from 'react'
import Display from './components/Display'
import Sliders from './components/Sliders'
import Header from './components/Header'
import Checker from './images/7.jpg'

class App extends React.Component {
  render() {
    return (
      <>
        <Header></Header>
        <main style={{ backgroundImage: `url(${Checker})` }}>
          <Display></Display>
          <Sliders></Sliders>
        </main>
        <footer></footer>
      </>
    )
  }
}
export default App
