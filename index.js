const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT || 3000
const path = require('path')
const date = require('./public/javascript/date.js')
const player = require('./public/javascript/player.js')

app.use(express.static('public'))
app.set('view engine', 'pug')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const home_router = require('./routes/home')
const instructions_1 = require('./routes/instructions_1')
const instructions_2 = require('./routes/instructions_2')
const instructions_3 = require('./routes/instructions_3')
const player_setup = require('./routes/player_setup')
const player_status = require('./routes/player_status')

app.use('/', home_router)
app.use('/instructions_1', instructions_1)
app.use('/instructions_2', instructions_2)
app.use('/instructions_3', instructions_3)
app.use('/player_setup', player_setup)
app.use('/player_status', player_status)

let the_player = player.player

app.post('/player_setup', (req, res) => {
    console.log('name' + JSON.stringify(req.body))
    let player_input = req.body 
    console.log(player_input)

    console.log(`Before load_player_from_object: ${JSON.stringify(the_player)}`)
    player.load_player_from_object(player_input)
    console.log(`After load_player_from_object: ${JSON.stringify(the_player)}`)

    res.render('player_status', { the_player, date })
})

app.listen(port, () => {
    console.log("Server Started")
})