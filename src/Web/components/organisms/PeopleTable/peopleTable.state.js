const React = require('react')

const Person = require('Entities/Person')

const PeopleTable = require('./index')

function onChangeModal (isModalOpen) {
  this.setState({ isModalOpen })
}

function onAddPerson (item) {
  const { newPerson } = this.state

  this.props.onAddPerson(newPerson)

  this.setState({
    newPerson: new Person()
  })
}

function changeNewPerson (key, { target }) {
  const { newPerson } = this.state
  const change = { [ key ]: target.value }

  const clone = newPerson.clone(change)

  this.setState({
    newPerson: clone,
    isValid: clone.isValid
  })
}

class PeopleTableState extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      isModalOpen: false,
      newPerson: new Person()
    }

    this.methods = {
      onOpenModal: onChangeModal.bind(this, true),
      onCloseModal: onChangeModal.bind(this, false),
      onAddPerson: onAddPerson.bind(this),
      onChangePersonName: changeNewPerson.bind(this, 'name')
    }
  }

  render () {
    return (
      <PeopleTable
        {...this.props}
        {...this.state}
        {...this.methods}
      />
    )
  }
}

module.exports = PeopleTableState
