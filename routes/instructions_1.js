const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
    res.render('instructions_1')
})

module.exports = router