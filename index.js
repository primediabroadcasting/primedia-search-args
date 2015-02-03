var merge = require('lodash.merge');

var PRIMARY_DELIMITER = ' ';
var SECONDARY_DELIMITER = ':';

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

  var terms = input.split(PRIMARY_DELIMITER);

  var searchTerms = [];
  var topicId = [];
  var topicName = [];
  var languageId = [];
  var languageName = [];
  var contactable = null;
  var deceased = null;

  terms.forEach(function(term, index) {
    var parts = term.split(SECONDARY_DELIMITER);

    if (term.length === 0) {
      return;
    }

    if (parts.length === 1) {
      searchTerms.push(term);
      return;
    }

    if (parts[0] === 'direction' && parts[1] === 'a-z') {
      args.direction = 'asc';
    }

    if (parts[0] === 'direction' && parts[1] === 'z-a') {
      args.direction = 'desc';
    }

    if (parts[0] === 'is' && parts[1] === 'contactable') {
      contactable = true;
    }

    if (parts[0] === 'not' && parts[1] === 'contactable') {
      contactable = false;
    }

    if (parts[0] === 'is' && parts[1] === 'deceased') {
      deceased = true;
    }

    if (parts[0] === 'not' && parts[1] === 'deceased') {
      deceased = false;
    }

    if (parts[0] === 'topic' && parts[1].length > 0) {
      if (parts[1].match(/\d+/)) {
        topicId.push(parseInt(parts[1]));
      } else {
        topicName.push(parts[1]);
      }
    }

    if (parts[0] === 'language' && parts[1].length > 0) {
      if (parts[1].match(/\d+/)) {
        languageId.push(parseInt(parts[1]));
      } else {
        languageName.push(parts[1]);
      }
    }

  });

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
    args.filter.topic_id = topicId;
  }

  if (topicName.length > 0) {
    args.filter.topic_name = topicName;
  }

  if (languageId.length > 0) {
    args.filter.language_id = languageId;
  }

  if (languageName.length > 0) {
    args.filter.language_name = languageName;
  }

  return merge(defaults, args);
};
