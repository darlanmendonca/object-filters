[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php)

# object-filters

Filter object by keys

## install

```sh
# not available yet, working in progress
npm i --save object-filters
```

## usage

```js
import filters from 'object-filters'

const obj = {
  firstname: 'John',
  lastname: 'Snow',
  email: 'iknownothing@snow.com',
  address: {
    castle: 'Black',
    region: 'North',
  }
}

const filtered = obj.filters('firstname lastname')

// =>

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
