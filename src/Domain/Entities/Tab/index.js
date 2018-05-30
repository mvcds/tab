const GetDefaults = require('Services/GetDefaults')

const SCHEMA = require('./tab.joi')

const DEFAULTS = GetDefaults(SCHEMA)

function clone (change) {
  const cloned = Object.assign({}, this, change)

  return new Tab(cloned)
}

function add (list, item) {
  this[list].push(item)
}

function addSubtotal (total, { subTotal }) {
  return total + subTotal
}

function getTotal () {
  return this.items.reduce(addSubtotal, 0)
}

function isSame (item) {
  return item.isSame(this)
}

function edit (list, item) {
  const index = this[list].findIndex(isSame, item)

  this[list][index] = item
}

function Tab (data) {
  Object.assign(this, DEFAULTS, data)

  Object.defineProperty(this, 'total', { get: getTotal.bind(this) })

  this.clone = clone.bind(this)
  this.addItem = add.bind(this, 'items')
  this.editItem = edit.bind(this, 'items')
  this.addPerson = add.bind(this, 'people')
  this.editPerson = edit.bind(this, 'people')
}

module.exports = Tab
