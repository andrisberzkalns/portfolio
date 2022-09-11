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


var _jsxFileName = "C:\\Users\\berzk\\Documents\\Projects\\Portfolio-v2\\portfolio\\src\\components\\projects\\index.tsx",
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
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 11
          }, _this)
        }, project.name, false, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvcHJvamVjdHMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIlByb2plY3RzIiwidXNlU3RhdGUiLCJzZWxlY3RlZElkIiwic2V0U2VsZWN0ZWRJZCIsImJhc2UiLCJtZCIsImRhdGEiLCJwcm9qZWN0cyIsIm1hcCIsInByb2plY3QiLCJpbmRleCIsInVybCIsIm5hbWUiLCJpbWFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUVPLElBQU1BLFFBQWtCLEdBQUcsU0FBckJBLFFBQXFCLEdBQU07QUFBQTs7QUFBQTs7QUFBQSxrQkFFRkMsc0RBQVEsQ0FBQyxJQUFELENBRk47QUFBQSxNQUUvQkMsVUFGK0I7QUFBQSxNQUVuQkMsYUFGbUI7O0FBSXRDLHNCQUNFLHFFQUFDLDBEQUFEO0FBQVcsUUFBSSxFQUFDLGNBQWhCO0FBQStCLGlCQUFhLE1BQTVDO0FBQTZDLE1BQUUsRUFBQyxVQUFoRDtBQUEyRCxNQUFFLEVBQUUsRUFBL0Q7QUFBbUUsTUFBRSxFQUFFLEVBQXZFO0FBQTJFLE1BQUUsRUFBRSxDQUEvRTtBQUFBLDRCQUNFLHFFQUFDLHlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFFRSxxRUFBQywyREFBRDtBQUFZLGFBQU8sRUFBRTtBQUFDQyxZQUFJLEVBQUUsQ0FBUDtBQUFVQyxVQUFFLEVBQUU7QUFBZCxPQUFyQjtBQUF1QyxhQUFPLEVBQUUsRUFBaEQ7QUFBb0QsUUFBRSxFQUFFO0FBQUNELFlBQUksRUFBRSxDQUFQO0FBQVVDLFVBQUUsRUFBRTtBQUFkLE9BQXhEO0FBQTJFLFFBQUUsRUFBRSxFQUEvRTtBQUFBLGdCQUNHLG1CQUFDQyw4Q0FBRCxhQUFDQSw4Q0FBRCx1QkFBQ0EsOENBQUksQ0FBRUMsUUFBUCwyREFBbUIsRUFBbkIsRUFBdUJDLEdBQXZCLENBQTJCLFVBQUNDLE9BQUQsRUFBVUMsS0FBVjtBQUFBLDRCQUMxQjtBQUF1QixjQUFJLEVBQUVELE9BQU8sQ0FBQ0UsR0FBckM7QUFBMEMsZ0JBQU0sRUFBRSxRQUFsRDtBQUE0RCxhQUFHLEVBQUMsWUFBaEU7QUFBQSxpQ0FDQSxxRUFBQyxvREFBRDtBQUFBLG1DQUNFLHFFQUFDLHNEQUFEO0FBQU8scUJBQU8sRUFBRSxJQUFoQjtBQUFzQixpQkFBRyxFQUFFRixPQUFPLENBQUNHLElBQW5DO0FBQXlDLG9CQUFNLEVBQUMsTUFBaEQ7QUFBdUQsaUJBQUcsRUFBRUgsT0FBTyxDQUFDSSxLQUFwRTtBQUEyRSx1QkFBUyxFQUFDLElBQXJGO0FBQTBGLDBCQUFTLFNBQW5HO0FBQTZHLG1DQUFrQixLQUEvSDtBQUFxSSxnQ0FBZ0IsT0FBUUgsS0FBSyxHQUFHLENBQVQsR0FBYyxDQUFyQixJQUEwQjtBQUEvSztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBLFdBQVNELE9BQU8sQ0FBQ0csSUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEMEI7QUFBQSxPQUEzQjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWNELENBbEJNOztHQUFNWixROztLQUFBQSxRIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjY4ZGM3ZGZkOGQwODM1ODMyNDE1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQ29udGFpbmVyLCBTaW1wbGVHcmlkLCBCb3gsIEhlYWRpbmcsIFRleHQsIEltYWdlIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcclxuaW1wb3J0IHsgQW5pbWF0ZVNoYXJlZExheW91dCwgQW5pbWF0ZVByZXNlbmNlLCBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xyXG5pbXBvcnQgZGF0YSBmcm9tIFwiQHB1YmxpYy9tZXRhLmpzb25cIjtcclxuaW1wb3J0IHsgU2VjdGlvbkhlYWRlciB9IGZyb20gXCJAY29tcG9uZW50c1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFByb2plY3RzOiBSZWFjdC5GQyA9ICgpID0+IHtcclxuXHJcbiAgY29uc3QgW3NlbGVjdGVkSWQsIHNldFNlbGVjdGVkSWRdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyIG1heFc9XCJjb250YWluZXIubGdcIiBjZW50ZXJDb250ZW50IGlkPVwicHJvamVjdHNcIiBtYj17MzJ9IHB0PXsxNn0gbXQ9ezJ9PlxyXG4gICAgICA8U2VjdGlvbkhlYWRlcj5Qcm9qZWN0czwvU2VjdGlvbkhlYWRlcj5cclxuICAgICAgPFNpbXBsZUdyaWQgY29sdW1ucz17e2Jhc2U6IDEsIG1kOiAyfX0gc3BhY2luZz17MTJ9IHB4PXt7YmFzZTogMiwgbWQ6IDIwfX0gbXk9ezIwfT5cclxuICAgICAgICB7KGRhdGE/LnByb2plY3RzID8/IFtdKS5tYXAoKHByb2plY3QsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICA8YSAga2V5PXtwcm9qZWN0Lm5hbWV9IGhyZWY9e3Byb2plY3QudXJsfSB0YXJnZXQ9eydfYmxhbmsnfSByZWw9XCJub3JlZmVycmVyXCI+XHJcbiAgICAgICAgICA8Qm94PlxyXG4gICAgICAgICAgICA8SW1hZ2Ugcm91bmRlZD17J3hsJ30gYWx0PXtwcm9qZWN0Lm5hbWV9IGxheW91dD1cImZpbGxcIiBzcmM9e3Byb2plY3QuaW1hZ2V9IGJveFNoYWRvdz1cInhsXCIgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3MtZHVyYXRpb249XCI1MDBcIiBkYXRhLWFvcy1kZWxheT17MTUwICogKChpbmRleCAlIDIpICsgMSkgKyAxMDB9Lz5cclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L1NpbXBsZUdyaWQ+XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICApO1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9