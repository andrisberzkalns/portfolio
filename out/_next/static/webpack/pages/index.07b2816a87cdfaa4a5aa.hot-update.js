webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/skills/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/skills/index.tsx ***!
  \*****************************************/
/*! exports provided: Skills */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Skills", function() { return Skills; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/esm/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components */ "./src/components/index.ts");
/* harmony import */ var _public_meta_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @public/meta.json */ "./public/meta.json");
var _public_meta_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! @public/meta.json */ "./public/meta.json", 1);


var _jsxFileName = "C:\\Users\\berzk\\Documents\\Projects\\Portfolio-v2\\portfolio\\src\\components\\skills\\index.tsx",
    _this = undefined,
    _s = $RefreshSig$();





var ICON_SIZE = 100;
var Skills = function Skills() {
  _s();

  var _data$skills;

  var _useColorMode = Object(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["useColorMode"])(),
      colorMode = _useColorMode.colorMode;

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    maxW: "container.lg",
    centerContent: true,
    mt: 16,
    pt: 16,
    id: "skills",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_3__["SectionHeader"], {
      children: "Skills"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["SimpleGrid"], {
      columns: {
        base: 2,
        sm: 3,
        md: 4,
        lg: 4
      },
      spacing: 12,
      w: "100%",
      mt: 20,
      children: ((_data$skills = _public_meta_json__WEBPACK_IMPORTED_MODULE_4__ === null || _public_meta_json__WEBPACK_IMPORTED_MODULE_4__ === void 0 ? void 0 : _public_meta_json__WEBPACK_IMPORTED_MODULE_4__.skills) !== null && _data$skills !== void 0 ? _data$skills : []).map(function (skill, index) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Box"], {
          "data-aos": "zoom-in-up",
          "data-aos-duration": "500",
          "data-aos-delay": 100 * 1,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Square"], {
            style: {
              userSelect: "none"
            },
            mx: 'auto',
            size: {
              base: ICON_SIZE / 1.5,
              md: ICON_SIZE
            },
            bg: colorMode === 'light' ? '' : 'white',
            borderRadius: colorMode === 'light' ? 'none' : '3xl',
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Image"], {
              layout: "fill",
              maxW: {
                base: ICON_SIZE / 1.5,
                md: ICON_SIZE
              },
              maxH: {
                base: ICON_SIZE / 1.5,
                sm: ICON_SIZE
              },
              p: 2,
              src: skill.image,
              alt: skill.name
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 25,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Center"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Heading"], {
              fontSize: 18,
              align: 'center',
              fontWeight: "600",
              py: 5,
              color: colorMode === 'light' ? "gray" : "light",
              children: skill.name
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 29,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 13
          }, _this)]
        }, skill.name, true, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 11
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, _this);
};

_s(Skills, "2Uu86IH3do63pkN3s1ysdRMmJuc=", false, function () {
  return [_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["useColorMode"]];
});

_c = Skills;

var _c;

$RefreshReg$(_c, "Skills");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvc2tpbGxzL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJJQ09OX1NJWkUiLCJTa2lsbHMiLCJ1c2VDb2xvck1vZGUiLCJjb2xvck1vZGUiLCJiYXNlIiwic20iLCJtZCIsImxnIiwiZGF0YSIsInNraWxscyIsIm1hcCIsInNraWxsIiwiaW5kZXgiLCJ1c2VyU2VsZWN0IiwiaW1hZ2UiLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHLEdBQWxCO0FBRU8sSUFBTUMsTUFBZ0IsR0FBRyxTQUFuQkEsTUFBbUIsR0FBTTtBQUFBOztBQUFBOztBQUFBLHNCQUNkQyxxRUFBWSxFQURFO0FBQUEsTUFDNUJDLFNBRDRCLGlCQUM1QkEsU0FENEI7O0FBR3BDLHNCQUNFLHFFQUFDLDBEQUFEO0FBQVcsUUFBSSxFQUFDLGNBQWhCO0FBQStCLGlCQUFhLE1BQTVDO0FBQTZDLE1BQUUsRUFBRSxFQUFqRDtBQUFxRCxNQUFFLEVBQUUsRUFBekQ7QUFBNkQsTUFBRSxFQUFDLFFBQWhFO0FBQUEsNEJBQ0UscUVBQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUVFLHFFQUFDLDJEQUFEO0FBQVksYUFBTyxFQUFFO0FBQUNDLFlBQUksRUFBRSxDQUFQO0FBQVVDLFVBQUUsRUFBRSxDQUFkO0FBQWlCQyxVQUFFLEVBQUUsQ0FBckI7QUFBd0JDLFVBQUUsRUFBRTtBQUE1QixPQUFyQjtBQUFxRCxhQUFPLEVBQUUsRUFBOUQ7QUFBa0UsT0FBQyxFQUFDLE1BQXBFO0FBQTJFLFFBQUUsRUFBRSxFQUEvRTtBQUFBLGdCQUVHLGlCQUFDQyw4Q0FBRCxhQUFDQSw4Q0FBRCx1QkFBQ0EsOENBQUksQ0FBRUMsTUFBUCx1REFBaUIsRUFBakIsRUFBcUJDLEdBQXJCLENBQXlCLFVBQUNDLEtBQUQsRUFBUUMsS0FBUjtBQUFBLDRCQUN4QixxRUFBQyxvREFBRDtBQUVFLHNCQUFTLFlBRlg7QUFHRSwrQkFBa0IsS0FIcEI7QUFJRSw0QkFBZ0IsTUFBTyxDQUp6QjtBQUFBLGtDQU1FLHFFQUFDLHVEQUFEO0FBQVEsaUJBQUssRUFBRTtBQUFDQyx3QkFBVSxFQUFFO0FBQWIsYUFBZjtBQUFxQyxjQUFFLEVBQUUsTUFBekM7QUFBaUQsZ0JBQUksRUFBRTtBQUFDVCxrQkFBSSxFQUFFSixTQUFTLEdBQUcsR0FBbkI7QUFBd0JNLGdCQUFFLEVBQUVOO0FBQTVCLGFBQXZEO0FBQStGLGNBQUUsRUFBRUcsU0FBUyxLQUFLLE9BQWQsR0FBd0IsRUFBeEIsR0FBNkIsT0FBaEk7QUFBeUksd0JBQVksRUFBRUEsU0FBUyxLQUFLLE9BQWQsR0FBd0IsTUFBeEIsR0FBZ0MsS0FBdkw7QUFBQSxtQ0FFSSxxRUFBQyxzREFBRDtBQUFPLG9CQUFNLEVBQUMsTUFBZDtBQUFxQixrQkFBSSxFQUFFO0FBQUNDLG9CQUFJLEVBQUVKLFNBQVMsR0FBRyxHQUFuQjtBQUF3Qk0sa0JBQUUsRUFBRU47QUFBNUIsZUFBM0I7QUFBbUUsa0JBQUksRUFBRTtBQUFDSSxvQkFBSSxFQUFFSixTQUFTLEdBQUcsR0FBbkI7QUFBd0JLLGtCQUFFLEVBQUVMO0FBQTVCLGVBQXpFO0FBQWlILGVBQUMsRUFBRSxDQUFwSDtBQUF1SCxpQkFBRyxFQUFFVyxLQUFLLENBQUNHLEtBQWxJO0FBQXlJLGlCQUFHLEVBQUVILEtBQUssQ0FBQ0k7QUFBcEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTkYsZUFXRSxxRUFBQyx1REFBRDtBQUFBLG1DQUNFLHFFQUFDLHdEQUFEO0FBQVMsc0JBQVEsRUFBRSxFQUFuQjtBQUF1QixtQkFBSyxFQUFFLFFBQTlCO0FBQXdDLHdCQUFVLEVBQUMsS0FBbkQ7QUFBeUQsZ0JBQUUsRUFBRSxDQUE3RDtBQUFnRSxtQkFBSyxFQUFFWixTQUFTLEtBQUssT0FBZCxHQUF3QixNQUF4QixHQUFpQyxPQUF4RztBQUFBLHdCQUNHUSxLQUFLLENBQUNJO0FBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBWEY7QUFBQSxXQUNPSixLQUFLLENBQUNJLElBRGI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEd0I7QUFBQSxPQUF6QjtBQUZIO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQTJCRCxDQTlCTTs7R0FBTWQsTTtVQUNXQyw2RDs7O0tBRFhELE0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMDdiMjgxNmE4N2NkZmFhNGE1YWEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgU3F1YXJlLCBDZW50ZXIsIENvbnRhaW5lciwgU2ltcGxlR3JpZCwgQm94LCBIZWFkaW5nLCBJbWFnZSwgdXNlQ29sb3JNb2RlIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcclxuaW1wb3J0IHsgU2VjdGlvbkhlYWRlciB9IGZyb20gXCJAY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgZGF0YSBmcm9tIFwiQHB1YmxpYy9tZXRhLmpzb25cIjtcclxuXHJcbmNvbnN0IElDT05fU0laRSA9IDEwMDtcclxuXHJcbmV4cG9ydCBjb25zdCBTa2lsbHM6IFJlYWN0LkZDID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgY29sb3JNb2RlIH0gPSB1c2VDb2xvck1vZGUoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250YWluZXIgbWF4Vz1cImNvbnRhaW5lci5sZ1wiIGNlbnRlckNvbnRlbnQgbXQ9ezE2fSBwdD17MTZ9IGlkPVwic2tpbGxzXCI+XHJcbiAgICAgIDxTZWN0aW9uSGVhZGVyPlNraWxsczwvU2VjdGlvbkhlYWRlcj5cclxuICAgICAgPFNpbXBsZUdyaWQgY29sdW1ucz17e2Jhc2U6IDIsIHNtOiAzLCBtZDogNCwgbGc6IDR9fSBzcGFjaW5nPXsxMn0gdz1cIjEwMCVcIiBtdD17MjB9PlxyXG5cclxuICAgICAgICB7KGRhdGE/LnNraWxscyA/PyBbXSkubWFwKChza2lsbCwgaW5kZXgpID0+IChcclxuICAgICAgICAgIDxCb3hcclxuICAgICAgICAgICAga2V5PXtza2lsbC5uYW1lfVxyXG4gICAgICAgICAgICBkYXRhLWFvcz1cInpvb20taW4tdXBcIiBcclxuICAgICAgICAgICAgZGF0YS1hb3MtZHVyYXRpb249XCI1MDBcIiBcclxuICAgICAgICAgICAgZGF0YS1hb3MtZGVsYXk9ezEwMCAqICgxKX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPFNxdWFyZSBzdHlsZT17e3VzZXJTZWxlY3Q6IFwibm9uZVwifX0gbXg9eydhdXRvJ30gc2l6ZT17e2Jhc2U6IElDT05fU0laRSAvIDEuNSwgbWQ6IElDT05fU0laRX19IGJnPXtjb2xvck1vZGUgPT09ICdsaWdodCcgPyAnJyA6ICd3aGl0ZSd9IGJvcmRlclJhZGl1cz17Y29sb3JNb2RlID09PSAnbGlnaHQnID8gJ25vbmUnIDonM3hsJ30+XHJcbiAgICAgICAgICAgICAgey8qIDxCb3ggcHg9e0lDT05fU0laRX0gdz17SUNPTl9TSVpFfT4gKi99XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2UgbGF5b3V0PVwiZmlsbFwiIG1heFc9e3tiYXNlOiBJQ09OX1NJWkUgLyAxLjUsIG1kOiBJQ09OX1NJWkV9fSBtYXhIPXt7YmFzZTogSUNPTl9TSVpFIC8gMS41LCBzbTogSUNPTl9TSVpFfX0gcD17Mn0gc3JjPXtza2lsbC5pbWFnZX0gYWx0PXtza2lsbC5uYW1lfS8+XHJcbiAgICAgICAgICAgICAgey8qIDwvQm94PiAqL31cclxuICAgICAgICAgICAgPC9TcXVhcmU+XHJcbiAgICAgICAgICAgIDxDZW50ZXI+XHJcbiAgICAgICAgICAgICAgPEhlYWRpbmcgZm9udFNpemU9ezE4fSBhbGlnbj17J2NlbnRlcid9IGZvbnRXZWlnaHQ9XCI2MDBcIiBweT17NX0gY29sb3I9e2NvbG9yTW9kZSA9PT0gJ2xpZ2h0JyA/IFwiZ3JheVwiIDogXCJsaWdodFwiIH0+XHJcbiAgICAgICAgICAgICAgICB7c2tpbGwubmFtZX1cclxuICAgICAgICAgICAgICA8L0hlYWRpbmc+XHJcbiAgICAgICAgICAgIDwvQ2VudGVyPlxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvU2ltcGxlR3JpZD5cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gICk7XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=