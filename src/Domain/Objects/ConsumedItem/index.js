const GetDefaults = require('Services/GetDefaults')
const InvalidableObject = require('Objects/InvalidableObject')

const SCHEMA = require('./consumed-item.joi')

const DEFAULTS = GetDefaults(SCHEMA)

function clone (change) {
  const cloned = Object.assign({}, this, change)

  return new ConsumedItem(cloned)
}

function getSubTotal () {
  return this.units * this.price
}

function ConsumedItem (data) {
  Object.assign(this, DEFAULTS, data, new InvalidableObject(this, SCHEMA))

  Object.defineProperty(this, 'subTotal', { get: getSubTotal.bind(this) })

  this.clone = clone.bind(this)
}

module.exports = ConsumedItem
