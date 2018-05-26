const React = require('react')
const PropTypes = require('prop-types')
const bem = require('bem-classname')

const Modal = require('Molecules/Modal')

function ItemModalFooter ({ onCloseModal, onAddItem, item }) {
  return (
    <React.Fragment>
      <button onClick={onCloseModal}>Close</button>
      <button disabled={item.isInvalid} onClick={onAddItem}>Add</button>
    </React.Fragment>
  )
}

function addItem ({ onAddItem }) {
  onAddItem()
  this.refs.name.focus()
}

class ItemModal extends React.Component {
  constructor (props) {
    super(props)

    this.addItem = addItem.bind(this, props)
  }

  render () {
    return (
      <Modal {...this.props} title="New Item" Footer={ItemModalFooter} onAddItem={this.addItem}>
        <input
          placeholder="Name"
          ref="name"
          value={this.props.item.name}
          onChange={this.props.onChangeName}
          autoFocus
        />
        <input
          type="number"
          placeholder="Units"
          min="0"
          step="1"
          value={this.props.item.units}
          onChange={this.props.onChangeUnits}
        />
        <input
          type="number"
          placeholder="Price"
          min="0"
          step="0.01"
          value={this.props.item.price}
          onChange={this.props.onChangePrice}
        />
      </Modal>
    )
  }
}

ItemModal.propTypes = {
  item: PropTypes.object.isRequired,
  onCloseModal: PropTypes.func.isRequired,
  onAddItem: PropTypes.func.isRequired,
  onChangeName: PropTypes.func.isRequired,
  onChangeUnits: PropTypes.func.isRequired,
  onChangePrice: PropTypes.func.isRequired
}


module.exports = ItemModal
