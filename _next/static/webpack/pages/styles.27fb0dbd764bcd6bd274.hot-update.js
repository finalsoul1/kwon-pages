webpackHotUpdate_N_E("pages/styles",{

/***/ "./src/hooks/view/useRotatingSquares.tsx":
/*!***********************************************!*\
  !*** ./src/hooks/view/useRotatingSquares.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Users_kwon_Desktop_work_kwon_pages_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var _Users_kwon_Desktop_work_kwon_pages_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! theme-ui */ \"./node_modules/theme-ui/dist/index.esm.js\");\n/* harmony import */ var _components_Atoms_CenteredFlex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~components/Atoms/CenteredFlex */ \"./src/components/Atoms/CenteredFlex.tsx\");\n\n\n\n\nvar _jsxFileName = \"/Users/kwon/Desktop/work/kwon-pages/src/hooks/view/useRotatingSquares.tsx\",\n    _this = undefined;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_kwon_Desktop_work_kwon_pages_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\nvar LoaderBox = function LoaderBox(props) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(theme_ui__WEBPACK_IMPORTED_MODULE_4__[\"Box\"], _objectSpread({\n    bg: \"black\",\n    sx: {\n      position: 'relative',\n      width: '50px',\n      height: '50px',\n      '::before, > ::before': {\n        content: '\"\"',\n        position: 'absolute',\n        top: 1,\n        left: 1,\n        right: 1,\n        bottom: 1,\n        bg: 'white'\n      }\n    }\n  }, props), void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 3\n  }, _this);\n};\n\n_c = LoaderBox;\n\nvar ItemBox = function ItemBox(_ref) {\n  var sx = _ref.sx,\n      props = Object(_Users_kwon_Desktop_work_kwon_pages_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_ref, [\"sx\"]);\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(theme_ui__WEBPACK_IMPORTED_MODULE_4__[\"Box\"], _objectSpread({\n    bg: \"black\",\n    sx: _objectSpread(_objectSpread({}, sx), {}, {\n      position: 'absolute',\n      width: '100%',\n      height: '100%'\n    })\n  }, props), void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 28,\n    columnNumber: 3\n  }, _this);\n};\n\n_c2 = ItemBox;\n\nvar useRotatingSquares = function useRotatingSquares() {\n  var render = function render() {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(theme_ui__WEBPACK_IMPORTED_MODULE_4__[\"Box\"], {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_components_Atoms_CenteredFlex__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        sx: {\n          height: '100vh'\n        },\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(LoaderBox, {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(ItemBox, {\n            sx: {\n              top: '-100%',\n              left: 1,\n              transformOrigin: 'bottom right',\n              '::before': {\n                bg: '#ff0'\n              }\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 46,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(ItemBox, {\n            sx: {\n              right: '-100%',\n              top: -1,\n              transformOrigin: 'bottom left',\n              '::before': {\n                bg: '#ff0'\n              }\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 54,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(ItemBox, {\n            sx: {\n              bottom: '-100%',\n              left: 1,\n              transformOrigin: 'top left',\n              '::before': {\n                bg: '#ff0'\n              }\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 62,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(ItemBox, {\n            sx: {\n              left: '-100%',\n              top: 1,\n              transformOrigin: 'top right',\n              '::before': {\n                bg: '#ff0'\n              }\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 70,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 45,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 7\n    }, _this);\n  };\n\n  return {\n    render: render\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (useRotatingSquares);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"LoaderBox\");\n$RefreshReg$(_c2, \"ItemBox\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2hvb2tzL3ZpZXcvdXNlUm90YXRpbmdTcXVhcmVzLnRzeD9lYjdkIl0sIm5hbWVzIjpbIkxvYWRlckJveCIsInByb3BzIiwicG9zaXRpb24iLCJ3aWR0aCIsImhlaWdodCIsImNvbnRlbnQiLCJ0b3AiLCJsZWZ0IiwicmlnaHQiLCJib3R0b20iLCJiZyIsIkl0ZW1Cb3giLCJzeCIsInVzZVJvdGF0aW5nU3F1YXJlcyIsInJlbmRlciIsInRyYW5zZm9ybU9yaWdpbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7O0FBRUEsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0MsS0FBRDtBQUFBLHNCQUNoQixxRUFBQyw0Q0FBRDtBQUNFLE1BQUUsRUFBQyxPQURMO0FBRUUsTUFBRSxFQUFFO0FBQ0ZDLGNBQVEsRUFBRSxVQURSO0FBRUZDLFdBQUssRUFBRSxNQUZMO0FBR0ZDLFlBQU0sRUFBRSxNQUhOO0FBSUYsOEJBQXdCO0FBQ3RCQyxlQUFPLEVBQUUsSUFEYTtBQUV0QkgsZ0JBQVEsRUFBRSxVQUZZO0FBR3RCSSxXQUFHLEVBQUUsQ0FIaUI7QUFJdEJDLFlBQUksRUFBRSxDQUpnQjtBQUt0QkMsYUFBSyxFQUFFLENBTGU7QUFNdEJDLGNBQU0sRUFBRSxDQU5jO0FBT3RCQyxVQUFFLEVBQUU7QUFQa0I7QUFKdEI7QUFGTixLQWdCTVQsS0FoQk47QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURnQjtBQUFBLENBQWxCOztLQUFNRCxTOztBQXFCTixJQUFNVyxPQUFPLEdBQUcsU0FBVkEsT0FBVTtBQUFBLE1BQUdDLEVBQUgsUUFBR0EsRUFBSDtBQUFBLE1BQVVYLEtBQVY7O0FBQUEsc0JBQ2QscUVBQUMsNENBQUQ7QUFDRSxNQUFFLEVBQUMsT0FETDtBQUVFLE1BQUUsa0NBQ0dXLEVBREg7QUFFQVYsY0FBUSxFQUFFLFVBRlY7QUFHQUMsV0FBSyxFQUFFLE1BSFA7QUFJQUMsWUFBTSxFQUFFO0FBSlI7QUFGSixLQVFNSCxLQVJOO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FEYztBQUFBLENBQWhCOztNQUFNVSxPOztBQWFOLElBQU1FLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsR0FBTTtBQUMvQixNQUFNQyxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBQ25CLHdCQUNFLHFFQUFDLDRDQUFEO0FBQUEsNkJBQ0UscUVBQUMsc0VBQUQ7QUFBYyxVQUFFLEVBQUU7QUFBRVYsZ0JBQU0sRUFBRTtBQUFWLFNBQWxCO0FBQUEsK0JBQ0UscUVBQUMsU0FBRDtBQUFBLGtDQUNFLHFFQUFDLE9BQUQ7QUFDRSxjQUFFLEVBQUU7QUFDRkUsaUJBQUcsRUFBRSxPQURIO0FBRUZDLGtCQUFJLEVBQUUsQ0FGSjtBQUdGUSw2QkFBZSxFQUFFLGNBSGY7QUFJRiwwQkFBWTtBQUFFTCxrQkFBRSxFQUFFO0FBQU47QUFKVjtBQUROO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFTRSxxRUFBQyxPQUFEO0FBQ0UsY0FBRSxFQUFFO0FBQ0ZGLG1CQUFLLEVBQUUsT0FETDtBQUVGRixpQkFBRyxFQUFFLENBQUMsQ0FGSjtBQUdGUyw2QkFBZSxFQUFFLGFBSGY7QUFJRiwwQkFBWTtBQUFFTCxrQkFBRSxFQUFFO0FBQU47QUFKVjtBQUROO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBVEYsZUFpQkUscUVBQUMsT0FBRDtBQUNFLGNBQUUsRUFBRTtBQUNGRCxvQkFBTSxFQUFFLE9BRE47QUFFRkYsa0JBQUksRUFBRSxDQUZKO0FBR0ZRLDZCQUFlLEVBQUUsVUFIZjtBQUlGLDBCQUFZO0FBQUVMLGtCQUFFLEVBQUU7QUFBTjtBQUpWO0FBRE47QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFqQkYsZUF5QkUscUVBQUMsT0FBRDtBQUNFLGNBQUUsRUFBRTtBQUNGSCxrQkFBSSxFQUFFLE9BREo7QUFFRkQsaUJBQUcsRUFBRSxDQUZIO0FBR0ZTLDZCQUFlLEVBQUUsV0FIZjtBQUlGLDBCQUFZO0FBQUVMLGtCQUFFLEVBQUU7QUFBTjtBQUpWO0FBRE47QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkF6QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERjtBQXdDRCxHQXpDRDs7QUEwQ0EsU0FBTztBQUFFSSxVQUFNLEVBQU5BO0FBQUYsR0FBUDtBQUNELENBNUNEOztBQThDZUQsaUZBQWYiLCJmaWxlIjoiLi9zcmMvaG9va3Mvdmlldy91c2VSb3RhdGluZ1NxdWFyZXMudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQm94LCBCb3hQcm9wcyB9IGZyb20gJ3RoZW1lLXVpJ1xuXG5pbXBvcnQgQ2VudGVyZWRGbGV4IGZyb20gJ35jb21wb25lbnRzL0F0b21zL0NlbnRlcmVkRmxleCdcblxuY29uc3QgTG9hZGVyQm94ID0gKHByb3BzOiBCb3hQcm9wcykgPT4gKFxuICA8Qm94XG4gICAgYmc9XCJibGFja1wiXG4gICAgc3g9e3tcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgd2lkdGg6ICc1MHB4JyxcbiAgICAgIGhlaWdodDogJzUwcHgnLFxuICAgICAgJzo6YmVmb3JlLCA+IDo6YmVmb3JlJzoge1xuICAgICAgICBjb250ZW50OiAnXCJcIicsXG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICB0b3A6IDEsXG4gICAgICAgIGxlZnQ6IDEsXG4gICAgICAgIHJpZ2h0OiAxLFxuICAgICAgICBib3R0b206IDEsXG4gICAgICAgIGJnOiAnd2hpdGUnLFxuICAgICAgfSxcbiAgICB9fVxuICAgIHsuLi5wcm9wc31cbiAgLz5cbilcblxuY29uc3QgSXRlbUJveCA9ICh7IHN4LCAuLi5wcm9wcyB9OiBCb3hQcm9wcykgPT4gKFxuICA8Qm94XG4gICAgYmc9XCJibGFja1wiXG4gICAgc3g9e3tcbiAgICAgIC4uLnN4LFxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgfX1cbiAgICB7Li4ucHJvcHN9XG4gIC8+XG4pXG5cbmNvbnN0IHVzZVJvdGF0aW5nU3F1YXJlcyA9ICgpID0+IHtcbiAgY29uc3QgcmVuZGVyID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8Qm94PlxuICAgICAgICA8Q2VudGVyZWRGbGV4IHN4PXt7IGhlaWdodDogJzEwMHZoJyB9fT5cbiAgICAgICAgICA8TG9hZGVyQm94PlxuICAgICAgICAgICAgPEl0ZW1Cb3hcbiAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICB0b3A6ICctMTAwJScsXG4gICAgICAgICAgICAgICAgbGVmdDogMSxcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm1PcmlnaW46ICdib3R0b20gcmlnaHQnLFxuICAgICAgICAgICAgICAgICc6OmJlZm9yZSc6IHsgYmc6ICcjZmYwJyB9LFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxJdGVtQm94XG4gICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgcmlnaHQ6ICctMTAwJScsXG4gICAgICAgICAgICAgICAgdG9wOiAtMSxcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm1PcmlnaW46ICdib3R0b20gbGVmdCcsXG4gICAgICAgICAgICAgICAgJzo6YmVmb3JlJzogeyBiZzogJyNmZjAnIH0sXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPEl0ZW1Cb3hcbiAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICBib3R0b206ICctMTAwJScsXG4gICAgICAgICAgICAgICAgbGVmdDogMSxcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm1PcmlnaW46ICd0b3AgbGVmdCcsXG4gICAgICAgICAgICAgICAgJzo6YmVmb3JlJzogeyBiZzogJyNmZjAnIH0sXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPEl0ZW1Cb3hcbiAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICBsZWZ0OiAnLTEwMCUnLFxuICAgICAgICAgICAgICAgIHRvcDogMSxcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm1PcmlnaW46ICd0b3AgcmlnaHQnLFxuICAgICAgICAgICAgICAgICc6OmJlZm9yZSc6IHsgYmc6ICcjZmYwJyB9LFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0xvYWRlckJveD5cbiAgICAgICAgPC9DZW50ZXJlZEZsZXg+XG4gICAgICA8L0JveD5cbiAgICApXG4gIH1cbiAgcmV0dXJuIHsgcmVuZGVyIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgdXNlUm90YXRpbmdTcXVhcmVzXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/hooks/view/useRotatingSquares.tsx\n");

/***/ })

})