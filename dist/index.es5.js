'use strict';

var _clone = require('clone');

var _clone2 = _interopRequireDefault(_clone);

var _unsetValue = require('unset-value');

var _unsetValue2 = _interopRequireDefault(_unsetValue);

var _deepGetset = require('deep-getset');

var _deepGetset2 = _interopRequireDefault(_deepGetset);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = filters;

function filters(options) {
  var keys = splitKeys(options);
  var positiveKeys = keys.filter(function (key) {
    return !key.startsWith('-');
  });
  var negativeKeys = keys.filter(function (key) {
    return key.startsWith('-');
  }).map(function (key) {
    return key.replace('-', '');
  });

  var obj = this;

  if (negativeKeys.length) {
    obj = (0, _clone2.default)(obj);
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = negativeKeys[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var key = _step.value;

        key.includes('.') ? (0, _unsetValue2.default)(obj, key) : delete obj[key];
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  } else if (positiveKeys.length) {
    obj = {};
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = positiveKeys[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var _key = _step2.value;

        _key.includes('.') ? _deepGetset2.default.set(obj, _key.split('.'), _deepGetset2.default.get(this, _key.split('.'))) : obj[_key] = this[_key];
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2.return) {
          _iterator2.return();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }
  }

  return obj;
}

function splitKeys() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  var keys = Array.isArray(options) ? options.join(' ') : options.toString();

  return keys.trim().replace(/\s{2,}/g, ' ').split(' ').filter(function (key) {
    return key;
  });
}
