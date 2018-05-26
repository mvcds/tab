const React = require('react')

const PeopleTable = require('./index')

function onChangeModal (isModalOpen) {
  this.setState({ isModalOpen })
}

class PeopleTableState extends React.Component {
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
      <PeopleTable
        {...this.props}
        {...this.state}
        {...this.methods}
      />
    )
  }
}

module.exports = PeopleTableState
