webpackHotUpdate_N_E("pages/styles",{

/***/ "./src/hooks/helper/useVariables.ts":
/*!******************************************!*\
  !*** ./src/hooks/helper/useVariables.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {var useVariables = function useVariables() {\n  var isBrowser = true;\n  var documentElement = isBrowser ? document.documentElement : {};\n  return {\n    isBrowser: isBrowser,\n    documentElement: documentElement\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (useVariables);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2hvb2tzL2hlbHBlci91c2VWYXJpYWJsZXMudHM/MjZiNCJdLCJuYW1lcyI6WyJ1c2VWYXJpYWJsZXMiLCJpc0Jyb3dzZXIiLCJkb2N1bWVudEVsZW1lbnQiLCJkb2N1bWVudCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSxrREFBTUEsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUN6QixNQUFNQyxTQUFTLE9BQWY7QUFFQSxNQUFNQyxlQUFlLEdBQUdELFNBQVMsR0FBR0UsUUFBUSxDQUFDRCxlQUFaLEdBQThCLEVBQS9EO0FBRUEsU0FBTztBQUFFRCxhQUFTLEVBQVRBLFNBQUY7QUFBYUMsbUJBQWUsRUFBZkE7QUFBYixHQUFQO0FBQ0QsQ0FORDs7QUFRZUYsMkVBQWYiLCJmaWxlIjoiLi9zcmMvaG9va3MvaGVscGVyL3VzZVZhcmlhYmxlcy50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHVzZVZhcmlhYmxlcyA9ICgpID0+IHtcbiAgY29uc3QgaXNCcm93c2VyID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCdcblxuICBjb25zdCBkb2N1bWVudEVsZW1lbnQgPSBpc0Jyb3dzZXIgPyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgOiB7fVxuXG4gIHJldHVybiB7IGlzQnJvd3NlciwgZG9jdW1lbnRFbGVtZW50IH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgdXNlVmFyaWFibGVzXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/hooks/helper/useVariables.ts\n");

/***/ }),

/***/ "./src/hooks/view/useRotatingSquares.tsx":
/*!***********************************************!*\
  !*** ./src/hooks/view/useRotatingSquares.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Users_kwon_Desktop_work_kwon_pages_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var _Users_kwon_Desktop_work_kwon_pages_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! theme-ui */ \"./node_modules/theme-ui/dist/index.esm.js\");\n/* harmony import */ var _components_Atoms_CenteredFlex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~components/Atoms/CenteredFlex */ \"./src/components/Atoms/CenteredFlex.tsx\");\n/* harmony import */ var _hooks_helper_useVariables__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~hooks/helper/useVariables */ \"./src/hooks/helper/useVariables.ts\");\n\n\n\n\nvar _jsxFileName = \"/Users/kwon/Desktop/work/kwon-pages/src/hooks/view/useRotatingSquares.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_kwon_Desktop_work_kwon_pages_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\nvar LoaderBox = function LoaderBox(props) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(theme_ui__WEBPACK_IMPORTED_MODULE_4__[\"Box\"], _objectSpread({\n    bg: \"black\",\n    sx: {\n      position: 'relative',\n      width: '50px',\n      height: '50px',\n      animation: 'rotate 1s linear infinite',\n      '::before, > ::before': {\n        content: '\"\"',\n        position: 'absolute',\n        top: 1,\n        left: 1,\n        right: 1,\n        bottom: 1,\n        bg: 'white'\n      }\n    }\n  }, props), void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 8,\n    columnNumber: 3\n  }, _this);\n};\n\n_c = LoaderBox;\n\nvar ItemBox = function ItemBox(_ref) {\n  var sx = _ref.sx,\n      props = Object(_Users_kwon_Desktop_work_kwon_pages_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_ref, [\"sx\"]);\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(theme_ui__WEBPACK_IMPORTED_MODULE_4__[\"Box\"], _objectSpread({\n    bg: \"black\",\n    sx: _objectSpread(_objectSpread({}, sx), {}, {\n      position: 'absolute',\n      width: '100%',\n      height: '100%',\n      animation: 'animate 1s linear infinite'\n    })\n  }, props), void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 30,\n    columnNumber: 3\n  }, _this);\n};\n\n_c2 = ItemBox;\n\nvar useRotatingSquares = function useRotatingSquares() {\n  _s();\n\n  var _useVariables = Object(_hooks_helper_useVariables__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(),\n      documentElement = _useVariables.documentElement;\n\n  var render = function render() {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(theme_ui__WEBPACK_IMPORTED_MODULE_4__[\"Box\"], {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_components_Atoms_CenteredFlex__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        sx: {\n          height: documentElement.clientHeight,\n          animation: 'changeBgColor 4s steps(1) infinite'\n        },\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(LoaderBox, {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(ItemBox, {\n            sx: {\n              top: '-100%',\n              left: -1,\n              transformOrigin: 'bottom right',\n              '::before': {\n                bg: 'yellow'\n              }\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 55,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(ItemBox, {\n            sx: {\n              right: '-100%',\n              top: -1,\n              transformOrigin: 'bottom left',\n              '::before': {\n                bg: 'lime'\n              }\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 63,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(ItemBox, {\n            sx: {\n              bottom: '-100%',\n              left: 1,\n              transformOrigin: 'top left',\n              '::before': {\n                bg: 'point.pink'\n              }\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 71,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(ItemBox, {\n            sx: {\n              left: '-100%',\n              top: 1,\n              transformOrigin: 'top right',\n              '::before': {\n                bg: 'point.skyblue'\n              }\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 79,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 54,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 7\n    }, _this);\n  };\n\n  return {\n    render: render\n  };\n};\n\n_s(useRotatingSquares, \"RjEG2/Yj+cPiNTmLy34rt7clV5k=\", false, function () {\n  return [_hooks_helper_useVariables__WEBPACK_IMPORTED_MODULE_6__[\"default\"]];\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (useRotatingSquares);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"LoaderBox\");\n$RefreshReg$(_c2, \"ItemBox\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2hvb2tzL3ZpZXcvdXNlUm90YXRpbmdTcXVhcmVzLnRzeD9lYjdkIl0sIm5hbWVzIjpbIkxvYWRlckJveCIsInByb3BzIiwicG9zaXRpb24iLCJ3aWR0aCIsImhlaWdodCIsImFuaW1hdGlvbiIsImNvbnRlbnQiLCJ0b3AiLCJsZWZ0IiwicmlnaHQiLCJib3R0b20iLCJiZyIsIkl0ZW1Cb3giLCJzeCIsInVzZVJvdGF0aW5nU3F1YXJlcyIsInVzZVZhcmlhYmxlcyIsImRvY3VtZW50RWxlbWVudCIsInJlbmRlciIsImNsaWVudEhlaWdodCIsInRyYW5zZm9ybU9yaWdpbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBOztBQUVBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLEtBQUQ7QUFBQSxzQkFDaEIscUVBQUMsNENBQUQ7QUFDRSxNQUFFLEVBQUMsT0FETDtBQUVFLE1BQUUsRUFBRTtBQUNGQyxjQUFRLEVBQUUsVUFEUjtBQUVGQyxXQUFLLEVBQUUsTUFGTDtBQUdGQyxZQUFNLEVBQUUsTUFITjtBQUlGQyxlQUFTLEVBQUUsMkJBSlQ7QUFLRiw4QkFBd0I7QUFDdEJDLGVBQU8sRUFBRSxJQURhO0FBRXRCSixnQkFBUSxFQUFFLFVBRlk7QUFHdEJLLFdBQUcsRUFBRSxDQUhpQjtBQUl0QkMsWUFBSSxFQUFFLENBSmdCO0FBS3RCQyxhQUFLLEVBQUUsQ0FMZTtBQU10QkMsY0FBTSxFQUFFLENBTmM7QUFPdEJDLFVBQUUsRUFBRTtBQVBrQjtBQUx0QjtBQUZOLEtBaUJNVixLQWpCTjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRGdCO0FBQUEsQ0FBbEI7O0tBQU1ELFM7O0FBc0JOLElBQU1ZLE9BQU8sR0FBRyxTQUFWQSxPQUFVO0FBQUEsTUFBR0MsRUFBSCxRQUFHQSxFQUFIO0FBQUEsTUFBVVosS0FBVjs7QUFBQSxzQkFDZCxxRUFBQyw0Q0FBRDtBQUNFLE1BQUUsRUFBQyxPQURMO0FBRUUsTUFBRSxrQ0FDR1ksRUFESDtBQUVBWCxjQUFRLEVBQUUsVUFGVjtBQUdBQyxXQUFLLEVBQUUsTUFIUDtBQUlBQyxZQUFNLEVBQUUsTUFKUjtBQUtBQyxlQUFTLEVBQUU7QUFMWDtBQUZKLEtBU01KLEtBVE47QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURjO0FBQUEsQ0FBaEI7O01BQU1XLE87O0FBY04sSUFBTUUsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixHQUFNO0FBQUE7O0FBQUEsc0JBQ0hDLDBFQUFZLEVBRFQ7QUFBQSxNQUN2QkMsZUFEdUIsaUJBQ3ZCQSxlQUR1Qjs7QUFFL0IsTUFBTUMsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUNuQix3QkFDRSxxRUFBQyw0Q0FBRDtBQUFBLDZCQUNFLHFFQUFDLHNFQUFEO0FBQ0UsVUFBRSxFQUFFO0FBQ0ZiLGdCQUFNLEVBQUVZLGVBQWUsQ0FBQ0UsWUFEdEI7QUFFRmIsbUJBQVMsRUFBRTtBQUZULFNBRE47QUFBQSwrQkFNRSxxRUFBQyxTQUFEO0FBQUEsa0NBQ0UscUVBQUMsT0FBRDtBQUNFLGNBQUUsRUFBRTtBQUNGRSxpQkFBRyxFQUFFLE9BREg7QUFFRkMsa0JBQUksRUFBRSxDQUFDLENBRkw7QUFHRlcsNkJBQWUsRUFBRSxjQUhmO0FBSUYsMEJBQVk7QUFBRVIsa0JBQUUsRUFBRTtBQUFOO0FBSlY7QUFETjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBU0UscUVBQUMsT0FBRDtBQUNFLGNBQUUsRUFBRTtBQUNGRixtQkFBSyxFQUFFLE9BREw7QUFFRkYsaUJBQUcsRUFBRSxDQUFDLENBRko7QUFHRlksNkJBQWUsRUFBRSxhQUhmO0FBSUYsMEJBQVk7QUFBRVIsa0JBQUUsRUFBRTtBQUFOO0FBSlY7QUFETjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVRGLGVBaUJFLHFFQUFDLE9BQUQ7QUFDRSxjQUFFLEVBQUU7QUFDRkQsb0JBQU0sRUFBRSxPQUROO0FBRUZGLGtCQUFJLEVBQUUsQ0FGSjtBQUdGVyw2QkFBZSxFQUFFLFVBSGY7QUFJRiwwQkFBWTtBQUFFUixrQkFBRSxFQUFFO0FBQU47QUFKVjtBQUROO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBakJGLGVBeUJFLHFFQUFDLE9BQUQ7QUFDRSxjQUFFLEVBQUU7QUFDRkgsa0JBQUksRUFBRSxPQURKO0FBRUZELGlCQUFHLEVBQUUsQ0FGSDtBQUdGWSw2QkFBZSxFQUFFLFdBSGY7QUFJRiwwQkFBWTtBQUFFUixrQkFBRSxFQUFFO0FBQU47QUFKVjtBQUROO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBekJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREY7QUE2Q0QsR0E5Q0Q7O0FBK0NBLFNBQU87QUFBRU0sVUFBTSxFQUFOQTtBQUFGLEdBQVA7QUFDRCxDQWxERDs7R0FBTUgsa0I7VUFDd0JDLGtFOzs7QUFtRGZELGlGQUFmIiwiZmlsZSI6Ii4vc3JjL2hvb2tzL3ZpZXcvdXNlUm90YXRpbmdTcXVhcmVzLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEJveCwgQm94UHJvcHMgfSBmcm9tICd0aGVtZS11aSdcblxuaW1wb3J0IENlbnRlcmVkRmxleCBmcm9tICd+Y29tcG9uZW50cy9BdG9tcy9DZW50ZXJlZEZsZXgnXG5pbXBvcnQgdXNlVmFyaWFibGVzIGZyb20gJ35ob29rcy9oZWxwZXIvdXNlVmFyaWFibGVzJ1xuXG5jb25zdCBMb2FkZXJCb3ggPSAocHJvcHM6IEJveFByb3BzKSA9PiAoXG4gIDxCb3hcbiAgICBiZz1cImJsYWNrXCJcbiAgICBzeD17e1xuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICB3aWR0aDogJzUwcHgnLFxuICAgICAgaGVpZ2h0OiAnNTBweCcsXG4gICAgICBhbmltYXRpb246ICdyb3RhdGUgMXMgbGluZWFyIGluZmluaXRlJyxcbiAgICAgICc6OmJlZm9yZSwgPiA6OmJlZm9yZSc6IHtcbiAgICAgICAgY29udGVudDogJ1wiXCInLFxuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgdG9wOiAxLFxuICAgICAgICBsZWZ0OiAxLFxuICAgICAgICByaWdodDogMSxcbiAgICAgICAgYm90dG9tOiAxLFxuICAgICAgICBiZzogJ3doaXRlJyxcbiAgICAgIH0sXG4gICAgfX1cbiAgICB7Li4ucHJvcHN9XG4gIC8+XG4pXG5cbmNvbnN0IEl0ZW1Cb3ggPSAoeyBzeCwgLi4ucHJvcHMgfTogQm94UHJvcHMpID0+IChcbiAgPEJveFxuICAgIGJnPVwiYmxhY2tcIlxuICAgIHN4PXt7XG4gICAgICAuLi5zeCxcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgYW5pbWF0aW9uOiAnYW5pbWF0ZSAxcyBsaW5lYXIgaW5maW5pdGUnLFxuICAgIH19XG4gICAgey4uLnByb3BzfVxuICAvPlxuKVxuXG5jb25zdCB1c2VSb3RhdGluZ1NxdWFyZXMgPSAoKSA9PiB7XG4gIGNvbnN0IHsgZG9jdW1lbnRFbGVtZW50IH0gPSB1c2VWYXJpYWJsZXMoKVxuICBjb25zdCByZW5kZXIgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxCb3g+XG4gICAgICAgIDxDZW50ZXJlZEZsZXhcbiAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgaGVpZ2h0OiBkb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0LFxuICAgICAgICAgICAgYW5pbWF0aW9uOiAnY2hhbmdlQmdDb2xvciA0cyBzdGVwcygxKSBpbmZpbml0ZScsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxMb2FkZXJCb3g+XG4gICAgICAgICAgICA8SXRlbUJveFxuICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgIHRvcDogJy0xMDAlJyxcbiAgICAgICAgICAgICAgICBsZWZ0OiAtMSxcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm1PcmlnaW46ICdib3R0b20gcmlnaHQnLFxuICAgICAgICAgICAgICAgICc6OmJlZm9yZSc6IHsgYmc6ICd5ZWxsb3cnIH0sXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPEl0ZW1Cb3hcbiAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICByaWdodDogJy0xMDAlJyxcbiAgICAgICAgICAgICAgICB0b3A6IC0xLFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybU9yaWdpbjogJ2JvdHRvbSBsZWZ0JyxcbiAgICAgICAgICAgICAgICAnOjpiZWZvcmUnOiB7IGJnOiAnbGltZScgfSxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8SXRlbUJveFxuICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgIGJvdHRvbTogJy0xMDAlJyxcbiAgICAgICAgICAgICAgICBsZWZ0OiAxLFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybU9yaWdpbjogJ3RvcCBsZWZ0JyxcbiAgICAgICAgICAgICAgICAnOjpiZWZvcmUnOiB7IGJnOiAncG9pbnQucGluaycgfSxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8SXRlbUJveFxuICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgIGxlZnQ6ICctMTAwJScsXG4gICAgICAgICAgICAgICAgdG9wOiAxLFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybU9yaWdpbjogJ3RvcCByaWdodCcsXG4gICAgICAgICAgICAgICAgJzo6YmVmb3JlJzogeyBiZzogJ3BvaW50LnNreWJsdWUnIH0sXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvTG9hZGVyQm94PlxuICAgICAgICA8L0NlbnRlcmVkRmxleD5cbiAgICAgIDwvQm94PlxuICAgIClcbiAgfVxuICByZXR1cm4geyByZW5kZXIgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB1c2VSb3RhdGluZ1NxdWFyZXNcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/hooks/view/useRotatingSquares.tsx\n");

/***/ })

})