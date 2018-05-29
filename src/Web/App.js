const React = require('react')
const { BrowserRouter: Router, Route, Link } = require('react-router-dom')

const Tab = require('Organisms/Tab')

function App () {
  return (
    <Router basename='/'>
      <React.Fragment>
        <h1>
          <Link to='/'>Tab</Link>
        </h1>
        <Route path='/' component={Tab} />
      </React.Fragment>
    </Router>
  )
}

module.exports = App
