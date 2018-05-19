const PropTypes = require('prop-types')

const OPTIONS = {
  useGrouping: true,
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
}

function NumberAsText ({ language, value }) {
  return parseFloat(value)
    .toLocaleString(language, OPTIONS)
}

NumberAsText.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]).isRequired,
  language: PropTypes.string
}

NumberAsText.defaultProps = {
  language: 'en-US'
}

module.exports = NumberAsText
