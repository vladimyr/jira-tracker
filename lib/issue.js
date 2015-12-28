'use strict';

var _ = require('lodash');
var Field = require('./field.js');
var Epic = require('./epic.js');
var IssueType = require('./issue-type.js');

function Issue(data) {
  this._url = data.self;

  this.key = data.key;
  this.id = data.id;

  var fields = data.fields;
  this._fields = fields;

  this.name = fields.summary;
  this.description = fields.description;
  
  this.type = IssueType.getById(fields.issuetype.id);
  this.priority = fields.priority.name;

  this.createdAt = new Date(fields.created);
  this.updatedAt = new Date(fields.updated);
  
  this.status = fields.status.name;

  this.assignee = fields.assignee.displayName;
  this.creator = fields.creator.displayName;
  this.reporter = fields.reporter.displayName;

  this.projectKey = fields.project.key;

  var epicKey = fields[Field.getKey('Epic Link')];
  if (epicKey)
    this.parentEpic = Epic.getByKey(epicKey);
}

Issue.prototype.toJSON = function() {
  return {
    id: this.id,
    key: this.key,
    name: this.name,
    description: this.description,
    type: this.type,
    priority: this.priority,
    createdAt: this.createdAt,
    updatedAt: this.updatedAt,
    status: this.status,
    assignee: this.assignee,
    creator: this.creator,
    reporter: this.reporter,
    projectKey: this.projectKey,
    parentEpic: this.parentEpic
  };
};

Issue.forge = function(data) {
  return new Issue(data);
};

module.exports = Issue;
