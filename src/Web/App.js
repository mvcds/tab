const React = require('react')

const ItemsTable = require('Organisms/ItemsTable')
const PeopleTable = require('Organisms/PeopleTable')
const Tabs = require('Molecules/Tabs')

class App extends React.Component {
  render(){
    return (
      <React.Fragment>
        <h1>Tab</h1>
        <Tabs group="main-tabs">
          <ItemsTable title="Items" />
          <PeopleTable title="People" />
        </Tabs>
      </React.Fragment>
    )
  }
}

module.exports = App
