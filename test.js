var modexp = require('./index');
var assert = require('assert');

var answer = modexp(348935, 57565, 101);
assert.equal(answer, 36);
