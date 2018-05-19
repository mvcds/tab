const PropTypes = require('prop-types')

const OPTIONS = {
  useGrouping: true,
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
}

function Currency ({ language, value }) {
  return value.toLocaleString(language, OPTIONS)
}

Currency.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]).isRequired,
  language: PropTypes.string
}

Currency.defaultProps = {
  language: 'en-US'
}

module.exports = Currency
