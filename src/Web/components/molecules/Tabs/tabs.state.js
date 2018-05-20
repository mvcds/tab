const React = require('react')

const Tabs = require('./index')

function select (tab) {
  this.setState({ tab })
}

function onSelectTab (tab) {
  return select.bind(this, tab)
}

class TabsState extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      tab: 0
    }

    this.methods = {
      onSelectTab: onSelectTab.bind(this)
    }
  }

  render () {
    return (
      <Tabs
        {...this.props}
        {...this.state}
        {...this.methods}
      />
    )
  }
}

module.exports = TabsState
