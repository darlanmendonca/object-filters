import filters from './index.js'
import {expect} from 'chai'

const object = {
  firstname: 'John',
  lastname: 'Snow',
  email: 'iknownothing@snow.com',
  address: {
    castle: 'Black',
    region: 'North',
  },
}

describe('object-filters', () => {
  it('module export a function', () => {
    expect(filters).to.be.an('function')
  })

  it('objects has a prototype method filter', () => {
    expect(object)
      .to.have.property('filters')
      .to.be.an('function')
  })

  xit('filter by strings separated by space', () => {
    const {firstname, lastname} = object
    expect(object.filters('firstname lastname'))
      .to.deep.equal({firstname, lastname})
  })

  xit('filter by array of strings', () => {
    const {firstname, lastname} = object
    expect(object.filters(['firstname', 'lastname']))
      .to.deep.equal({firstname, lastname})
  })

  xit('filter by negative strings separated by space', () => {
    const {firstname, lastname} = object
    expect(object.filters('-email -address'))
      .to.deep.equal({firstname, lastname})
  })

  xit('filter by negative strings array', () => {
    const {firstname, lastname} = object
    expect(object.filters('-email -address'))
      .to.deep.equal({firstname, lastname})
  })

  xit('filter by nested object', () => {
    const {firstname, lastname} = object
    expect(object.filters('firstname lastname address.castle'))
      .to.deep.equal({firstname, lastname, address: {castle: 'Black'}})
  })
})
