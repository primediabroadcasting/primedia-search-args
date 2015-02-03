var test = require('tape');
var args = require('../index');

test('single topic id', function(t) {
  t.plan(1);

  var expected = {
    filter: {
      topic_id: [1]
    }
  };
  var actual = args('topic:1');

  t.deepEqual(actual, expected);
});

test('multiple topic ids', function(t) {
  t.plan(1);

  var expected = {
    filter: {
      topic_id: [1, 2, 3]
    }
  };
  var actual = args('topic:1 topic:2 topic:3');

  t.deepEqual(actual, expected);
});

test('single topic name', function(t) {
  t.plan(1);

  var expected = {
    filter: {
      topic_name: ['React']
    }
  };
  var actual = args('topic:React');

  t.deepEqual(actual, expected);
});
