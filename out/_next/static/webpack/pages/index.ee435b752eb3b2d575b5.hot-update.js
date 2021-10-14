webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/projects/index.tsx":
/*!*******************************************!*\
  !*** ./src/components/projects/index.tsx ***!
  \*******************************************/
/*! exports provided: Projects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Projects", function() { return Projects; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/esm/index.js");
/* harmony import */ var _public_meta_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @public/meta.json */ "./public/meta.json");
var _public_meta_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! @public/meta.json */ "./public/meta.json", 1);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components */ "./src/components/index.ts");


var _jsxFileName = "C:\\Users\\berzk\\Documents\\Projects\\Portfolio-v2\\portfolio2\\src\\components\\projects\\index.tsx",
    _this = undefined,
    _s = $RefreshSig$();





var Projects = function Projects() {
  _s();

  var _data$projects;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      selectedId = _useState[0],
      setSelectedId = _useState[1];

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    maxW: "container.lg",
    centerContent: true,
    id: "projects",
    mb: 32,
    pt: 16,
    mt: 2,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_4__["SectionHeader"], {
      children: "Projects"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["SimpleGrid"], {
      columns: {
        base: 1,
        md: 2
      },
      spacing: 12,
      px: {
        base: 2,
        md: 20
      },
      my: 20,
      children: ((_data$projects = _public_meta_json__WEBPACK_IMPORTED_MODULE_3__ === null || _public_meta_json__WEBPACK_IMPORTED_MODULE_3__ === void 0 ? void 0 : _public_meta_json__WEBPACK_IMPORTED_MODULE_3__.projects) !== null && _data$projects !== void 0 ? _data$projects : []).map(function (project, index) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: project.url,
          target: '_blank',
          rel: "noreferrer",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Box"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Image"], {
              rounded: 'xl',
              alt: project.name,
              layout: "fill",
              src: project.image,
              boxShadow: "xl",
              "data-aos": "fade-up",
              "data-aos-duration": "500",
              "data-aos-delay": 150 * (index % 2 + 1) + 100
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 18,
              columnNumber: 13
            }, _this)
          }, project.name, false, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 11
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
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

_s(Projects, "6tRyBKpA6Tf8zEXxvntvrffDmeA=");

_c = Projects;

var _c;

$RefreshReg$(_c, "Projects");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvcHJvamVjdHMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIlByb2plY3RzIiwidXNlU3RhdGUiLCJzZWxlY3RlZElkIiwic2V0U2VsZWN0ZWRJZCIsImJhc2UiLCJtZCIsImRhdGEiLCJwcm9qZWN0cyIsIm1hcCIsInByb2plY3QiLCJpbmRleCIsInVybCIsIm5hbWUiLCJpbWFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUVPLElBQU1BLFFBQWtCLEdBQUcsU0FBckJBLFFBQXFCLEdBQU07QUFBQTs7QUFBQTs7QUFBQSxrQkFFRkMsc0RBQVEsQ0FBQyxJQUFELENBRk47QUFBQSxNQUUvQkMsVUFGK0I7QUFBQSxNQUVuQkMsYUFGbUI7O0FBSXRDLHNCQUNFLHFFQUFDLDBEQUFEO0FBQVcsUUFBSSxFQUFDLGNBQWhCO0FBQStCLGlCQUFhLE1BQTVDO0FBQTZDLE1BQUUsRUFBQyxVQUFoRDtBQUEyRCxNQUFFLEVBQUUsRUFBL0Q7QUFBbUUsTUFBRSxFQUFFLEVBQXZFO0FBQTJFLE1BQUUsRUFBRSxDQUEvRTtBQUFBLDRCQUNFLHFFQUFDLHlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFFRSxxRUFBQywyREFBRDtBQUFZLGFBQU8sRUFBRTtBQUFDQyxZQUFJLEVBQUUsQ0FBUDtBQUFVQyxVQUFFLEVBQUU7QUFBZCxPQUFyQjtBQUF1QyxhQUFPLEVBQUUsRUFBaEQ7QUFBb0QsUUFBRSxFQUFFO0FBQUNELFlBQUksRUFBRSxDQUFQO0FBQVVDLFVBQUUsRUFBRTtBQUFkLE9BQXhEO0FBQTJFLFFBQUUsRUFBRSxFQUEvRTtBQUFBLGdCQUNHLG1CQUFDQyw4Q0FBRCxhQUFDQSw4Q0FBRCx1QkFBQ0EsOENBQUksQ0FBRUMsUUFBUCwyREFBbUIsRUFBbkIsRUFBdUJDLEdBQXZCLENBQTJCLFVBQUNDLE9BQUQsRUFBVUMsS0FBVjtBQUFBLDRCQUMxQjtBQUFHLGNBQUksRUFBRUQsT0FBTyxDQUFDRSxHQUFqQjtBQUFzQixnQkFBTSxFQUFFLFFBQTlCO0FBQXdDLGFBQUcsRUFBQyxZQUE1QztBQUFBLGlDQUNBLHFFQUFDLG9EQUFEO0FBQUEsbUNBQ0UscUVBQUMsc0RBQUQ7QUFBTyxxQkFBTyxFQUFFLElBQWhCO0FBQXNCLGlCQUFHLEVBQUVGLE9BQU8sQ0FBQ0csSUFBbkM7QUFBeUMsb0JBQU0sRUFBQyxNQUFoRDtBQUF1RCxpQkFBRyxFQUFFSCxPQUFPLENBQUNJLEtBQXBFO0FBQTJFLHVCQUFTLEVBQUMsSUFBckY7QUFBMEYsMEJBQVMsU0FBbkc7QUFBNkcsbUNBQWtCLEtBQS9IO0FBQXFJLGdDQUFnQixPQUFRSCxLQUFLLEdBQUcsQ0FBVCxHQUFjLENBQXJCLElBQTBCO0FBQS9LO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixhQUFVRCxPQUFPLENBQUNHLElBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUQwQjtBQUFBLE9BQTNCO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBY0QsQ0FsQk07O0dBQU1aLFE7O0tBQUFBLFEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZWU0MzViNzUyZWIzYjJkNTc1YjUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBDb250YWluZXIsIFNpbXBsZUdyaWQsIEJveCwgSGVhZGluZywgVGV4dCwgSW1hZ2UgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5pbXBvcnQgeyBBbmltYXRlU2hhcmVkTGF5b3V0LCBBbmltYXRlUHJlc2VuY2UsIG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XHJcbmltcG9ydCBkYXRhIGZyb20gXCJAcHVibGljL21ldGEuanNvblwiO1xyXG5pbXBvcnQgeyBTZWN0aW9uSGVhZGVyIH0gZnJvbSBcIkBjb21wb25lbnRzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgUHJvamVjdHM6IFJlYWN0LkZDID0gKCkgPT4ge1xyXG5cclxuICBjb25zdCBbc2VsZWN0ZWRJZCwgc2V0U2VsZWN0ZWRJZF0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250YWluZXIgbWF4Vz1cImNvbnRhaW5lci5sZ1wiIGNlbnRlckNvbnRlbnQgaWQ9XCJwcm9qZWN0c1wiIG1iPXszMn0gcHQ9ezE2fSBtdD17Mn0+XHJcbiAgICAgIDxTZWN0aW9uSGVhZGVyPlByb2plY3RzPC9TZWN0aW9uSGVhZGVyPlxyXG4gICAgICA8U2ltcGxlR3JpZCBjb2x1bW5zPXt7YmFzZTogMSwgbWQ6IDJ9fSBzcGFjaW5nPXsxMn0gcHg9e3tiYXNlOiAyLCBtZDogMjB9fSBteT17MjB9PlxyXG4gICAgICAgIHsoZGF0YT8ucHJvamVjdHMgPz8gW10pLm1hcCgocHJvamVjdCwgaW5kZXgpID0+IChcclxuICAgICAgICAgIDxhIGhyZWY9e3Byb2plY3QudXJsfSB0YXJnZXQ9eydfYmxhbmsnfSByZWw9XCJub3JlZmVycmVyXCI+XHJcbiAgICAgICAgICA8Qm94IGtleT17cHJvamVjdC5uYW1lfT5cclxuICAgICAgICAgICAgPEltYWdlIHJvdW5kZWQ9eyd4bCd9IGFsdD17cHJvamVjdC5uYW1lfSBsYXlvdXQ9XCJmaWxsXCIgc3JjPXtwcm9qZWN0LmltYWdlfSBib3hTaGFkb3c9XCJ4bFwiIGRhdGEtYW9zPVwiZmFkZS11cFwiIGRhdGEtYW9zLWR1cmF0aW9uPVwiNTAwXCIgZGF0YS1hb3MtZGVsYXk9ezE1MCAqICgoaW5kZXggJSAyKSArIDEpICsgMTAwfS8+XHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICApKX1cclxuICAgICAgPC9TaW1wbGVHcmlkPlxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKTtcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==