import React, { Component } from 'react'
import Display from './components/Display'
import Sliders from './components/Sliders'
import Header from './components/Header'

class App extends React.Component {
  render() {
    return (
      <>
        <Header></Header>
        <main>
          <Display></Display>
          <Sliders></Sliders>
        </main>
        <footer></footer>
      </>
    )
  }
}
export default App
