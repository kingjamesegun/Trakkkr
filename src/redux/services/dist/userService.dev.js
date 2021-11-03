"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userService = void 0;

var _helpers = require("../_helpers");

var userService = {
  register: register
};
exports.userService = userService;

function register(user) {
  var requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  };
  return fetch("".concat(config.apiUrl, "/users/register"), requestOptions).then(handleResponse);
}