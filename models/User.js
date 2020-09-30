const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const { isEmail } = require('validator')

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, 'First Name is required'],
    lowercase: true,
  },
  lastName: {
    type: String,
    required: [true, 'Last Name is required'],
    lowercase: true,
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true,
    validate: [isEmail, 'Please enter a valid email address']
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: [8, 'password length should be at list 8 characters']
  }
})

//encrypt pass before saving in DB
userSchema.pre('save', async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
})

//static method in login user

userSchema.statics.login = async function (email, password) {
  const user = await this.findOne({ email });
  if (user) {
    const auth = await bcrypt.compare(password, user.password);
    if (auth) {
      return user;
    }
    throw Error('incorrect password');
  }
  throw Error('incorrect email');
};


const User = mongoose.model('user', userSchema);

module.exports = User;