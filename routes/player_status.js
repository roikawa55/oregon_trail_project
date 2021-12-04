const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
    res.render('player_status')
})

module.exports = router