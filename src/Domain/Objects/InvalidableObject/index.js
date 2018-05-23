const Joi = require('joi')

function getErrors (SCHEMA) {
  const { error } = Joi.validate(this, SCHEMA, {
    allowUnknown: true
  })

  if (!error) return []

  return error.details
}

function isInvalid () {
  return this.errors.length > 0
}

function InvalidableObject (object, SCHEMA) {
  Object.defineProperty(object, 'errors', { get: getErrors.bind(object, SCHEMA) })
  Object.defineProperty(object, 'isInvalid', { get: isInvalid.bind(object) })
}

module.exports = InvalidableObject
