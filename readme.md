[![Next](http://www.wearenext.co.za/assets/images/logos/logo-next-dark-57x22.png)](http://www.wearenext.co.za)

# Primedia Search Args

[![npm](https://img.shields.io/npm/v/@primediabroadcasting/search-args.svg?style=flat)](https://www.npmjs.com/package/@primediabroadcasting/search-args)
[![Dependency Status](https://david-dm.org/primediabroadcasting/primedia-search-args/status.svg?style=flat)](https://david-dm.org/primediabroadcasting/primedia-search-args#info=dependencies)
[![devDependency Status](https://david-dm.org/primediabroadcasting/primedia-search-args/dev-status.svg?style=flat)](https://david-dm.org/primediabroadcasting/primedia-search-args#info=devDependencies)

## Installation

```sh
❯ npm install --save @primediabroadcasting/search-args
```

```javascript
var args = require('@primediabroadcasting/search-args');
args('...');
```

### Examples

```javascript
args('Wayne Ashley Berry');
```

```json
{
  "search": {
    "terms": [
      "Wayne",
      "Ashley",
      "Berry"
    ]
  }
}
```

---

```javascript
args('topic:Typography topic:"Robot Wars"');
```

```json
{
  "filter": {
    "topic_name": [
      "Robot Wars",
      "Typography"
    ]
  }
}
```

---

```javascript
args('is:contactable language:1 language:English Shawn');
```

```json
{
  "search": {
    "terms": [
      "Shawn"
    ]
  },
  "filter": {
    "contactable": true,
    "language_id": [
      1
    ],
    "language_name": [
      "English"
    ]
  }
}
```

---

```javascript
args('not:contactable direction:a-z');
```

```json
{
  "direction": "asc",
  "filter": {
    "contactable": false
  }
}
```

---

```javascript
args('direction:z-a is:deceased');
```

```json
{
  "direction": "desc",
  "filter": {
    "deceased": true
  }
}
```
