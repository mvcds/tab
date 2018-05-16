const Joi = require('joi')

const SCHEMA = require('./consumed-item.joi')

const DEFAULTS = Object.entries(SCHEMA)
  .reduce(createDefault, {})

function createDefault (acc, [ key, value ]) {
  if (value._flags.default === undefined) return acc

  return Object.assign({}, acc, {
    [ key ]: value._flags.default
  })
}

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
