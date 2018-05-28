const React = require('react')
const PropTypes = require('prop-types')
const { Route } = require('react-router-dom')

const ItemsTable = require('Organisms/ItemsTable')
const PeopleTable = require('Organisms/PeopleTable')
const Tabs = require('Molecules/Tabs')
const PersonModal = require('Organisms/PersonModal')
const ItemModal = require('Organisms/ItemModal')

function Wrapper (props) {
  const { path, component: Component } = props
  const rest = Object.assign({}, props)

  delete rest.path
  delete rest.component

  return (
    <Route path={path} render={(route) => <Component {...rest} {...route} /> } />
  )
}

function Tab (props) {
  const { tab, match, onAddItem, onAddPerson, onEditPerson } = props

  const { total, people } = tab

  return (
    <React.Fragment>
      <Tabs group="main-tabs">
        <PeopleTable title="People" {...tab} total={total} match={match} />
        <ItemsTable title="Items" {...tab} onAddItem={onAddItem} total={total} />
      </Tabs>
      <Wrapper path="/person" component={PersonModal} onAddPerson={onAddPerson} />
      <Wrapper path="/person/edit/:id" component={PersonModal} onEditPerson={onEditPerson} people={people} />
      <Route path="/item" component={ItemModal} />
    </React.Fragment>
  )
}

Tab.propTypes = {
  tab: PropTypes.object.isRequired,
  onAddItem: PropTypes.func.isRequired,
  onAddPerson: PropTypes.func.isRequired
}

module.exports = Tab
