var assert = require('assert');
require('./')({
  root: {name: 'express', version: '^4.0.0'},
  hops: ['debug', 'ms'],
  field: 'name'
}, function (err, v) {
  assert.equal(v, 'ms');
  console.log('passed');
})