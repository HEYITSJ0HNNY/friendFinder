var express = require('express')
var app = express()
var path = require('path')


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'public/home.html'))
})
app.get('/survey', function (req, res){
  res.sendFile(path.join(__dirname, 'public/survey.html'))
})


app.listen(3000, function(){
  console.log("i am listening...")
})
