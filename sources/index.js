const clone = require('clone')
const unset = require('unset-value')
const deep = require('deep-getset')

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
      key.includes('.')
        ? unset(obj, key)
        : delete obj[key]
    }
  } else if (positiveKeys.length) {
    obj = {}
    for (const key of positiveKeys) {
      key.includes('.')
        ? deep.set(obj, key.split('.'), deep.get(this, key.split('.')))
        : obj[key] = this[key]
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
