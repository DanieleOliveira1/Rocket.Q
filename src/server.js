//iniciar o servidor
const express = require('express');
const server = express();
const route = require('./route')
const path = require('path')


//view engine é o ejs
server.set('view engine', 'ejs')

//utilizando a pasta public
server.use(express.static("public"))

//path pega o caminho da pasta do projeto
server.set('views', path.join(__dirname, 'views'))


server.use(express.urlencoded({extended: true}))

//usando o arquivo route
server.use(route)

//porta do servidor
//arrow function: rodar alguma funcionalidade
server.listen(3000, () => console.log("rodando"))