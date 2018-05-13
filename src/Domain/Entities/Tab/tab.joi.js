const Joi = require('joi')

const SCHEMA = {
  'items': Joi.array().items(Joi.object()).required(),
}

module.exports = SCHEMA