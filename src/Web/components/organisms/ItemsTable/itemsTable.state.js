const React = require('react')

const ConsumedItem = require('Objects/ConsumedItem')

const ItemsTable = require('./index')

function onChangeModal (isModalOpen) {
  this.setState({ isModalOpen })
}

function onAddItem (item) {
  const { newConsumedItem, items = [] } = this.state

  this.setState({
    newConsumedItem: new ConsumedItem(),
    items: [ ...items, newConsumedItem ]
  })
}

function changeNewConsumedItem (key, { target }) {
  const { newConsumedItem } = this.state
  const change = { [ key ]: target.value }

  const clone = newConsumedItem.clone(change)

  this.setState({
    newConsumedItem: clone,
    isValid: clone.isValid
  })
}

class ItemsTableState extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      isModalOpen: false,
      newConsumedItem: new ConsumedItem()
    }

    this.methods = {
      onOpenModal: onChangeModal.bind(this, true),
      onCloseModal: onChangeModal.bind(this, false),
      onAddItem: onAddItem.bind(this),
      onChangeItemName: changeNewConsumedItem.bind(this, 'name'),
      onChangeItemUnits: changeNewConsumedItem.bind(this, 'units'),
      onChangeItemPrice: changeNewConsumedItem.bind(this, 'price')
    }
  }

  render () {
    return (
      <ItemsTable
        {...this.props}
        {...this.state}
        {...this.methods}
      />
    )
  }
}

module.exports = ItemsTableState
