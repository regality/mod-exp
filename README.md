# Modular Exponentiation

Have you ever felt the need to raise a large number to an enourmous
power, but only want the modulous of that value by another number?

It happens to the best of us. This package is here to help.

# Install

`npm install mod-exp`

# Usage

```javascript
var modexp = require('mod-exp');

var answer = modexp(348935, 57565, 101);
assert.equal(answer, 36);
```

# Important

This only works with numbers that fit into an integer (32 bits).
If you number is coerced into a double, you will get the wrong answer.

You're welcome.
