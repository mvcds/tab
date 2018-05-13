const React = require('react')
const PropTypes = require('prop-types')

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

function sumItems (total, { subTotal }) {
  return total + subTotal
}

function TabTable ({ items, onOpenModal }) {
  return (
    <table>
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
            <button onClick={onOpenModal}>Add Item</button>
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
  )
}

TabTable.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  onOpenModal: PropTypes.func.isRequired
}

TabTable.defaultProps = {
  items: []
}

module.exports = TabTable
