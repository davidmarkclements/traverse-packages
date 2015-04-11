# traverse-packages

Deep remote traversal over npm packages

Extract a field from the destination package.json

## Usage

```
traverse(opts, cb);
```

## Options
Oxymoronically, all options are mandatory.

### root

Root options requires `name` and `version` fields,
this is the primary package that traversal begins
at. Version is semver as in package.json version field.

### hops

The name of each module between the root 
module and the final module (includive of the final 
module). Versions of modules are determined from root module. 


### field

The field to extract from the destination modules
package.json.


## Example

```javascript

var traverse = require('traverse-packages');

traverse({
  root: {name: 'express', version: '^4.0.0'},
  hops: ['debug', 'ms'],
  field: 'name'
}, function (err, v) {
  assert.equal(v, 'ms');
});


```

## License MIT

