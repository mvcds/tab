const React = require('react')
const PropTypes = require('prop-types')
const bem = require('bem-classname')

const NumberAsText = require('Atoms/NumberAsText')
const Modal = require('Molecules/Modal')

require('./tabTable.styl')

const baseClass = bem.bind(null, 'tab-table')

function ItemEntry ({ name, units, price, subTotal }) {
  return (
    <tr key={name}>
      <td>{name}</td>
      <td>
        <NumberAsText value={units} />
      </td>
      <td>
        <NumberAsText value={price} />
      </td>
      <th>
        <NumberAsText value={subTotal} />
      </th>
    </tr>
  )
}

function ItemModalFooter ({ onCloseModal, onAddItem, newConsumedItem }) {
  return (
    <React.Fragment>
      <button onClick={onCloseModal}>Close</button>
      <button disabled={newConsumedItem.isInvalid} onClick={onAddItem}>Add</button>
    </React.Fragment>
  )
}

function ItemModal (props) {
  const {
    onCloseModal,
    onAddItem,
    newConsumedItem,
    onChangeItemName,
    onChangeItemUnits,
    onChangeItemPrice
  } = props

  return [
    <div key="modal-background" className={baseClass('modal-background')} />,
    <aside key="modal-content" className={baseClass('modal-content')}>
      <Modal {...props} title="New Item" ModalFooter={ItemModalFooter}>
        <input
          placeholder="Name"
          value={newConsumedItem.name}
          onChange={onChangeItemName}
        />
        <input
          type="number"
          placeholder="Units"
          min="0"
          step="1"
          value={newConsumedItem.units}
          onChange={onChangeItemUnits}
        />
        <input
          type="number"
          placeholder="Price"
          min="0"
          step="0.01"
          value={newConsumedItem.price}
          onChange={onChangeItemPrice}
        />
      </Modal>
    </aside>
  ]
}

function sumItems (total, { subTotal }) {
  return total + subTotal
}

function TabTable (props) {
  const { items, isModalOpen, onOpenModal } = props

  return (
    <div className={baseClass()}>
      <table className={baseClass('table')}>
        <thead>
          <tr>
            <th>Item</th>
            <th>Units</th>
            <th>Price</th>
            <th>Sub</th>
          </tr>
        </thead>
        <tbody>
          {items.map(ItemEntry)}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="4" className="guterless">
              <button onClick={onOpenModal} className={baseClass('button')}>
                Add Item
              </button>
            </td>
          </tr>
          <tr>
            <td>Total</td>
            <th colSpan="3">
              <NumberAsText value={items.reduce(sumItems, 0)} />
            </th>
          </tr>
        </tfoot>
      </table>
      {isModalOpen && <ItemModal {...props} />}
    </div>
  )
}

TabTable.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  isModalOpen: PropTypes.bool.isRequired,
  newConsumedItem: PropTypes.object.isRequired,
  onOpenModal: PropTypes.func.isRequired,
  onCloseModal: PropTypes.func.isRequired,
  onAddItem: PropTypes.func.isRequired,
  onChangeItemName: PropTypes.func.isRequired,
  onChangeItemUnits: PropTypes.func.isRequired,
  onChangeItemPrice: PropTypes.func.isRequired
}

TabTable.defaultProps = {
  items: []
}

module.exports = TabTable
