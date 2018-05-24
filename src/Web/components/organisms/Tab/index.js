const React = require('react')
const PropTypes = require('prop-types')

const ItemsTable = require('Organisms/ItemsTable')
const PeopleTable = require('Organisms/PeopleTable')
const Tabs = require('Molecules/Tabs')

function Tab ({ tab, onAddItem, onAddPerson }) {
  return (
    <React.Fragment>
      <h1>Tab</h1>
      <Tabs group="main-tabs">
        <ItemsTable title="Items" {...tab} onAddItem={onAddItem} />
        <PeopleTable title="People" {...tab} onAddPerson={onAddPerson} />
      </Tabs>
    </React.Fragment>
  )
}

Tab.propTypes = {
  tab: PropTypes.object.isRequired,
  onAddItem: PropTypes.func.isRequired,
  onAddPerson: PropTypes.func.isRequired
}

module.exports = Tab
