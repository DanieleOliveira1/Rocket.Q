const express = require('express')
const QuestionControler = require("./controllers/QuestionControler")
const RoomControler = require("./controllers/RoomController")
const route = express.Router()

//req- requisição da rota
//res - response, resposta

route.get('/', (req, res) => res.render('index', {page: 'enter-room'}))
route.get('/room/:room', RoomControler.open)
route.get('/create-pass', (req,res) => res.render("index", {page: 'create-pass'}))
route.post('/enterroom', RoomControler.enter)

//formato que o formulário de dentro da modal tem que passar a informação
route.post('/question/:room/:question/:action', QuestionControler.index)
route.post('/create-room', RoomControler.create)
route.post('/question/create/:room', QuestionControler.create)

module.exports = route

