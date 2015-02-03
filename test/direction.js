var test = require('tape');
var args = require('../index');

test('ascending', function(t) {
  t.plan(1);

  var expected = {direction: 'asc'};
  var actual = args('direction:a-z');

  t.deepEqual(actual, expected);
});

test('descending', function(t) {
  t.plan(1);

  var expected = {direction: 'desc'};
  var actual = args('direction:z-a');

  t.deepEqual(actual, expected);
});
