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

  it('filter by nested (strings)', () => {
    const {firstname, lastname} = object
    expect(object.filters('firstname lastname address.castle'))
      .to.deep.equal({firstname, lastname, address: {castle: 'Black'}})
  })

  it('filter by nested (array)', () => {
    const {firstname, lastname} = object
    expect(object.filters(['firstname', 'lastname', 'address.castle']))
      .to.deep.equal({firstname, lastname, address: {castle: 'Black'}})
  })

  it('filter by negative nested (strings)', () => {
    const {firstname, lastname, email} = object
    expect(object.filters('firstname lastname -address.castle'))
      .to.deep.equal({firstname, lastname, email, address: {region: 'North'}})
  })

  it('filter by negative nested (array)', () => {
    const {firstname, lastname, email} = object
    expect(object.filters(['firstname', 'lastname', '-address.castle']))
      .to.deep.equal({firstname, lastname, email, address: {region: 'North'}})
  })

  it('not filter', () => {
    expect(object.filters())
      .to.deep.equal(object)
  })
})
