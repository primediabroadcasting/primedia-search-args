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

test('quoted', function(t) {
  t.plan(1);

  var expected = {
    filter: {
      topic_name: ['Flux Capacitor']
    }
  };

  var actual = args('topic:"Flux Capacitor"');

  t.deepEqual(actual, expected);
});

test('mixture', function(t) {
  t.plan(1);

  var expected = {
    filter: {
      topic_id: [1337],
      topic_name: ['Design', 'Flux Capacitor']
    }
  };

  var actual = args('topic:1337 topic:Design topic:"Flux Capacitor"');

  t.deepEqual(actual, expected);
});
