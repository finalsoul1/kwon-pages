webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/hooks/feature/useNav.tsx":
/*!**************************************!*\
  !*** ./src/hooks/feature/useNav.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_kwon_Desktop_work_kwon_pages_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _Users_kwon_Desktop_work_kwon_pages_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/fi */ \"./node_modules/react-icons/fi/index.esm.js\");\n/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! theme-ui */ \"./node_modules/theme-ui/dist/index.esm.js\");\n/* harmony import */ var _utils_misc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~utils/misc */ \"./src/utils/misc.ts\");\n\n\n\n\nvar _jsxFileName = \"/Users/kwon/Desktop/work/kwon-pages/src/hooks/feature/useNav.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_kwon_Desktop_work_kwon_pages_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\nvar NavBox = function NavBox(_ref) {\n  var sx = _ref.sx,\n      props = Object(_Users_kwon_Desktop_work_kwon_pages_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_ref, [\"sx\"]);\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(theme_ui__WEBPACK_IMPORTED_MODULE_5__[\"Flex\"], _objectSpread({\n    sx: _objectSpread({\n      width: '100%',\n      height: '100%',\n      bg: 'nav',\n      animation: 'changeNavBg 1s linear'\n    }, sx)\n  }, props), void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 8,\n    columnNumber: 3\n  }, _this);\n};\n\n_c = NavBox;\n\nvar useNav = function useNav() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(false),\n      nav = _useState[0],\n      setNav = _useState[1];\n\n  var handleClick = function handleClick() {\n    setNav(!nav);\n  };\n\n  var navToggle = function navToggle() {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(theme_ui__WEBPACK_IMPORTED_MODULE_5__[\"Button\"], {\n      variant: \"nav\",\n      onClick: handleClick,\n      children: nav ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__[\"FiX\"], {\n        fontSize: 30\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 16\n      }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__[\"FiAlignJustify\"], {\n        fontSize: 30\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 40\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 7\n    }, _this);\n  };\n\n  var render = function render() {\n    return nav ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(theme_ui__WEBPACK_IMPORTED_MODULE_5__[\"Box\"], {\n      sx: {\n        width: _utils_misc__WEBPACK_IMPORTED_MODULE_6__[\"clientWidth\"],\n        height: _utils_misc__WEBPACK_IMPORTED_MODULE_6__[\"clientHeight\"]\n      },\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(NavBox, {\n        children: [\"nav\", navToggle()]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 7\n    }, _this) : navToggle();\n  };\n\n  return {\n    render: render\n  };\n};\n\n_s(useNav, \"Wisi6VrmgnoccnkciwYgmZFzI3E=\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (useNav);\n\nvar _c;\n\n$RefreshReg$(_c, \"NavBox\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2hvb2tzL2ZlYXR1cmUvdXNlTmF2LnRzeD9iNDI5Il0sIm5hbWVzIjpbIk5hdkJveCIsInN4IiwicHJvcHMiLCJ3aWR0aCIsImhlaWdodCIsImJnIiwiYW5pbWF0aW9uIiwidXNlTmF2IiwidXNlU3RhdGUiLCJuYXYiLCJzZXROYXYiLCJoYW5kbGVDbGljayIsIm5hdlRvZ2dsZSIsInJlbmRlciIsImNsaWVudFdpZHRoIiwiY2xpZW50SGVpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVM7QUFBQSxNQUFHQyxFQUFILFFBQUdBLEVBQUg7QUFBQSxNQUFVQyxLQUFWOztBQUFBLHNCQUNiLHFFQUFDLDZDQUFEO0FBQ0UsTUFBRTtBQUNBQyxXQUFLLEVBQUUsTUFEUDtBQUVBQyxZQUFNLEVBQUUsTUFGUjtBQUdBQyxRQUFFLEVBQUUsS0FISjtBQUlBQyxlQUFTLEVBQUU7QUFKWCxPQUtHTCxFQUxIO0FBREosS0FRTUMsS0FSTjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRGE7QUFBQSxDQUFmOztLQUFNRixNOztBQWFOLElBQU1PLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07QUFBQTs7QUFBQSxrQkFDR0Msc0RBQVEsQ0FBQyxLQUFELENBRFg7QUFBQSxNQUNaQyxHQURZO0FBQUEsTUFDUEMsTUFETzs7QUFHbkIsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUN4QkQsVUFBTSxDQUFDLENBQUNELEdBQUYsQ0FBTjtBQUNELEdBRkQ7O0FBSUEsTUFBTUcsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUN0Qix3QkFDRSxxRUFBQywrQ0FBRDtBQUFRLGFBQU8sRUFBQyxLQUFoQjtBQUFzQixhQUFPLEVBQUVELFdBQS9CO0FBQUEsZ0JBQ0dGLEdBQUcsZ0JBQUcscUVBQUMsa0RBQUQ7QUFBSyxnQkFBUSxFQUFFO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFILGdCQUEyQixxRUFBQyw2REFBRDtBQUFnQixnQkFBUSxFQUFFO0FBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEakM7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGO0FBS0QsR0FORDs7QUFRQSxNQUFNSSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBQ25CLFdBQU9KLEdBQUcsZ0JBQ1IscUVBQUMsNENBQUQ7QUFBSyxRQUFFLEVBQUU7QUFBRU4sYUFBSyxFQUFFVyx1REFBVDtBQUFzQlYsY0FBTSxFQUFFVyx3REFBWUE7QUFBMUMsT0FBVDtBQUFBLDZCQUNFLHFFQUFDLE1BQUQ7QUFBQSwwQkFFR0gsU0FBUyxFQUZaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFEUSxHQVFSQSxTQUFTLEVBUlg7QUFVRCxHQVhEOztBQWFBLFNBQU87QUFDTEMsVUFBTSxFQUFOQTtBQURLLEdBQVA7QUFHRCxDQS9CRDs7R0FBTU4sTTs7QUFpQ1NBLHFFQUFmIiwiZmlsZSI6Ii4vc3JjL2hvb2tzL2ZlYXR1cmUvdXNlTmF2LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgRmlBbGlnbkp1c3RpZnksIEZpWCB9IGZyb20gJ3JlYWN0LWljb25zL2ZpJ1xuaW1wb3J0IHsgQm94LCBCdXR0b24sIEZsZXgsIEZsZXhQcm9wcyB9IGZyb20gJ3RoZW1lLXVpJ1xuXG5pbXBvcnQgeyBjbGllbnRIZWlnaHQsIGNsaWVudFdpZHRoIH0gZnJvbSAnfnV0aWxzL21pc2MnXG5cbmNvbnN0IE5hdkJveCA9ICh7IHN4LCAuLi5wcm9wcyB9OiBGbGV4UHJvcHMpID0+IChcbiAgPEZsZXhcbiAgICBzeD17e1xuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgYmc6ICduYXYnLFxuICAgICAgYW5pbWF0aW9uOiAnY2hhbmdlTmF2QmcgMXMgbGluZWFyJyxcbiAgICAgIC4uLnN4LFxuICAgIH19XG4gICAgey4uLnByb3BzfVxuICAvPlxuKVxuXG5jb25zdCB1c2VOYXYgPSAoKSA9PiB7XG4gIGNvbnN0IFtuYXYsIHNldE5hdl0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcbiAgICBzZXROYXYoIW5hdilcbiAgfVxuXG4gIGNvbnN0IG5hdlRvZ2dsZSA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPEJ1dHRvbiB2YXJpYW50PVwibmF2XCIgb25DbGljaz17aGFuZGxlQ2xpY2t9PlxuICAgICAgICB7bmF2ID8gPEZpWCBmb250U2l6ZT17MzB9IC8+IDogPEZpQWxpZ25KdXN0aWZ5IGZvbnRTaXplPXszMH0gLz59XG4gICAgICA8L0J1dHRvbj5cbiAgICApXG4gIH1cblxuICBjb25zdCByZW5kZXIgPSAoKSA9PiB7XG4gICAgcmV0dXJuIG5hdiA/IChcbiAgICAgIDxCb3ggc3g9e3sgd2lkdGg6IGNsaWVudFdpZHRoLCBoZWlnaHQ6IGNsaWVudEhlaWdodCB9fT5cbiAgICAgICAgPE5hdkJveD5cbiAgICAgICAgICBuYXZcbiAgICAgICAgICB7bmF2VG9nZ2xlKCl9XG4gICAgICAgIDwvTmF2Qm94PlxuICAgICAgPC9Cb3g+XG4gICAgKSA6IChcbiAgICAgIG5hdlRvZ2dsZSgpXG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICByZW5kZXIsXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgdXNlTmF2XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/hooks/feature/useNav.tsx\n");

/***/ })

})