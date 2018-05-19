const { Factory } = require('rosie')

const { ListOfItems } = require('Objects/ConsumedItem/consumedItem.factory')
const { ListOfPeople } = require('Entities/Person/person.factory')

const Tab = require('./index')

const factory = new Factory()
  .attr('items', [])
  .attr('people', [])

function build (data) {
  const fixture = factory.build(data)

  return new Tab(fixture)
}

function FilledWithRandomItems (quantity) {
  const items = ListOfItems(quantity)

  return build({ items })
}

function FilledWithRandomPeople (quantity) {
  const people = ListOfPeople(quantity)

  return build({ people })
}

module.exports = {
  FilledWithRandomItems,
  FilledWithRandomPeople
}
