webpackHotUpdate_N_E("pages/styles",{

/***/ "./src/hooks/view/useRotatingSquares.tsx":
/*!***********************************************!*\
  !*** ./src/hooks/view/useRotatingSquares.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Users_kwon_Desktop_work_kwon_pages_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var _Users_kwon_Desktop_work_kwon_pages_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! theme-ui */ \"./node_modules/theme-ui/dist/index.esm.js\");\n/* harmony import */ var _components_Atoms_CenteredFlex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~components/Atoms/CenteredFlex */ \"./src/components/Atoms/CenteredFlex.tsx\");\n\n\n\n\nvar _jsxFileName = \"/Users/kwon/Desktop/work/kwon-pages/src/hooks/view/useRotatingSquares.tsx\",\n    _this = undefined;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_kwon_Desktop_work_kwon_pages_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\nvar LoaderBox = function LoaderBox(props) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(theme_ui__WEBPACK_IMPORTED_MODULE_4__[\"Box\"], _objectSpread({\n    bg: \"black\",\n    sx: {\n      position: 'relative',\n      width: '50px',\n      height: '50px',\n      '::before, > ::before': {\n        content: '\"\"',\n        position: 'absolute',\n        top: 2,\n        left: 2,\n        right: 2,\n        bottom: 2,\n        bg: 'white'\n      }\n    }\n  }, props), void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 3\n  }, _this);\n};\n\n_c = LoaderBox;\n\nvar ItemBox = function ItemBox(_ref) {\n  var sx = _ref.sx,\n      props = Object(_Users_kwon_Desktop_work_kwon_pages_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_ref, [\"sx\"]);\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(theme_ui__WEBPACK_IMPORTED_MODULE_4__[\"Box\"], _objectSpread({\n    bg: \"black\",\n    sx: _objectSpread(_objectSpread({}, sx), {}, {\n      position: 'absolute',\n      width: '100%',\n      height: '100%'\n    })\n  }, props), void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 28,\n    columnNumber: 3\n  }, _this);\n};\n\n_c2 = ItemBox;\n\nvar useRotatingSquares = function useRotatingSquares() {\n  var render = function render() {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(theme_ui__WEBPACK_IMPORTED_MODULE_4__[\"Box\"], {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_components_Atoms_CenteredFlex__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        sx: {\n          height: '100vh'\n        },\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(LoaderBox, {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(ItemBox, {\n            sx: {\n              top: '-100%',\n              left: 1,\n              transformOrigin: 'bottom right'\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 46,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(ItemBox, {\n            sx: {\n              right: '-100%',\n              top: -1,\n              transformOrigin: 'bottom left'\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 47,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(ItemBox, {\n            sx: {\n              bottom: '-100%',\n              left: 1,\n              transformOrigin: 'top left'\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 48,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(ItemBox, {\n            sx: {\n              left: '-100%',\n              top: 1,\n              transformOrigin: 'top right'\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 49,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 45,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 7\n    }, _this);\n  };\n\n  return {\n    render: render\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (useRotatingSquares);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"LoaderBox\");\n$RefreshReg$(_c2, \"ItemBox\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2hvb2tzL3ZpZXcvdXNlUm90YXRpbmdTcXVhcmVzLnRzeD9lYjdkIl0sIm5hbWVzIjpbIkxvYWRlckJveCIsInByb3BzIiwicG9zaXRpb24iLCJ3aWR0aCIsImhlaWdodCIsImNvbnRlbnQiLCJ0b3AiLCJsZWZ0IiwicmlnaHQiLCJib3R0b20iLCJiZyIsIkl0ZW1Cb3giLCJzeCIsInVzZVJvdGF0aW5nU3F1YXJlcyIsInJlbmRlciIsInRyYW5zZm9ybU9yaWdpbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7O0FBRUEsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0MsS0FBRDtBQUFBLHNCQUNoQixxRUFBQyw0Q0FBRDtBQUNFLE1BQUUsRUFBQyxPQURMO0FBRUUsTUFBRSxFQUFFO0FBQ0ZDLGNBQVEsRUFBRSxVQURSO0FBRUZDLFdBQUssRUFBRSxNQUZMO0FBR0ZDLFlBQU0sRUFBRSxNQUhOO0FBSUYsOEJBQXdCO0FBQ3RCQyxlQUFPLEVBQUUsSUFEYTtBQUV0QkgsZ0JBQVEsRUFBRSxVQUZZO0FBR3RCSSxXQUFHLEVBQUUsQ0FIaUI7QUFJdEJDLFlBQUksRUFBRSxDQUpnQjtBQUt0QkMsYUFBSyxFQUFFLENBTGU7QUFNdEJDLGNBQU0sRUFBRSxDQU5jO0FBT3RCQyxVQUFFLEVBQUU7QUFQa0I7QUFKdEI7QUFGTixLQWdCTVQsS0FoQk47QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURnQjtBQUFBLENBQWxCOztLQUFNRCxTOztBQXFCTixJQUFNVyxPQUFPLEdBQUcsU0FBVkEsT0FBVTtBQUFBLE1BQUdDLEVBQUgsUUFBR0EsRUFBSDtBQUFBLE1BQVVYLEtBQVY7O0FBQUEsc0JBQ2QscUVBQUMsNENBQUQ7QUFDRSxNQUFFLEVBQUMsT0FETDtBQUVFLE1BQUUsa0NBQ0dXLEVBREg7QUFFQVYsY0FBUSxFQUFFLFVBRlY7QUFHQUMsV0FBSyxFQUFFLE1BSFA7QUFJQUMsWUFBTSxFQUFFO0FBSlI7QUFGSixLQVFNSCxLQVJOO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FEYztBQUFBLENBQWhCOztNQUFNVSxPOztBQWFOLElBQU1FLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsR0FBTTtBQUMvQixNQUFNQyxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBQ25CLHdCQUNFLHFFQUFDLDRDQUFEO0FBQUEsNkJBQ0UscUVBQUMsc0VBQUQ7QUFBYyxVQUFFLEVBQUU7QUFBRVYsZ0JBQU0sRUFBRTtBQUFWLFNBQWxCO0FBQUEsK0JBQ0UscUVBQUMsU0FBRDtBQUFBLGtDQUNFLHFFQUFDLE9BQUQ7QUFBUyxjQUFFLEVBQUU7QUFBRUUsaUJBQUcsRUFBRSxPQUFQO0FBQWdCQyxrQkFBSSxFQUFFLENBQXRCO0FBQXlCUSw2QkFBZSxFQUFFO0FBQTFDO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFLHFFQUFDLE9BQUQ7QUFBUyxjQUFFLEVBQUU7QUFBRVAsbUJBQUssRUFBRSxPQUFUO0FBQWtCRixpQkFBRyxFQUFFLENBQUMsQ0FBeEI7QUFBMkJTLDZCQUFlLEVBQUU7QUFBNUM7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGLGVBR0UscUVBQUMsT0FBRDtBQUFTLGNBQUUsRUFBRTtBQUFFTixvQkFBTSxFQUFFLE9BQVY7QUFBbUJGLGtCQUFJLEVBQUUsQ0FBekI7QUFBNEJRLDZCQUFlLEVBQUU7QUFBN0M7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUhGLGVBSUUscUVBQUMsT0FBRDtBQUFTLGNBQUUsRUFBRTtBQUFFUixrQkFBSSxFQUFFLE9BQVI7QUFBaUJELGlCQUFHLEVBQUUsQ0FBdEI7QUFBeUJTLDZCQUFlLEVBQUU7QUFBMUM7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREY7QUFZRCxHQWJEOztBQWNBLFNBQU87QUFBRUQsVUFBTSxFQUFOQTtBQUFGLEdBQVA7QUFDRCxDQWhCRDs7QUFrQmVELGlGQUFmIiwiZmlsZSI6Ii4vc3JjL2hvb2tzL3ZpZXcvdXNlUm90YXRpbmdTcXVhcmVzLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEJveCwgQm94UHJvcHMgfSBmcm9tICd0aGVtZS11aSdcblxuaW1wb3J0IENlbnRlcmVkRmxleCBmcm9tICd+Y29tcG9uZW50cy9BdG9tcy9DZW50ZXJlZEZsZXgnXG5cbmNvbnN0IExvYWRlckJveCA9IChwcm9wczogQm94UHJvcHMpID0+IChcbiAgPEJveFxuICAgIGJnPVwiYmxhY2tcIlxuICAgIHN4PXt7XG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgIHdpZHRoOiAnNTBweCcsXG4gICAgICBoZWlnaHQ6ICc1MHB4JyxcbiAgICAgICc6OmJlZm9yZSwgPiA6OmJlZm9yZSc6IHtcbiAgICAgICAgY29udGVudDogJ1wiXCInLFxuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgdG9wOiAyLFxuICAgICAgICBsZWZ0OiAyLFxuICAgICAgICByaWdodDogMixcbiAgICAgICAgYm90dG9tOiAyLFxuICAgICAgICBiZzogJ3doaXRlJyxcbiAgICAgIH0sXG4gICAgfX1cbiAgICB7Li4ucHJvcHN9XG4gIC8+XG4pXG5cbmNvbnN0IEl0ZW1Cb3ggPSAoeyBzeCwgLi4ucHJvcHMgfTogQm94UHJvcHMpID0+IChcbiAgPEJveFxuICAgIGJnPVwiYmxhY2tcIlxuICAgIHN4PXt7XG4gICAgICAuLi5zeCxcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgIH19XG4gICAgey4uLnByb3BzfVxuICAvPlxuKVxuXG5jb25zdCB1c2VSb3RhdGluZ1NxdWFyZXMgPSAoKSA9PiB7XG4gIGNvbnN0IHJlbmRlciA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPEJveD5cbiAgICAgICAgPENlbnRlcmVkRmxleCBzeD17eyBoZWlnaHQ6ICcxMDB2aCcgfX0+XG4gICAgICAgICAgPExvYWRlckJveD5cbiAgICAgICAgICAgIDxJdGVtQm94IHN4PXt7IHRvcDogJy0xMDAlJywgbGVmdDogMSwgdHJhbnNmb3JtT3JpZ2luOiAnYm90dG9tIHJpZ2h0JyB9fSAvPlxuICAgICAgICAgICAgPEl0ZW1Cb3ggc3g9e3sgcmlnaHQ6ICctMTAwJScsIHRvcDogLTEsIHRyYW5zZm9ybU9yaWdpbjogJ2JvdHRvbSBsZWZ0JyB9fSAvPlxuICAgICAgICAgICAgPEl0ZW1Cb3ggc3g9e3sgYm90dG9tOiAnLTEwMCUnLCBsZWZ0OiAxLCB0cmFuc2Zvcm1PcmlnaW46ICd0b3AgbGVmdCcgfX0gLz5cbiAgICAgICAgICAgIDxJdGVtQm94IHN4PXt7IGxlZnQ6ICctMTAwJScsIHRvcDogMSwgdHJhbnNmb3JtT3JpZ2luOiAndG9wIHJpZ2h0JyB9fSAvPlxuICAgICAgICAgIDwvTG9hZGVyQm94PlxuICAgICAgICA8L0NlbnRlcmVkRmxleD5cbiAgICAgIDwvQm94PlxuICAgIClcbiAgfVxuICByZXR1cm4geyByZW5kZXIgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB1c2VSb3RhdGluZ1NxdWFyZXNcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/hooks/view/useRotatingSquares.tsx\n");

/***/ })

})