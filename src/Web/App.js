const React = require('react')

const TabTable = require('Organisms/TabTable')
const PeopleTable = require('Organisms/PeopleTable')

class App extends React.Component {
  render(){
    return (
      <React.Fragment>
        <h1>Tab</h1>
        <TabTable />
        <hr />
        <PeopleTable />
      </React.Fragment>
    )
  }
}

module.exports = App
