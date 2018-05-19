const React = require('react')

const ItemsTable = require('Organisms/ItemsTable')
const PeopleTable = require('Organisms/PeopleTable')

class App extends React.Component {
  render(){
    return (
      <React.Fragment>
        <h1>Tab</h1>
        <ItemsTable />
        <hr />
        <PeopleTable />
      </React.Fragment>
    )
  }
}

module.exports = App
