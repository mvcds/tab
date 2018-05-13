const Joi = require('joi')

const SCHEMA = require('./consumed-item.joi')

function getSubTotal () {
  return this.units * this.price
}

function ConsumedItem (data) {
  Object.assign(this, Joi.attempt(data, SCHEMA))

  Object.defineProperty(this, 'subTotal', { get: getSubTotal.bind(this) })
}

module.exports = ConsumedItem
