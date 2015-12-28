'use strict';

var colors = {
  'ghx-label-0': {
    textColor: '#fff',
    backgroundColor: '#707070',
    borderColor: '#707070'
  },
  'ghx-label-1': {
    textColor: '#fff',
    backgroundColor: '#815b3a',
    borderColor: '#815b3a'
  },
  'ghx-label-2': {
    textColor: '#fff',
    backgroundColor: '#f79232',
    borderColor: '#f79232'
  },
  'ghx-label-3': {
    textColor: '#fff',
    backgroundColor: '#d39c3f',
    borderColor: '#d39c3f'
  },
  'ghx-label-4': {
    textColor: '#fff',
    backgroundColor: '#3b7fc4',
    borderColor: '#3b7fc4'
  },
  'ghx-label-5': {
    textColor: '#fff',
    backgroundColor: '#4a6785',
    borderColor: '#4a6785'
  },
  'ghx-label-6': {
    textColor: '#fff',
    backgroundColor: '#8eb021',
    borderColor: '#8eb021'
  },
  'ghx-label-7': {
    textColor: '#fff',
    backgroundColor: '#ac707a',
    borderColor: '#ac707a'
  },
  'ghx-label-8': {
    textColor: '#fff',
    backgroundColor: '#654982',
    borderColor: '#654982'
  },
  'ghx-label-9': {
    textColor: '#fff',
    backgroundColor: '#f15c75',
    borderColor: '#f15c75'
  }
};

function getColorData(key) {
  return colors[key];
}

module.exports = {
  getColorData: getColorData
};