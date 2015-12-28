'use strict';

var issueTypes = {};

function IssueType(data) {
  this.id = data.id;
  this.name = data.name;
  this.description = data.description;
  this.imageUrl = data.iconUrl;

  this._url = data.self;

  issueTypes[this.id] = this;
}

IssueType.forge = function(data) {
  return new IssueType(data);
}

IssueType.getById = function(id) {
  return issueTypes[id];
}

module.exports = IssueType;