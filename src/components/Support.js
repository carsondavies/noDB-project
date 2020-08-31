import React, { Component } from 'react'

export default class Support extends Component {
  constructor() {
    super()
    this.state = {
    }
  }

  render() {
    return (
      <div className='support-container'>

        {this.props.support.map(element => <button className='support-button' onClick={() => this.props.setMiddleHero(element.id)}>{element.name}</button>)}

      </div>
    )
  }
}