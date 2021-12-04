const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
    res.render('player_setup', {
        data: {},
        errors: {}
    })
})

module.exports = router