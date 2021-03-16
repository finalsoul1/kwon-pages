webpackHotUpdate_N_E("pages/_app",{

/***/ "./node_modules/next/dist/next-server/lib/amp-context.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/amp.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/head-manager-context.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/head.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/side-effect.js":
false,

/***/ "./node_modules/next/head.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/assertThisInitialized.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/defineProperty.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/getPrototypeOf.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/inherits.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/iterableToArray.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/nonIterableSpread.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/toConsumableArray.js":
false,

/***/ "./src/components/Template/Main.tsx":
/*!******************************************!*\
  !*** ./src/components/Template/Main.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! theme-ui */ \"./node_modules/theme-ui/dist/index.esm.js\");\n/* harmony import */ var _hooks_view_useRotateNav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~hooks/view/useRotateNav */ \"./src/hooks/view/useRotateNav.tsx\");\n\n\nvar _jsxFileName = \"/Users/kwon/Desktop/work/kwon-pages/src/components/Template/Main.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar Main = function Main(_ref) {\n  _s();\n\n  var children = _ref.children;\n\n  var _useRotateNav = Object(_hooks_view_useRotateNav__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(),\n      renderCanvas = _useRotateNav.renderCanvas;\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n    id: \"main-template\",\n    sx: {\n      position: 'relative'\n    },\n    children: [renderCanvas(), children]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 14,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Main, \"C6knUQ5RkaL+0jA2Z43quz7qbRk=\", false, function () {\n  return [_hooks_view_useRotateNav__WEBPACK_IMPORTED_MODULE_3__[\"default\"]];\n});\n\n_c = Main;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Main);\n\nvar _c;\n\n$RefreshReg$(_c, \"Main\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVGVtcGxhdGUvTWFpbi50c3g/ZDVkOCJdLCJuYW1lcyI6WyJNYWluIiwiY2hpbGRyZW4iLCJ1c2VSb3RhdGVOYXYiLCJyZW5kZXJDYW52YXMiLCJwb3NpdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTs7QUFNQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxPQUE2QjtBQUFBOztBQUFBLE1BQTFCQyxRQUEwQixRQUExQkEsUUFBMEI7O0FBQUEsc0JBQ2ZDLHdFQUFZLEVBREc7QUFBQSxNQUNoQ0MsWUFEZ0MsaUJBQ2hDQSxZQURnQzs7QUFHeEMsc0JBQ0UscUVBQUMsNENBQUQ7QUFBSyxNQUFFLEVBQUMsZUFBUjtBQUF3QixNQUFFLEVBQUU7QUFBRUMsY0FBUSxFQUFFO0FBQVosS0FBNUI7QUFBQSxlQUNHRCxZQUFZLEVBRGYsRUFFR0YsUUFGSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQU1ELENBVEQ7O0dBQU1ELEk7VUFDcUJFLGdFOzs7S0FEckJGLEk7QUFXU0EsbUVBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9UZW1wbGF0ZS9NYWluLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBSZWFjdEVsZW1lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEJveCB9IGZyb20gJ3RoZW1lLXVpJ1xuXG5pbXBvcnQgdXNlUm90YXRlTmF2IGZyb20gJ35ob29rcy92aWV3L3VzZVJvdGF0ZU5hdidcblxuaW50ZXJmYWNlIE1haW5Qcm9wcyB7XG4gIGNoaWxkcmVuOiBSZWFjdEVsZW1lbnRcbn1cblxuY29uc3QgTWFpbiA9ICh7IGNoaWxkcmVuIH06IE1haW5Qcm9wcykgPT4ge1xuICBjb25zdCB7IHJlbmRlckNhbnZhcyB9ID0gdXNlUm90YXRlTmF2KClcblxuICByZXR1cm4gKFxuICAgIDxCb3ggaWQ9XCJtYWluLXRlbXBsYXRlXCIgc3g9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScgfX0+XG4gICAgICB7cmVuZGVyQ2FudmFzKCl9XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9Cb3g+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFpblxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Template/Main.tsx\n");

/***/ })

})