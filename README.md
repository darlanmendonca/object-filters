[![Build Status](https://travis-ci.org/darlanmendonca/object-filters.svg?branch=master)](https://travis-ci.org/darlanmendonca/object-filters) [![Coverage Status](https://coveralls.io/repos/github/darlanmendonca/object-filters/badge.svg)](https://coveralls.io/github/darlanmendonca/object-filters) [![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php)

# object-filters

Filter object by keys. For node.js 6.x or higher

## install

```sh
# not available yet, working in progress
npm i --save object-filters
```

## usage

```js
import filters from 'object-filters'

// add filters as prototype to use in all objects
Object.prototype.filters = filters

const obj = {
  firstname: 'John',
  lastname: 'Snow',
  email: 'iknownothing@snow.com',
  address: {
    castle: 'Black',
    region: 'North',
  }
}

// return a new object, without alter previous obj
const filtered = obj.filters('firstname lastname')

// filtered is now
{
  firstname: 'John',
  lastname: 'Snow',
}
```

The method `filters` works with:

```js
// strings separated by space
obj.filters('firstname lastname')
```

```js
// array of strings
obj.filters(['firstname', 'lastname'])
```

```js
// negative strings
obj.filters('-email -address') // or obj.filters(['-email', '-address'])
```

```js
// nested object
obj.filters('firstname lastname address.castle')
```
