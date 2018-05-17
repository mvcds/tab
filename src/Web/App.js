const React = require('react')

const TabTable = require('./components/organisms/TabTable')

class App extends React.Component {
  render(){
    return (
      <div className='app'>
        <h1>Tab</h1>
        <TabTable />
      </div>
    )
  }
}

module.exports = App
