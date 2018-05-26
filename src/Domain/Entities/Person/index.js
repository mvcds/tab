const Joi = require('joi')

const GetDefaults = require('Services/GetDefaults')
const InvalidableObject = require('Objects/InvalidableObject')

const SCHEMA = require('./person.joi')

const DEFAULTS = GetDefaults(SCHEMA)

function clone (change) {
  const cloned = Object.assign({}, this, change)

  return new Person(cloned)
}

function Person (data) {
  Object.assign(this, DEFAULTS, data, new InvalidableObject(this, SCHEMA))

  this.clone = clone.bind(this)
}

module.exports = Person
