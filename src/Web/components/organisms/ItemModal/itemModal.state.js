const React = require('react')

const Item = require('Objects/ConsumedItem')

const ItemModal = require('./index')

function onAddItem () {
  const { item } = this.state

  this.props.onAddItem(item)

  this.setState({
    item: new Item()
  })
}

function changeItem (key, { target }) {
  const { item } = this.state
  const change = { [ key ]: target.value }

  const clone = item.clone(change)

  this.setState({
    item: clone
  })
}

class ItemModalState extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      item: new Item()
    }

    this.methods = {
      onAddItem: onAddItem.bind(this),
      onChangeName: changeItem.bind(this, 'name'),
      onChangeUnits: changeItem.bind(this, 'units'),
      onChangePrice: changeItem.bind(this, 'price')
    }
  }

  render () {
    return (
      <ItemModal
        {...this.props}
        {...this.state}
        {...this.methods}
        isValid={this.state.item.isValid}
      />
    )
  }
}

module.exports = ItemModalState
