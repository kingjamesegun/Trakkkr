"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userActions = exports.register = void 0;

var _actionTypes = require("../actionTypes");

var _api = _interopRequireDefault(require("../api"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// function register(user) {
//     return dispatch => {
//         dispatch(request(user));
//         userService.register(user)
//             .then(
//                 user => { 
//                     dispatch(success());
//                     history.push('/login');
//                     dispatch(alertActions.success('Registration successful'));
//                 },
//                 error => {
//                     dispatch(failure(error.toString()));
//                     dispatch(alertActions.error(error.toString()));
//                 }
//             );
//     };
//     function request(user) { return { type: userTypes.REGISTER_REQUEST, user } }
//     function success(user) { return { type: userTypes.REGISTER_SUCCESS, user } }
//     function failure(error) { return { type: userTypes.REGISTER_FAILURE, error } }
// }
var register = function register() {
  return function _callee(dispatch, getStae) {
    var response;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return regeneratorRuntime.awrap(_api["default"].post('/user/register/'));

          case 2:
            response = _context.sent;

            try {
              dispatch({
                type: _actionTypes.userTypes.REGISTER_SUCCESS,
                payload: response
              });
            } catch (error) {
              dispatch({
                type: _actionTypes.userTypes.REGISTER_FAILURE,
                payload: response
              });
            }

          case 4:
          case "end":
            return _context.stop();
        }
      }
    });
  };
};

exports.register = register;
var userActions = {
  register: register
};
exports.userActions = userActions;