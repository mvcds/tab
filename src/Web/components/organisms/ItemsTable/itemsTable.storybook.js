const React = require('react')
const { storiesOf } = require('@storybook/react')
const { withKnobs, number, boolean } = require('@storybook/addon-knobs/react')
const { action } = require('@storybook/addon-actions')

const { FilledWithRandomItems } = require('Entities/Tab/tab.factory')

const ItemsTable = require('./index')

const MIN = 0

const OPTIONS = {
  range: true,
  min: MIN,
  max: 10,
  step: 1
}

const TOTAL = {
  range: true,
  min: MIN,
  max: 1500,
  step: 0.5
}

const props = {
  onOpenModal: action('Open Modal'),
  onCloseModal: action('Close Modal')
}

storiesOf('Components/Organisms/Items Table', module)
  .addDecorator(withKnobs)
  .add('Default', () => {
    const isModalOpen = boolean('Open modal?', false)
    const numberOfItems = number('Items', MIN, OPTIONS)
    const total = number('Total', MIN, TOTAL)

    const tab = FilledWithRandomItems(numberOfItems)

    return (
      <ItemsTable
        isModalOpen={isModalOpen}
        total={total}
        {...tab}
        {...props}
      />
    )
  })
