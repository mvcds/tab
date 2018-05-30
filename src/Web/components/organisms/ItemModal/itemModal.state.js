const React = require('react')
const { Redirect } = require('react-router-dom')

const Item = require('Objects/ConsumedItem')

const ItemModal = require('./index')

function onAddItem () {
  const { item } = this.state

  const clone = item.clone({ createdAt: Date.now() })

  this.props.onAddItem(clone)

  this.setState({
    item: new Item()
  })
}

function onEditItem () {
  const { item } = this.state

  this.props.onEditItem(item)
}

function changeItem (key, { target }) {
  const { item } = this.state
  const change = { [ key ]: target.value }

  const clone = item.clone(change)

  this.setState({
    item: clone
  })
}

function close () {
  this.props.history.push('/')
}

function isSame (item) {
  return item.isSame(this)
}

function findItem ({ items = [], match: { params = {} } }) {
  const { id: createdAt } = params

  const item = items.find(isSame, { createdAt })

  return item || new Item()
}

class ItemModalState extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      item: findItem(props)
    }

    this.methods = {
      onAddItem: onAddItem.bind(this),
      onEditItem: onEditItem.bind(this),
      onChangeName: changeItem.bind(this, 'name'),
      onChangeUnits: changeItem.bind(this, 'units'),
      onChangePrice: changeItem.bind(this, 'price'),
      onCloseModal: close.bind(this)
    }
  }

  render () {
    if (this.props.location.pathname === '/item') {
      return <Redirect to='/item/new' />
    }

    return (
      <ItemModal
        {...this.props}
        {...this.state}
        {...this.methods}
        isValid={this.state.item.isValid}
        isNew={this.props.location.pathname === '/item/new'}
      />
    )
  }
}

module.exports = ItemModalState
