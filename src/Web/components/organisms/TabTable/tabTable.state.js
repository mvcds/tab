const React = require('react')

const ConsumedItem = require('Objects/ConsumedItem')

const TabTable = require('./index')

function onChangeModal (isModalOpen) {
  this.setState({ isModalOpen })
}

function onAddItem () {
  debugger
}

function changeNewConsumedItem (key, { target }) {
  const { newConsumedItem } = this.state
  const change = { [ key ]: target.value }

  this.setState({
    newConsumedItem: newConsumedItem.clone(change)
  })
}

class TabTableState extends React.Component {
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
      <TabTable
        {...this.props}
        {...this.state}
        {...this.methods}
      />
    )
  }
}

module.exports = TabTableState
