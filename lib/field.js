'use strict';

var keyDict = {};
var nameDict = {};

function Field(data) {
  this.key = data.id;
  this.name = data.name;
  this.custom = data.custom;

  data.schema = data.schema || {};

  var customId = data.schema.customId;
  if (customId)
    this.customId = customId;

  keyDict[this.key] = this;
  nameDict[this.name] = this;
}

Field.forge = function(data) {
  return new Field(data);
};

Field.getKey = function(name) {
  return nameDict[name].key;
};

Field.getName = function(key) {
  return keyDict[key].name;
}

module.exports = Field;