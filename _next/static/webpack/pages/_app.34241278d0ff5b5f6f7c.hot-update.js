webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/hooks/view/useRotateNav.tsx":
/*!*****************************************!*\
  !*** ./src/hooks/view/useRotateNav.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/bi */ \"./node_modules/react-icons/bi/index.esm.js\");\n/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! theme-ui */ \"./node_modules/theme-ui/dist/index.esm.js\");\n/* harmony import */ var _libs_rotate_rotatePolygon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../libs/rotate/rotatePolygon */ \"./src/libs/rotate/rotatePolygon.js\");\n\n\n\nvar _jsxFileName = \"/Users/kwon/Desktop/work/kwon-pages/src/hooks/view/useRotateNav.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar useRotateNav = function useRotateNav() {\n  _s();\n\n  var main = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])(null);\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      onNav = _useState[0],\n      setOnNav = _useState[1];\n\n  var handleClick = function handleClick() {\n    console.log('click');\n    setOnNav(!onNav);\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    new _libs_rotate_rotatePolygon__WEBPACK_IMPORTED_MODULE_4__[\"default\"]({\n      container: main.current,\n      type: 'horizon',\n      sides: 15\n    });\n  }, []);\n\n  var renderCanvas = function renderCanvas() {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(theme_ui__WEBPACK_IMPORTED_MODULE_3__[\"Box\"], {\n        sx: {\n          width: '100%',\n          position: 'fixed',\n          bottom: 0,\n          py: 3,\n          textAlign: 'center',\n          zIndex: 100\n        },\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(theme_ui__WEBPACK_IMPORTED_MODULE_3__[\"Button\"], {\n          variant: \"naked\",\n          onClick: handleClick,\n          children: onNav ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_bi__WEBPACK_IMPORTED_MODULE_2__[\"BiChevronsDown\"], {\n            fontSize: 40\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 34,\n            columnNumber: 22\n          }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_bi__WEBPACK_IMPORTED_MODULE_2__[\"BiChevronsUp\"], {\n            fontSize: 40\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 34,\n            columnNumber: 57\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 33,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(theme_ui__WEBPACK_IMPORTED_MODULE_3__[\"Box\"], {\n        ref: main,\n        sx: {\n          position: 'absolute',\n          display: onNav ? 'block' : 'none'\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true);\n  };\n\n  return {\n    renderCanvas: renderCanvas\n  };\n};\n\n_s(useRotateNav, \"B0W3F5M2WMaBI2jIqEw2iM3l/W0=\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (useRotateNav);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2hvb2tzL3ZpZXcvdXNlUm90YXRlTmF2LnRzeD9mMWZmIl0sIm5hbWVzIjpbInVzZVJvdGF0ZU5hdiIsIm1haW4iLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIm9uTmF2Iiwic2V0T25OYXYiLCJoYW5kbGVDbGljayIsImNvbnNvbGUiLCJsb2ciLCJ1c2VFZmZlY3QiLCJSb3RhdGVQb2x5Z29uIiwiY29udGFpbmVyIiwiY3VycmVudCIsInR5cGUiLCJzaWRlcyIsInJlbmRlckNhbnZhcyIsIndpZHRoIiwicG9zaXRpb24iLCJib3R0b20iLCJweSIsInRleHRBbGlnbiIsInpJbmRleCIsImRpc3BsYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLElBQU1BLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU07QUFBQTs7QUFDekIsTUFBTUMsSUFBSSxHQUFHQyxvREFBTSxDQUFDLElBQUQsQ0FBbkI7O0FBRHlCLGtCQUVDQyxzREFBUSxDQUFDLEtBQUQsQ0FGVDtBQUFBLE1BRWxCQyxLQUZrQjtBQUFBLE1BRVhDLFFBRlc7O0FBSXpCLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFDeEJDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLE9BQVo7QUFDQUgsWUFBUSxDQUFDLENBQUNELEtBQUYsQ0FBUjtBQUNELEdBSEQ7O0FBS0FLLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUlDLGtFQUFKLENBQWtCO0FBQUVDLGVBQVMsRUFBRVYsSUFBSSxDQUFDVyxPQUFsQjtBQUEyQkMsVUFBSSxFQUFFLFNBQWpDO0FBQTRDQyxXQUFLLEVBQUU7QUFBbkQsS0FBbEI7QUFDRCxHQUZRLEVBRU4sRUFGTSxDQUFUOztBQUlBLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU07QUFDekIsd0JBQ0U7QUFBQSw4QkFDRSxxRUFBQyw0Q0FBRDtBQUNFLFVBQUUsRUFBRTtBQUNGQyxlQUFLLEVBQUUsTUFETDtBQUVGQyxrQkFBUSxFQUFFLE9BRlI7QUFHRkMsZ0JBQU0sRUFBRSxDQUhOO0FBSUZDLFlBQUUsRUFBRSxDQUpGO0FBS0ZDLG1CQUFTLEVBQUUsUUFMVDtBQU1GQyxnQkFBTSxFQUFFO0FBTk4sU0FETjtBQUFBLCtCQVVFLHFFQUFDLCtDQUFEO0FBQVEsaUJBQU8sRUFBQyxPQUFoQjtBQUF3QixpQkFBTyxFQUFFZixXQUFqQztBQUFBLG9CQUNHRixLQUFLLGdCQUFHLHFFQUFDLDZEQUFEO0FBQWdCLG9CQUFRLEVBQUU7QUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBSCxnQkFBc0MscUVBQUMsMkRBQUQ7QUFBYyxvQkFBUSxFQUFFO0FBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEOUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQWVFLHFFQUFDLDRDQUFEO0FBQUssV0FBRyxFQUFFSCxJQUFWO0FBQWdCLFVBQUUsRUFBRTtBQUFFZ0Isa0JBQVEsRUFBRSxVQUFaO0FBQXdCSyxpQkFBTyxFQUFFbEIsS0FBSyxHQUFHLE9BQUgsR0FBYTtBQUFuRDtBQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBZkY7QUFBQSxvQkFERjtBQW1CRCxHQXBCRDs7QUFxQkEsU0FBTztBQUFFVyxnQkFBWSxFQUFaQTtBQUFGLEdBQVA7QUFDRCxDQW5DRDs7R0FBTWYsWTs7QUFxQ1NBLDJFQUFmIiwiZmlsZSI6Ii4vc3JjL2hvb2tzL3ZpZXcvdXNlUm90YXRlTmF2LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEJpQ2hldnJvbnNVcCwgQmlDaGV2cm9uc0Rvd24gfSBmcm9tICdyZWFjdC1pY29ucy9iaSdcbmltcG9ydCB7IEJveCwgQnV0dG9uIH0gZnJvbSAndGhlbWUtdWknXG5cbmltcG9ydCBSb3RhdGVQb2x5Z29uIGZyb20gJy4uLy4uL2xpYnMvcm90YXRlL3JvdGF0ZVBvbHlnb24nXG5cbmNvbnN0IHVzZVJvdGF0ZU5hdiA9ICgpID0+IHtcbiAgY29uc3QgbWFpbiA9IHVzZVJlZihudWxsKVxuICBjb25zdCBbb25OYXYsIHNldE9uTmF2XSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdjbGljaycpXG4gICAgc2V0T25OYXYoIW9uTmF2KVxuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBuZXcgUm90YXRlUG9seWdvbih7IGNvbnRhaW5lcjogbWFpbi5jdXJyZW50LCB0eXBlOiAnaG9yaXpvbicsIHNpZGVzOiAxNSB9KVxuICB9LCBbXSlcblxuICBjb25zdCByZW5kZXJDYW52YXMgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIDxCb3hcbiAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgICAgICAgICAgYm90dG9tOiAwLFxuICAgICAgICAgICAgcHk6IDMsXG4gICAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgICAgICAgekluZGV4OiAxMDAsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cIm5ha2VkXCIgb25DbGljaz17aGFuZGxlQ2xpY2t9PlxuICAgICAgICAgICAge29uTmF2ID8gPEJpQ2hldnJvbnNEb3duIGZvbnRTaXplPXs0MH0gLz4gOiA8QmlDaGV2cm9uc1VwIGZvbnRTaXplPXs0MH0gLz59XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvQm94PlxuICAgICAgICA8Qm94IHJlZj17bWFpbn0gc3g9e3sgcG9zaXRpb246ICdhYnNvbHV0ZScsIGRpc3BsYXk6IG9uTmF2ID8gJ2Jsb2NrJyA6ICdub25lJyB9fSAvPlxuICAgICAgPC8+XG4gICAgKVxuICB9XG4gIHJldHVybiB7IHJlbmRlckNhbnZhcyB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZVJvdGF0ZU5hdlxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/hooks/view/useRotateNav.tsx\n");

/***/ })

})