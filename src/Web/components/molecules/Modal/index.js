const React = require('react')
const PropTypes = require('prop-types')
const bem = require('bem-classname')

require('./modal.styl')

const baseClass = bem.bind(null, 'modal')

const DEFAULT_FOOTER = function ({ onCloseModal }) {
  return (
    <button onClick={onCloseModal}>
      Close
    </button>
  )
}

function Footer (props) {
  const { ModalFooter } = props

  return (
    <footer className={baseClass('footer')}>
      <ModalFooter {...props} />
    </footer>
  )
}

function Modal (props) {
  const { title, children, onCloseModal, ModalFooter } = props

  const footer = ModalFooter ? ModalFooter : DEFAULT_FOOTER

  return (
    <div className={baseClass()}>
      <header className={baseClass('header')}>
        <h2 className={baseClass('title')}>{title}</h2>
        <span onClick={onCloseModal} className={baseClass('close-icon')}>
          &times;
        </span>
      </header>
      <div className={baseClass('content')}>
        {children}
      </div>
      <Footer {...props} ModalFooter={footer} />
    </div>
  )
}

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
  onCloseModal: PropTypes.func.isRequired,
  ModalFooter: PropTypes.func
}

module.exports = Modal
