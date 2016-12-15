import clone from 'clone'

module.exports = filters

function filters() {
  const obj = clone(this)
  return obj
}
