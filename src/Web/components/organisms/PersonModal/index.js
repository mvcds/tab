const React = require('react')
const PropTypes = require('prop-types')
const bem = require('bem-classname')

const Modal = require('Molecules/Modal')

function PersonModalFooter ({ onCloseModal, onAddPerson, newPerson }) {
  return (
    <React.Fragment>
      <button onClick={onCloseModal}>Close</button>
      <button disabled={newPerson.isInvalid} onClick={onAddPerson}>Add</button>
    </React.Fragment>
  )
}

class PersonModal extends React.Component {
  render () {
    return (
      <Modal {...this.props} title="New Person" Footer={PersonModalFooter}>
        <input
          placeholder="Name"
          ref="name"
          value={this.props.newPerson.name}
          onChange={this.props.onChangePersonName}
          autoFocus
        />
      </Modal>
    )
  }
}

PersonModal.propTypes = {
  newPerson: PropTypes.object.isRequired,
  onCloseModal: PropTypes.func.isRequired,
  onAddPerson: PropTypes.func.isRequired,
  onChangePersonName: PropTypes.func.isRequired
}


module.exports = PersonModal
