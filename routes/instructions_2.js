const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
    res.render('instructions_2')
})

module.exports = router