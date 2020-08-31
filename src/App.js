import React, { Component } from 'react'
import axios from 'axios'
import './App.css'
import './reset.css'
import Header from './components/Header'
import Display from './components/Display'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      tanks: [],
      support: [],
      damage: [],
      heroes: [],
      middleHero: {}
    }
    this.createNewHero = this.createNewHero.bind(this)
    this.editHero = this.editHero.bind(this)
    this.setMiddleHero = this.setMiddleHero.bind(this)
    this.deleteHero = this.deleteHero.bind(this)
  }
  componentDidMount() {
    axios.get('/api/heroes').then(res => {
      this.setState({
        tanks: res.data.tanks,
        support: res.data.support,
        damage: res.data.damage,
        heroes: res.data.heroes
      })
    })
  }

  createNewHero(hero_id, name, role, description, primary, secondary, ability1, ability2, ultimate) {
    axios.post('/api/heroes').then(res => {
      this.setState({
        heroes: res.data.heroes
      })
      this.setMiddleHero(hero_id)
    })
  }

  editHero(hero_id, name, role, description, primary, secondary, ability1, ability2, ultimate) {
    axios.put(`/api/heroes/${hero_id}`).then(res => {
      this.setState({
        heroes: res.data
      })
    })
  }

  setMiddleHero(hero_id) {
    axios.get(`/api/heroes/${hero_id}`).then(res => {
      console.log(res.data)
      this.setState({
        middleHero: res.data
      })
    })
  }

  deleteHero(hero_id) {
    axios.delete(`/api/heroes/${hero_id}`).then(res => {
      this.setState({
        middleHero: {},
        heroes: res.data.heroes,
        tanks: res.data.tanks,
        support: res.data.support,
        damage: res.data.damage,
      })
    })
  }

  render() {
    return (
      <div className="app">
        <Header
          createNewHero={this.createNewHero}
          heroes={this.state.heroes}
          setMiddleHero={this.setMiddleHero}
          editHero={this.editHero}
        />
        <Display
          tanks={this.state.tanks}
          support={this.state.support}
          damage={this.state.damage}
          editHero={this.editHero}
          setMiddleHero={this.setMiddleHero}
          deleteHero={this.deleteHero}
          heroes={this.state.heroes}
          middleHero={this.state.middleHero} />
      </div >
    )
  }
}