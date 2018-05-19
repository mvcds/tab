const { Factory } = require('rosie')
const { name } = require('faker')

const Person = require('./index')

const factory = new Factory()
  .attr('name', name.findName)

function build (data) {
  const fixture = factory.build(data)

  return new Person(fixture)
}

function ListOfPeople (quantity) {
  return factory.buildList(quantity).map(build)
}

function SinglePerson () {
  return build(factory.build())
}

module.exports = {
  ListOfPeople,
  SinglePerson
}
