const React = require('react')

const ConsumedItem = require('Objects/ConsumedItem')

const ItemsTable = require('./index')

function onChangeModal (isModalOpen) {
  this.setState({ isModalOpen })
}

class ItemsTableState extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      isModalOpen: false
    }

    this.methods = {
      onOpenModal: onChangeModal.bind(this, true),
      onCloseModal: onChangeModal.bind(this, false)
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
