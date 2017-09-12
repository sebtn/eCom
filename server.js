var express = require('express')
var morgan = require('morgan')
var app = express()
var bodyParser = require('body-parser')
var mongoose = require('mongoose')

var User = require('./app/models/User.js')
// const router = require('./router')
// app.use(bodyParser.urlencoded( {extended:true} ))
app.use(morgan('dev'))
app.use(bodyParser.json()) // jsondata format
app.use(bodyParser.urlencoded({ extended: true }))

// Error handling middleware
/*app.use(function(err, req, res, next){
  res.status(422).send({error: err.message})
})*/
var uri = 'mongodb://localhost:eCom/eCom'
mongoose.connect(uri, function (err) {
  if (err) { console.log(err) }
  else { console.log('Connected to Db') }
})
var options = {
  useMongoClient: true,
};


/*--------*/
/* Routes */
/*--------*/
// router(app)
app.post('/create-user', function (req, res, next) {
  var user = new User()
  user.profile.name = req.body.name
  user.password = req.body.password
  user.email = req.body.email

  user.save(function (err) {
    if (err) return next(err)
    res.json('Created user with Success')
  })

})

/*------------------------*/
app.use(express.static('public')) // react html entry
app.listen(3000, serverExpressFn = () => {
  console.log('Express is now running your //localhost:3000')
})