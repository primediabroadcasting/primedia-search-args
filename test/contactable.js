
var test = require('tape');
var args = require('../index');

test('contactable', function(t) {
  t.plan(1);

  var expected = {filter: {contactable: true}};
  var actual = args('is:contactable');

  t.deepEqual(actual, expected);
});

test('not contactable', function(t) {
  t.plan(1);

  var expected = {filter: {contactable: false}};
  var actual = args('not:contactable');

  t.deepEqual(actual, expected);
});
