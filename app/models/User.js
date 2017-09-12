// import mongoose from 'mongoose'
var mongoose = require('mongoose')
var bycrypt = require('bcrypt-nodejs')
var Schema = mongoose.Schema

var UserSchema = new Schema({
  email: { type: String, unique: true, lowercase: true },
  password: String,
  profile: {
    name: { type: String, default: '' },
    picture: { type: String, default: '' }
  },
  address: String,
  history: [{
    date: Date,
    paid: { type: Number, default: 0 }
  }]
})

UserSchema.pre('save', function(next) {
  var user = this
  if(!user.isModified('password')) return next()
  bycrypt.genSalt(10, function(err, salt) {
    if (err) return next(err) 
    bycrypt.hash(user.password, salt, null, function(err, hash) {
      if (err) return next(err)
      user.password = hash
      next()
    })
  })
}) 

UserSchema.methods.comparePassword = function (candidatePassword, cb) {
  return bycrypt.compare(candidatePassword, this.password)
}

const modelClass = mongoose.model('User', UserSchema)

module.exports = modelClass