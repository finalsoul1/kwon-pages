webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/hooks/feature/useNav.tsx":
/*!**************************************!*\
  !*** ./src/hooks/feature/useNav.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fi */ \"./node_modules/react-icons/fi/index.esm.js\");\n/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! theme-ui */ \"./node_modules/theme-ui/dist/index.esm.js\");\n\n\nvar _jsxFileName = \"/Users/kwon/Desktop/work/kwon-pages/src/hooks/feature/useNav.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar useNav = function useNav() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      nav = _useState[0],\n      setNav = _useState[1];\n\n  var handleClick = function handleClick() {\n    setNav(!nav);\n  };\n\n  var navToggle = function navToggle() {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(theme_ui__WEBPACK_IMPORTED_MODULE_3__[\"Button\"], {\n      variant: \"nav\",\n      onClick: handleClick,\n      children: nav ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_2__[\"FiX\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 16\n      }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_2__[\"FiAlignJustify\"], {\n        fontSize: 4\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 26\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 7\n    }, _this);\n  };\n\n  var render = function render() {\n    console.log('nav');\n    return nav ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(theme_ui__WEBPACK_IMPORTED_MODULE_3__[\"Box\"], {\n      children: [\"nav\", navToggle()]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }, _this) : navToggle();\n  };\n\n  return {\n    render: render\n  };\n};\n\n_s(useNav, \"Wisi6VrmgnoccnkciwYgmZFzI3E=\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (useNav);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2hvb2tzL2ZlYXR1cmUvdXNlTmF2LnRzeD9iNDI5Il0sIm5hbWVzIjpbInVzZU5hdiIsInVzZVN0YXRlIiwibmF2Iiwic2V0TmF2IiwiaGFuZGxlQ2xpY2siLCJuYXZUb2dnbGUiLCJyZW5kZXIiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07QUFBQTs7QUFBQSxrQkFDR0Msc0RBQVEsQ0FBQyxLQUFELENBRFg7QUFBQSxNQUNaQyxHQURZO0FBQUEsTUFDUEMsTUFETzs7QUFHbkIsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUN4QkQsVUFBTSxDQUFDLENBQUNELEdBQUYsQ0FBTjtBQUNELEdBRkQ7O0FBSUEsTUFBTUcsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUN0Qix3QkFDRSxxRUFBQywrQ0FBRDtBQUFRLGFBQU8sRUFBQyxLQUFoQjtBQUFzQixhQUFPLEVBQUVELFdBQS9CO0FBQUEsZ0JBQ0dGLEdBQUcsZ0JBQUcscUVBQUMsa0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFILGdCQUFhLHFFQUFDLDZEQUFEO0FBQWdCLGdCQUFRLEVBQUU7QUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREY7QUFLRCxHQU5EOztBQVFBLE1BQU1JLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07QUFDbkJDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQVo7QUFDQSxXQUFPTixHQUFHLGdCQUNSLHFFQUFDLDRDQUFEO0FBQUEsd0JBRUdHLFNBQVMsRUFGWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFEUSxHQU1SQSxTQUFTLEVBTlg7QUFRRCxHQVZEOztBQVlBLFNBQU87QUFDTEMsVUFBTSxFQUFOQTtBQURLLEdBQVA7QUFHRCxDQTlCRDs7R0FBTU4sTTs7QUFnQ1NBLHFFQUFmIiwiZmlsZSI6Ii4vc3JjL2hvb2tzL2ZlYXR1cmUvdXNlTmF2LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgRmlBbGlnbkp1c3RpZnksIEZpWCB9IGZyb20gJ3JlYWN0LWljb25zL2ZpJ1xuaW1wb3J0IHsgQm94LCBCdXR0b24gfSBmcm9tICd0aGVtZS11aSdcblxuY29uc3QgdXNlTmF2ID0gKCkgPT4ge1xuICBjb25zdCBbbmF2LCBzZXROYXZdID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XG4gICAgc2V0TmF2KCFuYXYpXG4gIH1cblxuICBjb25zdCBuYXZUb2dnbGUgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxCdXR0b24gdmFyaWFudD1cIm5hdlwiIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT5cbiAgICAgICAge25hdiA/IDxGaVggLz4gOiA8RmlBbGlnbkp1c3RpZnkgZm9udFNpemU9ezR9IC8+fVxuICAgICAgPC9CdXR0b24+XG4gICAgKVxuICB9XG5cbiAgY29uc3QgcmVuZGVyID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCduYXYnKVxuICAgIHJldHVybiBuYXYgPyAoXG4gICAgICA8Qm94PlxuICAgICAgICBuYXZcbiAgICAgICAge25hdlRvZ2dsZSgpfVxuICAgICAgPC9Cb3g+XG4gICAgKSA6IChcbiAgICAgIG5hdlRvZ2dsZSgpXG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICByZW5kZXIsXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgdXNlTmF2XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/hooks/feature/useNav.tsx\n");

/***/ })

})