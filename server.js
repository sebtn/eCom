const express = require('express')
const morgan = require('morgan')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const User = require('./app/models/User.js')
// const router = require('./router')
// app.use(bodyParser.urlencoded( {extended:true} ))
app.use(morgan('combined'))
app.use(bodyParser.urlencoded( {extended:true} ))
app.use(bodyParser.json())

// Error handling middleware
/*app.use(function(err, req, res, next){
  res.status(422).send({error: err.message})
})*/

mongoose.connect('mongodb://localhost:eCom/eCom', function(err){
  if (err) { console.log(err) } 
  else     { console.log('Connected to Db') }
})

/*--------*/
/* Routes */
/*--------*/
// router(app)
app.post('/create-user', function(req, res, next) {
  var user = new User()
  user.profile.name = req.body.name
  user.password = req.body.password
  user.email = req.body.email

  user.save(function(err) { 
    if(err) return next(err)
      res.json('Created user with Succes')
  })
})

/*------------------------*/
app.use(express.static('public')) // react html entry
app.listen(3000, serverExpressFn = () => {
	console.log('Express is now running your //localhost:3000')
})