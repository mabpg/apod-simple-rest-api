var express = require('express')
var http = require('http')
var cors = require('cors');
var app = express()

app.use(cors()); //para setear Access-Control-Allow-Origin: *

var format = require('date-format');

app.get('/', (req, res) => {
  res.status(200).send("Welcome to API REST")
})

app.get('/randomdate', (req, res) => {
    var startDate = new Date(2000,0,1);
    var endDate = new Date();
    var respuesta = {
      'rndDate': format('yyyy-MM-dd', new Date(startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime())))
    };
    res.status(200).json(respuesta);
})

http.createServer(app).listen(8001, () => {
  console.log('Server started at http://localhost:8001');
});