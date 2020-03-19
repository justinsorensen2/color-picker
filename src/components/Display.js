import React, { Component } from 'react'
import UserSelection from './UserSelection'

export class Display extends Component {
  render() {
    return (
      <aside className="Display">
        <UserSelection></UserSelection>
      </aside>
    )
  }
}

export default Display
