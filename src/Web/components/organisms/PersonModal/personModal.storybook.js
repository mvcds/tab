const React = require('react')
const { storiesOf } = require('@storybook/react')
const { action } = require('@storybook/addon-actions')

const { SinglePerson } = require('Entities/Person/person.factory.js')

const PersonModal = require('./index')

const props = {
  onCloseModal: action('Close Modal'),
  onAddPerson: action('Add Person'),
  onChangePersonName: action('Change Name'),
  newPerson: SinglePerson()
}

storiesOf('Components/Organisms/Person Modal', module)
  .add('New', () => {
    return (<PersonModal {...props} />)
  })
