const React = require('react')
const PropTypes = require('prop-types')
const bem = require('bem-classname')

const NumberAsText = require('Atoms/NumberAsText')
const Modal = require('Molecules/Modal')

require('./peopleTable.styl')

const baseClass = bem.bind(null, 'people-table')

function PersonEntry ({ name }, index, { length }) {
  return (
    <tr key={name}>
      <td>{name}</td>
      <td>
        <NumberAsText value={this.perPerson.percent} />
      </td>
      <th>
        <NumberAsText value={this.perPerson.value} />
      </th>
    </tr>
  )
}

function PersonModalFooter ({ onCloseModal, onAddPerson, newPerson }) {
  return (
    <React.Fragment>
      <button onClick={onCloseModal}>Close</button>
      <button disabled={newPerson.isInvalid} onClick={onAddPerson}>Add</button>
    </React.Fragment>
  )
}

function PersonModal (props) {
  const {
    onCloseModal,
    onAddPerson,
    newPerson,
    onChangePersonName
  } = props

  return [
    <div key="modal-background" className={baseClass('modal-background')} />,
    <aside key="modal-content" className={baseClass('modal-content')}>
      <Modal {...props} title="New Person" ModalFooter={PersonModalFooter}>
        <input
          placeholder="Name"
          value={newPerson.name}
          onChange={onChangePersonName}
        />
      </Modal>
    </aside>
  ]
}

function PeopleTable (props) {
  const { people, isModalOpen, onOpenModal, total } = props

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
          {people.map(PersonEntry, { perPerson })}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="3" className="guterless">
              <button onClick={onOpenModal} className={baseClass('button')}>
                Add Person
              </button>
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
      {isModalOpen && <PersonModal {...props} />}
    </div>
  )
}

PeopleTable.propTypes = {
  people: PropTypes.arrayOf(PropTypes.object).isRequired,
  total: PropTypes.number.isRequired,
  isModalOpen: PropTypes.bool.isRequired,
  newPerson: PropTypes.object.isRequired,
  onOpenModal: PropTypes.func.isRequired,
  onCloseModal: PropTypes.func.isRequired,
  onAddPerson: PropTypes.func.isRequired,
  onChangePersonName: PropTypes.func.isRequired
}

PeopleTable.defaultProps = {
  people: [],
  total: 0
}

module.exports = PeopleTable
