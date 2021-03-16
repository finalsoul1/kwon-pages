webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/hooks/feature/useNav.tsx":
/*!**************************************!*\
  !*** ./src/hooks/feature/useNav.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_kwon_Desktop_work_kwon_pages_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _Users_kwon_Desktop_work_kwon_pages_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/fi */ \"./node_modules/react-icons/fi/index.esm.js\");\n/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! theme-ui */ \"./node_modules/theme-ui/dist/index.esm.js\");\n/* harmony import */ var _utils_misc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~utils/misc */ \"./src/utils/misc.ts\");\n\n\n\n\nvar _jsxFileName = \"/Users/kwon/Desktop/work/kwon-pages/src/hooks/feature/useNav.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_kwon_Desktop_work_kwon_pages_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\nvar NavBox = function NavBox(_ref) {\n  var sx = _ref.sx,\n      props = Object(_Users_kwon_Desktop_work_kwon_pages_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_ref, [\"sx\"]);\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(theme_ui__WEBPACK_IMPORTED_MODULE_5__[\"Flex\"], _objectSpread({\n    sx: _objectSpread({\n      position: 'fixed',\n      borderRadius: '50%',\n      bg: 'nav',\n      transition: 'all 1s ease-in'\n    }, sx)\n  }, props), void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 8,\n    columnNumber: 3\n  }, _this);\n};\n\n_c = NavBox;\nvar beforeNav = {\n  width: 0,\n  height: 0,\n  right: 4,\n  bottom: 4\n};\nvar afterNav = {\n  width: '100%',\n  height: '100%',\n  right: 0,\n  bottom: 0\n};\n\nvar useNav = function useNav() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(false),\n      nav = _useState[0],\n      setNav = _useState[1];\n\n  var handleClick = function handleClick() {\n    setNav(!nav);\n  };\n\n  var navToggle = function navToggle() {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(theme_ui__WEBPACK_IMPORTED_MODULE_5__[\"Button\"], {\n      variant: \"nav\",\n      onClick: handleClick,\n      children: nav ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__[\"FiX\"], {\n        fontSize: 30\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 16\n      }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__[\"FiAlignJustify\"], {\n        fontSize: 30\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 40\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 7\n    }, _this);\n  };\n\n  var render = function render() {\n    // return nav ? (\n    //   <Box sx={{ width: clientWidth, height: clientHeight }}>\n    //     <NavBox sx={{ width: size, height: size }}>\n    //       nav\n    //       {navToggle()}\n    //     </NavBox>\n    //   </Box>\n    // ) : (\n    //   navToggle()\n    // )\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(theme_ui__WEBPACK_IMPORTED_MODULE_5__[\"Box\"], {\n      sx: {\n        width: _utils_misc__WEBPACK_IMPORTED_MODULE_6__[\"clientWidth\"],\n        height: _utils_misc__WEBPACK_IMPORTED_MODULE_6__[\"clientHeight\"]\n      },\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(NavBox, {\n        sx: nav ? afterNav : beforeNav,\n        children: [\"nav\", navToggle()]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 63,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 7\n    }, _this);\n  };\n\n  return {\n    render: render\n  };\n};\n\n_s(useNav, \"Wisi6VrmgnoccnkciwYgmZFzI3E=\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (useNav);\n\nvar _c;\n\n$RefreshReg$(_c, \"NavBox\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2hvb2tzL2ZlYXR1cmUvdXNlTmF2LnRzeD9iNDI5Il0sIm5hbWVzIjpbIk5hdkJveCIsInN4IiwicHJvcHMiLCJwb3NpdGlvbiIsImJvcmRlclJhZGl1cyIsImJnIiwidHJhbnNpdGlvbiIsImJlZm9yZU5hdiIsIndpZHRoIiwiaGVpZ2h0IiwicmlnaHQiLCJib3R0b20iLCJhZnRlck5hdiIsInVzZU5hdiIsInVzZVN0YXRlIiwibmF2Iiwic2V0TmF2IiwiaGFuZGxlQ2xpY2siLCJuYXZUb2dnbGUiLCJyZW5kZXIiLCJjbGllbnRXaWR0aCIsImNsaWVudEhlaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTO0FBQUEsTUFBR0MsRUFBSCxRQUFHQSxFQUFIO0FBQUEsTUFBVUMsS0FBVjs7QUFBQSxzQkFDYixxRUFBQyw2Q0FBRDtBQUNFLE1BQUU7QUFDQUMsY0FBUSxFQUFFLE9BRFY7QUFFQUMsa0JBQVksRUFBRSxLQUZkO0FBR0FDLFFBQUUsRUFBRSxLQUhKO0FBSUFDLGdCQUFVLEVBQUU7QUFKWixPQU1HTCxFQU5IO0FBREosS0FTTUMsS0FUTjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRGE7QUFBQSxDQUFmOztLQUFNRixNO0FBY04sSUFBTU8sU0FBUyxHQUFHO0FBQ2hCQyxPQUFLLEVBQUUsQ0FEUztBQUVoQkMsUUFBTSxFQUFFLENBRlE7QUFHaEJDLE9BQUssRUFBRSxDQUhTO0FBSWhCQyxRQUFNLEVBQUU7QUFKUSxDQUFsQjtBQU9BLElBQU1DLFFBQVEsR0FBRztBQUNmSixPQUFLLEVBQUUsTUFEUTtBQUVmQyxRQUFNLEVBQUUsTUFGTztBQUdmQyxPQUFLLEVBQUUsQ0FIUTtBQUlmQyxRQUFNLEVBQUU7QUFKTyxDQUFqQjs7QUFPQSxJQUFNRSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBQUE7O0FBQUEsa0JBQ0dDLHNEQUFRLENBQUMsS0FBRCxDQURYO0FBQUEsTUFDWkMsR0FEWTtBQUFBLE1BQ1BDLE1BRE87O0FBR25CLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFDeEJELFVBQU0sQ0FBQyxDQUFDRCxHQUFGLENBQU47QUFDRCxHQUZEOztBQUlBLE1BQU1HLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFDdEIsd0JBQ0UscUVBQUMsK0NBQUQ7QUFBUSxhQUFPLEVBQUMsS0FBaEI7QUFBc0IsYUFBTyxFQUFFRCxXQUEvQjtBQUFBLGdCQUNHRixHQUFHLGdCQUFHLHFFQUFDLGtEQUFEO0FBQUssZ0JBQVEsRUFBRTtBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBSCxnQkFBMkIscUVBQUMsNkRBQUQ7QUFBZ0IsZ0JBQVEsRUFBRTtBQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRGpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERjtBQUtELEdBTkQ7O0FBUUEsTUFBTUksTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUNFLHFFQUFDLDRDQUFEO0FBQUssUUFBRSxFQUFFO0FBQUVYLGFBQUssRUFBRVksdURBQVQ7QUFBc0JYLGNBQU0sRUFBRVksd0RBQVlBO0FBQTFDLE9BQVQ7QUFBQSw2QkFDRSxxRUFBQyxNQUFEO0FBQVEsVUFBRSxFQUFFTixHQUFHLEdBQUdILFFBQUgsR0FBY0wsU0FBN0I7QUFBQSwwQkFFR1csU0FBUyxFQUZaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERjtBQVFELEdBbkJEOztBQXFCQSxTQUFPO0FBQ0xDLFVBQU0sRUFBTkE7QUFESyxHQUFQO0FBR0QsQ0F2Q0Q7O0dBQU1OLE07O0FBeUNTQSxxRUFBZiIsImZpbGUiOiIuL3NyYy9ob29rcy9mZWF0dXJlL3VzZU5hdi50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEZpQWxpZ25KdXN0aWZ5LCBGaVggfSBmcm9tICdyZWFjdC1pY29ucy9maSdcbmltcG9ydCB7IEJveCwgQnV0dG9uLCBGbGV4LCBGbGV4UHJvcHMgfSBmcm9tICd0aGVtZS11aSdcblxuaW1wb3J0IHsgY2xpZW50SGVpZ2h0LCBjbGllbnRXaWR0aCB9IGZyb20gJ351dGlscy9taXNjJ1xuXG5jb25zdCBOYXZCb3ggPSAoeyBzeCwgLi4ucHJvcHMgfTogRmxleFByb3BzKSA9PiAoXG4gIDxGbGV4XG4gICAgc3g9e3tcbiAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgICAgYm9yZGVyUmFkaXVzOiAnNTAlJyxcbiAgICAgIGJnOiAnbmF2JyxcbiAgICAgIHRyYW5zaXRpb246ICdhbGwgMXMgZWFzZS1pbicsXG4gICAgICAvLyBhbmltYXRpb246ICdjaGFuZ2VOYXZCZyAxcyBlYXNlLWluJyxcbiAgICAgIC4uLnN4LFxuICAgIH19XG4gICAgey4uLnByb3BzfVxuICAvPlxuKVxuXG5jb25zdCBiZWZvcmVOYXYgPSB7XG4gIHdpZHRoOiAwLFxuICBoZWlnaHQ6IDAsXG4gIHJpZ2h0OiA0LFxuICBib3R0b206IDQsXG59XG5cbmNvbnN0IGFmdGVyTmF2ID0ge1xuICB3aWR0aDogJzEwMCUnLFxuICBoZWlnaHQ6ICcxMDAlJyxcbiAgcmlnaHQ6IDAsXG4gIGJvdHRvbTogMCxcbn1cblxuY29uc3QgdXNlTmF2ID0gKCkgPT4ge1xuICBjb25zdCBbbmF2LCBzZXROYXZdID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XG4gICAgc2V0TmF2KCFuYXYpXG4gIH1cblxuICBjb25zdCBuYXZUb2dnbGUgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxCdXR0b24gdmFyaWFudD1cIm5hdlwiIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT5cbiAgICAgICAge25hdiA/IDxGaVggZm9udFNpemU9ezMwfSAvPiA6IDxGaUFsaWduSnVzdGlmeSBmb250U2l6ZT17MzB9IC8+fVxuICAgICAgPC9CdXR0b24+XG4gICAgKVxuICB9XG5cbiAgY29uc3QgcmVuZGVyID0gKCkgPT4ge1xuICAgIC8vIHJldHVybiBuYXYgPyAoXG4gICAgLy8gICA8Qm94IHN4PXt7IHdpZHRoOiBjbGllbnRXaWR0aCwgaGVpZ2h0OiBjbGllbnRIZWlnaHQgfX0+XG4gICAgLy8gICAgIDxOYXZCb3ggc3g9e3sgd2lkdGg6IHNpemUsIGhlaWdodDogc2l6ZSB9fT5cbiAgICAvLyAgICAgICBuYXZcbiAgICAvLyAgICAgICB7bmF2VG9nZ2xlKCl9XG4gICAgLy8gICAgIDwvTmF2Qm94PlxuICAgIC8vICAgPC9Cb3g+XG4gICAgLy8gKSA6IChcbiAgICAvLyAgIG5hdlRvZ2dsZSgpXG4gICAgLy8gKVxuICAgIHJldHVybiAoXG4gICAgICA8Qm94IHN4PXt7IHdpZHRoOiBjbGllbnRXaWR0aCwgaGVpZ2h0OiBjbGllbnRIZWlnaHQgfX0+XG4gICAgICAgIDxOYXZCb3ggc3g9e25hdiA/IGFmdGVyTmF2IDogYmVmb3JlTmF2fT5cbiAgICAgICAgICBuYXZcbiAgICAgICAgICB7bmF2VG9nZ2xlKCl9XG4gICAgICAgIDwvTmF2Qm94PlxuICAgICAgPC9Cb3g+XG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICByZW5kZXIsXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgdXNlTmF2XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/hooks/feature/useNav.tsx\n");

/***/ })

})