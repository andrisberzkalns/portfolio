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






var myLoader = function myLoader(_ref) {
  var src = _ref.src,
      width = _ref.width,
      quality = _ref.quality;
  return "/".concat(src, "?w=").concat(width, "&q=").concat(quality || 75);
};

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
      lineNumber: 17,
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
              lineNumber: 50,
              columnNumber: 13
            }, _this)
          }, project.name, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 11
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 11
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 16,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvcHJvamVjdHMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIm15TG9hZGVyIiwic3JjIiwid2lkdGgiLCJxdWFsaXR5IiwiUHJvamVjdHMiLCJ1c2VTdGF0ZSIsInNlbGVjdGVkSWQiLCJzZXRTZWxlY3RlZElkIiwiYmFzZSIsIm1kIiwiZGF0YSIsInByb2plY3RzIiwibWFwIiwicHJvamVjdCIsImluZGV4IiwidXJsIiwibmFtZSIsImltYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLE9BQTZCO0FBQUEsTUFBMUJDLEdBQTBCLFFBQTFCQSxHQUEwQjtBQUFBLE1BQXJCQyxLQUFxQixRQUFyQkEsS0FBcUI7QUFBQSxNQUFkQyxPQUFjLFFBQWRBLE9BQWM7QUFDNUMsb0JBQVdGLEdBQVgsZ0JBQW9CQyxLQUFwQixnQkFBK0JDLE9BQU8sSUFBSSxFQUExQztBQUNELENBRkQ7O0FBSU8sSUFBTUMsUUFBa0IsR0FBRyxTQUFyQkEsUUFBcUIsR0FBTTtBQUFBOztBQUFBOztBQUFBLGtCQUVGQyxzREFBUSxDQUFDLElBQUQsQ0FGTjtBQUFBLE1BRS9CQyxVQUYrQjtBQUFBLE1BRW5CQyxhQUZtQjs7QUFJdEMsc0JBQ0UscUVBQUMsMERBQUQ7QUFBVyxRQUFJLEVBQUMsY0FBaEI7QUFBK0IsaUJBQWEsTUFBNUM7QUFBNkMsTUFBRSxFQUFDLFVBQWhEO0FBQTJELE1BQUUsRUFBRSxFQUEvRDtBQUFtRSxNQUFFLEVBQUUsRUFBdkU7QUFBMkUsTUFBRSxFQUFFLENBQS9FO0FBQUEsNEJBQ0UscUVBQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQXdCRSxxRUFBQywyREFBRDtBQUFZLGFBQU8sRUFBRTtBQUFDQyxZQUFJLEVBQUUsQ0FBUDtBQUFVQyxVQUFFLEVBQUU7QUFBZCxPQUFyQjtBQUF1QyxhQUFPLEVBQUUsRUFBaEQ7QUFBb0QsUUFBRSxFQUFFO0FBQUNELFlBQUksRUFBRSxDQUFQO0FBQVVDLFVBQUUsRUFBRTtBQUFkLE9BQXhEO0FBQTJFLFFBQUUsRUFBRSxFQUEvRTtBQUFBLGdCQUNHLG1CQUFDQyw4Q0FBRCxhQUFDQSw4Q0FBRCx1QkFBQ0EsOENBQUksQ0FBRUMsUUFBUCwyREFBbUIsRUFBbkIsRUFBdUJDLEdBQXZCLENBQTJCLFVBQUNDLE9BQUQsRUFBVUMsS0FBVjtBQUFBLDRCQUMxQjtBQUFHLGNBQUksRUFBRUQsT0FBTyxDQUFDRSxHQUFqQjtBQUFzQixnQkFBTSxFQUFFLFFBQTlCO0FBQXdDLGFBQUcsRUFBQyxZQUE1QztBQUFBLGlDQUNBLHFFQUFDLG9EQUFEO0FBQUEsbUNBT0UscUVBQUMsc0RBQUQ7QUFBTyxxQkFBTyxFQUFFLElBQWhCO0FBQXNCLGlCQUFHLEVBQUVGLE9BQU8sQ0FBQ0csSUFBbkM7QUFBeUMsb0JBQU0sRUFBQyxNQUFoRDtBQUF1RCxpQkFBRyxFQUFFSCxPQUFPLENBQUNJLEtBQXBFO0FBQTJFLHVCQUFTLEVBQUMsSUFBckY7QUFBMEYsMEJBQVMsU0FBbkc7QUFBNkcsbUNBQWtCLEtBQS9IO0FBQXFJLGdDQUFnQixPQUFRSCxLQUFLLEdBQUcsQ0FBVCxHQUFjLENBQXJCLElBQTBCO0FBQS9LO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFQRixhQUFVRCxPQUFPLENBQUNHLElBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUQwQjtBQUFBLE9BQTNCO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXhCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQTBDRCxDQTlDTTs7R0FBTVosUTs7S0FBQUEsUSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC42NDhlYjZhNDUxNjBlYTlmOGEyYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IENvbnRhaW5lciwgU2ltcGxlR3JpZCwgQm94LCBIZWFkaW5nLCBUZXh0LCBJbWFnZSB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XHJcbmltcG9ydCB7IEFuaW1hdGVTaGFyZWRMYXlvdXQsIEFuaW1hdGVQcmVzZW5jZSwgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcclxuaW1wb3J0IGRhdGEgZnJvbSBcIkBwdWJsaWMvbWV0YS5qc29uXCI7XHJcbmltcG9ydCB7IFNlY3Rpb25IZWFkZXIgfSBmcm9tIFwiQGNvbXBvbmVudHNcIjtcclxuXHJcbmNvbnN0IG15TG9hZGVyID0gKHsgc3JjLCB3aWR0aCwgcXVhbGl0eSB9KSA9PiB7XHJcbiAgcmV0dXJuIGAvJHtzcmN9P3c9JHt3aWR0aH0mcT0ke3F1YWxpdHkgfHwgNzV9YFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgUHJvamVjdHM6IFJlYWN0LkZDID0gKCkgPT4ge1xyXG5cclxuICBjb25zdCBbc2VsZWN0ZWRJZCwgc2V0U2VsZWN0ZWRJZF0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250YWluZXIgbWF4Vz1cImNvbnRhaW5lci5sZ1wiIGNlbnRlckNvbnRlbnQgaWQ9XCJwcm9qZWN0c1wiIG1iPXszMn0gcHQ9ezE2fSBtdD17Mn0+XHJcbiAgICAgIDxTZWN0aW9uSGVhZGVyPlByb2plY3RzPC9TZWN0aW9uSGVhZGVyPlxyXG5cclxuICAgICAgey8qIDxBbmltYXRlU2hhcmVkTGF5b3V0IHR5cGU9XCJjcm9zc2ZhZGVcIj5cclxuICAgICAgICB7KGRhdGE/LnByb2plY3RzID8/IFtdKS5tYXAoKHByb2plY3QpID0+IChcclxuICAgICAgICAgIDxtb3Rpb24uZGl2IGxheW91dElkPXtwcm9qZWN0LmlkfSBvbkNsaWNrPXsoKSA9PiBzZXRTZWxlY3RlZElkKHByb2plY3QuaWQpfT5cclxuICAgICAgICAgICAgPG1vdGlvbi5oMj57cHJvamVjdC5uYW1lfTwvbW90aW9uLmgyPlxyXG4gICAgICAgICAgICA8bW90aW9uLmg1Pntwcm9qZWN0LmRlc2NyaXB0aW9ufTwvbW90aW9uLmg1PlxyXG4gICAgICAgICAgPC9tb3Rpb24uZGl2PlxyXG4gICAgICAgICkpfVxyXG4gICAgICBcclxuICAgICAgICA8QW5pbWF0ZVByZXNlbmNlPlxyXG4gICAgICAgICAge3NlbGVjdGVkSWQgJiYgKFxyXG4gICAgICAgICAgICA8bW90aW9uLmRpdiBsYXlvdXRJZD17c2VsZWN0ZWRJZH0+XHJcbiAgICAgICAgICAgICAgPG1vdGlvbi5oMj57cHJvamVjdC5zdWJ0aXRsZX08L21vdGlvbi5oMj5cclxuICAgICAgICAgICAgICA8bW90aW9uLmg1Pntwcm9qZWN0LnRpdGxlfTwvbW90aW9uLmg1PlxyXG4gICAgICAgICAgICAgIDxtb3Rpb24uaDU+QUFBPC9tb3Rpb24uaDU+XHJcbiAgICAgICAgICAgICAgPG1vdGlvbi5pbWcgc3JjPXtwcm9qZWN0LmltYWdlfSBib3hTaGFkb3c9XCJsZ1wiIGRhdGEtYW9zPVwiZmFkZS11cFwiLz5cclxuICAgICAgICAgICAgICA8bW90aW9uLmJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRTZWxlY3RlZElkKG51bGwpfSAvPlxyXG4gICAgICAgICAgICA8L21vdGlvbi5kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvQW5pbWF0ZVByZXNlbmNlPlxyXG4gICAgICA8L0FuaW1hdGVTaGFyZWRMYXlvdXQ+ICovfVxyXG5cclxuICAgICAgPFNpbXBsZUdyaWQgY29sdW1ucz17e2Jhc2U6IDEsIG1kOiAyfX0gc3BhY2luZz17MTJ9IHB4PXt7YmFzZTogMiwgbWQ6IDIwfX0gbXk9ezIwfT5cclxuICAgICAgICB7KGRhdGE/LnByb2plY3RzID8/IFtdKS5tYXAoKHByb2plY3QsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICA8YSBocmVmPXtwcm9qZWN0LnVybH0gdGFyZ2V0PXsnX2JsYW5rJ30gcmVsPVwibm9yZWZlcnJlclwiPlxyXG4gICAgICAgICAgPEJveCBrZXk9e3Byb2plY3QubmFtZX0+XHJcbiAgICAgICAgICAgIHsvKiA8SGVhZGluZyBmb250U2l6ZT17MTZ9IGZvbnRXZWlnaHQ9XCI1MDBcIiBweT17NX0gZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3MtZHVyYXRpb249XCI1MDBcIiBkYXRhLWFvcy1kZWxheT17MTUwICogKChpbmRleCAlIDIpICsgMSl9ID5cclxuICAgICAgICAgICAgICB7cHJvamVjdC5uYW1lfVxyXG4gICAgICAgICAgICA8L0hlYWRpbmc+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBwcm9qZWN0LmRlc2NyaXB0aW9uICYmIDxUZXh0IGZvbnRTaXplPXsxNH0gZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3MtZHVyYXRpb249XCI1MDBcIiBkYXRhLWFvcy1kZWxheT17MTUwICogKChpbmRleCAlIDIpICsgMSkgKyA1MH0+e3Byb2plY3QuZGVzY3JpcHRpb259PC9UZXh0PlxyXG4gICAgICAgICAgICB9ICovfVxyXG4gICAgICAgICAgICA8SW1hZ2Ugcm91bmRlZD17J3hsJ30gYWx0PXtwcm9qZWN0Lm5hbWV9IGxheW91dD1cImZpbGxcIiBzcmM9e3Byb2plY3QuaW1hZ2V9IGJveFNoYWRvdz1cInhsXCIgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3MtZHVyYXRpb249XCI1MDBcIiBkYXRhLWFvcy1kZWxheT17MTUwICogKChpbmRleCAlIDIpICsgMSkgKyAxMDB9Lz5cclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L1NpbXBsZUdyaWQ+XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICApO1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9