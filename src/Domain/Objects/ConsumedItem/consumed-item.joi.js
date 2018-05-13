const Joi = require('joi')

const SCHEMA = {
  'name': Joi.string().required(),
  'units': Joi.number().integer().required(),
  'price': Joi.number().required(),
}

module.exports = SCHEMA
