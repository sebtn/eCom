const express = require('express')
const morgan = require('morgan')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const User = require('./app/models/User.js')
app.use(bodyParser.urlencoded( {extended:true} ))
app.use(bodyParser.json())

// Error handling middleware
/*app.use(function(err, req, res, next){
  res.status(422).send({error: err.message})
})*/

// mongoose.connect('mongodb://localhost:eCom/eCom')

app.use(express.static('public')) // react html entry
app.listen(3000, serverExpressFn = () => {
	console.log('Express is now running your //localhost:3000')
})