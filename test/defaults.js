var test = require('tape');
var args = require('../index');

test('empty example', function(t) {
  t.plan(1);

  var expected = {};
  var actual = args('');

  t.deepEqual(actual, expected);
});

test('simple example', function(t) {
  t.plan(1);

  var defaults = {foo: 'bar'};
  var expected = {foo: 'bar'};
  var actual = args('', defaults);

  t.deepEqual(actual, expected);
});

test('defaults get writter over', function(t) {
  t.plan(1);

  var defaults = {direction: 'asc'};
  var expected = {direction: 'desc'};
  var actual = args('direction:z-a', defaults);

  t.deepEqual(actual, expected);
});
