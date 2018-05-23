function createDefault (acc, [ key, value ]) {
  if (value._flags.default === undefined) return acc

  return Object.assign({}, acc, {
    [ key ]: value._flags.default
  })
}

function GetDefaults (SCHEMA) {
  return Object.entries(SCHEMA)
    .reduce(createDefault, {})
}

module.exports = GetDefaults
