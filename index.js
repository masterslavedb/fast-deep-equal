'use strict';

function deepEqual(item1, item2) {
  var i;
  if (item1 === item2) {
    return true;
  }

  if (!(item1 instanceof Object)) {
    return item1 === item2;
  } else if (item1 instanceof Array && item2 instanceof Array) {
    if (item1.length !== item2.length) {
      return false;
    }
    i = item1.length;
    while (i--) {
      var item1val = item1[i];
      var item2val = item2[i];
      if (item1val !== item2val && !deepEqual(item1val, item2val)) {
        return false;
      }
    }
  } else if (item1 instanceof Object && item2 instanceof Object) {
    var keys1 = Object.keys(item1);
    var keys2 = Object.keys(item2);
    var l = keys1.length;
    if (l !== keys2.length) {
      return false;
    }
    var keys2Hash = {};
    i = l;
    while (i--) {
      keys2Hash[keys2[i]] = true;
    }
    i = l;
    while (i--) {
      if (!keys2Hash[keys1[i]]) {
        return false;
      }
    }
    i = l;
    while (i--) {
      var item1val = item1[keys1[i]];
      var item2val = item2[keys1[i]];
      if (item1val !== item2val && !deepEqual(item1val, item2val)) {
        return false;
      }
    }
  } else {
    return false;
  }

  return true;
}

module.exports = deepEqual;
