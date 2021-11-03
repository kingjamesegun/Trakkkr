"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _userType = require("./userType");

Object.keys(_userType).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _userType[key];
    }
  });
});