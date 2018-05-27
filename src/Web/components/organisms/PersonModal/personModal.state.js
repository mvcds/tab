const React = require('react')

const Person = require('Entities/Person')

const PersonModal = require('./index')

function onAddPerson () {
  const { person } = this.state

  const clone = person.clone({ createdAt: Date.now() })

  this.props.onAddPerson(clone)

  this.setState({
    person: new Person()
  })
}

function changePerson (key, { target }) {
  const { person } = this.state
  const change = { [ key ]: target.value }

  const clone = person.clone(change)

  this.setState({
    person: clone
  })
}

class PersonModalState extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      person: new Person()
    }

    this.methods = {
      onAddPerson: onAddPerson.bind(this),
      onChangeName: changePerson.bind(this, 'name')
    }
  }

  render () {
    return (
      <PersonModal
        {...this.props}
        {...this.state}
        {...this.methods}
        isValid={this.state.person.isValid}
      />
    )
  }
}

module.exports = PersonModalState