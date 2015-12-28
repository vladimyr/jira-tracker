'use strict';

var Promise = require('bluebird');
var _ = require('lodash');
var IssueType = require('./issue-type.js');
var Field = require('./field.js');
var Issue = require('./issue.js');
var Epic = require('./epic.js');

var JiraClient = require('jira').JiraApi;
Promise.promisifyAll(JiraClient.prototype);

var API_VERSION = '2';

function Client(options) {
  this._jira = new JiraClient('https', options.host, '443',
    options.user, options.password, API_VERSION);

  Issue.customFields = {};
}

Client.prototype._loadCustomFields = function() {
  return this._jira.listFieldsAsync()
    .map(Field.forge)
    .thenReturn(this);
};

Client.prototype._loadIssueTypes = function() {
  return this._jira.listIssueTypesAsync()
    .map(IssueType.forge)
    .thenReturn(this);
};

Client.prototype._loadEpics = function() {
  var options = {
    fields: [ 'key', 'summary', 'description', Field.getKey('Epic Colour') ]
  };

  // TODO: ensure that all objects are loaded (pagination is used)
  return this._jira.searchJiraAsync('issuetype=Epic', options)
    .then(function complete(resp) {
      return resp.issues;
    })
    .map(Epic.forge);
}

Client.prototype._load = function() {
  return this._loadCustomFields()
    .then(this._loadIssueTypes.bind(this))
    .then(this._loadEpics.bind(this))
    .thenReturn(this);
}

Client.prototype.getIssue = function(key) {
  return this._jira.findIssueAsync(key)
    .then(Issue.forge);
};

Client.forge = function(options) {
  var client = new Client(options);
  return client._load();
};

module.exports = Client;
