# object-filter

filter an object/json specifying the keys.

## install

```
# not available yet, object-filter already used to another modules
npm i --save object-filter
```

## usage

```js
import filter from 'object-filter'

const obj = {
  firstname: 'John',
  lastname: 'Snow',
  email: 'iknownothing@snow.com',
  address: {
    castle: 'Black',
    region: 'North',
  }
}

const filtered = obj.filter('firstname lastname')

// =>

{
  firstname: 'John',
  lastname: 'Snow',
}
```

The method `filter` works with:

```js
// strings separated by space
obj.filter('firstname lastname')
```

```js
// array of strings
obj.filter(['firstname', 'lastname'])
```

```js
// negative strings
obj.filter('-email')
```

```js
// nested object
obj.filter('firstname lastname address.castle')
```