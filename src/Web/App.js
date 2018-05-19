const React = require('react')

const TabTable = require('./components/organisms/TabTable')

class App extends React.Component {
  render(){
    return (
      <React.Fragment>
        <h1>Tab</h1>
        <TabTable />
      </React.Fragment>
    )
  }
}

module.exports = App
