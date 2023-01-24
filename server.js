const express = require('express')
const app = express()
app.set('view engine', 'pug')
app.use(express.static('./'))
app.get('/', function (req, res) {
    res.render(__dirname + '/index')
  })
app.listen(3000)