webpackHotUpdate_N_E("pages/_app",{

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _asyncToGenerator; });\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n  try {\n    var info = gen[key](arg);\n    var value = info.value;\n  } catch (error) {\n    reject(error);\n    return;\n  }\n\n  if (info.done) {\n    resolve(value);\n  } else {\n    Promise.resolve(value).then(_next, _throw);\n  }\n}\n\nfunction _asyncToGenerator(fn) {\n  return function () {\n    var self = this,\n        args = arguments;\n    return new Promise(function (resolve, reject) {\n      var gen = fn.apply(self, args);\n\n      function _next(value) {\n        asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n      }\n\n      function _throw(err) {\n        asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n      }\n\n      _next(undefined);\n    });\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FzeW5jVG9HZW5lcmF0b3IuanM/YWUwZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0EiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXN5bmNUb0dlbmVyYXRvci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywga2V5LCBhcmcpIHtcbiAgdHJ5IHtcbiAgICB2YXIgaW5mbyA9IGdlbltrZXldKGFyZyk7XG4gICAgdmFyIHZhbHVlID0gaW5mby52YWx1ZTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZWplY3QoZXJyb3IpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChpbmZvLmRvbmUpIHtcbiAgICByZXNvbHZlKHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oX25leHQsIF90aHJvdyk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2FzeW5jVG9HZW5lcmF0b3IoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICAgIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciBnZW4gPSBmbi5hcHBseShzZWxmLCBhcmdzKTtcblxuICAgICAgZnVuY3Rpb24gX25leHQodmFsdWUpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcIm5leHRcIiwgdmFsdWUpO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBfdGhyb3coZXJyKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJ0aHJvd1wiLCBlcnIpO1xuICAgICAgfVxuXG4gICAgICBfbmV4dCh1bmRlZmluZWQpO1xuICAgIH0pO1xuICB9O1xufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\n");

/***/ }),

/***/ "./src/hooks/view/useRotateNav.tsx":
/*!*****************************************!*\
  !*** ./src/hooks/view/useRotateNav.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_kwon_Desktop_work_kwon_pages_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ \"./node_modules/next/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_kwon_Desktop_work_kwon_pages_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_kwon_Desktop_work_kwon_pages_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_kwon_Desktop_work_kwon_pages_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/bi */ \"./node_modules/react-icons/bi/index.esm.js\");\n/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-spring */ \"./node_modules/react-spring/web.js\");\n/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! theme-ui */ \"./node_modules/theme-ui/dist/index.esm.js\");\n/* harmony import */ var _libs_rotate_rotatePolygon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../libs/rotate/rotatePolygon */ \"./src/libs/rotate/rotatePolygon.js\");\n\n\n\n\n\nvar _jsxFileName = \"/Users/kwon/Desktop/work/kwon-pages/src/hooks/view/useRotateNav.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar useRotateNav = function useRotateNav() {\n  _s();\n\n  var main = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useRef\"])(null);\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(false),\n      onNav = _useState[0],\n      setOnNav = _useState[1];\n\n  var props = Object(react_spring__WEBPACK_IMPORTED_MODULE_5__[\"useSpring\"])({\n    delay: 100,\n    to: function () {\n      var _to = Object(_Users_kwon_Desktop_work_kwon_pages_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_Users_kwon_Desktop_work_kwon_pages_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(next) {\n        return _Users_kwon_Desktop_work_kwon_pages_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                if (false) {}\n\n                _context.next = 3;\n                return next({\n                  radians: 2 * Math.PI\n                });\n\n              case 3:\n                _context.next = 0;\n                break;\n\n              case 5:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      function to(_x) {\n        return _to.apply(this, arguments);\n      }\n\n      return to;\n    }(),\n    from: {\n      radians: 0\n    },\n    config: {\n      duration: 300\n    },\n    reset: true\n  });\n\n  var handleClick = function handleClick() {\n    setOnNav(!onNav);\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    document.body.style.position = onNav ? 'fixed' : 'static';\n  }, [onNav]);\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    new _libs_rotate_rotatePolygon__WEBPACK_IMPORTED_MODULE_7__[\"default\"]({\n      container: main.current,\n      type: 'horizon',\n      sides: 15\n    });\n  }, []);\n\n  var renderCanvas = function renderCanvas() {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(theme_ui__WEBPACK_IMPORTED_MODULE_6__[\"Box\"], {\n        sx: {\n          width: '100%',\n          position: 'fixed',\n          bottom: 0,\n          py: 3,\n          textAlign: 'center',\n          zIndex: 100\n        },\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_spring__WEBPACK_IMPORTED_MODULE_5__[\"animated\"].h1, {\n          style: props,\n          children: \"hello\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 47,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(theme_ui__WEBPACK_IMPORTED_MODULE_6__[\"Button\"], {\n          variant: \"naked\",\n          onClick: handleClick,\n          children: onNav ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_bi__WEBPACK_IMPORTED_MODULE_4__[\"BiChevronsDown\"], {\n            fontSize: 40\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 49,\n            columnNumber: 22\n          }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_bi__WEBPACK_IMPORTED_MODULE_4__[\"BiChevronsUp\"], {\n            fontSize: 40\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 49,\n            columnNumber: 57\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 48,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(theme_ui__WEBPACK_IMPORTED_MODULE_6__[\"Box\"], {\n        ref: main,\n        sx: {\n          position: 'absolute',\n          display: onNav ? 'block' : 'none'\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true);\n  };\n\n  return {\n    renderCanvas: renderCanvas\n  };\n};\n\n_s(useRotateNav, \"7Zl7rkaPR7qwXV1Tm1D3HCxGGMI=\", false, function () {\n  return [react_spring__WEBPACK_IMPORTED_MODULE_5__[\"useSpring\"]];\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (useRotateNav);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2hvb2tzL3ZpZXcvdXNlUm90YXRlTmF2LnRzeD9mMWZmIl0sIm5hbWVzIjpbInVzZVJvdGF0ZU5hdiIsIm1haW4iLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIm9uTmF2Iiwic2V0T25OYXYiLCJwcm9wcyIsInVzZVNwcmluZyIsImRlbGF5IiwidG8iLCJuZXh0IiwicmFkaWFucyIsIk1hdGgiLCJQSSIsImZyb20iLCJjb25maWciLCJkdXJhdGlvbiIsInJlc2V0IiwiaGFuZGxlQ2xpY2siLCJ1c2VFZmZlY3QiLCJkb2N1bWVudCIsImJvZHkiLCJzdHlsZSIsInBvc2l0aW9uIiwiUm90YXRlUG9seWdvbiIsImNvbnRhaW5lciIsImN1cnJlbnQiLCJ0eXBlIiwic2lkZXMiLCJyZW5kZXJDYW52YXMiLCJ3aWR0aCIsImJvdHRvbSIsInB5IiwidGV4dEFsaWduIiwiekluZGV4IiwiZGlzcGxheSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQUE7O0FBQ3pCLE1BQU1DLElBQUksR0FBR0Msb0RBQU0sQ0FBQyxJQUFELENBQW5COztBQUR5QixrQkFFQ0Msc0RBQVEsQ0FBQyxLQUFELENBRlQ7QUFBQSxNQUVsQkMsS0FGa0I7QUFBQSxNQUVYQyxRQUZXOztBQUl6QixNQUFNQyxLQUFLLEdBQUdDLDhEQUFTLENBQUM7QUFDdEJDLFNBQUssRUFBRSxHQURlO0FBRXRCQyxNQUFFO0FBQUEscVVBQUUsaUJBQU9DLElBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsdUJBQ2NBLElBQUksQ0FBQztBQUFFQyx5QkFBTyxFQUFFLElBQUlDLElBQUksQ0FBQ0M7QUFBcEIsaUJBQUQsQ0FEbEI7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUY7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsT0FGb0I7QUFLdEJDLFFBQUksRUFBRTtBQUFFSCxhQUFPLEVBQUU7QUFBWCxLQUxnQjtBQU10QkksVUFBTSxFQUFFO0FBQUVDLGNBQVEsRUFBRTtBQUFaLEtBTmM7QUFPdEJDLFNBQUssRUFBRTtBQVBlLEdBQUQsQ0FBdkI7O0FBVUEsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUN4QmIsWUFBUSxDQUFDLENBQUNELEtBQUYsQ0FBUjtBQUNELEdBRkQ7O0FBSUFlLHlEQUFTLENBQUMsWUFBTTtBQUNkQyxZQUFRLENBQUNDLElBQVQsQ0FBY0MsS0FBZCxDQUFvQkMsUUFBcEIsR0FBK0JuQixLQUFLLEdBQUcsT0FBSCxHQUFhLFFBQWpEO0FBQ0QsR0FGUSxFQUVOLENBQUNBLEtBQUQsQ0FGTSxDQUFUO0FBSUFlLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUlLLGtFQUFKLENBQWtCO0FBQUVDLGVBQVMsRUFBRXhCLElBQUksQ0FBQ3lCLE9BQWxCO0FBQTJCQyxVQUFJLEVBQUUsU0FBakM7QUFBNENDLFdBQUssRUFBRTtBQUFuRCxLQUFsQjtBQUNELEdBRlEsRUFFTixFQUZNLENBQVQ7O0FBSUEsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUN6Qix3QkFDRTtBQUFBLDhCQUNFLHFFQUFDLDRDQUFEO0FBQ0UsVUFBRSxFQUFFO0FBQ0ZDLGVBQUssRUFBRSxNQURMO0FBRUZQLGtCQUFRLEVBQUUsT0FGUjtBQUdGUSxnQkFBTSxFQUFFLENBSE47QUFJRkMsWUFBRSxFQUFFLENBSkY7QUFLRkMsbUJBQVMsRUFBRSxRQUxUO0FBTUZDLGdCQUFNLEVBQUU7QUFOTixTQUROO0FBQUEsZ0NBVUUscUVBQUMscURBQUQsQ0FBVSxFQUFWO0FBQWEsZUFBSyxFQUFFNUIsS0FBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBVkYsZUFXRSxxRUFBQywrQ0FBRDtBQUFRLGlCQUFPLEVBQUMsT0FBaEI7QUFBd0IsaUJBQU8sRUFBRVksV0FBakM7QUFBQSxvQkFDR2QsS0FBSyxnQkFBRyxxRUFBQyw2REFBRDtBQUFnQixvQkFBUSxFQUFFO0FBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQUgsZ0JBQXNDLHFFQUFDLDJEQUFEO0FBQWMsb0JBQVEsRUFBRTtBQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRDlDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFnQkUscUVBQUMsNENBQUQ7QUFBSyxXQUFHLEVBQUVILElBQVY7QUFBZ0IsVUFBRSxFQUFFO0FBQUVzQixrQkFBUSxFQUFFLFVBQVo7QUFBd0JZLGlCQUFPLEVBQUUvQixLQUFLLEdBQUcsT0FBSCxHQUFhO0FBQW5EO0FBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFoQkY7QUFBQSxvQkFERjtBQW9CRCxHQXJCRDs7QUFzQkEsU0FBTztBQUFFeUIsZ0JBQVksRUFBWkE7QUFBRixHQUFQO0FBQ0QsQ0FqREQ7O0dBQU03QixZO1VBSVVPLHNEOzs7QUErQ0RQLDJFQUFmIiwiZmlsZSI6Ii4vc3JjL2hvb2tzL3ZpZXcvdXNlUm90YXRlTmF2LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEJpQ2hldnJvbnNVcCwgQmlDaGV2cm9uc0Rvd24gfSBmcm9tICdyZWFjdC1pY29ucy9iaSdcbmltcG9ydCB7IHVzZVNwcmluZywgYW5pbWF0ZWQgfSBmcm9tICdyZWFjdC1zcHJpbmcnXG5pbXBvcnQgeyBCb3gsIEJ1dHRvbiB9IGZyb20gJ3RoZW1lLXVpJ1xuXG5pbXBvcnQgUm90YXRlUG9seWdvbiBmcm9tICcuLi8uLi9saWJzL3JvdGF0ZS9yb3RhdGVQb2x5Z29uJ1xuXG5jb25zdCB1c2VSb3RhdGVOYXYgPSAoKSA9PiB7XG4gIGNvbnN0IG1haW4gPSB1c2VSZWYobnVsbClcbiAgY29uc3QgW29uTmF2LCBzZXRPbk5hdl0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICBjb25zdCBwcm9wcyA9IHVzZVNwcmluZyh7XG4gICAgZGVsYXk6IDEwMCxcbiAgICB0bzogYXN5bmMgKG5leHQpID0+IHtcbiAgICAgIHdoaWxlICgxKSBhd2FpdCBuZXh0KHsgcmFkaWFuczogMiAqIE1hdGguUEkgfSlcbiAgICB9LFxuICAgIGZyb206IHsgcmFkaWFuczogMCB9LFxuICAgIGNvbmZpZzogeyBkdXJhdGlvbjogMzAwIH0sXG4gICAgcmVzZXQ6IHRydWUsXG4gIH0pXG5cbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XG4gICAgc2V0T25OYXYoIW9uTmF2KVxuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnBvc2l0aW9uID0gb25OYXYgPyAnZml4ZWQnIDogJ3N0YXRpYydcbiAgfSwgW29uTmF2XSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIG5ldyBSb3RhdGVQb2x5Z29uKHsgY29udGFpbmVyOiBtYWluLmN1cnJlbnQsIHR5cGU6ICdob3Jpem9uJywgc2lkZXM6IDE1IH0pXG4gIH0sIFtdKVxuXG4gIGNvbnN0IHJlbmRlckNhbnZhcyA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAgPEJveFxuICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgICAgICAgICBib3R0b206IDAsXG4gICAgICAgICAgICBweTogMyxcbiAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgICAgICB6SW5kZXg6IDEwMCxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPGFuaW1hdGVkLmgxIHN0eWxlPXtwcm9wc30+aGVsbG88L2FuaW1hdGVkLmgxPlxuICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cIm5ha2VkXCIgb25DbGljaz17aGFuZGxlQ2xpY2t9PlxuICAgICAgICAgICAge29uTmF2ID8gPEJpQ2hldnJvbnNEb3duIGZvbnRTaXplPXs0MH0gLz4gOiA8QmlDaGV2cm9uc1VwIGZvbnRTaXplPXs0MH0gLz59XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvQm94PlxuICAgICAgICA8Qm94IHJlZj17bWFpbn0gc3g9e3sgcG9zaXRpb246ICdhYnNvbHV0ZScsIGRpc3BsYXk6IG9uTmF2ID8gJ2Jsb2NrJyA6ICdub25lJyB9fSAvPlxuICAgICAgPC8+XG4gICAgKVxuICB9XG4gIHJldHVybiB7IHJlbmRlckNhbnZhcyB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZVJvdGF0ZU5hdlxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/hooks/view/useRotateNav.tsx\n");

/***/ })

})