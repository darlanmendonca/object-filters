import filters from './index.js'
import {expect} from 'chai'

Object.prototype.filters = filters

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

  it('always return a new object', () => {
    const original = {
      firstname: 'John',
      lastname: 'Snow',
      email: 'iknownothing@snow.com',
      address: {
        castle: 'Black',
        region: 'North',
      },
    }

    object.filters('firstname')
    expect(object).to.deep.equal(original)
  })

  it('filter by strings separated by space', () => {
    const {firstname, lastname} = object
    expect(object.filters('firstname lastname'))
      .to.deep.equal({firstname, lastname})
  })

  it('filter by array of strings', () => {
    const {firstname, lastname} = object
    expect(object.filters(['firstname', 'lastname']))
      .to.deep.equal({firstname, lastname})
  })

  it('filter by negative strings separated by space', () => {
    const {firstname, lastname} = object
    expect(object.filters('-email -address'))
      .to.deep.equal({firstname, lastname})
  })

  it('filter by negative strings array', () => {
    const {firstname, lastname} = object
    expect(object.filters('-email -address'))
      .to.deep.equal({firstname, lastname})
  })

  xit('filter by nested object (strings)', () => {
    const {firstname, lastname} = object
    expect(object.filters('firstname lastname address.castle'))
      .to.deep.equal({firstname, lastname, address: {castle: 'Black'}})
  })

  xit('filter by nested object (array)', () => {
    const {firstname, lastname} = object
    expect(object.filters(['firstname', 'lastname', 'address.castle']))
      .to.deep.equal({firstname, lastname, address: {castle: 'Black'}})
  })

  it('not filter', () => {
    expect(object.filters())
      .to.deep.equal(object)
  })
})
