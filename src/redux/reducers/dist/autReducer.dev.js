"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registration = registration;
exports["default"] = void 0;

var _actionTypes = require("../actionTypes");

function registration() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actionTypes.userTypes.REGISTER_REQUEST:
      return {
        registering: true
      };

    case _actionTypes.userTypes.REGISTER_SUCCESS:
      return {};

    case _actionTypes.userTypes.REGISTER_FAILURE:
      return {};

    default:
      return state;
  }
}

var _default = registration;
exports["default"] = _default;