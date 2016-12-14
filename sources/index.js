module.exports = objectFilters

function objectFilters() {
  Object.prototype.filters = filters
}

function filters() {
  return this
}