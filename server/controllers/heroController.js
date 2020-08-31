const heroes = require('../data.json')

let heroId = heroes[heroes.length - 1].id + 1

module.exports = {
  getAllHeroes: (req, res) => {
    const tanks = heroes.filter(element => element.role === "Tank")
    const support = heroes.filter(element => element.role === "Support")
    const damage = heroes.filter(element => element.role === "Damage")
    res.status(200).send({ tanks, support, damage, heroes })
  },


  getHeroById: (req, res) => {
    const { hero_id } = req.params

    if (!hero_id) {
      res.status(404).send('hero is not on list')
    }

    const hero = heroes.find(element => element.id === +hero_id)
    if (!hero) {
      res.status(500).send('unable to locate hero')
    }
    res.status(200).send(hero)
  },

  createNewHero: (req, res) => {
    const { name, role, description, primary, secondary, ability1, ability2, ultimate } = req.body

    const newHero = {
      heroId,
      name,
      role,
      description,
      primary,
      secondary,
      ability1,
      ability2,
      ultimate,
    }

    heroes.push(newHero)

    heroId++

    res.status(200).send(heroes)

  },

  editHero: (req, res) => {
    const { hero_id } = req.params
    const { name, role, description, primary, secondary, ability1, ability2, ultimate } = req.body

    const index = heroes.findIndex(element => element.id === +hero_id)
    if (index === -1) {
      return res.status(404).send('hero not found')
    }

    let existingHero = heroes[index]
    let modifiedHero = {
      id: existingHero.id,
      name: name || existingHero.name,
      role: role || existingHero.role,
      description: description || existingHero.description,
      primary: primary || existingHero.primary,
      secondary: secondary || existingHero.secondary,
      ability1: ability1 || existingHero.ability1,
      ability2: ability2 || existingHero.ability2,
      ultimate: ultimate || existingHero.ultimate
    }

    heroes[index] = modifiedHero

    res.status(200).send(heroes)

  },

  deleteHero: (req, res) => {
    const { hero_id } = req.params

    const index = heroes.findIndex(element => element.id === +hero_id)
    if (index === -1) {
      res.status(404).send('hero not found')
    } else {
      heroes.splice(index, 1)
    }
    const tanks = heroes.filter(element => element.role === "Tank")
    const support = heroes.filter(element => element.role === "Support")
    const damage = heroes.filter(element => element.role === "Damage")
    res.status(200).send({ tanks, support, damage, heroes })
  }

}