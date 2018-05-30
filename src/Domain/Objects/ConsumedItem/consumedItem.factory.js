const { Factory } = require('rosie')
const { commerce, random, date } = require('faker')

const ConsumedItem = require('./index')

const factory = new Factory()
  .attr('name', commerce.productName)
  .attr('units', () => random.number({ min: 1, max: 10 }))
  .attr('price', () => random.number({ min: 5, max: 80 }) / random.number({ min: 1, max: 10 }))
  .attr('createdAt', date.recent)

function build (data) {
  const fixture = factory.build(data)

  return new ConsumedItem(fixture)
}

function ListOfItems (quantity) {
  return factory.buildList(quantity).map(build)
}

function SingleItem (data) {
  return build(data)
}

module.exports = {
  ListOfItems,
  SingleItem
}
