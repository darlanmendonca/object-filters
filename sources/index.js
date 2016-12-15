import clone from 'clone'

module.exports = filters

function filters(options) {
  const keys = splitKeys(options)
  const positiveKeys = keys.filter(key => !key.startsWith('-'))
  const negativeKeys = keys
    .filter(key => key.startsWith('-'))
    .map(key => key.replace('-', ''))

  let obj = this

  if (negativeKeys.length) {
    obj = clone(obj)
    for (const key of negativeKeys) {
      delete obj[key]
    }
  } else if (positiveKeys.length) {
    obj = {}
    for (const key of positiveKeys) {
      obj[key] = this[key]
    }
  }

  return obj
}

function splitKeys(options='') {
  const keys = Array.isArray(options)
    ? options.join(' ')
    : options.toString()

  return keys
    .trim()
    .replace(/\s{2,}/g, ' ')
    .split(' ')
    .filter(key => key)
}
