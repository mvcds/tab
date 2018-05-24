const React = require('react')
const PropTypes = require('prop-types')

const ItemsTable = require('Organisms/ItemsTable')
const PeopleTable = require('Organisms/PeopleTable')
const Tabs = require('Molecules/Tabs')

function App ({ tab }) {
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

App.propTypes = {
  tab: PropTypes.object.isRequired
}

module.exports = App
