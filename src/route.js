const express = require('express')
const route = express.Router()
const QuestionControler = require("./controllers/QuestionControler")
const RoomControler = require("./controllers/RoomController")
//req- requisição da rota
//res - response, resposta

route.get('/', (req, res) => res.render('index', {page: 'enter-room'}))
route.get('/room/:room', (req,res) => res.render("room"))
route.get('/create-pass', (req,res) => res.render("index", {page: 'create-pass'}))

//formato que o formulário de dentro da modal tem que passar a informação
route.post('/question/:room/:question/:action', QuestionControler.index)
route.post('/create-room', RoomControler.create)

module.exports = route

