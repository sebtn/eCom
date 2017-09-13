const express = require('express')
const morgan = require('morgan')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const User = require('./app/models/User.js')

// const router = require('./router')


app.use(morgan('dev'))
app.use(bodyParser.json()) // jsondata format
app.use(bodyParser.urlencoded({ extended: true }))

// Error handling middleware
/*app.use(function(err, req, res, next){
  res.status(422).send({error: err.message})
})*/
const uri = 'mongodb://localhost/eCom'

const options = {
  useMongoClient: true,
}

mongoose.Promise = global.Promise
mongoose.connect(uri, options, function (err) {
  if (err) { console.log(err) }
  else { console.log('Connected to Db') }
})

/*--------*/
/* Routes */
/*--------*/
// router(app)
app.post('/create-user', function (req, res, next) {
  const user = new User()
  user.profile.name = req.body.name
  user.password = req.body.password
  user.email = req.body.email

  user.save(function (err) {
    if (err) return next(err)
    res.json('Created user with Success')
  })

})

/*------------------------*/
// react html entry
app.use(express.static('public')) 
app.listen(3000, serverExpressFn = () => {
  console.log('Express is now running your //localhost:3000')
})