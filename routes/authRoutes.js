const { json } = require('body-parser');
const { Router } = require('express')
const User = require('../models/User')
const jwt = require('jsonwebtoken')
const keys = require('../config/keys')
const router = Router()

const MONGO_DUPLICATE_ERR_NUM = 11000
const MAX_AGE = 24 * 60 * 60

const handleErrors = (err) => {
  let errors = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  }

  // //incorrect email
  // if (err.message === 'incorrect email') {
  //   errors.email = 'Account not exist'
  //   return errors;
  // }

  // //incorrect password
  // if (err.message === 'incorrect password') {
  //   errors.password = 'Password is wrong';
  //   return errors;
  // }


  //duplicate error
  if (err.code === MONGO_DUPLICATE_ERR_NUM) {
    errors.email = 'Email already exist';
    return errors;
  }
  //validation errors
  if (err.message.includes('user validation failed')) {
    // Object.values(err.errors).forEach(({ properties }) => {
    //   errors[properties.path] = properties.message;
    // })
    throw Error("validation feild");
  }
  return errors;
}

const createToken = (id) => {
  return jwt.sign({ id }, keys.APP_SECRET, { expiresIn: MAX_AGE });
}

router.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.login(email, password);
    const token = createToken(user._id);
    res.cookie('jwt', token, { httpOnly: true, maxAge: MAX_AGE * 1000 });//,secure: true});
    res.status(200).json({ user: user._id });
  } catch (err) {
    //let errors = handleErrors(err);
    res.status(400).json({ err: err.message });
  }
})

router.post('/api/signup', async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  try {
    const user = await User.create({ firstName, lastName, email, password })
    const token = createToken(user._id);
    res.cookie('jwt', token, { httpOnly: true, maxAge: MAX_AGE * 1000 });//,secure: true});
    res.status(201).json({ user: user._id });
  } catch (err) {
    let errors = handleErrors(err);
    res.status(400).json({ errors });
  }
})


module.exports = router