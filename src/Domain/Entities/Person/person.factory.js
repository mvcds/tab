const { Factory } = require('rosie')
const { name, date } = require('faker')

const Person = require('./index')

const factory = new Factory()
  .attr('name', name.findName)
  .attr('createdAt', date.recent)

function build (data) {
  const fixture = factory.build(data)

  return new Person(fixture)
}

function ListOfPeople (quantity) {
  return factory.buildList(quantity).map(build)
}

function SinglePerson (data) {
  return build(data)
}

module.exports = {
  ListOfPeople,
  SinglePerson
}
