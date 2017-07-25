#!/usr/bin/env node
'use strict'

require('pipe-args').load()
Object.prototype.filters = require('../sources/index.js')

const filters = process.argv.slice(2, process.argv.length - 1)
let data = process.argv[process.argv.length - 1]

try {
  data = JSON.parse(process.argv[process.argv.length - 1])
} catch (e) {
  console.error(e)
}

// return data.filter(filters)

// console.log('data:', data)
// console.log('filters:', filters)
console.log(data.filters(filters))

// console.log(process)
