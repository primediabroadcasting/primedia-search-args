var test = require('tape');
var args = require('../index');

test('simple example', function(t) {
  t.plan(1);

  var expected = {search: {terms: ['foo', 'bar']}};
  var actual = args('foo bar');

  t.deepEqual(actual, expected);
});
