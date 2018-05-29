const Joi = require('joi')

const SCHEMA = {
  'name': Joi.string().required().min(3).default(''),
  'createdAt': Joi.date().required().default(Date.now())
}

module.exports = SCHEMA
