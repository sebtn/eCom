import mongoose from 'mongoose'
const Schema = mongoose.Schema

const userSchema = new Schema({
  name: string,
  email: string,
  password: string,
  confirm: string,
})

userClass = mongoose.model('User', userSchema)

export default userClass