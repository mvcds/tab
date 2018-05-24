const React = require('react')

const Tab = require('Entities/Tab')

const TabComponent = require('./index')

function mutateTab (fn, mutant) {
  const { tab: oldTab } = this.state

  const tab = oldTab.clone()

  tab[fn](mutant)

  this.setState({ tab })
}

class TabState extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      tab: new Tab()
    }

    this.methods = {
      onAddItem: mutateTab.bind(this, 'addItem'),
      onAddPerson: mutateTab.bind(this, 'addPerson')
    }
  }

  render () {
    return (
      <TabComponent
        {...this.props}
        {...this.state}
        {...this.methods}
      />
    )
  }
}

module.exports = TabState
