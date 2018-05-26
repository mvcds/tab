const React = require('react')
const PropTypes = require('prop-types')
const bem = require('bem-classname')

const Modal = require('Molecules/Modal')

function PersonModalFooter ({ onCloseModal, onAddPerson, person }) {
  return (
    <React.Fragment>
      <button onClick={onCloseModal}>Close</button>
      <button disabled={person.isInvalid} onClick={onAddPerson}>Add</button>
    </React.Fragment>
  )
}

function addPerson ({ onAddPerson }) {
  onAddPerson()
  this.refs.name.focus()
}

class PersonModal extends React.Component {
  constructor (props) {
    super(props)

    this.addPerson = addPerson.bind(this, props)
  }

  render () {
    return (
      <Modal {...this.props} title="New Person" Footer={PersonModalFooter} onAddPerson={this.addPerson}>
        <input
          placeholder="Name"
          ref="name"
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
  onCloseModal: PropTypes.func.isRequired,
  onAddPerson: PropTypes.func.isRequired,
  onChangeName: PropTypes.func.isRequired
}


module.exports = PersonModal
