import React, { Component } from 'react'
// import express from 'express'


export default class Header extends Component {
  constructor() {
    super()
    this.state = {
      display: false,
      name: '',
      role: '',
      description: '',
      imgURL: '',
      primary: '',
      primaryDescription: '',
      secondary: '',
      secondaryDescription: '',
      ability1: '',
      ability1Description: '',
      ability2: '',
      ability2Description: '',
      ultimate: '',
      ultimateDescription: ''
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleClick() {
    this.setState({
      display: !this.state.display
    })
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    const { name, role, description, imgURL, primary, primaryDescription, secondary, secondaryDescription, ability1, ability1Description, ability2, ability2Description, ultimate, ultimateDescription } = this.state
    const { createNewHero } = this.props
    return (
      <div className='header'>
        <div className='title'>OVERWATCH HERO EDITOR</div>
        <button className='edit-hero-button' onClick={this.handleClick}>EDIT HERO</button>
        <button className='create-hero-button' onClick={this.handleClick}>CREATE NEW HERO</button>
        <div className={this.state.display ? 'dropdown' : 'hidden'}>
          <input name='name' type='text' placeholder='Name' onChange={(e) => this.handleChange(e)}></input>
          <input name='role' type='text' placeholder='Role' onChange={(e) => this.handleChange(e)}></input>
          <input name='description' type='text' placeholder='Description' onChange={(e) => this.handleChange(e)}></input>
          <input name='imgURL' type='text' placeholder='image URL' onChange={(e) => this.handleChange(e)}></input>
          <input name='primary' type='text' placeholder='primary' onChange={(e) => this.handleChange(e)}></input>
          <input name='primaryDescription' type='text' placeholder='primary description' onChange={(e) => this.handleChange(e)}></input>
          <input name='secondary' type='text' placeholder='secondary' onChange={(e) => this.handleChange(e)}></input>
          <input name='secondaryDescription' type='text' placeholder='secondary description' onChange={(e) => this.handleChange(e)}></input>
          <input name='ability1' type='text' placeholder='ability 1' onChange={(e) => this.handleChange(e)}></input>
          <input name='ability1Description' type='text' placeholder='ability 1 description' onChange={(e) => this.handleChange(e)}></input>
          <input name='ability2' type='text' placeholder='ability 2' onChange={(e) => this.handleChange(e)}></input>
          <input name='ability2Description' type='text' placeholder='ab2 descrip' onChange={(e) => this.handleChange(e)}></input>
          <input name='ultimate' type='text' placeholder='ultimate' onChange={(e) => this.handleChange(e)}></input>
          <input name='ultimateDescription' type='text' placeholder='ult descrip' onChange={(e) => this.handleChange(e)}></input>
          <button className='submit' onClick={() => createNewHero(this.state)}>SUBMIT NEW HERO</button>
          <button className='edit' onClick={() => this.props.editHero(this.props.middleHero.id, { name, role, description, imgURL, primary, primaryDescription, secondary, secondaryDescription, ability1, ability1Description, ability2, ability2Description, ultimate, ultimateDescription })
          }>EDIT CURRENT HERO</button>
        </div>
      </div>
    )
  }
}