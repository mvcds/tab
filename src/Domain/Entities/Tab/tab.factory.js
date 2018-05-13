const { Factory } = require('rosie')

const { ListOfItems } = require('Objects/ConsumedItem/consumedItem.factory')

const Tab = require('./index')

const factory = new Factory()
  .attr('items', [])

function build (data) {
  const fixture = factory.build(data)

  return new Tab(fixture)
}

function FilledWithRandomItems (quantity) {
  const items = ListOfItems(quantity)

  return build({ items })
}

module.exports = {
  FilledWithRandomItems
}
