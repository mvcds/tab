const Joi = require('joi')

const SCHEMA = {
  'items': Joi.array().items(Joi.object()).required().default([]),
  'people': Joi.array().items(Joi.object()).required().default([]),
}

module.exports = SCHEMA