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

var myLoader = function myLoader(_ref) {
  var src = _ref.src,
      width = _ref.width,
      quality = _ref.quality;
  return "/".concat(src, "?w=").concat(width, "&q=").concat(quality || 75);
};

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
      lineNumber: 17,
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
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Box"], {
            "data-aos": "zoom-in-up",
            "data-aos-duration": "500",
            "data-aos-delay": 100 * 1,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Square"], {
              mx: 'auto',
              size: {
                base: ICON_SIZE / 1.5,
                md: ICON_SIZE
              },
              bg: colorMode === 'light' ? '' : 'white',
              borderRadius: colorMode === 'light' ? 'none' : '3xl',
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Image"], {
                layout: "fill",
                w: {
                  base: ICON_SIZE / 1.5,
                  md: ICON_SIZE
                },
                h: {
                  base: ICON_SIZE / 1.5,
                  sm: ICON_SIZE
                },
                p: 2,
                src: skill.image,
                alt: skill.name
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 29,
                columnNumber: 19
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 27,
              columnNumber: 15
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
                lineNumber: 33,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 32,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 13
          }, _this)
        }, void 0, false);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 16,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvc2tpbGxzL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJJQ09OX1NJWkUiLCJteUxvYWRlciIsInNyYyIsIndpZHRoIiwicXVhbGl0eSIsIlNraWxscyIsInVzZUNvbG9yTW9kZSIsImNvbG9yTW9kZSIsImJhc2UiLCJzbSIsIm1kIiwibGciLCJkYXRhIiwic2tpbGxzIiwibWFwIiwic2tpbGwiLCJpbmRleCIsImltYWdlIiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUcsR0FBbEI7O0FBRUEsSUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsT0FBNkI7QUFBQSxNQUExQkMsR0FBMEIsUUFBMUJBLEdBQTBCO0FBQUEsTUFBckJDLEtBQXFCLFFBQXJCQSxLQUFxQjtBQUFBLE1BQWRDLE9BQWMsUUFBZEEsT0FBYztBQUM1QyxvQkFBV0YsR0FBWCxnQkFBb0JDLEtBQXBCLGdCQUErQkMsT0FBTyxJQUFJLEVBQTFDO0FBQ0QsQ0FGRDs7QUFJTyxJQUFNQyxNQUFnQixHQUFHLFNBQW5CQSxNQUFtQixHQUFNO0FBQUE7O0FBQUE7O0FBQUEsc0JBQ2RDLHFFQUFZLEVBREU7QUFBQSxNQUM1QkMsU0FENEIsaUJBQzVCQSxTQUQ0Qjs7QUFHcEMsc0JBQ0UscUVBQUMsMERBQUQ7QUFBVyxRQUFJLEVBQUMsY0FBaEI7QUFBK0IsaUJBQWEsTUFBNUM7QUFBNkMsTUFBRSxFQUFFLEVBQWpEO0FBQXFELE1BQUUsRUFBRSxFQUF6RDtBQUE2RCxNQUFFLEVBQUMsUUFBaEU7QUFBQSw0QkFDRSxxRUFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBRUUscUVBQUMsMkRBQUQ7QUFBWSxhQUFPLEVBQUU7QUFBQ0MsWUFBSSxFQUFFLENBQVA7QUFBVUMsVUFBRSxFQUFFLENBQWQ7QUFBaUJDLFVBQUUsRUFBRSxDQUFyQjtBQUF3QkMsVUFBRSxFQUFFO0FBQTVCLE9BQXJCO0FBQXFELGFBQU8sRUFBRSxFQUE5RDtBQUFrRSxPQUFDLEVBQUMsTUFBcEU7QUFBMkUsUUFBRSxFQUFFLEVBQS9FO0FBQUEsZ0JBRUcsaUJBQUNDLDhDQUFELGFBQUNBLDhDQUFELHVCQUFDQSw4Q0FBSSxDQUFFQyxNQUFQLHVEQUFpQixFQUFqQixFQUFxQkMsR0FBckIsQ0FBeUIsVUFBQ0MsS0FBRCxFQUFRQyxLQUFSO0FBQUEsNEJBQ3hCO0FBQUEsaUNBQ0UscUVBQUMsb0RBQUQ7QUFDRSx3QkFBUyxZQURYO0FBRUUsaUNBQWtCLEtBRnBCO0FBR0UsOEJBQWdCLE1BQU8sQ0FIekI7QUFBQSxvQ0FLRSxxRUFBQyx1REFBRDtBQUFRLGdCQUFFLEVBQUUsTUFBWjtBQUFvQixrQkFBSSxFQUFFO0FBQUNSLG9CQUFJLEVBQUVSLFNBQVMsR0FBRyxHQUFuQjtBQUF3QlUsa0JBQUUsRUFBRVY7QUFBNUIsZUFBMUI7QUFBa0UsZ0JBQUUsRUFBRU8sU0FBUyxLQUFLLE9BQWQsR0FBd0IsRUFBeEIsR0FBNkIsT0FBbkc7QUFBNEcsMEJBQVksRUFBRUEsU0FBUyxLQUFLLE9BQWQsR0FBd0IsTUFBeEIsR0FBZ0MsS0FBMUo7QUFBQSxxQ0FFSSxxRUFBQyxzREFBRDtBQUFPLHNCQUFNLEVBQUMsTUFBZDtBQUFxQixpQkFBQyxFQUFFO0FBQUNDLHNCQUFJLEVBQUVSLFNBQVMsR0FBRyxHQUFuQjtBQUF3QlUsb0JBQUUsRUFBRVY7QUFBNUIsaUJBQXhCO0FBQWdFLGlCQUFDLEVBQUU7QUFBQ1Esc0JBQUksRUFBRVIsU0FBUyxHQUFHLEdBQW5CO0FBQXdCUyxvQkFBRSxFQUFFVDtBQUE1QixpQkFBbkU7QUFBMkcsaUJBQUMsRUFBRSxDQUE5RztBQUFpSCxtQkFBRyxFQUFFZSxLQUFLLENBQUNFLEtBQTVIO0FBQW1JLG1CQUFHLEVBQUVGLEtBQUssQ0FBQ0c7QUFBOUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBTEYsZUFVRSxxRUFBQyx1REFBRDtBQUFBLHFDQUNFLHFFQUFDLHdEQUFEO0FBQVMsd0JBQVEsRUFBRSxFQUFuQjtBQUF1QixxQkFBSyxFQUFFLFFBQTlCO0FBQXdDLDBCQUFVLEVBQUMsS0FBbkQ7QUFBeUQsa0JBQUUsRUFBRSxDQUE3RDtBQUFnRSxxQkFBSyxFQUFFWCxTQUFTLEtBQUssT0FBZCxHQUF3QixNQUF4QixHQUFpQyxPQUF4RztBQUFBLDBCQUNHUSxLQUFLLENBQUNHO0FBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYseUJBRHdCO0FBQUEsT0FBekI7QUFGSDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUE0QkQsQ0EvQk07O0dBQU1iLE07VUFDV0MsNkQ7OztLQURYRCxNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjhhM2Q0NTcxZTgyMjczYWE4NmZlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFNxdWFyZSwgQ2VudGVyLCBDb250YWluZXIsIFNpbXBsZUdyaWQsIEJveCwgSGVhZGluZywgSW1hZ2UsIHVzZUNvbG9yTW9kZSB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XHJcbmltcG9ydCB7IFNlY3Rpb25IZWFkZXIgfSBmcm9tIFwiQGNvbXBvbmVudHNcIjtcclxuaW1wb3J0IGRhdGEgZnJvbSBcIkBwdWJsaWMvbWV0YS5qc29uXCI7XHJcblxyXG5jb25zdCBJQ09OX1NJWkUgPSAxMDA7XHJcblxyXG5jb25zdCBteUxvYWRlciA9ICh7IHNyYywgd2lkdGgsIHF1YWxpdHkgfSkgPT4ge1xyXG4gIHJldHVybiBgLyR7c3JjfT93PSR7d2lkdGh9JnE9JHtxdWFsaXR5IHx8IDc1fWBcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFNraWxsczogUmVhY3QuRkMgPSAoKSA9PiB7XHJcbiAgY29uc3QgeyBjb2xvck1vZGUgfSA9IHVzZUNvbG9yTW9kZSgpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lciBtYXhXPVwiY29udGFpbmVyLmxnXCIgY2VudGVyQ29udGVudCBtdD17MTZ9IHB0PXsxNn0gaWQ9XCJza2lsbHNcIj5cclxuICAgICAgPFNlY3Rpb25IZWFkZXI+U2tpbGxzPC9TZWN0aW9uSGVhZGVyPlxyXG4gICAgICA8U2ltcGxlR3JpZCBjb2x1bW5zPXt7YmFzZTogMiwgc206IDMsIG1kOiA0LCBsZzogNH19IHNwYWNpbmc9ezEyfSB3PVwiMTAwJVwiIG10PXsyMH0+XHJcblxyXG4gICAgICAgIHsoZGF0YT8uc2tpbGxzID8/IFtdKS5tYXAoKHNraWxsLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgICAgPEJveFxyXG4gICAgICAgICAgICAgIGRhdGEtYW9zPVwiem9vbS1pbi11cFwiIFxyXG4gICAgICAgICAgICAgIGRhdGEtYW9zLWR1cmF0aW9uPVwiNTAwXCIgXHJcbiAgICAgICAgICAgICAgZGF0YS1hb3MtZGVsYXk9ezEwMCAqICgxKX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxTcXVhcmUgbXg9eydhdXRvJ30gc2l6ZT17e2Jhc2U6IElDT05fU0laRSAvIDEuNSwgbWQ6IElDT05fU0laRX19IGJnPXtjb2xvck1vZGUgPT09ICdsaWdodCcgPyAnJyA6ICd3aGl0ZSd9IGJvcmRlclJhZGl1cz17Y29sb3JNb2RlID09PSAnbGlnaHQnID8gJ25vbmUnIDonM3hsJ30+XHJcbiAgICAgICAgICAgICAgICB7LyogPEJveCBweD17SUNPTl9TSVpFfSB3PXtJQ09OX1NJWkV9PiAqL31cclxuICAgICAgICAgICAgICAgICAgPEltYWdlIGxheW91dD1cImZpbGxcIiB3PXt7YmFzZTogSUNPTl9TSVpFIC8gMS41LCBtZDogSUNPTl9TSVpFfX0gaD17e2Jhc2U6IElDT05fU0laRSAvIDEuNSwgc206IElDT05fU0laRX19IHA9ezJ9IHNyYz17c2tpbGwuaW1hZ2V9IGFsdD17c2tpbGwubmFtZX0vPlxyXG4gICAgICAgICAgICAgICAgey8qIDwvQm94PiAqL31cclxuICAgICAgICAgICAgICA8L1NxdWFyZT5cclxuICAgICAgICAgICAgICA8Q2VudGVyPlxyXG4gICAgICAgICAgICAgICAgPEhlYWRpbmcgZm9udFNpemU9ezE4fSBhbGlnbj17J2NlbnRlcid9IGZvbnRXZWlnaHQ9XCI2MDBcIiBweT17NX0gY29sb3I9e2NvbG9yTW9kZSA9PT0gJ2xpZ2h0JyA/IFwiZ3JheVwiIDogXCJsaWdodFwiIH0+XHJcbiAgICAgICAgICAgICAgICAgIHtza2lsbC5uYW1lfVxyXG4gICAgICAgICAgICAgICAgPC9IZWFkaW5nPlxyXG4gICAgICAgICAgICAgIDwvQ2VudGVyPlxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgIDwvPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L1NpbXBsZUdyaWQ+XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICApO1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9