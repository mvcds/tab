const React = require('react')
const PropTypes = require('prop-types')
const bem = require('bem-classname')

const NumberAsText = require('Atoms/NumberAsText')
const Modal = require('Molecules/Modal')

const ItemModal = require('Organisms/ItemModal')

require('./itemsTable.styl')

const baseClass = bem.bind(null, 'items-table')

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

function ItemsTable (props) {
  const { items, isModalOpen, onOpenModal, total } = props

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
              <NumberAsText value={total} />
            </th>
          </tr>
        </tfoot>
      </table>
      {isModalOpen && <ItemModal {...props} />}
    </div>
  )
}

ItemsTable.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  total: PropTypes.number.isRequired,
  isModalOpen: PropTypes.bool.isRequired,
  onOpenModal: PropTypes.func.isRequired,
  onCloseModal: PropTypes.func.isRequired
}

module.exports = ItemsTable
