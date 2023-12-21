/*var dt = require('./time');

var mydt = dt.myDate();
console.log(mydt);*/
const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)