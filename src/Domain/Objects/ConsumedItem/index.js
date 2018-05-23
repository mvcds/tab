const Joi = require('joi')

const GetDefaults = require('Services/GetDefaults')

const SCHEMA = require('./consumed-item.joi')

const DEFAULTS = GetDefaults(SCHEMA)

function clone (change) {
  const cloned = Object.assign({}, this, change)

  return new ConsumedItem(cloned)
}

function getSubTotal () {
  return this.units * this.price
}

function getErrors () {
  const { error } = Joi.validate(this, SCHEMA, {
    allowUnknown: true
  })

  if (!error) return []

  return error.details
}

function isInvalid () {
  return this.errors.length > 0
}

function ConsumedItem (data = DEFAULTS) {
  Object.assign(this, data)

  Object.defineProperty(this, 'subTotal', { get: getSubTotal.bind(this) })
  Object.defineProperty(this, 'errors', { get: getErrors.bind(this) })
  Object.defineProperty(this, 'isInvalid', { get: isInvalid.bind(this) })

  this.clone = clone.bind(this)
}

module.exports = ConsumedItem
