var exec = require('child_process').exec;

function extract(s) {
  s = s.trim();
  if (!/\n/.test(s)) { return s; }
  return s.split('\n').pop().match(/'(.+)'/)[1];
}

module.exports = function (opts, cb) {
  if (!opts) { return cb(Error('need an opts object')); }
  if (!opts.root) { return cb(Error('need opts.root')); }
  if (!opts.root.version) { return cb(Error('need opts.root.version')); }
  if (!opts.root.name) { return cb(Error('need opts.root.name')); }
  if (!opts.hops) { return cb(Error('need opts.hops')); }
  if (!opts.field) { return cb(Error('need opts.field')); }

  var hops = opts.hops.slice();
  hops.unshift(opts.root.name);

  function next(v, cb) {
    var cmd = 'npm view ' + 
      hops.shift() + 
      '@' + 
      v +
      (hops[0] ? ' dependencies.' + hops[0] : ' ' + opts.field);


    exec(cmd, function (err, v) {
      if (err) { return cb(err); }
      if (hops.length) { return next(extract(v), cb); }
      return cb(err, extract(v));
    })

  }

  next(opts.root.version, cb);
}