import filters from './index.js'
import {expect} from 'chai'

describe('object-filters', () => {
  it('module export a function', () => {
    expect(filters).to.be.an('function')
  })
})