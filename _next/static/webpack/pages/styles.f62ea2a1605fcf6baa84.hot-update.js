webpackHotUpdate_N_E("pages/styles",{

/***/ "./src/hooks/view/useRotatingSquares.tsx":
/*!***********************************************!*\
  !*** ./src/hooks/view/useRotatingSquares.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Users_kwon_Desktop_work_kwon_pages_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var _Users_kwon_Desktop_work_kwon_pages_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! theme-ui */ \"./node_modules/theme-ui/dist/index.esm.js\");\n/* harmony import */ var _components_Atoms_CenteredFlex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~components/Atoms/CenteredFlex */ \"./src/components/Atoms/CenteredFlex.tsx\");\n\n\n\n\nvar _jsxFileName = \"/Users/kwon/Desktop/work/kwon-pages/src/hooks/view/useRotatingSquares.tsx\",\n    _this = undefined;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_kwon_Desktop_work_kwon_pages_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\nvar LoaderBox = function LoaderBox(props) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(theme_ui__WEBPACK_IMPORTED_MODULE_4__[\"Box\"], _objectSpread({\n    bg: \"black\",\n    sx: {\n      position: 'relative',\n      width: '50px',\n      height: '50px'\n    }\n  }, props), void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 3\n  }, _this);\n};\n\n_c = LoaderBox;\n\nvar ItemBox = function ItemBox(_ref) {\n  var sx = _ref.sx,\n      props = Object(_Users_kwon_Desktop_work_kwon_pages_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_ref, [\"sx\"]);\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(theme_ui__WEBPACK_IMPORTED_MODULE_4__[\"Box\"], _objectSpread({\n    bg: \"black\",\n    sx: _objectSpread(_objectSpread({}, sx), {}, {\n      position: 'absolute',\n      width: '100%',\n      height: '100%'\n    })\n  }, props), void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 11,\n    columnNumber: 3\n  }, _this);\n};\n\n_c2 = ItemBox;\n\nvar useRotatingSquares = function useRotatingSquares() {\n  var render = function render() {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(theme_ui__WEBPACK_IMPORTED_MODULE_4__[\"Box\"], {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_components_Atoms_CenteredFlex__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        sx: {\n          height: '100vh'\n        },\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(LoaderBox, {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n            children: \"dafsd\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 29,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(ItemBox, {\n            sx: {\n              top: '-100%',\n              left: 2,\n              transformOrigin: 'bottom right'\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 30,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(ItemBox, {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 31,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(ItemBox, {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 32,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(ItemBox, {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 33,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 28,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }, _this);\n  };\n\n  return {\n    render: render\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (useRotatingSquares);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"LoaderBox\");\n$RefreshReg$(_c2, \"ItemBox\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2hvb2tzL3ZpZXcvdXNlUm90YXRpbmdTcXVhcmVzLnRzeD9lYjdkIl0sIm5hbWVzIjpbIkxvYWRlckJveCIsInByb3BzIiwicG9zaXRpb24iLCJ3aWR0aCIsImhlaWdodCIsIkl0ZW1Cb3giLCJzeCIsInVzZVJvdGF0aW5nU3F1YXJlcyIsInJlbmRlciIsInRvcCIsImxlZnQiLCJ0cmFuc2Zvcm1PcmlnaW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBOztBQUVBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLEtBQUQ7QUFBQSxzQkFDaEIscUVBQUMsNENBQUQ7QUFBSyxNQUFFLEVBQUMsT0FBUjtBQUFnQixNQUFFLEVBQUU7QUFBRUMsY0FBUSxFQUFFLFVBQVo7QUFBd0JDLFdBQUssRUFBRSxNQUEvQjtBQUF1Q0MsWUFBTSxFQUFFO0FBQS9DO0FBQXBCLEtBQWlGSCxLQUFqRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRGdCO0FBQUEsQ0FBbEI7O0tBQU1ELFM7O0FBSU4sSUFBTUssT0FBTyxHQUFHLFNBQVZBLE9BQVU7QUFBQSxNQUFHQyxFQUFILFFBQUdBLEVBQUg7QUFBQSxNQUFVTCxLQUFWOztBQUFBLHNCQUNkLHFFQUFDLDRDQUFEO0FBQ0UsTUFBRSxFQUFDLE9BREw7QUFFRSxNQUFFLGtDQUNHSyxFQURIO0FBRUFKLGNBQVEsRUFBRSxVQUZWO0FBR0FDLFdBQUssRUFBRSxNQUhQO0FBSUFDLFlBQU0sRUFBRTtBQUpSO0FBRkosS0FRTUgsS0FSTjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRGM7QUFBQSxDQUFoQjs7TUFBTUksTzs7QUFhTixJQUFNRSxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLEdBQU07QUFDL0IsTUFBTUMsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUNuQix3QkFDRSxxRUFBQyw0Q0FBRDtBQUFBLDZCQUNFLHFFQUFDLHNFQUFEO0FBQWMsVUFBRSxFQUFFO0FBQUVKLGdCQUFNLEVBQUU7QUFBVixTQUFsQjtBQUFBLCtCQUNFLHFFQUFDLFNBQUQ7QUFBQSxrQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFLHFFQUFDLE9BQUQ7QUFBUyxjQUFFLEVBQUU7QUFBRUssaUJBQUcsRUFBRSxPQUFQO0FBQWdCQyxrQkFBSSxFQUFFLENBQXRCO0FBQXlCQyw2QkFBZSxFQUFFO0FBQTFDO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRixlQUdFLHFFQUFDLE9BQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFIRixlQUlFLHFFQUFDLE9BQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKRixlQUtFLHFFQUFDLE9BQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGO0FBYUQsR0FkRDs7QUFlQSxTQUFPO0FBQUVILFVBQU0sRUFBTkE7QUFBRixHQUFQO0FBQ0QsQ0FqQkQ7O0FBbUJlRCxpRkFBZiIsImZpbGUiOiIuL3NyYy9ob29rcy92aWV3L3VzZVJvdGF0aW5nU3F1YXJlcy50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBCb3gsIEJveFByb3BzIH0gZnJvbSAndGhlbWUtdWknXG5cbmltcG9ydCBDZW50ZXJlZEZsZXggZnJvbSAnfmNvbXBvbmVudHMvQXRvbXMvQ2VudGVyZWRGbGV4J1xuXG5jb25zdCBMb2FkZXJCb3ggPSAocHJvcHM6IEJveFByb3BzKSA9PiAoXG4gIDxCb3ggYmc9XCJibGFja1wiIHN4PXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCB3aWR0aDogJzUwcHgnLCBoZWlnaHQ6ICc1MHB4JyB9fSB7Li4ucHJvcHN9IC8+XG4pXG5cbmNvbnN0IEl0ZW1Cb3ggPSAoeyBzeCwgLi4ucHJvcHMgfTogQm94UHJvcHMpID0+IChcbiAgPEJveFxuICAgIGJnPVwiYmxhY2tcIlxuICAgIHN4PXt7XG4gICAgICAuLi5zeCxcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgIH19XG4gICAgey4uLnByb3BzfVxuICAvPlxuKVxuXG5jb25zdCB1c2VSb3RhdGluZ1NxdWFyZXMgPSAoKSA9PiB7XG4gIGNvbnN0IHJlbmRlciA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPEJveD5cbiAgICAgICAgPENlbnRlcmVkRmxleCBzeD17eyBoZWlnaHQ6ICcxMDB2aCcgfX0+XG4gICAgICAgICAgPExvYWRlckJveD5cbiAgICAgICAgICAgIDxkaXY+ZGFmc2Q8L2Rpdj5cbiAgICAgICAgICAgIDxJdGVtQm94IHN4PXt7IHRvcDogJy0xMDAlJywgbGVmdDogMiwgdHJhbnNmb3JtT3JpZ2luOiAnYm90dG9tIHJpZ2h0JyB9fSAvPlxuICAgICAgICAgICAgPEl0ZW1Cb3ggLz5cbiAgICAgICAgICAgIDxJdGVtQm94IC8+XG4gICAgICAgICAgICA8SXRlbUJveCAvPlxuICAgICAgICAgIDwvTG9hZGVyQm94PlxuICAgICAgICA8L0NlbnRlcmVkRmxleD5cbiAgICAgIDwvQm94PlxuICAgIClcbiAgfVxuICByZXR1cm4geyByZW5kZXIgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB1c2VSb3RhdGluZ1NxdWFyZXNcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/hooks/view/useRotatingSquares.tsx\n");

/***/ })

})