// import mongoose from 'mongoose'
const mongoose = require('mongoose')
const bycrypt = require('bcrypt-nodejs')
const Schema = mongoose.Schema

const UserSchema = new Schema({
  email: { type: Schema.Types.String, unique: true, lowercase: true },
  password: Schema.Types.String,
  profile: {
    name: { type: Schema.Types.String, unique: true, default: '' },
    picture: { type: Schema.Types.String, default: '' }
  },
  address: Schema.Types.String,
  history: [{
    date: Date,
    paid: { type: Number, default: 0 }
  }]
})

UserSchema.pre('save', function (next) {
  const user = this
  if (!user.isModified('password')) return next()
  bycrypt.genSalt(10, function (err, salt) {
    if (err) return next(err)
    bycrypt.hash(user.password, salt, null, function (err, hash) {
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