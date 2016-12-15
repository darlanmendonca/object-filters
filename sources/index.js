import clone from 'clone'

module.exports = filters

function filters(options) {
  const keys = splitKeys(options)
  const negativeKeys = keys
    .filter(key => key.startsWith('-'))
    .map(key => key.replace('-', ''))
  const positiveKeys = keys.filter(key => !key.startsWith('-'))

  console.log(keys, 'positive', positiveKeys, 'negative', negativeKeys)

  const obj = clone(this)
  return obj
}

function splitKeys(options='') {
  const keys = Array.isArray(options)
    ? options.join(' ')
    : options.toString()

  return keys
    .trim()
    .replace(/\s{2,}/, ' ')
    .split(' ')
    .filter(key => key)
}
