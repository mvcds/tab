const React = require('react')
const PropTypes = require('prop-types')

const Modal = require('Molecules/Modal')

function AddPerson ({ onCloseModal, onAddPerson, person }) {
  return (
    <React.Fragment>
      <button onClick={onCloseModal}>Close</button>
      <button disabled={person.isInvalid} onClick={onAddPerson}>Add</button>
    </React.Fragment>
  )
}

function EditPerson ({ onCloseModal, onEditPerson, person }) {
  return (
    <React.Fragment>
      <button onClick={onCloseModal}>Cancel</button>
      <button disabled={person.isInvalid} onClick={onEditPerson}>Save</button>
    </React.Fragment>
  )
}

function addPerson ({ onAddPerson }) {
  onAddPerson()
  this.refs.name.focus()
}

function editPerson ({ onEditPerson, onCloseModal }) {
  onEditPerson()
  onCloseModal()
}

class PersonModal extends React.Component {
  constructor (props) {
    super(props)

    this.addPerson = addPerson.bind(this, props)
    this.editPerson = editPerson.bind(this, props)
  }

  render () {
    if (this.props.isNew) {
      return (
        <Modal
          {...this.props}
          title='New Person'
          Footer={AddPerson}
          onAddPerson={this.addPerson}
        >
          <input
            placeholder='Name'
            ref='name'
            value={this.props.person.name}
            onChange={this.props.onChangeName}
            autoFocus
          />
        </Modal>
      )
    }

    return (
      <Modal
        {...this.props}
        title='Edit Person'
        Footer={EditPerson}
        onEditPerson={this.editPerson}
      >
        <input
          placeholder='Name'
          value={this.props.person.name}
          onChange={this.props.onChangeName}
          autoFocus
        />
      </Modal>
    )
  }
}

PersonModal.propTypes = {
  person: PropTypes.object.isRequired,
  isNew: PropTypes.bool.isRequired,
  onAddPerson: PropTypes.func.isRequired,
  onEditPerson: PropTypes.func.isRequired,
  onChangeName: PropTypes.func.isRequired
}

module.exports = PersonModal
