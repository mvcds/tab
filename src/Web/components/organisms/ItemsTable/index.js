const React = require('react')
const PropTypes = require('prop-types')
const bem = require('bem-classname')
const { Link: RouterLink } = require('react-router-dom')

const NumberAsText = require('Atoms/NumberAsText')

require('./itemsTable.styl')

const baseClass = bem.bind(null, 'items-table')

function ItemEntry (item) {
  const { Link, match } = this

  return (
    <tr key={item.createdAt}>
      <td className={baseClass('item-name')}>
        <Link to={`${match.url}item/edit/${item.createdAt}`}>
          {item.name}
        </Link>
      </td>
      <td>
        <NumberAsText value={item.units} />
      </td>
      <td>
        <NumberAsText value={item.price} />
      </td>
      <th>
        <NumberAsText value={item.subTotal} />
      </th>
    </tr>
  )
}

function ItemsTable (props) {
  const { items, total, match, Link } = props

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
          {items.map(ItemEntry, { Link, match })}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan='4' className={baseClass('button-wrapper')}>
              <Link to={`${match.url}item`} className={baseClass('button')}>
                Add Item
              </Link>
            </td>
          </tr>
          <tr>
            <td>Total</td>
            <th colSpan='3'>
              <NumberAsText value={total} />
            </th>
          </tr>
        </tfoot>
      </table>
    </div>
  )
}

ItemsTable.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  total: PropTypes.number.isRequired,
  match: PropTypes.object.isRequired,
  Link: PropTypes.func.isRequired
}

ItemsTable.defaultProps = {
  Link: RouterLink
}

module.exports = ItemsTable
