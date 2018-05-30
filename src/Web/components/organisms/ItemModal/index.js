const React = require('react')
const PropTypes = require('prop-types')

const NumberAsText = require('Atoms/NumberAsText')
const Modal = require('Molecules/Modal')

function AddItem ({ onCloseModal, onAddItem, item }) {
  return (
    <React.Fragment>
      <span>
        Subtotal: <NumberAsText value={item.subTotal} />
      </span>
      &nbsp;
      <button onClick={onCloseModal}>Close</button>
      <button disabled={item.isInvalid} onClick={onAddItem}>Add</button>
    </React.Fragment>
  )
}

function EditItem ({ onCloseModal, onEditItem, item }) {
  return (
    <React.Fragment>
      <span>
        Subtotal: <NumberAsText value={item.subTotal} />
      </span>
      &nbsp;
      <button onClick={onCloseModal}>Cancel</button>
      <button disabled={item.isInvalid} onClick={onEditItem}>Save</button>
    </React.Fragment>
  )
}

function addItem ({ onAddItem }) {
  onAddItem()
  this.refs.name.focus()
}

function editItem ({ onEditItem, onCloseModal }) {
  onEditItem()
  onCloseModal()
}

class ItemModal extends React.Component {
  constructor (props) {
    super(props)

    this.addItem = addItem.bind(this, props)
    this.editItem = editItem.bind(this, props)
  }

  render () {
    if (this.props.isNew) {
      return (
        <Modal
          {...this.props}
          title='New Item'
          Footer={AddItem}
          onAddItem={this.addItem}
        >
          <input
            placeholder='Name'
            ref='name'
            value={this.props.item.name}
            onChange={this.props.onChangeName}
            autoFocus
          />
          <input
            type='number'
            placeholder='Units'
            min='0'
            step='1'
            value={this.props.item.units}
            onChange={this.props.onChangeUnits}
          />
          <input
            type='number'
            placeholder='Price'
            min='0'
            step='0.01'
            value={this.props.item.price}
            onChange={this.props.onChangePrice}
          />
        </Modal>
      )
    }

    return (
      <Modal
        {...this.props}
        title='Edit Item'
        Footer={EditItem}
        onAddItem={this.editItem}
      >
        <input
          placeholder='Name'
          ref='name'
          value={this.props.item.name}
          onChange={this.props.onChangeName}
          autoFocus
        />
        <input
          type='number'
          placeholder='Units'
          min='0'
          step='1'
          value={this.props.item.units}
          onChange={this.props.onChangeUnits}
        />
        <input
          type='number'
          placeholder='Price'
          min='0'
          step='0.01'
          value={this.props.item.price}
          onChange={this.props.onChangePrice}
        />
      </Modal>
    )
  }
}

ItemModal.propTypes = {
  item: PropTypes.object.isRequired,
  isNew: PropTypes.bool.isRequired,
  onCloseModal: PropTypes.func.isRequired,
  onAddItem: PropTypes.func.isRequired,
  onEditItem: PropTypes.func.isRequired,
  onChangeName: PropTypes.func.isRequired,
  onChangeUnits: PropTypes.func.isRequired,
  onChangePrice: PropTypes.func.isRequired
}

module.exports = ItemModal
