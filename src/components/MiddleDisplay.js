import React, { Component } from 'react'

export default class MiddleDisplay extends Component {
  constructor() {
    super()
    this.state = {
      middleHero: {},
      balanceHero: false
    }
  }

  componentDidMount() {
    this.setState({
      middleHero: this.props.middleHero
    })
  }

  handleClick() {
    this.setState({
      balanceHero: !this.state.balanceHero
    })
  }




  render() {
    console.log('THIS.PROPs.MIDDLEHERO', this.props.middleHero)
    const { name, role, description, primary, secondary, ability1, ability2, ultimate } = this.props.middleHero
    console.log("PRIMARY VALUE", primary)
    console.log(this.state)
    return (
      <div className='middle-display'>
        <div className='middle-hero'>Name: {name}</div>
        <div className='middle-hero'>Role: {role}</div>
        <button className='delete-hero' onClick={this.props.deleteHero}>DELETE HERO</button>
        <button className='edit-hero' onclick={this.handleClick}>EDIT HERO</button>
        <div className='middle-hero'>{description}</div>
        <div className='middle-hero'>Primary: {primary?.name}</div>
        <div className='middle-hero'>{primary?.description}</div>
        <div className='middle-hero'>Secondary: {secondary?.name}</div>
        <div className='middle-hero'>{secondary?.description}</div>
        <div className='middle-hero'>Ability 1: {ability1?.name}</div>
        <div className='middle-hero'>{ability1?.description}</div>
        <div className='middle-hero'>Ability 2: {ability2?.name}</div>
        <div className='middle-hero'>{ability2?.description}</div>
        <div className='middle-hero'>Ultimate: {ultimate?.name}</div>
        <div className='middle-hero'>{ultimate?.description}</div>


      </div >
    )
  }
}