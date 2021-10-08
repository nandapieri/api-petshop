const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const config = require('config')
const NaoEncontrado = require('./erros/NaoEncontrado')
const CampoInvalido = require('./erros/CampoInvalido')
const DadosNaoFornecidos = require('./erros/DadosNaoFornecidos')

app.use(bodyParser.json())

const roteador = require('./rotas/fornecedores')
app.use('/api/fornecedores', roteador)

app.use((e, req, res, next) => {
    let status = 500
    if(e instanceof NaoEncontrado) {
        status = 404
     }
     if(e instanceof CampoInvalido || e instanceof DadosNaoFornecidos) {
        status = 400
     }
     res.status(status).send(
         JSON.stringify({
             mensagem: e.message,
             id: e.idErro
         })
    )})

app.listen(config.get('api.porta'), () => console.log('Api funcionando'))