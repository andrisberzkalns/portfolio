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
            rounded: 'xl',
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Image"], {
              rounded: 'xl',
              alt: project.name,
              layout: "fill",
              src: project.image,
              boxShadow: "2xl",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvcHJvamVjdHMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIm15TG9hZGVyIiwic3JjIiwid2lkdGgiLCJxdWFsaXR5IiwiUHJvamVjdHMiLCJ1c2VTdGF0ZSIsInNlbGVjdGVkSWQiLCJzZXRTZWxlY3RlZElkIiwiYmFzZSIsIm1kIiwiZGF0YSIsInByb2plY3RzIiwibWFwIiwicHJvamVjdCIsImluZGV4IiwidXJsIiwibmFtZSIsImltYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLE9BQTZCO0FBQUEsTUFBMUJDLEdBQTBCLFFBQTFCQSxHQUEwQjtBQUFBLE1BQXJCQyxLQUFxQixRQUFyQkEsS0FBcUI7QUFBQSxNQUFkQyxPQUFjLFFBQWRBLE9BQWM7QUFDNUMsb0JBQVdGLEdBQVgsZ0JBQW9CQyxLQUFwQixnQkFBK0JDLE9BQU8sSUFBSSxFQUExQztBQUNELENBRkQ7O0FBSU8sSUFBTUMsUUFBa0IsR0FBRyxTQUFyQkEsUUFBcUIsR0FBTTtBQUFBOztBQUFBOztBQUFBLGtCQUVGQyxzREFBUSxDQUFDLElBQUQsQ0FGTjtBQUFBLE1BRS9CQyxVQUYrQjtBQUFBLE1BRW5CQyxhQUZtQjs7QUFJdEMsc0JBQ0UscUVBQUMsMERBQUQ7QUFBVyxRQUFJLEVBQUMsY0FBaEI7QUFBK0IsaUJBQWEsTUFBNUM7QUFBNkMsTUFBRSxFQUFDLFVBQWhEO0FBQTJELE1BQUUsRUFBRSxFQUEvRDtBQUFtRSxNQUFFLEVBQUUsRUFBdkU7QUFBMkUsTUFBRSxFQUFFLENBQS9FO0FBQUEsNEJBQ0UscUVBQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQXdCRSxxRUFBQywyREFBRDtBQUFZLGFBQU8sRUFBRTtBQUFDQyxZQUFJLEVBQUUsQ0FBUDtBQUFVQyxVQUFFLEVBQUU7QUFBZCxPQUFyQjtBQUF1QyxhQUFPLEVBQUUsRUFBaEQ7QUFBb0QsUUFBRSxFQUFFO0FBQUNELFlBQUksRUFBRSxDQUFQO0FBQVVDLFVBQUUsRUFBRTtBQUFkLE9BQXhEO0FBQTJFLFFBQUUsRUFBRSxFQUEvRTtBQUFBLGdCQUNHLG1CQUFDQyw4Q0FBRCxhQUFDQSw4Q0FBRCx1QkFBQ0EsOENBQUksQ0FBRUMsUUFBUCwyREFBbUIsRUFBbkIsRUFBdUJDLEdBQXZCLENBQTJCLFVBQUNDLE9BQUQsRUFBVUMsS0FBVjtBQUFBLDRCQUMxQjtBQUFHLGNBQUksRUFBRUQsT0FBTyxDQUFDRSxHQUFqQjtBQUFzQixnQkFBTSxFQUFFLFFBQTlCO0FBQXdDLGFBQUcsRUFBQyxZQUE1QztBQUFBLGlDQUNBLHFFQUFDLG9EQUFEO0FBQUssbUJBQU8sRUFBRSxJQUFkO0FBQUEsbUNBT0UscUVBQUMsc0RBQUQ7QUFBTyxxQkFBTyxFQUFFLElBQWhCO0FBQXNCLGlCQUFHLEVBQUVGLE9BQU8sQ0FBQ0csSUFBbkM7QUFBeUMsb0JBQU0sRUFBQyxNQUFoRDtBQUF1RCxpQkFBRyxFQUFFSCxPQUFPLENBQUNJLEtBQXBFO0FBQTJFLHVCQUFTLEVBQUMsS0FBckY7QUFBMkYsMEJBQVMsU0FBcEc7QUFBOEcsbUNBQWtCLEtBQWhJO0FBQXNJLGdDQUFnQixPQUFRSCxLQUFLLEdBQUcsQ0FBVCxHQUFjLENBQXJCLElBQTBCO0FBQWhMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFQRixhQUF5QkQsT0FBTyxDQUFDRyxJQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEMEI7QUFBQSxPQUEzQjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUF4QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUEwQ0QsQ0E5Q007O0dBQU1aLFE7O0tBQUFBLFEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOTUyYTdkYWM5NmNjNTRjY2NiNDcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBDb250YWluZXIsIFNpbXBsZUdyaWQsIEJveCwgSGVhZGluZywgVGV4dCwgSW1hZ2UgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5pbXBvcnQgeyBBbmltYXRlU2hhcmVkTGF5b3V0LCBBbmltYXRlUHJlc2VuY2UsIG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XHJcbmltcG9ydCBkYXRhIGZyb20gXCJAcHVibGljL21ldGEuanNvblwiO1xyXG5pbXBvcnQgeyBTZWN0aW9uSGVhZGVyIH0gZnJvbSBcIkBjb21wb25lbnRzXCI7XHJcblxyXG5jb25zdCBteUxvYWRlciA9ICh7IHNyYywgd2lkdGgsIHF1YWxpdHkgfSkgPT4ge1xyXG4gIHJldHVybiBgLyR7c3JjfT93PSR7d2lkdGh9JnE9JHtxdWFsaXR5IHx8IDc1fWBcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFByb2plY3RzOiBSZWFjdC5GQyA9ICgpID0+IHtcclxuXHJcbiAgY29uc3QgW3NlbGVjdGVkSWQsIHNldFNlbGVjdGVkSWRdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyIG1heFc9XCJjb250YWluZXIubGdcIiBjZW50ZXJDb250ZW50IGlkPVwicHJvamVjdHNcIiBtYj17MzJ9IHB0PXsxNn0gbXQ9ezJ9PlxyXG4gICAgICA8U2VjdGlvbkhlYWRlcj5Qcm9qZWN0czwvU2VjdGlvbkhlYWRlcj5cclxuXHJcbiAgICAgIHsvKiA8QW5pbWF0ZVNoYXJlZExheW91dCB0eXBlPVwiY3Jvc3NmYWRlXCI+XHJcbiAgICAgICAgeyhkYXRhPy5wcm9qZWN0cyA/PyBbXSkubWFwKChwcm9qZWN0KSA9PiAoXHJcbiAgICAgICAgICA8bW90aW9uLmRpdiBsYXlvdXRJZD17cHJvamVjdC5pZH0gb25DbGljaz17KCkgPT4gc2V0U2VsZWN0ZWRJZChwcm9qZWN0LmlkKX0+XHJcbiAgICAgICAgICAgIDxtb3Rpb24uaDI+e3Byb2plY3QubmFtZX08L21vdGlvbi5oMj5cclxuICAgICAgICAgICAgPG1vdGlvbi5oNT57cHJvamVjdC5kZXNjcmlwdGlvbn08L21vdGlvbi5oNT5cclxuICAgICAgICAgIDwvbW90aW9uLmRpdj5cclxuICAgICAgICApKX1cclxuICAgICAgXHJcbiAgICAgICAgPEFuaW1hdGVQcmVzZW5jZT5cclxuICAgICAgICAgIHtzZWxlY3RlZElkICYmIChcclxuICAgICAgICAgICAgPG1vdGlvbi5kaXYgbGF5b3V0SWQ9e3NlbGVjdGVkSWR9PlxyXG4gICAgICAgICAgICAgIDxtb3Rpb24uaDI+e3Byb2plY3Quc3VidGl0bGV9PC9tb3Rpb24uaDI+XHJcbiAgICAgICAgICAgICAgPG1vdGlvbi5oNT57cHJvamVjdC50aXRsZX08L21vdGlvbi5oNT5cclxuICAgICAgICAgICAgICA8bW90aW9uLmg1PkFBQTwvbW90aW9uLmg1PlxyXG4gICAgICAgICAgICAgIDxtb3Rpb24uaW1nIHNyYz17cHJvamVjdC5pbWFnZX0gYm94U2hhZG93PVwibGdcIiBkYXRhLWFvcz1cImZhZGUtdXBcIi8+XHJcbiAgICAgICAgICAgICAgPG1vdGlvbi5idXR0b24gb25DbGljaz17KCkgPT4gc2V0U2VsZWN0ZWRJZChudWxsKX0gLz5cclxuICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L0FuaW1hdGVQcmVzZW5jZT5cclxuICAgICAgPC9BbmltYXRlU2hhcmVkTGF5b3V0PiAqL31cclxuXHJcbiAgICAgIDxTaW1wbGVHcmlkIGNvbHVtbnM9e3tiYXNlOiAxLCBtZDogMn19IHNwYWNpbmc9ezEyfSBweD17e2Jhc2U6IDIsIG1kOiAyMH19IG15PXsyMH0+XHJcbiAgICAgICAgeyhkYXRhPy5wcm9qZWN0cyA/PyBbXSkubWFwKChwcm9qZWN0LCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgPGEgaHJlZj17cHJvamVjdC51cmx9IHRhcmdldD17J19ibGFuayd9IHJlbD1cIm5vcmVmZXJyZXJcIj5cclxuICAgICAgICAgIDxCb3ggcm91bmRlZD17J3hsJ30ga2V5PXtwcm9qZWN0Lm5hbWV9PlxyXG4gICAgICAgICAgICB7LyogPEhlYWRpbmcgZm9udFNpemU9ezE2fSBmb250V2VpZ2h0PVwiNTAwXCIgcHk9ezV9IGRhdGEtYW9zPVwiZmFkZS11cFwiIGRhdGEtYW9zLWR1cmF0aW9uPVwiNTAwXCIgZGF0YS1hb3MtZGVsYXk9ezE1MCAqICgoaW5kZXggJSAyKSArIDEpfSA+XHJcbiAgICAgICAgICAgICAge3Byb2plY3QubmFtZX1cclxuICAgICAgICAgICAgPC9IZWFkaW5nPlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgcHJvamVjdC5kZXNjcmlwdGlvbiAmJiA8VGV4dCBmb250U2l6ZT17MTR9IGRhdGEtYW9zPVwiZmFkZS11cFwiIGRhdGEtYW9zLWR1cmF0aW9uPVwiNTAwXCIgZGF0YS1hb3MtZGVsYXk9ezE1MCAqICgoaW5kZXggJSAyKSArIDEpICsgNTB9Pntwcm9qZWN0LmRlc2NyaXB0aW9ufTwvVGV4dD5cclxuICAgICAgICAgICAgfSAqL31cclxuICAgICAgICAgICAgPEltYWdlIHJvdW5kZWQ9eyd4bCd9IGFsdD17cHJvamVjdC5uYW1lfSBsYXlvdXQ9XCJmaWxsXCIgc3JjPXtwcm9qZWN0LmltYWdlfSBib3hTaGFkb3c9XCIyeGxcIiBkYXRhLWFvcz1cImZhZGUtdXBcIiBkYXRhLWFvcy1kdXJhdGlvbj1cIjUwMFwiIGRhdGEtYW9zLWRlbGF5PXsxNTAgKiAoKGluZGV4ICUgMikgKyAxKSArIDEwMH0vPlxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvU2ltcGxlR3JpZD5cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gICk7XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=