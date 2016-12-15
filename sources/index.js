import clone from 'clone'

module.exports = filters

function filters() {
  return clone(this)
}
