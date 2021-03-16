webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/theme/theme.ts":
/*!****************************!*\
  !*** ./src/theme/theme.ts ***!
  \****************************/
/*! exports provided: theme, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"theme\", function() { return theme; });\n/* harmony import */ var _Users_kwon_Desktop_work_kwon_pages_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buttons */ \"./src/theme/buttons.ts\");\n/* harmony import */ var _theme_keyframes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~theme//keyframes */ \"./src/theme/keyframes.ts\");\n/* harmony import */ var _theme_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~theme/forms */ \"./src/theme/forms.ts\");\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_kwon_Desktop_work_kwon_pages_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\nvar theme = {\n  breakpoints: ['36em', '48em', '62em', '75em'],\n  fontSizes: [10, 12, 14, 16, 20, 24, 32, 48, 64],\n  colors: {\n    background: '#e9e0d2',\n    subBlue: '#558bcf',\n    subGreen: '#32de00',\n    black: '#141414',\n    white: '#ffffff',\n    gray: {\n      0: '#f5f5f5',\n      1: '#eeeeee',\n      2: '#dddddd',\n      3: '#cccccc',\n      4: '#999999',\n      5: '#666666',\n      6: '#333333'\n    },\n    point: {\n      red: '#ff0000',\n      blue: '#007bff',\n      purple: '#4e3ce8',\n      green: '#0fdb14',\n      pink: '#ff4786',\n      skyblue: '#2da2ff'\n    }\n  },\n  space: [0, 2, 4, 8, 16, 32, 64, 128, 256],\n  fonts: {\n    body: 'Apple SD Gothic Neo system-ui, sans-serif',\n    heading: 'inherit',\n    monospace: 'Menlo, monospace'\n  },\n  fontWeights: {\n    body: 400,\n    heading: 700,\n    bold: 700\n  },\n  lineHeights: {\n    body: 1.1,\n    heading: 1.25\n  },\n  shadows: {\n    small: '0 0 4px rgba(0, 0, 0, .125)',\n    large: '0 0 24px rgba(0, 0, 0, .125)'\n  },\n  styles: {\n    root: _objectSpread({}, _theme_keyframes__WEBPACK_IMPORTED_MODULE_2__[\"default\"])\n  },\n  variants: {\n    link: {\n      cursor: 'pointer'\n    },\n    grab: {\n      cursor: 'grab',\n      ':active': {\n        cursor: 'grabbing'\n      }\n    },\n    transparentScroll: {\n      '&::-webkit-scrollbar': {\n        width: 8\n      },\n      '&::-webkit-scrollbar-thumb': {\n        borderRadius: 8,\n        backgroundColor: 'gray.5'\n      },\n      '&::-webkit-scrollbar-track': {\n        border: 'none',\n        bg: 'transparent'\n      }\n    },\n    wordBreak: {\n      overflowWrap: 'break-word'\n    }\n  },\n  text: {\n    ovalLabel: {\n      py: 1,\n      px: 2,\n      borderRadius: '12px',\n      color: 'white'\n    }\n  },\n  forms: _theme_forms__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n  buttons: _buttons__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (theme);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3RoZW1lL3RoZW1lLnRzP2E0NzEiXSwibmFtZXMiOlsidGhlbWUiLCJicmVha3BvaW50cyIsImZvbnRTaXplcyIsImNvbG9ycyIsImJhY2tncm91bmQiLCJzdWJCbHVlIiwic3ViR3JlZW4iLCJibGFjayIsIndoaXRlIiwiZ3JheSIsInBvaW50IiwicmVkIiwiYmx1ZSIsInB1cnBsZSIsImdyZWVuIiwicGluayIsInNreWJsdWUiLCJzcGFjZSIsImZvbnRzIiwiYm9keSIsImhlYWRpbmciLCJtb25vc3BhY2UiLCJmb250V2VpZ2h0cyIsImJvbGQiLCJsaW5lSGVpZ2h0cyIsInNoYWRvd3MiLCJzbWFsbCIsImxhcmdlIiwic3R5bGVzIiwicm9vdCIsImtleWZyYW1lcyIsInZhcmlhbnRzIiwibGluayIsImN1cnNvciIsImdyYWIiLCJ0cmFuc3BhcmVudFNjcm9sbCIsIndpZHRoIiwiYm9yZGVyUmFkaXVzIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyIiwiYmciLCJ3b3JkQnJlYWsiLCJvdmVyZmxvd1dyYXAiLCJ0ZXh0Iiwib3ZhbExhYmVsIiwicHkiLCJweCIsImNvbG9yIiwiZm9ybXMiLCJidXR0b25zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFJTyxJQUFNQSxLQUFLLEdBQUc7QUFDbkJDLGFBQVcsRUFBRSxDQUFDLE1BQUQsRUFBUyxNQUFULEVBQWlCLE1BQWpCLEVBQXlCLE1BQXpCLENBRE07QUFFbkJDLFdBQVMsRUFBRSxDQUFDLEVBQUQsRUFBSyxFQUFMLEVBQVMsRUFBVCxFQUFhLEVBQWIsRUFBaUIsRUFBakIsRUFBcUIsRUFBckIsRUFBeUIsRUFBekIsRUFBNkIsRUFBN0IsRUFBaUMsRUFBakMsQ0FGUTtBQUduQkMsUUFBTSxFQUFFO0FBQ05DLGNBQVUsRUFBRSxTQUROO0FBRU5DLFdBQU8sRUFBRSxTQUZIO0FBR05DLFlBQVEsRUFBRSxTQUhKO0FBSU5DLFNBQUssRUFBRSxTQUpEO0FBS05DLFNBQUssRUFBRSxTQUxEO0FBTU5DLFFBQUksRUFBRTtBQUNKLFNBQUcsU0FEQztBQUVKLFNBQUcsU0FGQztBQUdKLFNBQUcsU0FIQztBQUlKLFNBQUcsU0FKQztBQUtKLFNBQUcsU0FMQztBQU1KLFNBQUcsU0FOQztBQU9KLFNBQUc7QUFQQyxLQU5BO0FBZU5DLFNBQUssRUFBRTtBQUNMQyxTQUFHLEVBQUUsU0FEQTtBQUVMQyxVQUFJLEVBQUUsU0FGRDtBQUdMQyxZQUFNLEVBQUUsU0FISDtBQUlMQyxXQUFLLEVBQUUsU0FKRjtBQUtMQyxVQUFJLEVBQUUsU0FMRDtBQU1MQyxhQUFPLEVBQUU7QUFOSjtBQWZELEdBSFc7QUEyQm5CQyxPQUFLLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLEVBQWEsRUFBYixFQUFpQixFQUFqQixFQUFxQixFQUFyQixFQUF5QixHQUF6QixFQUE4QixHQUE5QixDQTNCWTtBQTRCbkJDLE9BQUssRUFBRTtBQUNMQyxRQUFJLEVBQUUsMkNBREQ7QUFFTEMsV0FBTyxFQUFFLFNBRko7QUFHTEMsYUFBUyxFQUFFO0FBSE4sR0E1Qlk7QUFpQ25CQyxhQUFXLEVBQUU7QUFDWEgsUUFBSSxFQUFFLEdBREs7QUFFWEMsV0FBTyxFQUFFLEdBRkU7QUFHWEcsUUFBSSxFQUFFO0FBSEssR0FqQ007QUFzQ25CQyxhQUFXLEVBQUU7QUFDWEwsUUFBSSxFQUFFLEdBREs7QUFFWEMsV0FBTyxFQUFFO0FBRkUsR0F0Q007QUEwQ25CSyxTQUFPLEVBQUU7QUFDUEMsU0FBSyxFQUFFLDZCQURBO0FBRVBDLFNBQUssRUFBRTtBQUZBLEdBMUNVO0FBOENuQkMsUUFBTSxFQUFFO0FBQ05DLFFBQUksb0JBQ0NDLHdEQUREO0FBREUsR0E5Q1c7QUFtRG5CQyxVQUFRLEVBQUU7QUFDUkMsUUFBSSxFQUFFO0FBQ0pDLFlBQU0sRUFBRTtBQURKLEtBREU7QUFJUkMsUUFBSSxFQUFFO0FBQ0pELFlBQU0sRUFBRSxNQURKO0FBRUosaUJBQVc7QUFDVEEsY0FBTSxFQUFFO0FBREM7QUFGUCxLQUpFO0FBVVJFLHFCQUFpQixFQUFFO0FBQ2pCLDhCQUF3QjtBQUN0QkMsYUFBSyxFQUFFO0FBRGUsT0FEUDtBQUlqQixvQ0FBOEI7QUFDNUJDLG9CQUFZLEVBQUUsQ0FEYztBQUU1QkMsdUJBQWUsRUFBRTtBQUZXLE9BSmI7QUFRakIsb0NBQThCO0FBQzVCQyxjQUFNLEVBQUUsTUFEb0I7QUFFNUJDLFVBQUUsRUFBRTtBQUZ3QjtBQVJiLEtBVlg7QUF1QlJDLGFBQVMsRUFBRTtBQUNUQyxrQkFBWSxFQUFFO0FBREw7QUF2QkgsR0FuRFM7QUE4RW5CQyxNQUFJLEVBQUU7QUFDSkMsYUFBUyxFQUFFO0FBQ1RDLFFBQUUsRUFBRSxDQURLO0FBRVRDLFFBQUUsRUFBRSxDQUZLO0FBR1RULGtCQUFZLEVBQUUsTUFITDtBQUlUVSxXQUFLLEVBQUU7QUFKRTtBQURQLEdBOUVhO0FBc0ZuQkMsT0FBSyxFQUFMQSxvREF0Rm1CO0FBdUZuQkMsU0FBTyxFQUFQQSxnREFBT0E7QUF2RlksQ0FBZDtBQTBGUWpELG9FQUFmIiwiZmlsZSI6Ii4vc3JjL3RoZW1lL3RoZW1lLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGJ1dHRvbnMgZnJvbSAnLi9idXR0b25zJ1xuXG5pbXBvcnQga2V5ZnJhbWVzIGZyb20gJ350aGVtZS8va2V5ZnJhbWVzJ1xuaW1wb3J0IGZvcm1zIGZyb20gJ350aGVtZS9mb3JtcydcblxuZXhwb3J0IHR5cGUgVGhlbWUgPSB0eXBlb2YgdGhlbWVcblxuZXhwb3J0IGNvbnN0IHRoZW1lID0ge1xuICBicmVha3BvaW50czogWyczNmVtJywgJzQ4ZW0nLCAnNjJlbScsICc3NWVtJ10sXG4gIGZvbnRTaXplczogWzEwLCAxMiwgMTQsIDE2LCAyMCwgMjQsIDMyLCA0OCwgNjRdLFxuICBjb2xvcnM6IHtcbiAgICBiYWNrZ3JvdW5kOiAnI2U5ZTBkMicsXG4gICAgc3ViQmx1ZTogJyM1NThiY2YnLFxuICAgIHN1YkdyZWVuOiAnIzMyZGUwMCcsXG4gICAgYmxhY2s6ICcjMTQxNDE0JyxcbiAgICB3aGl0ZTogJyNmZmZmZmYnLFxuICAgIGdyYXk6IHtcbiAgICAgIDA6ICcjZjVmNWY1JyxcbiAgICAgIDE6ICcjZWVlZWVlJyxcbiAgICAgIDI6ICcjZGRkZGRkJyxcbiAgICAgIDM6ICcjY2NjY2NjJyxcbiAgICAgIDQ6ICcjOTk5OTk5JyxcbiAgICAgIDU6ICcjNjY2NjY2JyxcbiAgICAgIDY6ICcjMzMzMzMzJyxcbiAgICB9LFxuICAgIHBvaW50OiB7XG4gICAgICByZWQ6ICcjZmYwMDAwJyxcbiAgICAgIGJsdWU6ICcjMDA3YmZmJyxcbiAgICAgIHB1cnBsZTogJyM0ZTNjZTgnLFxuICAgICAgZ3JlZW46ICcjMGZkYjE0JyxcbiAgICAgIHBpbms6ICcjZmY0Nzg2JyxcbiAgICAgIHNreWJsdWU6ICcjMmRhMmZmJyxcbiAgICB9LFxuICB9LFxuICBzcGFjZTogWzAsIDIsIDQsIDgsIDE2LCAzMiwgNjQsIDEyOCwgMjU2XSxcbiAgZm9udHM6IHtcbiAgICBib2R5OiAnQXBwbGUgU0QgR290aGljIE5lbyBzeXN0ZW0tdWksIHNhbnMtc2VyaWYnLFxuICAgIGhlYWRpbmc6ICdpbmhlcml0JyxcbiAgICBtb25vc3BhY2U6ICdNZW5sbywgbW9ub3NwYWNlJyxcbiAgfSxcbiAgZm9udFdlaWdodHM6IHtcbiAgICBib2R5OiA0MDAsXG4gICAgaGVhZGluZzogNzAwLFxuICAgIGJvbGQ6IDcwMCxcbiAgfSxcbiAgbGluZUhlaWdodHM6IHtcbiAgICBib2R5OiAxLjEsXG4gICAgaGVhZGluZzogMS4yNSxcbiAgfSxcbiAgc2hhZG93czoge1xuICAgIHNtYWxsOiAnMCAwIDRweCByZ2JhKDAsIDAsIDAsIC4xMjUpJyxcbiAgICBsYXJnZTogJzAgMCAyNHB4IHJnYmEoMCwgMCwgMCwgLjEyNSknLFxuICB9LFxuICBzdHlsZXM6IHtcbiAgICByb290OiB7XG4gICAgICAuLi5rZXlmcmFtZXMsXG4gICAgfSxcbiAgfSxcbiAgdmFyaWFudHM6IHtcbiAgICBsaW5rOiB7XG4gICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICB9LFxuICAgIGdyYWI6IHtcbiAgICAgIGN1cnNvcjogJ2dyYWInLFxuICAgICAgJzphY3RpdmUnOiB7XG4gICAgICAgIGN1cnNvcjogJ2dyYWJiaW5nJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICB0cmFuc3BhcmVudFNjcm9sbDoge1xuICAgICAgJyY6Oi13ZWJraXQtc2Nyb2xsYmFyJzoge1xuICAgICAgICB3aWR0aDogOCxcbiAgICAgIH0sXG4gICAgICAnJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWInOiB7XG4gICAgICAgIGJvcmRlclJhZGl1czogOCxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnZ3JheS41JyxcbiAgICAgIH0sXG4gICAgICAnJjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2snOiB7XG4gICAgICAgIGJvcmRlcjogJ25vbmUnLFxuICAgICAgICBiZzogJ3RyYW5zcGFyZW50JyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICB3b3JkQnJlYWs6IHtcbiAgICAgIG92ZXJmbG93V3JhcDogJ2JyZWFrLXdvcmQnLFxuICAgIH0sXG4gIH0sXG4gIHRleHQ6IHtcbiAgICBvdmFsTGFiZWw6IHtcbiAgICAgIHB5OiAxLFxuICAgICAgcHg6IDIsXG4gICAgICBib3JkZXJSYWRpdXM6ICcxMnB4JyxcbiAgICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgIH0sXG4gIH0sXG4gIGZvcm1zLFxuICBidXR0b25zLFxufVxuXG5leHBvcnQgZGVmYXVsdCB0aGVtZVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/theme/theme.ts\n");

/***/ })

})