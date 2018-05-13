const React = require('react')
const { storiesOf } = require('@storybook/react')
const { withKnob, number } = require('@storybook/addon-knobs/react')
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
}

storiesOf('Components/Organisms/Tab Table', module)
  .addDecorator(withKnobs)
  .add('Empty', () => {
    return (<TabTable {...props} />)
  })
  .add('Filled', () => {
    const numberOfItems = number('Items', MIN, options)

    const tab = FilledWithRandomItems(numberOfItems)

    return (<TabTable {...tab} {...props} />)
  })
