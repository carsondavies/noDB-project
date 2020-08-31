import React, { Component } from 'react'

export default class Tanks extends Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <div className='tank-container'>

        {this.props.tanks.map(element => <button className='tank-button' onClick={() => this.props.setMiddleHero(element.id)}>{element.name}</button>)}

      </div>
    )
  }
}