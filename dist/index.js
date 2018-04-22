"use strict";

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// import DeepFlat from "deep-flat";
// export {DeepFlat};
function getFlatArray(arr) {
  var deepFlatten = function deepFlatten(arr) {
    var _ref;

    return (_ref = []).concat.apply(_ref, _toConsumableArray(arr.map(function (v) {
      return Array.isArray(v) ? deepFlatten(v) : v;
    })));
  };
  return deepFlatten;
}
module.exports(getFlatArray);
//# sourceMappingURL=index.js.map