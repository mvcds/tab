const React = require('react')
const PropTypes = require('prop-types')

const ItemsTable = require('Organisms/ItemsTable')
const PeopleTable = require('Organisms/PeopleTable')
const Tabs = require('Molecules/Tabs')

function Tab ({ tab }) {
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

Tab.propTypes = {
  tab: PropTypes.object.isRequired
}

module.exports = Tab
