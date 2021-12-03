const express = require('express')
const app = express()
const port = process.env.PORT || 3000

const home_router = require('./routes/home')
app.use('/', home_router)

const instructions_1 = require('./routes/instructions_1')
app.use('/instructions_1', instructions_1)

const instructions_2 = require('./routes/instructions_2')
app.use('/instructions_2', instructions_2)

const instructions_3 = require('./routes/instructions_3')
app.use('/instructions_3', instructions_3)

const player_setup = require('./routes/player_setup')
app.use('/player_setup', player_setup)

const path = require('path')
app.use(express.static('public'))
// app.set('views', path.join(__dirname, '/views'))
app.set('view engine', 'pug')

app.listen(port, () => {
    console.log("Server Started")
})