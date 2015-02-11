var args = require('./index');

var examples = [
  'Wayne Ashley Berry',
  'topic:Typography topic:"Robot Wars"',
  'is:contactable language:1 language:English Shawn',
  'not:contactable direction:a-z',
  'direction:z-a is:deceased'
];

examples.forEach(function(example) {
  console.log('```javascript');
  console.log('args(\'' + example + '\');');
  console.log('```');
  console.log('');
  console.log('```json');
  console.log(JSON.stringify(args(example), null, 2));
  console.log('```');
  console.log('');
  console.log('---');
  console.log('');
});
