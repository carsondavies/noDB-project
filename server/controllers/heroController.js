const heroes = require('../data.json')

let heroId = heroes[heroes.length - 1].id + 1

module.exports = {
  getAllHeroes: (req, res) => {
    let tanks = heroes.filter(element => element.role === "Tank")
    let support = heroes.filter(element => element.role === "Support")
    let damage = heroes.filter(element => element.role === "Damage")
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
    const { name, role, description, imgURL, primary, primaryDescription, secondary, secondaryDescription, ability1, ability1Description, ability2, ability2Description, ultimate, ultimateDescription } = req.body

    const newHero = {
      id: heroId,
      name,
      role,
      description,
      imgURL,
      primary: {
        name: primary,
        description: primaryDescription
      },
      secondary: {
        name: secondary,
        description: secondaryDescription
      },
      ability1: {
        name: ability1,
        description: ability1Description
      },
      ability2: {
        name: ability2,
        description: ability2Description
      },
      ultimate: {
        name: ultimate,
        description: ultimateDescription
      },
    }

    heroes.push(newHero)

    heroId++
    // console.log(newHero)
    res.status(200).send({ heroes, newHero: newHero.id })


  },

  editHero: (req, res) => {
    const { hero_id } = req.params
    const { name, role, description, primary, primaryDescription, secondary, secondaryDescription, ability1, ability1Description, ability2, ability2Description, ultimate, ultimateDescription } = req.body
    console.log(req.body)
    const index = heroes.findIndex(element => element.id === +hero_id)
    if (index === -1) {
      return res.status(404).send('hero not found')
    }
    console.log("IT", index)
    let existingHero = heroes[index]
    let modifiedHero = {
      id: existingHero.id,
      name: name || existingHero.name,
      role: role || existingHero.role,
      description: description || existingHero.description,
      primary: {
        name: primary || existingHero.primary.name,
        description: primaryDescription || existingHero.primary.description,
      },

      secondary: {
        name: secondary || existingHero.secondary.name,
        description: secondaryDescription || existingHero.secondary.description,
      },
      ability1: {
        name: ability1 || existingHero.ability1.name,
        description: ability1Description || existingHero.ability1.description,
      },
      ability2: {
        name: ability2 || existingHero.ability2.name,
        description: ability2Description || existingHero.ability2.description,
      },
      ultimate: {
        name: ultimate || existingHero.ultimate.name,
        description: ultimateDescription || existingHero.ultimate.description
      }

    }

    heroes[index] = modifiedHero
    console.log(modifiedHero)

    return res.status(200).send({ heroes, modifiedHero: modifiedHero.id })

  },

  deleteHero: (req, res) => {
    const { hero_id } = req.params

    const index = heroes.findIndex(element => element.id === +hero_id)
    if (index === -1) {
      return res.status(404).send('hero not found')
    } else {
      let tanks = heroes.filter(element => element.role === "Tank")
      let support = heroes.filter(element => element.role === "Support")
      let damage = heroes.filter(element => element.role === "Damage")
      heroes.splice(index, 1)
      return res.status(200).send({ tanks, support, damage, heroes })
    }
  }

}