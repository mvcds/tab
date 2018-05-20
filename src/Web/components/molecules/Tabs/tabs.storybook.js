const React = require('react')
const { storiesOf } = require('@storybook/react')
const { withKnobs, number } = require('@storybook/addon-knobs/react')
const { action } = require('@storybook/addon-actions')

const Tabs = require('./index')

const MIN = 0

const PANELS = [
  {
    title: 'First',
    text: 'I am the first panel'
  },
  {
    title: 'Second',
    text: 'You cannot click on me',
    disabled: true
  },
  {
    title: 'Third',
    text: 'Last but not least'
  }
]

const options = {
  range: true,
  min: MIN,
  max: PANELS.length - 1,
  step: 1
}

const props = {
  onSelectTab: action('Selected Tab')
}

function addPanel ({ title, text, disabled }, index) {
  return (
    <div title={title} disabled={disabled} key={index}>
      {text}
    </div>
  )
}

storiesOf('Components/Molecules/Tabs', module)
  .addDecorator(withKnobs)
  .add('Default', () => {
    const tab = number('Tab', 0, options)

    return (
      <Tabs {...props} group="panels-test" tab={tab}>
        {PANELS.map(addPanel)}
      </Tabs>
    )
  })
