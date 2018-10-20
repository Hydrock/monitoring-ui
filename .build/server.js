require("source-map-support").install();
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./server/index.js":
/*!*************************!*\
  !*** ./server/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-polyfill */ "babel-polyfill");
/* harmony import */ var babel_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_polyfill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _monitor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./monitor */ "./server/monitor.js");
 //import * as config from 'config';



var monitor = new _monitor__WEBPACK_IMPORTED_MODULE_2__["Monitor"]();
monitor.on(_monitor__WEBPACK_IMPORTED_MODULE_2__["NewCheckResultsEvent"], function () {
  console.log(1111111111, 2222222, 33333);
}); //monitor.on(NewCheckResultsEvent, errorsCounter.onNewCheckResult);

monitor.start();

function onExit(reason) {
  console.log('Exit because of', reason); // restInterface.stop();

  monitor.stop(); //slackBot.stop();

  process.exit();
}

process.on('exit', onExit);
process.on('SIGINT', onExit);
process.on('SIGUSR1', onExit);
process.on('SIGUSR2', onExit);

/***/ }),

/***/ "./server/jest-checker.js":
/*!********************************!*\
  !*** ./server/jest-checker.js ***!
  \********************************/
/*! exports provided: runTests */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "runTests", function() { return runTests; });
/* harmony import */ var child_process__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! child_process */ "child_process");
/* harmony import */ var child_process__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(child_process__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! util */ "util");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_3__);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




 // import { TestsResults } from '../shared/models';
// отдельный процесс для запуска тестов и получения результатов

function spawnAsync(command, args, options) {
  // 'npm', ['run', 'test']
  var spawned = child_process__WEBPACK_IMPORTED_MODULE_0__["spawn"](command, args, options);
  var stdout = '';
  var stderr = '';
  return new Promise(function (resolve) {
    // при выводе в процессе данных - выводим их в консоль
    spawned.stdout.on('data', function (data) {
      console.log('jest output: ', data.toString());
      stdout += data;
    });
    spawned.stderr.on('data', function (data) {
      console.log('jest output: ', data.toString());
      stderr += data;
    });
    spawned.on('close', function (code) {
      resolve({
        code: code,
        stdout: stdout,
        stderr: stderr
      });
    });
  });
}

var readFile = util__WEBPACK_IMPORTED_MODULE_2__["promisify"](fs__WEBPACK_IMPORTED_MODULE_1__["readFile"]);
var readDir = util__WEBPACK_IMPORTED_MODULE_2__["promisify"](fs__WEBPACK_IMPORTED_MODULE_1__["readdir"]); // запуск тестов

function runTests(_x, _x2) {
  return _runTests.apply(this, arguments);
}

function _runTests() {
  _runTests = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(screenTimestamp, screensPath) {
    var testProcess, resultOutput, screens;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return spawnAsync('npm', ['run', 'test'], {
              env: _objectSpread({}, process.env, {
                SCREENS_PATH: screensPath
              }),
              encoding: 'utf-8'
            });

          case 2:
            testProcess = _context.sent;
            // читаем результаты
            resultOutput =
            /* await readFile('./test-results.json', 'utf8') */
            '3245235';
            _context.next = 6;
            return readDir(screensPath);

          case 6:
            _context.t0 = function (s) {
              return path__WEBPACK_IMPORTED_MODULE_3__["join"]('screens', screenTimestamp, s);
            };

            screens = _context.sent.map(_context.t0);
            return _context.abrupt("return", {
              stdout: testProcess.stdout,
              stderr: testProcess.stderr,
              results: JSON.parse(resultOutput),
              screens: screens,
              screenTimestamp: screenTimestamp
            });

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _runTests.apply(this, arguments);
}

/***/ }),

/***/ "./server/monitor.js":
/*!***************************!*\
  !*** ./server/monitor.js ***!
  \***************************/
/*! exports provided: NewCheckResultsEvent, CheckFailedEvent, Monitor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewCheckResultsEvent", function() { return NewCheckResultsEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckFailedEvent", function() { return CheckFailedEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Monitor", function() { return Monitor; });
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! events */ "events");
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(events__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mkdirp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mkdirp */ "mkdirp");
/* harmony import */ var mkdirp__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mkdirp__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rimraf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rimraf */ "rimraf");
/* harmony import */ var rimraf__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rimraf__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _jest_checker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./jest-checker */ "./server/jest-checker.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

 // Плагин для инициализации событий

 // like mkdir -p

 // like rm -rf



var NewCheckResultsEvent = 'NewCheckResults';
var CheckFailedEvent = 'CheckFailedEvent';
var Monitor =
/*#__PURE__*/
function (_EventEmitter) {
  _inherits(Monitor, _EventEmitter);

  function Monitor() {
    var _this;

    _classCallCheck(this, Monitor);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Monitor).call(this));
    _this.timeoutId = '';
    _this.interval = 30;
    return _this;
  }

  _createClass(Monitor, [{
    key: "runTests",
    value: function () {
      var _runTests2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var _this2 = this;

        var screenTimestamp, screensPath, testResults;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                console.log('run tests', new Date());
                screenTimestamp = Date.now().toString();
                screensPath = path__WEBPACK_IMPORTED_MODULE_3__["join"](process.cwd(), 'screens', screenTimestamp);
                mkdirp__WEBPACK_IMPORTED_MODULE_1__["sync"](screensPath);
                _context.next = 7;
                return Object(_jest_checker__WEBPACK_IMPORTED_MODULE_4__["runTests"])(screenTimestamp, screensPath);

              case 7:
                testResults = _context.sent;
                this.emit(NewCheckResultsEvent, testResults);
                this.timeoutId = setTimeout(function () {
                  _this2.runTests();
                }, this.interval * 1000);
                _context.next = 17;
                break;

              case 12:
                _context.prev = 12;
                _context.t0 = _context["catch"](0);
                this.emit(CheckFailedEvent);
                console.error(_context.t0);
                throw _context.t0;

              case 17:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 12]]);
      }));

      return function runTests() {
        return _runTests2.apply(this, arguments);
      };
    }()
  }, {
    key: "start",
    value: function () {
      var _start = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                rimraf__WEBPACK_IMPORTED_MODULE_2__["sync"](path__WEBPACK_IMPORTED_MODULE_3__["join"](process.cwd(), 'screens'));
                _context2.next = 3;
                return this.runTests();

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function start() {
        return _start.apply(this, arguments);
      };
    }()
  }, {
    key: "stop",
    value: function stop() {
      clearTimeout(this.timeoutId);
    }
  }]);

  return Monitor;
}(events__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]);

/***/ }),

/***/ 0:
/*!*******************************!*\
  !*** multi ./server/index.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./server/index.js */"./server/index.js");


/***/ }),

/***/ "babel-polyfill":
/*!*********************************!*\
  !*** external "babel-polyfill" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),

/***/ "child_process":
/*!********************************!*\
  !*** external "child_process" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("child_process");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("events");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "mkdirp":
/*!*************************!*\
  !*** external "mkdirp" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mkdirp");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "rimraf":
/*!*************************!*\
  !*** external "rimraf" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rimraf");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("util");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NlcnZlci9qZXN0LWNoZWNrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL21vbml0b3IuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYmFiZWwtcG9seWZpbGxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjaGlsZF9wcm9jZXNzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXZlbnRzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJta2RpcnBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwYXRoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmltcmFmXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidXRpbFwiIl0sIm5hbWVzIjpbIm1vbml0b3IiLCJNb25pdG9yIiwib24iLCJOZXdDaGVja1Jlc3VsdHNFdmVudCIsImNvbnNvbGUiLCJsb2ciLCJzdGFydCIsIm9uRXhpdCIsInJlYXNvbiIsInN0b3AiLCJwcm9jZXNzIiwiZXhpdCIsInNwYXduQXN5bmMiLCJjb21tYW5kIiwiYXJncyIsIm9wdGlvbnMiLCJzcGF3bmVkIiwiY2hpbGRQcm9jZXNzIiwic3Rkb3V0Iiwic3RkZXJyIiwiUHJvbWlzZSIsInJlc29sdmUiLCJkYXRhIiwidG9TdHJpbmciLCJjb2RlIiwicmVhZEZpbGUiLCJ1dGlsIiwiZnMiLCJyZWFkRGlyIiwicnVuVGVzdHMiLCJzY3JlZW5UaW1lc3RhbXAiLCJzY3JlZW5zUGF0aCIsImVudiIsIlNDUkVFTlNfUEFUSCIsImVuY29kaW5nIiwidGVzdFByb2Nlc3MiLCJyZXN1bHRPdXRwdXQiLCJzIiwicGF0aCIsInNjcmVlbnMiLCJtYXAiLCJyZXN1bHRzIiwiSlNPTiIsInBhcnNlIiwiQ2hlY2tGYWlsZWRFdmVudCIsInRpbWVvdXRJZCIsImludGVydmFsIiwiRGF0ZSIsIm5vdyIsImN3ZCIsIm1rZGlycCIsInRlc3RSZXN1bHRzIiwiZW1pdCIsInNldFRpbWVvdXQiLCJlcnJvciIsInJpbXJhZiIsImNsZWFyVGltZW91dCIsIkV2ZW50RW1pdHRlciJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0NBQ0E7O0FBQ0E7QUFFQTtBQUVBLElBQU1BLE9BQU8sR0FBRyxJQUFJQyxnREFBSixFQUFoQjtBQUVBRCxPQUFPLENBQUNFLEVBQVIsQ0FBV0MsNkRBQVgsRUFBaUMsWUFBTTtBQUNuQ0MsU0FBTyxDQUFDQyxHQUFSLENBQVksVUFBWixFQUF3QixPQUF4QixFQUFpQyxLQUFqQztBQUNILENBRkQsRSxDQUdBOztBQUVBTCxPQUFPLENBQUNNLEtBQVI7O0FBRUEsU0FBU0MsTUFBVCxDQUFnQkMsTUFBaEIsRUFBd0I7QUFDcEJKLFNBQU8s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QUEzQjtBQW5CWjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQXdCWSxxQkFBS00sSUFBTCxDQUFVUixnQkFBVjtBQUNBeEMsdUJBQU8sQ0FBQ2tELEtBQVI7QUF6Qlo7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQStCUUMsMkRBQUEsQ0FBWWpCLHlDQUFBLENBQVU1QixPQUFPLENBQUN1QyxHQUFSLEVBQVYsRUFBeUIsU0FBekIsQ0FBWjtBQS9CUjtBQUFBLHVCQWdDYyxLQUFLcEIsUUFBTCxFQWhDZDs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFtQ1c7QUFDSDJCLGtCQUFZLENBQUMsS0FBS1gsU0FBTixDQUFaO0FBQ0g7QUFyQ0w7O0FBQUE7QUFBQSxFQUE2QlksbURBQTdCLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVkEsMkM7Ozs7Ozs7Ozs7O0FDQUEsMEM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsK0I7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsaUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsaUMiLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0ICdiYWJlbC1wb2x5ZmlsbCc7XG4vL2ltcG9ydCAqIGFzIGNvbmZpZyBmcm9tICdjb25maWcnO1xuaW1wb3J0ICogYXMgcGF0aCBmcm9tICdwYXRoJztcblxuaW1wb3J0IHsgTW9uaXRvciwgTmV3Q2hlY2tSZXN1bHRzRXZlbnQsIENoZWNrRmFpbGVkRXZlbnQgfSBmcm9tICcuL21vbml0b3InO1xuXG5jb25zdCBtb25pdG9yID0gbmV3IE1vbml0b3IoLyogY29uZmlnLmdldCgnY2hlY2tDb25maWcuaW50ZXJ2YWwnKSovICk7XG5cbm1vbml0b3Iub24oTmV3Q2hlY2tSZXN1bHRzRXZlbnQsICgpID0+IHtcbiAgICBjb25zb2xlLmxvZygxMTExMTExMTExLCAyMjIyMjIyLCAzMzMzMylcbn0pO1xuLy9tb25pdG9yLm9uKE5ld0NoZWNrUmVzdWx0c0V2ZW50LCBlcnJvcnNDb3VudGVyLm9uTmV3Q2hlY2tSZXN1bHQpO1xuXG5tb25pdG9yLnN0YXJ0KCk7XG5cbmZ1bmN0aW9uIG9uRXhpdChyZWFzb24pIHtcbiAgICBjb25zb2xlLmxvZygnRXhpdCBiZWNhdXNlIG9mJywgcmVhc29uKTtcbiAgICAvLyByZXN0SW50ZXJmYWNlLnN0b3AoKTtcbiAgICBtb25pdG9yLnN0b3AoKTtcbiAgICAvL3NsYWNrQm90LnN0b3AoKTtcbiAgICBwcm9jZXNzLmV4aXQoKTtcbn1cblxucHJvY2Vzcy5vbignZXhpdCcsIG9uRXhpdCk7XG5wcm9jZXNzLm9uKCdTSUdJTlQnLCBvbkV4aXQpO1xucHJvY2Vzcy5vbignU0lHVVNSMScsIG9uRXhpdCk7XG5wcm9jZXNzLm9uKCdTSUdVU1IyJywgb25FeGl0KTtcbiIsImltcG9ydCAqIGFzIGNoaWxkUHJvY2VzcyBmcm9tICdjaGlsZF9wcm9jZXNzJztcbmltcG9ydCAqIGFzIGZzIGZyb20gJ2ZzJztcbmltcG9ydCAqIGFzIHV0aWwgZnJvbSAndXRpbCc7XG5pbXBvcnQgKiBhcyBwYXRoIGZyb20gJ3BhdGgnO1xuLy8gaW1wb3J0IHsgVGVzdHNSZXN1bHRzIH0gZnJvbSAnLi4vc2hhcmVkL21vZGVscyc7XG5cbi8vINC+0YLQtNC10LvRjNC90YvQuSDQv9GA0L7RhtC10YHRgSDQtNC70Y8g0LfQsNC/0YPRgdC60LAg0YLQtdGB0YLQvtCyINC4INC/0L7Qu9GD0YfQtdC90LjRjyDRgNC10LfRg9C70YzRgtCw0YLQvtCyXG5mdW5jdGlvbiBzcGF3bkFzeW5jKGNvbW1hbmQsIGFyZ3MsIG9wdGlvbnMpIHsgLy8gJ25wbScsIFsncnVuJywgJ3Rlc3QnXVxuICAgIGNvbnN0IHNwYXduZWQgPSBjaGlsZFByb2Nlc3Muc3Bhd24oY29tbWFuZCwgYXJncywgb3B0aW9ucyk7XG4gICAgbGV0IHN0ZG91dCA9ICcnO1xuICAgIGxldCBzdGRlcnIgPSAnJztcblxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAvLyDQv9GA0Lgg0LLRi9Cy0L7QtNC1INCyINC/0YDQvtGG0LXRgdGB0LUg0LTQsNC90L3Ri9GFIC0g0LLRi9Cy0L7QtNC40Lwg0LjRhSDQsiDQutC+0L3RgdC+0LvRjFxuICAgICAgICBzcGF3bmVkLnN0ZG91dC5vbignZGF0YScsIChkYXRhKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnamVzdCBvdXRwdXQ6ICcsIGRhdGEudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICBzdGRvdXQgKz0gZGF0YTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgc3Bhd25lZC5zdGRlcnIub24oJ2RhdGEnLCAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2plc3Qgb3V0cHV0OiAnLCBkYXRhLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgc3RkZXJyICs9IGRhdGE7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHNwYXduZWQub24oJ2Nsb3NlJywgKGNvZGUpID0+IHtcbiAgICAgICAgICAgIHJlc29sdmUoe1xuICAgICAgICAgICAgICAgIGNvZGUsXG4gICAgICAgICAgICAgICAgc3Rkb3V0LFxuICAgICAgICAgICAgICAgIHN0ZGVyclxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH0pXG59XG5cbmNvbnN0IHJlYWRGaWxlID0gdXRpbC5wcm9taXNpZnkoZnMucmVhZEZpbGUpO1xuY29uc3QgcmVhZERpciA9IHV0aWwucHJvbWlzaWZ5KGZzLnJlYWRkaXIpO1xuXG4vLyDQt9Cw0L/Rg9GB0Log0YLQtdGB0YLQvtCyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcnVuVGVzdHMoc2NyZWVuVGltZXN0YW1wLCBzY3JlZW5zUGF0aCkge1xuICAgIC8vINC30LDQv9GD0YHQutCw0LXQvCDQtNC+0YfQtdGA0L3QuNC5INC/0YDQvtGG0LXRgdGBIC0g0YLQtdGB0YLRi1xuICAgIC8vINC20LTQtdC8INCy0YvQv9C+0LvQvdC10L3QuNGPXG4gICAgY29uc3QgdGVzdFByb2Nlc3MgPSBhd2FpdCBzcGF3bkFzeW5jKCducG0nLCBbJ3J1bicsICd0ZXN0J10sIHtcbiAgICAgICAgZW52OiB7IC4uLnByb2Nlc3MuZW52LCBTQ1JFRU5TX1BBVEg6IHNjcmVlbnNQYXRoIH0sXG4gICAgICAgIGVuY29kaW5nOiAndXRmLTgnXG4gICAgfSk7XG5cbiAgICAvLyDRh9C40YLQsNC10Lwg0YDQtdC30YPQu9GM0YLQsNGC0YtcbiAgICBjb25zdCByZXN1bHRPdXRwdXQgPSAvKiBhd2FpdCByZWFkRmlsZSgnLi90ZXN0LXJlc3VsdHMuanNvbicsICd1dGY4JykgKi8gJzMyNDUyMzUnO1xuXG4gICAgY29uc3Qgc2NyZWVucyA9IChhd2FpdCByZWFkRGlyKHNjcmVlbnNQYXRoKSkubWFwKHMgPT4gcGF0aC5qb2luKCdzY3JlZW5zJywgc2NyZWVuVGltZXN0YW1wLCBzKSk7XG5cbiAgICAvLyDQstC+0LfQstGA0LDRidCw0LXQvCDRgNC10LfRg9C70YzRgtCw0YLRiyDRgtC10YHRgtC+0LJcbiAgICByZXR1cm4ge1xuICAgICAgICBzdGRvdXQ6IHRlc3RQcm9jZXNzLnN0ZG91dCxcbiAgICAgICAgc3RkZXJyOiB0ZXN0UHJvY2Vzcy5zdGRlcnIsXG4gICAgICAgIHJlc3VsdHM6IEpTT04ucGFyc2UocmVzdWx0T3V0cHV0KSxcbiAgICAgICAgc2NyZWVucyxcbiAgICAgICAgc2NyZWVuVGltZXN0YW1wXG4gICAgfTtcbn0iLCJpbXBvcnQgeyBFdmVudEVtaXR0ZXIgfSBmcm9tICdldmVudHMnOyAvLyDQn9C70LDQs9C40L0g0LTQu9GPINC40L3QuNGG0LjQsNC70LjQt9Cw0YbQuNC4INGB0L7QsdGL0YLQuNC5XG5pbXBvcnQgKiBhcyBta2RpcnAgZnJvbSAnbWtkaXJwJzsgLy8gbGlrZSBta2RpciAtcFxuaW1wb3J0ICogYXMgcmltcmFmIGZyb20gJ3JpbXJhZic7IC8vIGxpa2Ugcm0gLXJmXG5pbXBvcnQgKiBhcyBwYXRoIGZyb20gJ3BhdGgnO1xuXG5pbXBvcnQgeyBydW5UZXN0cyB9IGZyb20gJy4vamVzdC1jaGVja2VyJztcblxuZXhwb3J0IGNvbnN0IE5ld0NoZWNrUmVzdWx0c0V2ZW50ID0gJ05ld0NoZWNrUmVzdWx0cyc7XG5leHBvcnQgY29uc3QgQ2hlY2tGYWlsZWRFdmVudCA9ICdDaGVja0ZhaWxlZEV2ZW50JztcblxuZXhwb3J0IGNsYXNzIE1vbml0b3IgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnRpbWVvdXRJZCA9ICcnO1xuICAgICAgICB0aGlzLmludGVydmFsID0gMzA7XG4gICAgfVxuXG4gICAgYXN5bmMgcnVuVGVzdHMoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygncnVuIHRlc3RzJywgbmV3IERhdGUoKSk7XG5cbiAgICAgICAgICAgIGNvbnN0IHNjcmVlblRpbWVzdGFtcCA9IERhdGUubm93KCkudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIGNvbnN0IHNjcmVlbnNQYXRoID0gcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksICdzY3JlZW5zJywgc2NyZWVuVGltZXN0YW1wKTtcbiAgICAgICAgICAgIG1rZGlycC5zeW5jKHNjcmVlbnNQYXRoKTtcblxuICAgICAgICAgICAgY29uc3QgdGVzdFJlc3VsdHMgPSBhd2FpdCBydW5UZXN0cyhzY3JlZW5UaW1lc3RhbXAsIHNjcmVlbnNQYXRoKTtcblxuICAgICAgICAgICAgdGhpcy5lbWl0KE5ld0NoZWNrUmVzdWx0c0V2ZW50LCB0ZXN0UmVzdWx0cyk7XG5cbiAgICAgICAgICAgIHRoaXMudGltZW91dElkID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5ydW5UZXN0cygpO1xuICAgICAgICAgICAgfSwgdGhpcy5pbnRlcnZhbCAqIDEwMDApO1xuXG4gICAgICAgIH0gY2F0Y2goZSkge1xuICAgICAgICAgICAgdGhpcy5lbWl0KENoZWNrRmFpbGVkRXZlbnQpO1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICAgICAgICAgIHRocm93IGU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBzdGFydCgpIHtcbiAgICAgICAgcmltcmFmLnN5bmMocGF0aC5qb2luKHByb2Nlc3MuY3dkKCksICdzY3JlZW5zJykpO1xuICAgICAgICBhd2FpdCB0aGlzLnJ1blRlc3RzKCk7XG4gICAgfVxuXG4gICAgc3RvcCgpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dElkKTtcbiAgICB9XG59IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYmFiZWwtcG9seWZpbGxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY2hpbGRfcHJvY2Vzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJldmVudHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibWtkaXJwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhdGhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmltcmFmXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInV0aWxcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==