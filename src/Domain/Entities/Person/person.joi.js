const Joi = require('joi')

const SCHEMA = {
  'name': Joi.string().required().min(3).default(''),
}

module.exports = SCHEMA