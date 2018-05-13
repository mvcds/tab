const React = require('react')

const TabTable = require('./index')

function onChangeModal (isModalOpen) {
  this.setState({ isModalOpen })
}

function onAddItem () {
  debugger
}

class TabTableState extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      isModalOpen: false
    }

    this.methods = {
      onOpenModal: onChangeModal.bind(this, true),
      onCloseModal: onChangeModal.bind(this, false),
      onAddItem: onAddItem.bind(this)
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
