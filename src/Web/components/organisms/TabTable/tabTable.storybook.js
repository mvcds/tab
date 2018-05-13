const React = require('react')
const { storiesOf } = require('@storybook/react')
const { withKnobs, number, boolean } = require('@storybook/addon-knobs/react')
const { action } = require('@storybook/addon-actions')

const { FilledWithRandomItems } = require('Entities/Tab/tab.factory')

const TabTable = require('./index')

const MIN = 1

const options = {
  range: true,
  min: MIN,
  max: 10,
  step: 1
}

const props = {
  onOpenModal: action('Open Modal'),
  onCloseModal: action('Close Modal'),
  onAddItem: action('Add Item')
}

storiesOf('Components/Organisms/Tab Table', module)
  .addDecorator(withKnobs)
  .add('Empty', () => {
    const isModalOpen = boolean('Open modal?', false)

    return (<TabTable isModalOpen={isModalOpen} {...props} />)
  })
  .add('Filled', () => {
    const isModalOpen = boolean('Open modal?', false)
    const numberOfItems = number('Items', MIN, options)

    const tab = FilledWithRandomItems(numberOfItems)

    return (<TabTable isModalOpen={isModalOpen} {...tab} {...props} />)
  })
