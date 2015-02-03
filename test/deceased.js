var test = require('tape');
var args = require('../index');

test('deceased', function(t) {
  t.plan(1);

  var expected = {filter: {deceased: true}};
  var actual = args('is:deceased');

  t.deepEqual(actual, expected);
});

test('not deceased', function(t) {
  t.plan(1);

  var expected = {filter: {deceased: false}};
  var actual = args('not:deceased');

  t.deepEqual(actual, expected);
});

test('with defaults', function(t) {
  t.plan(1);

  var defaults = {filter: {deceased: false}};
  var expected = {filter: {deceased: true}};
  var actual = args('is:deceased', defaults);

  t.deepEqual(actual, expected);
});
