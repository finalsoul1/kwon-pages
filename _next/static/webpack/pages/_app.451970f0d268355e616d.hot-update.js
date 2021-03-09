webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/components/Template/Main.tsx":
/*!******************************************!*\
  !*** ./src/components/Template/Main.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/bi */ \"./node_modules/react-icons/bi/index.esm.js\");\n/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rebass */ \"./node_modules/rebass/dist/index.esm.js\");\n/* harmony import */ var _libs_rotate_rotatePolygon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../libs/rotate/rotatePolygon */ \"./src/libs/rotate/rotatePolygon.js\");\n\n\nvar _jsxFileName = \"/Users/kwon/Desktop/work/kwon-pages/src/components/Template/Main.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar Main = function Main(_ref) {\n  _s();\n\n  var children = _ref.children;\n  var main = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])();\n\n  var handleClick = function handleClick() {\n    console.log('click');\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    new _libs_rotate_rotatePolygon__WEBPACK_IMPORTED_MODULE_4__[\"default\"]({\n      container: main.current,\n      type: 'horizon',\n      sides: 15\n    });\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(rebass__WEBPACK_IMPORTED_MODULE_3__[\"Box\"], {\n    id: \"main-template\",\n    sx: {\n      position: 'relative'\n    },\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(rebass__WEBPACK_IMPORTED_MODULE_3__[\"Box\"], {\n      sx: {\n        width: '100%',\n        position: 'fixed',\n        bottom: 0,\n        py: 3,\n        textAlign: 'center'\n      },\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(rebass__WEBPACK_IMPORTED_MODULE_3__[\"Button\"], {\n        variant: \"black\",\n        onClick: handleClick,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_bi__WEBPACK_IMPORTED_MODULE_2__[\"BiChevronsUp\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 34,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 7\n    }, _this), children]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 23,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Main, \"T6PxU8DP4g3g6wCdULrM/0IWNRk=\");\n\n_c = Main;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Main);\n\nvar _c;\n\n$RefreshReg$(_c, \"Main\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVGVtcGxhdGUvTWFpbi50c3g/ZDVkOCJdLCJuYW1lcyI6WyJNYWluIiwiY2hpbGRyZW4iLCJtYWluIiwidXNlUmVmIiwiaGFuZGxlQ2xpY2siLCJjb25zb2xlIiwibG9nIiwidXNlRWZmZWN0IiwiUm90YXRlUG9seWdvbiIsImNvbnRhaW5lciIsImN1cnJlbnQiLCJ0eXBlIiwic2lkZXMiLCJwb3NpdGlvbiIsIndpZHRoIiwiYm90dG9tIiwicHkiLCJ0ZXh0QWxpZ24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7O0FBTUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sT0FBNkI7QUFBQTs7QUFBQSxNQUExQkMsUUFBMEIsUUFBMUJBLFFBQTBCO0FBQ3hDLE1BQU1DLElBQUksR0FBR0Msb0RBQU0sRUFBbkI7O0FBRUEsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUN4QkMsV0FBTyxDQUFDQyxHQUFSLENBQVksT0FBWjtBQUNELEdBRkQ7O0FBSUFDLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUlDLGtFQUFKLENBQWtCO0FBQUVDLGVBQVMsRUFBRVAsSUFBSSxDQUFDUSxPQUFsQjtBQUEyQkMsVUFBSSxFQUFFLFNBQWpDO0FBQTRDQyxXQUFLLEVBQUU7QUFBbkQsS0FBbEI7QUFDRCxHQUZRLEVBRU4sRUFGTSxDQUFUO0FBSUEsc0JBQ0UscUVBQUMsMENBQUQ7QUFBSyxNQUFFLEVBQUMsZUFBUjtBQUF3QixNQUFFLEVBQUU7QUFBRUMsY0FBUSxFQUFFO0FBQVosS0FBNUI7QUFBQSw0QkFDRSxxRUFBQywwQ0FBRDtBQUNFLFFBQUUsRUFBRTtBQUNGQyxhQUFLLEVBQUUsTUFETDtBQUVGRCxnQkFBUSxFQUFFLE9BRlI7QUFHRkUsY0FBTSxFQUFFLENBSE47QUFJRkMsVUFBRSxFQUFFLENBSkY7QUFLRkMsaUJBQVMsRUFBRTtBQUxULE9BRE47QUFBQSw2QkFTRSxxRUFBQyw2Q0FBRDtBQUFRLGVBQU8sRUFBQyxPQUFoQjtBQUF3QixlQUFPLEVBQUViLFdBQWpDO0FBQUEsK0JBQ0UscUVBQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFURjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsRUFjR0gsUUFkSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWtCRCxDQTdCRDs7R0FBTUQsSTs7S0FBQUEsSTtBQStCU0EsbUVBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9UZW1wbGF0ZS9NYWluLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBSZWFjdEVsZW1lbnQsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBCaUNoZXZyb25zVXAgfSBmcm9tICdyZWFjdC1pY29ucy9iaSdcbmltcG9ydCB7IEJveCwgQnV0dG9uIH0gZnJvbSAncmViYXNzJ1xuXG5pbXBvcnQgUm90YXRlUG9seWdvbiBmcm9tICcuLi8uLi9saWJzL3JvdGF0ZS9yb3RhdGVQb2x5Z29uJ1xuXG5pbnRlcmZhY2UgTWFpblByb3BzIHtcbiAgY2hpbGRyZW46IFJlYWN0RWxlbWVudFxufVxuXG5jb25zdCBNYWluID0gKHsgY2hpbGRyZW4gfTogTWFpblByb3BzKSA9PiB7XG4gIGNvbnN0IG1haW4gPSB1c2VSZWYoKVxuXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdjbGljaycpXG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIG5ldyBSb3RhdGVQb2x5Z29uKHsgY29udGFpbmVyOiBtYWluLmN1cnJlbnQsIHR5cGU6ICdob3Jpem9uJywgc2lkZXM6IDE1IH0pXG4gIH0sIFtdKVxuXG4gIHJldHVybiAoXG4gICAgPEJveCBpZD1cIm1haW4tdGVtcGxhdGVcIiBzeD17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJyB9fT5cbiAgICAgIDxCb3hcbiAgICAgICAgc3g9e3tcbiAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgICAgICAgIGJvdHRvbTogMCxcbiAgICAgICAgICBweTogMyxcbiAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJibGFja1wiIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT5cbiAgICAgICAgICA8QmlDaGV2cm9uc1VwIC8+XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9Cb3g+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9Cb3g+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFpblxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Template/Main.tsx\n");

/***/ })

})