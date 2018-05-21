const React = require('react')
const { storiesOf } = require('@storybook/react')
const { withKnobs, number, boolean } = require('@storybook/addon-knobs/react')
const { action } = require('@storybook/addon-actions')

const { FilledWithRandomItems } = require('Entities/Tab/tab.factory')
const { SingleItem } = require('Objects/ConsumedItem/consumedItem.factory.js')

const ItemsTable = require('./index')

const MIN = 0

const options = {
  range: true,
  min: MIN,
  max: 10,
  step: 1
}

const props = {
  onOpenModal: action('Open Modal'),
  onCloseModal: action('Close Modal'),
  onAddItem: action('Add Item'),
  onChangeItemName: action('Change Name'),
  onChangeItemUnits: action('Change Units'),
  onChangeItemPrice: action('Change Price')
}

storiesOf('Components/Organisms/Items Table', module)
  .addDecorator(withKnobs)
  .add('Default', () => {
    const isModalOpen = boolean('Open modal?', false)
    const numberOfItems = number('Items', MIN, options)

    const tab = FilledWithRandomItems(numberOfItems)

    const newConsumedItem = SingleItem()

    return (<ItemsTable isModalOpen={isModalOpen} newConsumedItem={newConsumedItem} {...tab} {...props} />)
  })
