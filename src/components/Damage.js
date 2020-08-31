import React, { Component } from 'react'

export default class Damage extends Component {
  constructor() {
    super()
    this.state = {
    }
  }

  render() {
    return (
      <div className='damage-container'>
        {this.props.damage.map(element => <button className='damage-button' onClick={() => this.props.setMiddleHero(element.id)}>{element.name}</button>)}
      </div>
    )
  }
}