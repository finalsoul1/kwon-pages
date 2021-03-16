webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/hooks/feature/useNav.tsx":
/*!**************************************!*\
  !*** ./src/hooks/feature/useNav.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_kwon_Desktop_work_kwon_pages_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _Users_kwon_Desktop_work_kwon_pages_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/fi */ \"./node_modules/react-icons/fi/index.esm.js\");\n/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-use */ \"./node_modules/react-use/esm/index.js\");\n/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! theme-ui */ \"./node_modules/theme-ui/dist/index.esm.js\");\n/* harmony import */ var _utils_misc__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ~utils/misc */ \"./src/utils/misc.ts\");\n\n\n\n\nvar _jsxFileName = \"/Users/kwon/Desktop/work/kwon-pages/src/hooks/feature/useNav.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_kwon_Desktop_work_kwon_pages_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\nvar NavBox = function NavBox(_ref) {\n  var sx = _ref.sx,\n      props = Object(_Users_kwon_Desktop_work_kwon_pages_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_ref, [\"sx\"]);\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(theme_ui__WEBPACK_IMPORTED_MODULE_6__[\"Flex\"], _objectSpread({\n    sx: _objectSpread({\n      position: 'fixed',\n      bg: 'nav',\n      transition: 'all 0.5s ease-in'\n    }, sx)\n  }, props), void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 9,\n    columnNumber: 3\n  }, _this);\n};\n\n_c = NavBox;\nvar beforeNav = {\n  width: 0,\n  height: 0,\n  right: 0,\n  bottom: 0,\n  borderRadius: '50% 0 0 0'\n};\nvar afterNav = {\n  width: '100%',\n  height: '100%',\n  right: 0,\n  bottom: 0,\n  borderRadius: 0\n};\n\nvar useNav = function useNav() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(false),\n      nav = _useState[0],\n      setNav = _useState[1];\n\n  Object(react_use__WEBPACK_IMPORTED_MODULE_5__[\"useLockBodyScroll\"])(nav);\n\n  var handleClick = function handleClick() {\n    setNav(!nav);\n  };\n\n  var navToggle = function navToggle() {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(theme_ui__WEBPACK_IMPORTED_MODULE_6__[\"Button\"], {\n      variant: \"nav\",\n      onClick: handleClick,\n      children: nav ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__[\"FiX\"], {\n        fontSize: 30\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 16\n      }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__[\"FiAlignJustify\"], {\n        fontSize: 30\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 40\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 7\n    }, _this);\n  };\n\n  var render = function render() {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(theme_ui__WEBPACK_IMPORTED_MODULE_6__[\"Box\"], {\n      sx: {\n        width: _utils_misc__WEBPACK_IMPORTED_MODULE_7__[\"clientWidth\"],\n        height: _utils_misc__WEBPACK_IMPORTED_MODULE_7__[\"clientHeight\"]\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 7\n    }, _this);\n  };\n\n  return {\n    render: render\n  };\n};\n\n_s(useNav, \"76LPf85R/ul94rnbZK05vsY/3QI=\", false, function () {\n  return [react_use__WEBPACK_IMPORTED_MODULE_5__[\"useLockBodyScroll\"]];\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (useNav);\n\nvar _c;\n\n$RefreshReg$(_c, \"NavBox\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2hvb2tzL2ZlYXR1cmUvdXNlTmF2LnRzeD9iNDI5Il0sIm5hbWVzIjpbIk5hdkJveCIsInN4IiwicHJvcHMiLCJwb3NpdGlvbiIsImJnIiwidHJhbnNpdGlvbiIsImJlZm9yZU5hdiIsIndpZHRoIiwiaGVpZ2h0IiwicmlnaHQiLCJib3R0b20iLCJib3JkZXJSYWRpdXMiLCJhZnRlck5hdiIsInVzZU5hdiIsInVzZVN0YXRlIiwibmF2Iiwic2V0TmF2IiwidXNlTG9ja0JvZHlTY3JvbGwiLCJoYW5kbGVDbGljayIsIm5hdlRvZ2dsZSIsInJlbmRlciIsImNsaWVudFdpZHRoIiwiY2xpZW50SGVpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVM7QUFBQSxNQUFHQyxFQUFILFFBQUdBLEVBQUg7QUFBQSxNQUFVQyxLQUFWOztBQUFBLHNCQUNiLHFFQUFDLDZDQUFEO0FBQ0UsTUFBRTtBQUNBQyxjQUFRLEVBQUUsT0FEVjtBQUVBQyxRQUFFLEVBQUUsS0FGSjtBQUdBQyxnQkFBVSxFQUFFO0FBSFosT0FJR0osRUFKSDtBQURKLEtBT01DLEtBUE47QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURhO0FBQUEsQ0FBZjs7S0FBTUYsTTtBQVlOLElBQU1NLFNBQVMsR0FBRztBQUNoQkMsT0FBSyxFQUFFLENBRFM7QUFFaEJDLFFBQU0sRUFBRSxDQUZRO0FBR2hCQyxPQUFLLEVBQUUsQ0FIUztBQUloQkMsUUFBTSxFQUFFLENBSlE7QUFLaEJDLGNBQVksRUFBRTtBQUxFLENBQWxCO0FBUUEsSUFBTUMsUUFBUSxHQUFHO0FBQ2ZMLE9BQUssRUFBRSxNQURRO0FBRWZDLFFBQU0sRUFBRSxNQUZPO0FBR2ZDLE9BQUssRUFBRSxDQUhRO0FBSWZDLFFBQU0sRUFBRSxDQUpPO0FBS2ZDLGNBQVksRUFBRTtBQUxDLENBQWpCOztBQVFBLElBQU1FLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07QUFBQTs7QUFBQSxrQkFDR0Msc0RBQVEsQ0FBQyxLQUFELENBRFg7QUFBQSxNQUNaQyxHQURZO0FBQUEsTUFDUEMsTUFETzs7QUFHbkJDLHFFQUFpQixDQUFDRixHQUFELENBQWpCOztBQUVBLE1BQU1HLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFDeEJGLFVBQU0sQ0FBQyxDQUFDRCxHQUFGLENBQU47QUFDRCxHQUZEOztBQUlBLE1BQU1JLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFDdEIsd0JBQ0UscUVBQUMsK0NBQUQ7QUFBUSxhQUFPLEVBQUMsS0FBaEI7QUFBc0IsYUFBTyxFQUFFRCxXQUEvQjtBQUFBLGdCQUNHSCxHQUFHLGdCQUFHLHFFQUFDLGtEQUFEO0FBQUssZ0JBQVEsRUFBRTtBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBSCxnQkFBMkIscUVBQUMsNkRBQUQ7QUFBZ0IsZ0JBQVEsRUFBRTtBQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRGpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERjtBQUtELEdBTkQ7O0FBUUEsTUFBTUssTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUNuQix3QkFDRSxxRUFBQyw0Q0FBRDtBQUFLLFFBQUUsRUFBRTtBQUFFYixhQUFLLEVBQUVjLHVEQUFUO0FBQXNCYixjQUFNLEVBQUVjLHdEQUFZQTtBQUExQztBQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERjtBQUtELEdBTkQ7O0FBUUEsU0FBTztBQUNMRixVQUFNLEVBQU5BO0FBREssR0FBUDtBQUdELENBNUJEOztHQUFNUCxNO1VBR0pJLDJEOzs7QUEyQmFKLHFFQUFmIiwiZmlsZSI6Ii4vc3JjL2hvb2tzL2ZlYXR1cmUvdXNlTmF2LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgRmlBbGlnbkp1c3RpZnksIEZpWCB9IGZyb20gJ3JlYWN0LWljb25zL2ZpJ1xuaW1wb3J0IHsgdXNlTG9ja0JvZHlTY3JvbGwgfSBmcm9tICdyZWFjdC11c2UnXG5pbXBvcnQgeyBCb3gsIEJ1dHRvbiwgRmxleCwgRmxleFByb3BzIH0gZnJvbSAndGhlbWUtdWknXG5cbmltcG9ydCB7IGNsaWVudEhlaWdodCwgY2xpZW50V2lkdGggfSBmcm9tICd+dXRpbHMvbWlzYydcblxuY29uc3QgTmF2Qm94ID0gKHsgc3gsIC4uLnByb3BzIH06IEZsZXhQcm9wcykgPT4gKFxuICA8RmxleFxuICAgIHN4PXt7XG4gICAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICAgIGJnOiAnbmF2JyxcbiAgICAgIHRyYW5zaXRpb246ICdhbGwgMC41cyBlYXNlLWluJyxcbiAgICAgIC4uLnN4LFxuICAgIH19XG4gICAgey4uLnByb3BzfVxuICAvPlxuKVxuXG5jb25zdCBiZWZvcmVOYXYgPSB7XG4gIHdpZHRoOiAwLFxuICBoZWlnaHQ6IDAsXG4gIHJpZ2h0OiAwLFxuICBib3R0b206IDAsXG4gIGJvcmRlclJhZGl1czogJzUwJSAwIDAgMCcsXG59XG5cbmNvbnN0IGFmdGVyTmF2ID0ge1xuICB3aWR0aDogJzEwMCUnLFxuICBoZWlnaHQ6ICcxMDAlJyxcbiAgcmlnaHQ6IDAsXG4gIGJvdHRvbTogMCxcbiAgYm9yZGVyUmFkaXVzOiAwLFxufVxuXG5jb25zdCB1c2VOYXYgPSAoKSA9PiB7XG4gIGNvbnN0IFtuYXYsIHNldE5hdl0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICB1c2VMb2NrQm9keVNjcm9sbChuYXYpXG5cbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XG4gICAgc2V0TmF2KCFuYXYpXG4gIH1cblxuICBjb25zdCBuYXZUb2dnbGUgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxCdXR0b24gdmFyaWFudD1cIm5hdlwiIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT5cbiAgICAgICAge25hdiA/IDxGaVggZm9udFNpemU9ezMwfSAvPiA6IDxGaUFsaWduSnVzdGlmeSBmb250U2l6ZT17MzB9IC8+fVxuICAgICAgPC9CdXR0b24+XG4gICAgKVxuICB9XG5cbiAgY29uc3QgcmVuZGVyID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8Qm94IHN4PXt7IHdpZHRoOiBjbGllbnRXaWR0aCwgaGVpZ2h0OiBjbGllbnRIZWlnaHQgfX0+XG4gICAgICAgIHsvKiA8TmF2Qm94IHN4PXtuYXYgPyBhZnRlck5hdiA6IGJlZm9yZU5hdn0+e25hdlRvZ2dsZSgpfTwvTmF2Qm94PiovfVxuICAgICAgPC9Cb3g+XG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICByZW5kZXIsXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgdXNlTmF2XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/hooks/feature/useNav.tsx\n");

/***/ })

})