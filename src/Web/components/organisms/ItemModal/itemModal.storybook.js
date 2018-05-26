const React = require('react')
const { storiesOf } = require('@storybook/react')
const { withKnobs, text, number } = require('@storybook/addon-knobs/react')
const { action } = require('@storybook/addon-actions')

const { SingleItem } = require('Objects/ConsumedItem/consumedItem.factory.js')

const ItemModal = require('./index')

const OPTIONS = { min: 0 }

const props = {
  onCloseModal: action('Close Modal'),
  onAddItem: action('Add Item'),
  onChangeName: action('Change Name'),
  onChangeUnits: action('Change Units'),
  onChangePrice: action('Change Price')
}

storiesOf('Components/Organisms/Item Modal', module)
  .addDecorator(withKnobs)
  .add('New Item', () => {
    const name = text('Name', '')
    const units = number('Units', 1, OPTIONS)
    const price = number('Price', 3.5, OPTIONS)

    const item = SingleItem({ name, units, price })

    return (<ItemModal {...props} item={item} />)
  })
