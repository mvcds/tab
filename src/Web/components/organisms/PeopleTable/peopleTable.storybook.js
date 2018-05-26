const React = require('react')
const { storiesOf } = require('@storybook/react')
const { withKnobs, number, boolean } = require('@storybook/addon-knobs/react')
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
  onOpenModal: action('Open Modal'),
  onCloseModal: action('Close Modal')
}

storiesOf('Components/Organisms/People Table', module)
  .addDecorator(withKnobs)
  .add('Default', () => {
    const isModalOpen = boolean('Open modal?', false)
    const numberOfPeople = number('People', MIN, NUMBER_OF_PEPLE)
    const total = number('Total', MIN, TOTAL)

    const tab = FilledWithRandomPeople(numberOfPeople)

    return (
      <PeopleTable
        isModalOpen={isModalOpen}
        total={total}
        {...tab}
        {...props}
      />
    )
  })
