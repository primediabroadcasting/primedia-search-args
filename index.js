var merge = require('lodash.merge');

var pattern = /([a-z]+):([\w-]+|"(?:\\"|[^"])+")/g;

/**
 * @arg {String} input
 * @arg {Object} defaults
 * @return {Object}
 */
module.exports = function(input, defaults) {
  var args = {};

  if (typeof input !== 'string') {
    throw new TypeError();
  }

  if (typeof defaults === 'undefined') {
    defaults = {};
  }

  var searchTerms = [];
  var topicId = [];
  var topicName = [];
  var languageId = [];
  var languageName = [];
  var contactable = null;
  var deceased = null;

  var matches;
  var unmatched = '' + input;

  while ((matches = pattern.exec(input)) !== null) {
    var key = matches[1];
    var value = matches[2].replace(/\"/g, '');

    if (key && value) {

      unmatched = unmatched.replace(matches[0], '');

      if (key === 'direction' && value === 'a-z') {
        args.direction = 'asc';
      }

      if (key === 'direction' && value === 'z-a') {
        args.direction = 'desc';
      }

      if (key === 'is' && value === 'contactable') {
        contactable = true;
      }

      if (key === 'not' && value === 'contactable') {
        contactable = false;
      }

      if (key === 'is' && value === 'deceased') {
        deceased = true;
      }

      if (key === 'not' && value === 'deceased') {
        deceased = false;
      }

      if (key === 'topic' && value.length > 0) {
        if (value.match(/\d+/)) {
          topicId.push(parseInt(value));
        } else {
          topicName.push(value);
        }
      }

      if (key === 'language' && value.length > 0) {
        if (value.match(/\d+/)) {
          languageId.push(parseInt(value));
        } else {
          languageName.push(value);
        }
      }

    }

  }

  if (unmatched.trim().length > 0) {
    searchTerms = unmatched.trim().split(' ');
  }

  if (searchTerms.length > 0) {
    args.search = {terms: searchTerms};
  }

  if (contactable !== null ||
      deceased !== null ||
      topicId.length > 0 ||
      topicName.length > 0 ||
      languageId.length > 0 ||
      languageName.length > 0) {
    args.filter = {};
  }

  if (contactable !== null) {
    args.filter.contactable = contactable;
  }

  if (deceased !== null) {
    args.filter.deceased = deceased;
  }

  if (topicId.length > 0) {
    topicId.sort();
    args.filter.topic_id = topicId;
  }

  if (topicName.length > 0) {
    topicName.sort();
    args.filter.topic_name = topicName;
  }

  if (languageId.length > 0) {
    languageId.sort();
    args.filter.language_id = languageId;
  }

  if (languageName.length > 0) {
    languageName.sort();
    args.filter.language_name = languageName;
  }

  return merge(defaults, args);
};
