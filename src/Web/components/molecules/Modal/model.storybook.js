const React = require('react')
const { storiesOf } = require('@storybook/react')
const { withKnobs, text } = require('@storybook/addon-knobs/react')
const { action } = require('@storybook/addon-actions')
const { lorem } = require('faker')

const Modal = require('./index')

const props = {
  onCloseModal: action('Close Modal'),
  onAction: action('Take Some Action')
}

function customizedFooter({ onAction }) {
  return (
    <button onClick={onAction}>
      I agree
    </button>
  )
}

storiesOf('Components/Molecules/Modal', module)
  .addDecorator(withKnobs)
  .add('Default', () => {
    const title = text('Title', 'I am a modal')

    return (
      <Modal title={title} {...props}>
        <p>
          {lorem.paragraph()}
        </p>
      </Modal>
    )
  })
  .add('Custom', () => {
    const title = text('Title', 'I am a customized modal')

    return (
      <Modal title={title} ModalFooter={customizedFooter} {...props}>
        <p>
          {lorem.paragraph()}
        </p>
      </Modal>
    )
  })
