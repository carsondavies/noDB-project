const express = require('express')
const app = express()
const heroCtrl = require('./controllers/heroController')

const SERVER_PORT = 4000
app.use(express.json())

app.get('/api/heroes', heroCtrl.getAllHeroes)
app.get('/api/heroes/:hero_id', heroCtrl.getHeroById)
app.post('/api/heroes', heroCtrl.createNewHero)
app.put('/api/heroes/:hero_id', heroCtrl.editHero)
app.delete('/api/heroes/:hero_id', heroCtrl.deleteHero)

app.listen(SERVER_PORT, () => console.log(`listening on port ${SERVER_PORT}`))