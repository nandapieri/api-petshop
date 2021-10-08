const roteador = require('express').Router()

roteador.use('/', (req, res) => {
    res.send('OK')
})

module.exports = roteador