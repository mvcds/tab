const React = require('react')
const PropTypes = require('prop-types')
const bem = require('bem-classname')

require('./tabTable.styl')

const baseClass = bem.bind(null, 'tab-table')

const LANGUAGE = 'en-US'
const OPTIONS = {
  useGrouping: true,
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
}

function Currency ({ value }) {
  return value.toLocaleString(LANGUAGE, OPTIONS)
}

function ItemEntry ({ name, units, price, subTotal }) {
  return (
    <tr key={name}>
      <td>{name}</td>
      <td>{units}</td>
      <td>
        <Currency value={price} />
      </td>
      <th>
        <Currency value={subTotal} />
      </th>
    </tr>
  )
}

function ItemModal ({ onCloseModal, onAddItem }) {
  return [
    <div key="modal-background" className={baseClass('modal-background')} />,
    <aside key="modal-content" className={baseClass('modal-content')}>
      <div className={baseClass('modal')}>
        <header className={baseClass('modal-header')}>
          <span>
            New Item
          </span>
          <span onClick={onCloseModal}>
            &times;
          </span>
        </header>
        <form className={baseClass('modal-body')}>
          <input placeholder="Name" />
          <input type="number" placeholder="Units" min="0" step="0.01" />
          <input type="number" placeholder="Price" min="0" step="0.01" />
        </form>
        <footer className={baseClass('modal-footer')}>
          <button onClick={onCloseModal}>Cancel</button>
          <button onClick={onAddItem}>Save</button>
        </footer>
      </div>
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
            <td colSpan="4">
              <button onClick={onOpenModal} className={baseClass('button')}>
                Add Item
              </button>
            </td>
          </tr>
          <tr>
            <td>Total</td>
            <th colSpan="3">
              <Currency value={items.reduce(sumItems, 0)} />
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
  onOpenModal: PropTypes.func.isRequired,
  onCloseModal: PropTypes.func.isRequired,
  onAddItem: PropTypes.func.isRequired
}

TabTable.defaultProps = {
  items: []
}

module.exports = TabTable
