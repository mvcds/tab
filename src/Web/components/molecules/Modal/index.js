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

function Dialog (props) {
  const { title, children, onCloseModal, Footer } = props

  return (
    <div className={baseClass('dialog')} role='dialog'>
      <header className={baseClass('header')}>
        <h2 className={baseClass('title')}>{title}</h2>
        <span onClick={onCloseModal} className={baseClass('close-icon')}>
          &times;
        </span>
      </header>
      <div className={baseClass('content')}>
        {children}
      </div>
      <footer className={baseClass('footer')}>
        <Footer {...props} />
      </footer>
    </div>
  )
}

function Modal (props) {
  const { onCloseModal, Footer } = props

  const footer = Footer || DEFAULT_FOOTER

  return (
    <div className={baseClass()}>
      <div className={baseClass('background')} onClick={onCloseModal} />
      <Dialog {...props} Footer={footer} />
    </div>
  )
}

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  onCloseModal: PropTypes.func.isRequired,
  Footer: PropTypes.func
}

module.exports = Modal
