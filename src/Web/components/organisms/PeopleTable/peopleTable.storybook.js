const React = require('react')
const { storiesOf } = require('@storybook/react')
const { withKnobs, number } = require('@storybook/addon-knobs/react')
const { action } = require('@storybook/addon-actions')

const { FilledWithRandomPeople } = require('Entities/Tab/tab.factory')

const PeopleTable = require('./index')

const MIN = 0

const NUMBER_OF_PEPLE = {
  range: true,
  min: MIN,
  max: 10,
  step: 1
}

const TOTAL = {
  range: true,
  min: MIN,
  max: 1500,
  step: .5
}

const props = {
  match: { url: '' },
  Link: (p) => <div {...p}>{p.children}</div>
}

storiesOf('Components/Organisms/People Table', module)
  .addDecorator(withKnobs)
  .add('Default', () => {
    const numberOfPeople = number('People', MIN, NUMBER_OF_PEPLE)
    const total = number('Total', MIN, TOTAL)

    const tab = FilledWithRandomPeople(numberOfPeople)

    return (
      <PeopleTable
        {...props}
        {...tab}
        total={total}
      />
    )
  })
