const React = require('react')
const { storiesOf } = require('@storybook/react')
const { withKnobs, text } = require('@storybook/addon-knobs/react')
const { action } = require('@storybook/addon-actions')

const { SinglePerson } = require('Entities/Person/person.factory.js')

const PersonModal = require('./index')

const props = {
  onCloseModal: action('Close Modal'),
  onAddPerson: action('Add Person'),
  onEditPerson: action('Edit Person'),
  onChangeName: action('Change Name')
}

storiesOf('Components/Organisms/Person Modal', module)
  .addDecorator(withKnobs)
  .add('New Person', () => {
    const name = text('Name', '')

    const person = SinglePerson({ name })

    return (<PersonModal {...props} person={person} status="new" />)
  })
  .add('Edit Person', () => {
    const person = SinglePerson()

    return (<PersonModal {...props} person={person} status="edit" />)
  })
