'use strict';

var Field = require('./field.js');
var Colors = require('./epic-colors.js');

var epics = {};

function Epic(data) {
  this.id = data.id;
  this.key = data.key;
  this._url = data.self;

  var fields = data.fields;
  this.name = fields.summary;

  var colorFieldKey = Field.getKey('Epic Colour');
  var colorLabel = fields[colorFieldKey];
  this.colors = Colors.getColorData(colorLabel);

  epics[this.key] = this;
}

Epic.forge = function(data) {
  return new Epic(data);
};

Epic.getByKey = function(key) {
  return epics[key];
};

module.exports = Epic;