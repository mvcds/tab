const GetDefaults = require('Services/GetDefaults')
const InvalidableObject = require('Objects/InvalidableObject')

const SCHEMA = require('./person.joi')

const DEFAULTS = GetDefaults(SCHEMA)

function clone (change) {
  const cloned = Object.assign({}, this, change)

  return new Person(cloned)
}

function isSame (other) {
  return this.createdAt.toString() === other.createdAt.toString()
}

function Person (data) {
  Object.assign(this, DEFAULTS, data, new InvalidableObject(this, SCHEMA))

  this.clone = clone.bind(this)
  this.isSame = isSame.bind(this)
}

module.exports = Person
