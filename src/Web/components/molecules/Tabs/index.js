const React = require('react')
const PropTypes = require('prop-types')
const bem = require('bem-classname')

require('./tabs.styl')

const NOOP = () => ({})

const baseClass = bem.bind(null, 'tabs')

function TabHandler ({ props: { title, disabled } }, index) {
  const name = `${index}@${this.group}`
  const isActive = index === this.tab

  const canSelect = !disabled && !isActive

  const clickHandler = canSelect ? this.onSelectTab(index) : NOOP

  return (
    <label
      className={baseClass('label', { active: isActive, disabled })}
      key={name}
      onClick={clickHandler}
    >
      {title}
    </label>
  )
}

function Tabs ({ children, tab, group, onSelectTab }) {
  return (
    <div className={baseClass()}>
      <header className={baseClass('header')}>
        {children.map(TabHandler, { tab, group, onSelectTab })}
      </header>
      <div className={baseClass('content')}>
        {children[tab]}
      </div>
    </div>
  )
}

Tabs.propTypes = {
  children: PropTypes.node.isRequired,
  tab: PropTypes.number.isRequired,
  group: PropTypes.string.isRequired,
  onSelectTab: PropTypes.func.isRequired
}
module.exports = Tabs
