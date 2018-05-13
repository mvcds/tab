const Joi = require('joi')

const SCHEMA = require('./tab.joi')

function Tab (data) {
  Object.assign(this, Joi.attempt(data, SCHEMA))
}

module.exports = Tab
