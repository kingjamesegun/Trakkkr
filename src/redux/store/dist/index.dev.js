"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _redux = require("redux");

var _productReducer = _interopRequireDefault(require("../reducers/productReducer"));

var _autReducer = _interopRequireDefault(require("../reducers/autReducer"));

var _reduxThunk = _interopRequireDefault(require("redux-thunk"));

var _reduxLogger = require("redux-logger");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var reducer = (0, _redux.combineReducers)({
  products: _productReducer["default"],
  users: _autReducer["default"]
});
var loggerMiddleware = (0, _reduxLogger.createLogger)();
var initialState = {};
var enhancers = (0, _redux.compose)((0, _redux.applyMiddleware)(_reduxThunk["default"], loggerMiddleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
var store = (0, _redux.createStore)(reducer, initialState, enhancers);
var _default = store;
exports["default"] = _default;