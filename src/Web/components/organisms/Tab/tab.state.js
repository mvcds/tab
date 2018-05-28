const React = require('react')

const Tab = require('Entities/Tab')
const Person = require('Entities/Person')

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

    const you = new Person({ name: '(You)' })

    this.state = {
      tab: new Tab({ people: [ you ] })
    }

    this.methods = {
      onAddItem: mutateTab.bind(this, 'addItem'),
      onAddPerson: mutateTab.bind(this, 'addPerson'),
      onEditPerson: mutateTab.bind(this, 'editPerson')
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
