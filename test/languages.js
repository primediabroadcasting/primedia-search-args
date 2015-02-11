var test = require('tape');
var args = require('../index');

test('single language id', function(t) {
  t.plan(1);

  var expected = {
    filter: {
      language_id: [1]
    }
  };

  var actual = args('language:1');

  t.deepEqual(actual, expected);
});

test('multiple language ids', function(t) {
  t.plan(1);

  var expected = {
    filter: {
      language_id: [1, 2, 3]
    }
  };

  var actual = args('language:1 language:2 language:3');

  t.deepEqual(actual, expected);
});

test('single language name', function(t) {
  t.plan(1);

  var expected = {
    filter: {
      language_name: ['React']
    }
  };

  var actual = args('language:React');

  t.deepEqual(actual, expected);
});

test('quoted', function(t) {
  t.plan(1);

  var expected = {
    filter: {
      language_name: ['Foo Bar']
    }
  };

  var actual = args('language:"Foo Bar"');

  t.deepEqual(actual, expected);
});

test('mixture', function(t) {
  t.plan(1);

  var expected = {
    filter: {
      language_name: ['Bar', 'Foo', 'Zoo Foo'],
      language_id: [1, 2],
    }
  };

  var actual = args('language:"Zoo Foo" language:Bar language:"Foo" language:2 language:1');

  t.deepEqual(actual, expected);
});
