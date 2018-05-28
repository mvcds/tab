const React = require('react')
const PropTypes = require('prop-types')
const bem = require('bem-classname')
const { Link: RouterLink } = require('react-router-dom')

const NumberAsText = require('Atoms/NumberAsText')
const Modal = require('Molecules/Modal')

require('./peopleTable.styl')

const baseClass = bem.bind(null, 'people-table')

function PersonEntry (person, index) {
  const { Link, perPerson, match }  = this

  return (
    <tr key={person.createdAt}>
      <td className={baseClass('person-name')}>
        <Link to={`${match.url}person/edit/${person.createdAt}`}>
          {person.name}
        </Link>
      </td>
      <td>
        <NumberAsText value={perPerson.percent} />
      </td>
      <th>
        <NumberAsText value={perPerson.value} />
      </th>
    </tr>
  )
}

function PeopleTable (props) {
  const { people, total, match, Link } = props

  const perPerson = {
    percent: 100 / people.length,
    value: total / people.length
  }

  return (
    <div className={baseClass()}>
      <table className={baseClass('table')}>
        <thead>
          <tr>
            <th rowSpan="2">Person</th>
            <th colSpan="2">Equal Division</th>
          </tr>
          <tr>
            <th>%</th>
            <th>$</th>
          </tr>
        </thead>
        <tbody>
          {people.map(PersonEntry, { perPerson, Link, match })}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="3" className={baseClass('button-wrapper')}>
              <Link to={`${match.url}person`} className={baseClass('button')}>
                Add Person
              </Link>
            </td>
          </tr>
          <tr>
            <td>Total</td>
            <th colSpan="2">
              <NumberAsText value={total} />
            </th>
          </tr>
        </tfoot>
      </table>
    </div>
  )
}

PeopleTable.propTypes = {
  people: PropTypes.arrayOf(PropTypes.object).isRequired,
  total: PropTypes.number.isRequired,
  Link: PropTypes.func.isRequired
}

PeopleTable.defaultProps = {
  Link: RouterLink
}

module.exports = PeopleTable
