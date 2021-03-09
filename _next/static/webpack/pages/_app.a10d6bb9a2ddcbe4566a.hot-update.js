webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/hooks/view/useRotateNav.tsx":
/*!*****************************************!*\
  !*** ./src/hooks/view/useRotateNav.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/bi */ \"./node_modules/react-icons/bi/index.esm.js\");\n/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! theme-ui */ \"./node_modules/theme-ui/dist/index.esm.js\");\n/* harmony import */ var _libs_rotate_rotatePolygon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../libs/rotate/rotatePolygon */ \"./src/libs/rotate/rotatePolygon.js\");\n\n\n\nvar _jsxFileName = \"/Users/kwon/Desktop/work/kwon-pages/src/hooks/view/useRotateNav.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar useRotateNav = function useRotateNav() {\n  _s();\n\n  var main = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])(null);\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      onNav = _useState[0],\n      setOnNav = _useState[1];\n\n  var handleClick = function handleClick() {\n    console.log('click');\n    document.body.style.position = onNav ? 'fixed' : 'none';\n    setOnNav(!onNav);\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    new _libs_rotate_rotatePolygon__WEBPACK_IMPORTED_MODULE_4__[\"default\"]({\n      container: main.current,\n      type: 'horizon',\n      sides: 15\n    });\n  }, []);\n\n  var renderCanvas = function renderCanvas() {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(theme_ui__WEBPACK_IMPORTED_MODULE_3__[\"Box\"], {\n        sx: {\n          width: '100%',\n          position: 'fixed',\n          bottom: 0,\n          py: 3,\n          textAlign: 'center',\n          zIndex: 100\n        },\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(theme_ui__WEBPACK_IMPORTED_MODULE_3__[\"Button\"], {\n          variant: \"naked\",\n          onClick: handleClick,\n          children: onNav ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_bi__WEBPACK_IMPORTED_MODULE_2__[\"BiChevronsDown\"], {\n            fontSize: 40\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 35,\n            columnNumber: 22\n          }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_bi__WEBPACK_IMPORTED_MODULE_2__[\"BiChevronsUp\"], {\n            fontSize: 40\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 35,\n            columnNumber: 57\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 34,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(theme_ui__WEBPACK_IMPORTED_MODULE_3__[\"Box\"], {\n        ref: main,\n        sx: {\n          position: 'absolute',\n          display: onNav ? 'block' : 'none'\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true);\n  };\n\n  return {\n    renderCanvas: renderCanvas\n  };\n};\n\n_s(useRotateNav, \"B0W3F5M2WMaBI2jIqEw2iM3l/W0=\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (useRotateNav);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2hvb2tzL3ZpZXcvdXNlUm90YXRlTmF2LnRzeD9mMWZmIl0sIm5hbWVzIjpbInVzZVJvdGF0ZU5hdiIsIm1haW4iLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIm9uTmF2Iiwic2V0T25OYXYiLCJoYW5kbGVDbGljayIsImNvbnNvbGUiLCJsb2ciLCJkb2N1bWVudCIsImJvZHkiLCJzdHlsZSIsInBvc2l0aW9uIiwidXNlRWZmZWN0IiwiUm90YXRlUG9seWdvbiIsImNvbnRhaW5lciIsImN1cnJlbnQiLCJ0eXBlIiwic2lkZXMiLCJyZW5kZXJDYW52YXMiLCJ3aWR0aCIsImJvdHRvbSIsInB5IiwidGV4dEFsaWduIiwiekluZGV4IiwiZGlzcGxheSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7O0FBRUEsSUFBTUEsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUFBOztBQUN6QixNQUFNQyxJQUFJLEdBQUdDLG9EQUFNLENBQUMsSUFBRCxDQUFuQjs7QUFEeUIsa0JBRUNDLHNEQUFRLENBQUMsS0FBRCxDQUZUO0FBQUEsTUFFbEJDLEtBRmtCO0FBQUEsTUFFWEMsUUFGVzs7QUFJekIsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUN4QkMsV0FBTyxDQUFDQyxHQUFSLENBQVksT0FBWjtBQUNBQyxZQUFRLENBQUNDLElBQVQsQ0FBY0MsS0FBZCxDQUFvQkMsUUFBcEIsR0FBK0JSLEtBQUssR0FBRyxPQUFILEdBQWEsTUFBakQ7QUFDQUMsWUFBUSxDQUFDLENBQUNELEtBQUYsQ0FBUjtBQUNELEdBSkQ7O0FBTUFTLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUlDLGtFQUFKLENBQWtCO0FBQUVDLGVBQVMsRUFBRWQsSUFBSSxDQUFDZSxPQUFsQjtBQUEyQkMsVUFBSSxFQUFFLFNBQWpDO0FBQTRDQyxXQUFLLEVBQUU7QUFBbkQsS0FBbEI7QUFDRCxHQUZRLEVBRU4sRUFGTSxDQUFUOztBQUlBLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU07QUFDekIsd0JBQ0U7QUFBQSw4QkFDRSxxRUFBQyw0Q0FBRDtBQUNFLFVBQUUsRUFBRTtBQUNGQyxlQUFLLEVBQUUsTUFETDtBQUVGUixrQkFBUSxFQUFFLE9BRlI7QUFHRlMsZ0JBQU0sRUFBRSxDQUhOO0FBSUZDLFlBQUUsRUFBRSxDQUpGO0FBS0ZDLG1CQUFTLEVBQUUsUUFMVDtBQU1GQyxnQkFBTSxFQUFFO0FBTk4sU0FETjtBQUFBLCtCQVVFLHFFQUFDLCtDQUFEO0FBQVEsaUJBQU8sRUFBQyxPQUFoQjtBQUF3QixpQkFBTyxFQUFFbEIsV0FBakM7QUFBQSxvQkFDR0YsS0FBSyxnQkFBRyxxRUFBQyw2REFBRDtBQUFnQixvQkFBUSxFQUFFO0FBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQUgsZ0JBQXNDLHFFQUFDLDJEQUFEO0FBQWMsb0JBQVEsRUFBRTtBQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRDlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFWRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFlRSxxRUFBQyw0Q0FBRDtBQUFLLFdBQUcsRUFBRUgsSUFBVjtBQUFnQixVQUFFLEVBQUU7QUFBRVcsa0JBQVEsRUFBRSxVQUFaO0FBQXdCYSxpQkFBTyxFQUFFckIsS0FBSyxHQUFHLE9BQUgsR0FBYTtBQUFuRDtBQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBZkY7QUFBQSxvQkFERjtBQW1CRCxHQXBCRDs7QUFxQkEsU0FBTztBQUFFZSxnQkFBWSxFQUFaQTtBQUFGLEdBQVA7QUFDRCxDQXBDRDs7R0FBTW5CLFk7O0FBc0NTQSwyRUFBZiIsImZpbGUiOiIuL3NyYy9ob29rcy92aWV3L3VzZVJvdGF0ZU5hdi50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBCaUNoZXZyb25zVXAsIEJpQ2hldnJvbnNEb3duIH0gZnJvbSAncmVhY3QtaWNvbnMvYmknXG5pbXBvcnQgeyBCb3gsIEJ1dHRvbiB9IGZyb20gJ3RoZW1lLXVpJ1xuXG5pbXBvcnQgUm90YXRlUG9seWdvbiBmcm9tICcuLi8uLi9saWJzL3JvdGF0ZS9yb3RhdGVQb2x5Z29uJ1xuXG5jb25zdCB1c2VSb3RhdGVOYXYgPSAoKSA9PiB7XG4gIGNvbnN0IG1haW4gPSB1c2VSZWYobnVsbClcbiAgY29uc3QgW29uTmF2LCBzZXRPbk5hdl0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZygnY2xpY2snKVxuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUucG9zaXRpb24gPSBvbk5hdiA/ICdmaXhlZCcgOiAnbm9uZSdcbiAgICBzZXRPbk5hdighb25OYXYpXG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIG5ldyBSb3RhdGVQb2x5Z29uKHsgY29udGFpbmVyOiBtYWluLmN1cnJlbnQsIHR5cGU6ICdob3Jpem9uJywgc2lkZXM6IDE1IH0pXG4gIH0sIFtdKVxuXG4gIGNvbnN0IHJlbmRlckNhbnZhcyA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAgPEJveFxuICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgICAgICAgICBib3R0b206IDAsXG4gICAgICAgICAgICBweTogMyxcbiAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgICAgICB6SW5kZXg6IDEwMCxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwibmFrZWRcIiBvbkNsaWNrPXtoYW5kbGVDbGlja30+XG4gICAgICAgICAgICB7b25OYXYgPyA8QmlDaGV2cm9uc0Rvd24gZm9udFNpemU9ezQwfSAvPiA6IDxCaUNoZXZyb25zVXAgZm9udFNpemU9ezQwfSAvPn1cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9Cb3g+XG4gICAgICAgIDxCb3ggcmVmPXttYWlufSBzeD17eyBwb3NpdGlvbjogJ2Fic29sdXRlJywgZGlzcGxheTogb25OYXYgPyAnYmxvY2snIDogJ25vbmUnIH19IC8+XG4gICAgICA8Lz5cbiAgICApXG4gIH1cbiAgcmV0dXJuIHsgcmVuZGVyQ2FudmFzIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgdXNlUm90YXRlTmF2XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/hooks/view/useRotateNav.tsx\n");

/***/ })

})