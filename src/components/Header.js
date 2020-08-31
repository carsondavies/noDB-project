import React, { Component } from 'react'


export default class Header extends Component {
  constructor() {
    super()
    this.state = {
      display: false
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState({
      display: !this.state.display
    })
  }

  render() {
    const { createNewHero } = this.props
    return (
      <div className='header'>
        <div className='title'>OVERWATCH HERO EDITOR</div>
        <button className='create-hero-button' onClick={this.handleClick}>CREATE NEW HERO</button>
        <div className={this.state.display ? 'dropdown' : 'hidden'}>
          <input type='text' placeholder='Name'></input>
          <input type='text' placeholder='Role'></input>
          <input type='text' placeholder='Description'></input>
          <input type='text' placeholder='image URL'></input>
          <input type='text' placeholder='primary'></input>
          <input type='text' placeholder='pri descrip'></input>
          <input type='text' placeholder='secondary'></input>
          <input type='text' placeholder='sec descrip'></input>
          <input type='text' placeholder='ability 1'></input>
          <input type='text' placeholder='ab1 descrip'></input>
          <input type='text' placeholder='ability 2'></input>
          <input type='text' placeholder='ab2 descrip'></input>
          <input type='text' placeholder='ultimate'></input>
          <input type='text' placeholder='ult descrip'></input>
          <button className='submit' onClick={createNewHero}>SUBMIT NEW HERO</button>
          <button className='edit' onClick={this.props.editHero}>EDIT CURRENT HERO</button>
        </div>
      </div>
    )
  }
}