// import mongoose from 'mongoose'
const mongoose = require('mongoose')
const bycrypt = require('bcrypt-nodejs')
const Schema = mongoose.Schema

const userSchema = new Schema({
  name: String,
  email: {type: String, unique: true, lowercase: true},
  password: String,
})

userSchema.pre('save', function(next) {
  const user = this
  bycrypt.genSalt(10, function(err, salt) {
    if(err) { return next(err) }
    bycrypt.hash(user.password, salt, null, function(err, hash) {
      if(err) { return next(err) }
      user.password = hash
      next()        
    })      
  })
})

userSchema.methods.comparePassword = function(candidatePassword, cb) {
  bycrypt.compare(candidatePassword, this.password, function(err, isMatch){
    if(err) { return cb(err) }
    cb(null, isMatch)
  })
}

const modelClass = mongoose.model('User', userSchema)

module.exports = modelClass