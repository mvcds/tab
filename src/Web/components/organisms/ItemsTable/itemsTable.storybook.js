const React = require('react')
const { storiesOf } = require('@storybook/react')
const { withKnobs, number } = require('@storybook/addon-knobs/react')

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
  match: { url: '' },
  Link: (p) => <div {...p}>{p.children}</div>
}

storiesOf('Components/Organisms/Items Table', module)
  .addDecorator(withKnobs)
  .add('Default', () => {
    const numberOfItems = number('Items', MIN, OPTIONS)
    const total = number('Total', MIN, TOTAL)

    const tab = FilledWithRandomItems(numberOfItems)

    return (
      <ItemsTable
        total={total}
        {...tab}
        {...props}
      />
    )
  })
