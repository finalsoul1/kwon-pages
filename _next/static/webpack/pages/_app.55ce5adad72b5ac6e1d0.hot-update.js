webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/libs/rotate/rotatePolygon.js":
/*!******************************************!*\
  !*** ./src/libs/rotate/rotatePolygon.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Users_kwon_Desktop_work_kwon_pages_node_modules_next_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _Users_kwon_Desktop_work_kwon_pages_node_modules_next_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/createClass */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _polygon_dots_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./polygon-dots.js */ \"./src/libs/rotate/polygon-dots.js\");\n/* harmony import */ var _polygon_horizon_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./polygon-horizon.js */ \"./src/libs/rotate/polygon-horizon.js\");\n/* harmony import */ var _polygon_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./polygon.js */ \"./src/libs/rotate/polygon.js\");\n\n\n\n\n\n\nvar RotatePolygon = /*#__PURE__*/function () {\n  function RotatePolygon(_ref) {\n    var container = _ref.container,\n        _ref$type = _ref.type,\n        type = _ref$type === void 0 ? 'default' : _ref$type,\n        _ref$sides = _ref.sides,\n        sides = _ref$sides === void 0 ? 3 : _ref$sides;\n\n    Object(_Users_kwon_Desktop_work_kwon_pages_node_modules_next_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, RotatePolygon);\n\n    this.type = type;\n    this.sides = sides;\n    this.canvas = document.createElement('canvas');\n    container.appendChild(this.canvas);\n    this.ctx = this.canvas.getContext('2d');\n    console.log(window.devicePixelRatio);\n    this.pixelRatio = window.devicePixelRatio > 1 ? 2 : 1;\n    window.addEventListener('resize', this.resize.bind(this), false);\n    this.resize();\n    this.isDown = false;\n    this.moveX = 0;\n    this.offsetX = 0;\n    document.addEventListener('pointerdown', this.onDown.bind(this), false);\n    document.addEventListener('pointermove', this.onMove.bind(this), false);\n    document.addEventListener('pointerup', this.onUp.bind(this), false);\n    window.requestAnimationFrame(this.animate.bind(this));\n  }\n\n  Object(_Users_kwon_Desktop_work_kwon_pages_node_modules_next_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(RotatePolygon, [{\n    key: \"resize\",\n    value: function resize() {\n      console.log(document.body.clientWidth);\n      console.log(document.body.clientHeight);\n      this.stageWidth = document.body.clientWidth;\n      this.stageHeight = document.body.clientHeight; // this.canvas.width = this.stageWidth * this.pixelRatio\n      // this.canvas.height = this.stageHeight * this.pixelRatio\n\n      this.canvas.width = this.stageWidth;\n      this.canvas.height = this.stageHeight; // this.ctx.scale(this.pixelRatio, this.pixelRatio)\n\n      this.ctx.scale(1, 1);\n      var Polygon = this.setType(this.type);\n      this.polygon = new Polygon(this.stageWidth / 2, this.stageHeight + this.stageHeight / 4, this.stageHeight / 1.5, this.sides);\n    }\n  }, {\n    key: \"animate\",\n    value: function animate() {\n      window.requestAnimationFrame(this.animate.bind(this));\n      this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);\n      this.moveX *= 0.92;\n      this.polygon.animate(this.ctx, this.moveX);\n    }\n  }, {\n    key: \"onDown\",\n    value: function onDown(e) {\n      this.isDown = true;\n      this.moveX = 0;\n      this.offsetX = e.clientX;\n    }\n  }, {\n    key: \"onMove\",\n    value: function onMove(e) {\n      if (this.isDown) {\n        this.moveX = e.clientX - this.offsetX;\n        this.offsetX = e.clientX;\n      }\n    }\n  }, {\n    key: \"onUp\",\n    value: function onUp(e) {\n      this.isDown = false;\n    }\n  }, {\n    key: \"setType\",\n    value: function setType(type) {\n      switch (type) {\n        case 'default':\n          return _polygon_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"];\n\n        case 'dots':\n          return _polygon_dots_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\n\n        case 'horizon':\n          return _polygon_horizon_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"];\n\n        default:\n          return _polygon_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"];\n      }\n    }\n  }]);\n\n  return RotatePolygon;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (RotatePolygon);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2xpYnMvcm90YXRlL3JvdGF0ZVBvbHlnb24uanM/NDg2NCJdLCJuYW1lcyI6WyJSb3RhdGVQb2x5Z29uIiwiY29udGFpbmVyIiwidHlwZSIsInNpZGVzIiwiY2FudmFzIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiYXBwZW5kQ2hpbGQiLCJjdHgiLCJnZXRDb250ZXh0IiwiY29uc29sZSIsImxvZyIsIndpbmRvdyIsImRldmljZVBpeGVsUmF0aW8iLCJwaXhlbFJhdGlvIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlc2l6ZSIsImJpbmQiLCJpc0Rvd24iLCJtb3ZlWCIsIm9mZnNldFgiLCJvbkRvd24iLCJvbk1vdmUiLCJvblVwIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiYW5pbWF0ZSIsImJvZHkiLCJjbGllbnRXaWR0aCIsImNsaWVudEhlaWdodCIsInN0YWdlV2lkdGgiLCJzdGFnZUhlaWdodCIsIndpZHRoIiwiaGVpZ2h0Iiwic2NhbGUiLCJQb2x5Z29uIiwic2V0VHlwZSIsInBvbHlnb24iLCJjbGVhclJlY3QiLCJlIiwiY2xpZW50WCIsIlBvbHlnb25Eb3RzIiwiUG9seWdvbkhvcml6b24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztJQUVNQSxhO0FBQ0osK0JBQXdEO0FBQUEsUUFBMUNDLFNBQTBDLFFBQTFDQSxTQUEwQztBQUFBLHlCQUEvQkMsSUFBK0I7QUFBQSxRQUEvQkEsSUFBK0IsMEJBQXhCLFNBQXdCO0FBQUEsMEJBQWJDLEtBQWE7QUFBQSxRQUFiQSxLQUFhLDJCQUFMLENBQUs7O0FBQUE7O0FBQ3RELFNBQUtELElBQUwsR0FBWUEsSUFBWjtBQUNBLFNBQUtDLEtBQUwsR0FBYUEsS0FBYjtBQUVBLFNBQUtDLE1BQUwsR0FBY0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLFFBQXZCLENBQWQ7QUFFQUwsYUFBUyxDQUFDTSxXQUFWLENBQXNCLEtBQUtILE1BQTNCO0FBQ0Es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bkIsT0FBOUI7QUFDQSxhQUFLQSxPQUFMLEdBQWVrQixDQUFDLENBQUNDLE9BQWpCO0FBQ0Q7QUFDRjs7O3lCQUVJRCxDLEVBQUc7QUFDTixXQUFLcEIsTUFBTCxHQUFjLEtBQWQ7QUFDRDs7OzRCQUVPaEIsSSxFQUFNO0FBQ1osY0FBUUEsSUFBUjtBQUNFLGFBQUssU0FBTDtBQUNFLGlCQUFPZ0MsbURBQVA7O0FBQ0YsYUFBSyxNQUFMO0FBQ0UsaUJBQU9NLHdEQUFQOztBQUNGLGFBQUssU0FBTDtBQUNFLGlCQUFPQywyREFBUDs7QUFDRjtBQUNFLGlCQUFPUCxtREFBUDtBQVJKO0FBVUQ7Ozs7OztBQUdZbEMsNEVBQWYiLCJmaWxlIjoiLi9zcmMvbGlicy9yb3RhdGUvcm90YXRlUG9seWdvbi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQb2x5Z29uRG90cyBmcm9tICcuL3BvbHlnb24tZG90cy5qcydcbmltcG9ydCBQb2x5Z29uSG9yaXpvbiBmcm9tICcuL3BvbHlnb24taG9yaXpvbi5qcydcbmltcG9ydCBQb2x5Z29uIGZyb20gJy4vcG9seWdvbi5qcydcblxuY2xhc3MgUm90YXRlUG9seWdvbiB7XG4gIGNvbnN0cnVjdG9yKHsgY29udGFpbmVyLCB0eXBlID0gJ2RlZmF1bHQnLCBzaWRlcyA9IDMgfSkge1xuICAgIHRoaXMudHlwZSA9IHR5cGVcbiAgICB0aGlzLnNpZGVzID0gc2lkZXNcblxuICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJylcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmNhbnZhcylcbiAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJylcblxuICAgIGNvbnNvbGUubG9nKHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvKVxuICAgIHRoaXMucGl4ZWxSYXRpbyA9IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvID4gMSA/IDIgOiAxXG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5yZXNpemUuYmluZCh0aGlzKSwgZmFsc2UpXG4gICAgdGhpcy5yZXNpemUoKVxuXG4gICAgdGhpcy5pc0Rvd24gPSBmYWxzZVxuICAgIHRoaXMubW92ZVggPSAwXG4gICAgdGhpcy5vZmZzZXRYID0gMFxuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcmRvd24nLCB0aGlzLm9uRG93bi5iaW5kKHRoaXMpLCBmYWxzZSlcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVybW92ZScsIHRoaXMub25Nb3ZlLmJpbmQodGhpcyksIGZhbHNlKVxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJ1cCcsIHRoaXMub25VcC5iaW5kKHRoaXMpLCBmYWxzZSlcblxuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRlLmJpbmQodGhpcykpXG4gIH1cblxuICByZXNpemUoKSB7XG4gICAgY29uc29sZS5sb2coZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aClcbiAgICBjb25zb2xlLmxvZyhkb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodClcblxuICAgIHRoaXMuc3RhZ2VXaWR0aCA9IGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGhcbiAgICB0aGlzLnN0YWdlSGVpZ2h0ID0gZG9jdW1lbnQuYm9keS5jbGllbnRIZWlnaHRcblxuICAgIC8vIHRoaXMuY2FudmFzLndpZHRoID0gdGhpcy5zdGFnZVdpZHRoICogdGhpcy5waXhlbFJhdGlvXG4gICAgLy8gdGhpcy5jYW52YXMuaGVpZ2h0ID0gdGhpcy5zdGFnZUhlaWdodCAqIHRoaXMucGl4ZWxSYXRpb1xuICAgIHRoaXMuY2FudmFzLndpZHRoID0gdGhpcy5zdGFnZVdpZHRoXG4gICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gdGhpcy5zdGFnZUhlaWdodFxuICAgIC8vIHRoaXMuY3R4LnNjYWxlKHRoaXMucGl4ZWxSYXRpbywgdGhpcy5waXhlbFJhdGlvKVxuICAgIHRoaXMuY3R4LnNjYWxlKDEsIDEpXG5cbiAgICBjb25zdCBQb2x5Z29uID0gdGhpcy5zZXRUeXBlKHRoaXMudHlwZSlcblxuICAgIHRoaXMucG9seWdvbiA9IG5ldyBQb2x5Z29uKFxuICAgICAgdGhpcy5zdGFnZVdpZHRoIC8gMixcbiAgICAgIHRoaXMuc3RhZ2VIZWlnaHQgKyB0aGlzLnN0YWdlSGVpZ2h0IC8gNCxcbiAgICAgIHRoaXMuc3RhZ2VIZWlnaHQgLyAxLjUsXG4gICAgICB0aGlzLnNpZGVzXG4gICAgKVxuICB9XG5cbiAgYW5pbWF0ZSgpIHtcbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0ZS5iaW5kKHRoaXMpKVxuXG4gICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuc3RhZ2VXaWR0aCwgdGhpcy5zdGFnZUhlaWdodClcblxuICAgIHRoaXMubW92ZVggKj0gMC45MlxuICAgIHRoaXMucG9seWdvbi5hbmltYXRlKHRoaXMuY3R4LCB0aGlzLm1vdmVYKVxuICB9XG5cbiAgb25Eb3duKGUpIHtcbiAgICB0aGlzLmlzRG93biA9IHRydWVcbiAgICB0aGlzLm1vdmVYID0gMFxuICAgIHRoaXMub2Zmc2V0WCA9IGUuY2xpZW50WFxuICB9XG5cbiAgb25Nb3ZlKGUpIHtcbiAgICBpZiAodGhpcy5pc0Rvd24pIHtcbiAgICAgIHRoaXMubW92ZVggPSBlLmNsaWVudFggLSB0aGlzLm9mZnNldFhcbiAgICAgIHRoaXMub2Zmc2V0WCA9IGUuY2xpZW50WFxuICAgIH1cbiAgfVxuXG4gIG9uVXAoZSkge1xuICAgIHRoaXMuaXNEb3duID0gZmFsc2VcbiAgfVxuXG4gIHNldFR5cGUodHlwZSkge1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSAnZGVmYXVsdCc6XG4gICAgICAgIHJldHVybiBQb2x5Z29uXG4gICAgICBjYXNlICdkb3RzJzpcbiAgICAgICAgcmV0dXJuIFBvbHlnb25Eb3RzXG4gICAgICBjYXNlICdob3Jpem9uJzpcbiAgICAgICAgcmV0dXJuIFBvbHlnb25Ib3Jpem9uXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gUG9seWdvblxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSb3RhdGVQb2x5Z29uXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/libs/rotate/rotatePolygon.js\n");

/***/ })

})