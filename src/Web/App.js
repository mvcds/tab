const React = require('react')
const { BrowserRouter: Router, Route, Link } = require('react-router-dom')
const { createBrowserHistory } = require('history')

const Tab = require('Organisms/Tab')
const PersonModal = require('Organisms/PersonModal')
const ItemModal = require('Organisms/ItemModal')

const history = createBrowserHistory()

function App () {
  return (
    <Router basename="/">
      <React.Fragment>
        <h1>
          <Link to="/">Tab</Link>
        </h1>
        <Route path="/" component={Tab} />
      </React.Fragment>
    </Router>
  )
}

module.exports = App
