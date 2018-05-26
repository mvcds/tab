const React = require('react')
const { storiesOf } = require('@storybook/react')
const { withKnobs, text } = require('@storybook/addon-knobs/react')
const { action } = require('@storybook/addon-actions')

const { SinglePerson } = require('Entities/Person/person.factory.js')

const PersonModal = require('./index')

const props = {
  onCloseModal: action('Close Modal'),
  onAddPerson: action('Add Person'),
  onChangePersonName: action('Change Name')
}

storiesOf('Components/Organisms/Person Modal', module)
  .addDecorator(withKnobs)
  .add('New', () => {
    const name = text('Name', '')

    const newPerson = SinglePerson({ name })

    return (<PersonModal {...props} newPerson={newPerson} />)
  })
