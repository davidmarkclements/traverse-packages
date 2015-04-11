require('./')({
  root: {name: 'express', version: '^4.0.0'},
  hops: ['debug', 'ms'],
  field: 'maintainers'
}, function (err, v) {
  console.log(v);
})