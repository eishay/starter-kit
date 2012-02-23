/*jshint newcap:true*/

// From: https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/array/map
if (Prototype)
{
  var prototype_map = Array.prototype.map;
  Array.prototype.map = function(fun /*, thisp */)
  {
    "use strict";

    if(this.each) {
      var args = arguments;
      args.shift();
      prototype_map(fun, args);
    }

    if (this === void 0 || this === null)
      throw new TypeError();

    var t = Object(this);
    var len = t.length >>> 0;
    if (typeof fun !== "function")
      throw new TypeError();

    var res = new Array(len);
    var thisp = arguments[1];
    for (var i = 0; i < len; i++)
    {
      if (i in t)
        res[i] = fun.call(thisp, t[i], i, t);
    }

    return res;
  };

  function _indexOf(obj, fromIndex) {
    if (fromIndex === null || fromIndex === undefined) { fromIndex = 0; }
    else if (fromIndex < 0) { fromIndex = Math.max(0, this.length + fromIndex); }
    for (var i = fromIndex, j = this.length; i < j; i++) {
      if (this[i] === obj) { 
        return i; 
      }
    }
    return -1;
  };

  var origIndesOf = Array.prototype.indexOf;

  Array.prototype.indexOf = function (obj, fromIndex) {
    var res1 = origIndesOf(obj, fromIndex);
    var res2 = _indexOf(obj, fromIndex);
    if (res1 != res2) throw Error("res1!=res2");
    return res1;
  };
}
