const Joi = require('joi')

const SCHEMA = {
  'name': Joi.string().required().min(3).default(''),
  'units': Joi.number().integer().required().default(1),
  'price': Joi.number().required().default(0)
}

module.exports = SCHEMA
