var pattern = /([a-z]+):([\w-]+|"(?:\\"|[^"])+")/g;
var input = 'topic:Foo topic:"Bar" topic:"Flux Capacitor" topic:2';

var matches;

while ((matches = pattern.exec(input)) !== null) {
  console.log(matches[1] + ':' + matches[2].replace(/\"/g, ''));
}
