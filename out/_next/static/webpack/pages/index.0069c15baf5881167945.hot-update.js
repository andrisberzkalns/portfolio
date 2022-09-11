webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/header/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/header/index.tsx ***!
  \*****************************************/
/*! exports provided: Header */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return Header; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/esm/index.js");
/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/icons */ "./node_modules/@chakra-ui/icons/dist/esm/index.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-use */ "./node_modules/react-use/esm/index.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-scroll */ "./node_modules/react-scroll/modules/index.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_5__);



var _jsxFileName = "C:\\Users\\berzk\\Documents\\Projects\\Portfolio-v2\\portfolio\\src\\components\\header\\index.tsx",
    _this = undefined,
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();






var Links = [// {label: 'Home', link: "home"}, 
// {label: 'About me', link: "about"},
{
  label: 'Skills',
  link: "skills"
}, {
  label: 'Experience',
  link: "experience"
}, {
  label: 'Projects',
  link: "projects"
}, // {label: 'Offers', link: "offers"}, 
{
  label: 'Contact',
  link: "contact"
}];

var NavLink = function NavLink(_ref) {
  _s();

  var children = _ref.children,
      link = _ref.link;

  var _useColorMode = Object(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["useColorMode"])(),
      colorMode = _useColorMode.colorMode;

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_scroll__WEBPACK_IMPORTED_MODULE_5__["Link"], {
    activeClass: "active",
    to: link,
    spy: true,
    smooth: true,
    offset: -70,
    duration: 500
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 5
  }, _this);
};

_s(NavLink, "2Uu86IH3do63pkN3s1ysdRMmJuc=", false, function () {
  return [_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["useColorMode"]];
});

_c = NavLink;
var Header = function Header() {
  _s2();

  var _useDisclosure = Object(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["useDisclosure"])(),
      isOpen = _useDisclosure.isOpen,
      onOpen = _useDisclosure.onOpen,
      onClose = _useDisclosure.onClose;

  var _useWindowScroll = Object(react_use__WEBPACK_IMPORTED_MODULE_4__["useWindowScroll"])(),
      y = _useWindowScroll.y;

  var _useWindowSize = Object(react_use__WEBPACK_IMPORTED_MODULE_4__["useWindowSize"])(),
      height = _useWindowSize.height; // const theme = useTheme()


  var _useColorMode2 = Object(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["useColorMode"])(),
      colorMode = _useColorMode2.colorMode,
      toggleColorMode = _useColorMode2.toggleColorMode;

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Box"], {
      bg: y >= height - 100 ? colorMode == 'light' ? "main.100" : "black" : "rgba(0,0,0,0)",
      px: 4,
      position: "fixed",
      w: "100%",
      zIndex: "100",
      style: {
        transition: "0.4s"
      },
      color: y >= height - 100 ? "white" : "white",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
        h: 16,
        alignItems: 'center',
        justifyContent: 'space-between',
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["IconButton"], {
          size: 'md',
          colorScheme: colorMode == 'light' ? "black" : "gray",
          icon: isOpen ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__["CloseIcon"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 28
          }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__["HamburgerIcon"], {
            w: '60%',
            h: '60%'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 44
          }, _this),
          "aria-label": 'Open Menu',
          display: {
            md: !isOpen ? 'none' : 'inherit'
          },
          onClick: isOpen ? onClose : onOpen
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["HStack"], {
          spacing: 8,
          alignItems: 'center',
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["HStack"], {
            as: 'nav',
            spacing: 4,
            display: {
              base: 'none',
              md: 'flex'
            },
            children: Links.map(function (link) {
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(NavLink, {
                link: link.link,
                children: link.label
              }, link.link, false, {
                fileName: _jsxFileName,
                lineNumber: 100,
                columnNumber: 17
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
          alignItems: 'center',
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Menu"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
              size: "md",
              height: "48px",
              width: "48px",
              bg: "none",
              "aria-label": "Switch to ".concat(colorMode == 'light' ? 'dark' : 'light', " mode"),
              _hover: {
                backgroundColor: 'rgba(256,256,256,0.2)'
              },
              onClick: toggleColorMode,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
                stroke: "currentColor",
                fill: "currentColor",
                strokeWidth: "0",
                viewBox: "0 0 512 512",
                "aria-hidden": "true",
                focusable: "false",
                height: "1em",
                width: "1em",
                xmlns: "http://www.w3.org/2000/svg",
                children: colorMode == 'light' ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                  d: "M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 117,
                  columnNumber: 23
                }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                  d: "M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181 0 49.9 49.9 49.9 131.1 0 181z"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 118,
                  columnNumber: 23
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 115,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 106,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 105,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 9
      }, _this), isOpen ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Box"], {
        pb: 4,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Stack"], {
          as: 'nav',
          spacing: 4,
          children: Links.map(function (link) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(NavLink, {
              link: link.link,
              children: link.label
            }, link.link, false, {
              fileName: _jsxFileName,
              lineNumber: 130,
              columnNumber: 17
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 11
      }, _this) : null]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 7
    }, _this)
  }, void 0, false);
};

_s2(Header, "xldwf+c+b9X/p2+rVn1F3hnAeFQ=", false, function () {
  return [_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["useDisclosure"], react_use__WEBPACK_IMPORTED_MODULE_4__["useWindowScroll"], react_use__WEBPACK_IMPORTED_MODULE_4__["useWindowSize"], _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["useColorMode"]];
});

_c2 = Header;

var _c, _c2;

$RefreshReg$(_c, "NavLink");
$RefreshReg$(_c2, "Header");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJMaW5rcyIsImxhYmVsIiwibGluayIsIk5hdkxpbmsiLCJjaGlsZHJlbiIsInVzZUNvbG9yTW9kZSIsImNvbG9yTW9kZSIsIkhlYWRlciIsInVzZURpc2Nsb3N1cmUiLCJpc09wZW4iLCJvbk9wZW4iLCJvbkNsb3NlIiwidXNlV2luZG93U2Nyb2xsIiwieSIsInVzZVdpbmRvd1NpemUiLCJoZWlnaHQiLCJ0b2dnbGVDb2xvck1vZGUiLCJ0cmFuc2l0aW9uIiwibWQiLCJiYXNlIiwibWFwIiwiYmFja2dyb3VuZENvbG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFZQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxLQUFLLEdBQUcsQ0FDWjtBQUNBO0FBQ0E7QUFBQ0MsT0FBSyxFQUFFLFFBQVI7QUFBa0JDLE1BQUksRUFBRTtBQUF4QixDQUhZLEVBSVo7QUFBQ0QsT0FBSyxFQUFFLFlBQVI7QUFBc0JDLE1BQUksRUFBRTtBQUE1QixDQUpZLEVBS1o7QUFBQ0QsT0FBSyxFQUFFLFVBQVI7QUFBb0JDLE1BQUksRUFBRTtBQUExQixDQUxZLEVBTVo7QUFDQTtBQUFDRCxPQUFLLEVBQUUsU0FBUjtBQUFtQkMsTUFBSSxFQUFFO0FBQXpCLENBUFksQ0FBZDs7QUFVQSxJQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxPQUErRDtBQUFBOztBQUFBLE1BQTVEQyxRQUE0RCxRQUE1REEsUUFBNEQ7QUFBQSxNQUFsREYsSUFBa0QsUUFBbERBLElBQWtEOztBQUFBLHNCQUN2REcscUVBQVksRUFEMkM7QUFBQSxNQUNyRUMsU0FEcUUsaUJBQ3JFQSxTQURxRTs7QUFHN0Usc0JBQ0UscUVBQUMsaURBQUQ7QUFDRSxlQUFXLEVBQUMsUUFEZDtBQUVFLE1BQUUsRUFBRUosSUFGTjtBQUdFLE9BQUcsRUFBRSxJQUhQO0FB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QUEsZ0NBQ1QscUVBQUMsT0FBRDtBQUF5QixrQkFBSSxFQUFFQSxJQUFJLENBQUNBLElBQXBDO0FBQUEsd0JBQTJDQSxJQUFJLENBQUNEO0FBQWhELGVBQWNDLElBQUksQ0FBQ0EsSUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFEUztBQUFBLFdBQVY7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURLLEdBUUgsSUEzRE47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsbUJBREY7QUFpRUQsQ0F4RU07O0lBQU1LLE07VUFDeUJDLDhELEVBQ3hCSSx5RCxFQUNLRSx1RCxFQUVzQlQsNkQ7OztNQUw1QkUsTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4wMDY5YzE1YmFmNTg4MTE2Nzk0NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFJlYWN0Tm9kZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge1xyXG4gIEJveCxcclxuICBCdXR0b24sXHJcbiAgRmxleCxcclxuICBIU3RhY2ssXHJcbiAgTGluayxcclxuICBJY29uQnV0dG9uLFxyXG4gIE1lbnUsXHJcbiAgU3RhY2ssXHJcbiAgdXNlRGlzY2xvc3VyZSxcclxuICB1c2VDb2xvck1vZGUsXHJcbn0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCc7XHJcbmltcG9ydCB7IEhhbWJ1cmdlckljb24sIENsb3NlSWNvbiB9IGZyb20gJ0BjaGFrcmEtdWkvaWNvbnMnO1xyXG5pbXBvcnQgeyB1c2VXaW5kb3dTY3JvbGwsIHVzZVdpbmRvd1NpemUgfSBmcm9tICdyZWFjdC11c2UnO1xyXG5pbXBvcnQgeyBMaW5rIGFzIFNjcm9sbExpbmsgfSBmcm9tIFwicmVhY3Qtc2Nyb2xsXCI7XHJcblxyXG5jb25zdCBMaW5rcyA9IFtcclxuICAvLyB7bGFiZWw6ICdIb21lJywgbGluazogXCJob21lXCJ9LCBcclxuICAvLyB7bGFiZWw6ICdBYm91dCBtZScsIGxpbms6IFwiYWJvdXRcIn0sXHJcbiAge2xhYmVsOiAnU2tpbGxzJywgbGluazogXCJza2lsbHNcIn0sIFxyXG4gIHtsYWJlbDogJ0V4cGVyaWVuY2UnLCBsaW5rOiBcImV4cGVyaWVuY2VcIn0sIFxyXG4gIHtsYWJlbDogJ1Byb2plY3RzJywgbGluazogXCJwcm9qZWN0c1wifSwgXHJcbiAgLy8ge2xhYmVsOiAnT2ZmZXJzJywgbGluazogXCJvZmZlcnNcIn0sIFxyXG4gIHtsYWJlbDogJ0NvbnRhY3QnLCBsaW5rOiBcImNvbnRhY3RcIn0sIFxyXG5dO1xyXG5cclxuY29uc3QgTmF2TGluayA9ICh7IGNoaWxkcmVuLCBsaW5rIH06IHsgY2hpbGRyZW46IFJlYWN0Tm9kZSwgbGluazogc3RyaW5nIH0pID0+IHtcclxuICBjb25zdCB7IGNvbG9yTW9kZSB9ID0gdXNlQ29sb3JNb2RlKCk7XHJcbiAgXHJcbiAgcmV0dXJuIChcclxuICAgIDxTY3JvbGxMaW5rXHJcbiAgICAgIGFjdGl2ZUNsYXNzPVwiYWN0aXZlXCJcclxuICAgICAgdG89e2xpbmt9XHJcbiAgICAgIHNweT17dHJ1ZX1cclxuICAgICAgc21vb3RoPXt0cnVlfVxyXG4gICAgICBvZmZzZXQ9ey03MH1cclxuICAgICAgZHVyYXRpb249ezUwMH1cclxuICAgID5cclxuICAgICAgey8qIDxMaW5rXHJcbiAgICAgICAgX2hvdmVyPXt7XHJcbiAgICAgICAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxyXG4gICAgICAgIH19XHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIHVzZXJTZWxlY3Q6IFwibm9uZVwiXHJcbiAgICAgICAgfX1cclxuICAgICAgICBocmVmPXtsaW5rfVxyXG4gICAgICA+XHJcbiAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgYmc9e1wibm9uZVwifVxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgZm9udFdlaWdodDogXCJub3JtYWxcIixcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICBfaG92ZXI9e3tcclxuICAgICAgICAgICAgY29sb3I6IChjb2xvck1vZGUgPT0gJ2xpZ2h0JyA/IFwiZ3JheS4zMDBcIiA6IFwiZ3JheS40MDBcIiksXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMjU2LDI1NiwyNTYsMC4yKScsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9MaW5rPiAqL31cclxuICAgIDwvU2Nyb2xsTGluaz5cclxuICApXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgSGVhZGVyOiBSZWFjdC5GQyA9ICgpID0+IHtcclxuICBjb25zdCB7IGlzT3Blbiwgb25PcGVuLCBvbkNsb3NlIH0gPSB1c2VEaXNjbG9zdXJlKCk7XHJcbiAgY29uc3Qge3l9ID0gdXNlV2luZG93U2Nyb2xsKCk7XHJcbiAgY29uc3Qge2hlaWdodH0gPSB1c2VXaW5kb3dTaXplKCk7XHJcbiAgLy8gY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpXHJcbiAgY29uc3QgeyBjb2xvck1vZGUsIHRvZ2dsZUNvbG9yTW9kZSB9ID0gdXNlQ29sb3JNb2RlKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8Qm94XHJcbiAgICAgICAgYmc9e3kgPj0gKGhlaWdodCAtIDEwMCkgPyAoY29sb3JNb2RlID09ICdsaWdodCcgPyBcIm1haW4uMTAwXCIgOiBcImJsYWNrXCIpIDogXCJyZ2JhKDAsMCwwLDApXCJ9XHJcbiAgICAgICAgcHg9ezR9XHJcbiAgICAgICAgcG9zaXRpb249XCJmaXhlZFwiXHJcbiAgICAgICAgdz1cIjEwMCVcIlxyXG4gICAgICAgIHpJbmRleD1cIjEwMFwiXHJcbiAgICAgICAgc3R5bGU9e3t0cmFuc2l0aW9uOiBcIjAuNHNcIn19XHJcbiAgICAgICAgY29sb3I9e3kgPj0gKGhlaWdodCAtIDEwMCkgPyBcIndoaXRlXCIgOiBcIndoaXRlXCJ9XHJcbiAgICAgID5cclxuICAgICAgICA8RmxleCBoPXsxNn0gYWxpZ25JdGVtcz17J2NlbnRlcid9IGp1c3RpZnlDb250ZW50PXsnc3BhY2UtYmV0d2Vlbid9PlxyXG4gICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgc2l6ZT17J21kJ31cclxuICAgICAgICAgICAgY29sb3JTY2hlbWU9e2NvbG9yTW9kZSA9PSAnbGlnaHQnID8gXCJibGFja1wiIDogXCJncmF5XCJ9XHJcbiAgICAgICAgICAgIGljb249e2lzT3BlbiA/IDxDbG9zZUljb24gLz4gOiA8SGFtYnVyZ2VySWNvbiB3PXsnNjAlJ30gaD17JzYwJSd9IC8+fVxyXG4gICAgICAgICAgICBhcmlhLWxhYmVsPXsnT3BlbiBNZW51J31cclxuICAgICAgICAgICAgZGlzcGxheT17eyBtZDogIWlzT3BlbiA/ICdub25lJyA6ICdpbmhlcml0JyB9fVxyXG4gICAgICAgICAgICBvbkNsaWNrPXtpc09wZW4gPyBvbkNsb3NlIDogb25PcGVufVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxIU3RhY2sgc3BhY2luZz17OH0gYWxpZ25JdGVtcz17J2NlbnRlcid9PlxyXG4gICAgICAgICAgICB7LyogPEJveD5BbmRyaXMgQsSTcnprYWxuczwvQm94PiAqL31cclxuICAgICAgICAgICAgPEhTdGFja1xyXG4gICAgICAgICAgICAgIGFzPXsnbmF2J31cclxuICAgICAgICAgICAgICBzcGFjaW5nPXs0fVxyXG4gICAgICAgICAgICAgIGRpc3BsYXk9e3sgYmFzZTogJ25vbmUnLCBtZDogJ2ZsZXgnIH19PlxyXG4gICAgICAgICAgICAgIHtMaW5rcy5tYXAoKGxpbmspID0+IChcclxuICAgICAgICAgICAgICAgIDxOYXZMaW5rIGtleT17bGluay5saW5rfSBsaW5rPXtsaW5rLmxpbmt9PntsaW5rLmxhYmVsfTwvTmF2TGluaz5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9IU3RhY2s+XHJcbiAgICAgICAgICA8L0hTdGFjaz5cclxuICAgICAgICAgIDxGbGV4IGFsaWduSXRlbXM9eydjZW50ZXInfT5cclxuICAgICAgICAgICAgPE1lbnU+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgc2l6ZT1cIm1kXCJcclxuICAgICAgICAgICAgICAgIGhlaWdodD1cIjQ4cHhcIlxyXG4gICAgICAgICAgICAgICAgd2lkdGg9XCI0OHB4XCJcclxuICAgICAgICAgICAgICAgIGJnPXtcIm5vbmVcIn1cclxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9e2BTd2l0Y2ggdG8gJHtjb2xvck1vZGUgPT0gJ2xpZ2h0JyA/ICdkYXJrJyA6ICdsaWdodCd9IG1vZGVgfVxyXG4gICAgICAgICAgICAgICAgX2hvdmVyPXt7YmFja2dyb3VuZENvbG9yOiAncmdiYSgyNTYsMjU2LDI1NiwwLjIpJ319XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVDb2xvck1vZGV9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPHN2ZyBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlV2lkdGg9XCIwXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgZm9jdXNhYmxlPVwiZmFsc2VcIiBoZWlnaHQ9XCIxZW1cIiB3aWR0aD1cIjFlbVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cclxuICAgICAgICAgICAgICAgICAge2NvbG9yTW9kZSA9PSAnbGlnaHQnXHJcbiAgICAgICAgICAgICAgICAgICAgPyA8cGF0aCBkPVwiTTI4My4yMTEgNTEyYzc4Ljk2MiAwIDE1MS4wNzktMzUuOTI1IDE5OC44NTctOTQuNzkyIDcuMDY4LTguNzA4LS42MzktMjEuNDMtMTEuNTYyLTE5LjM1LTEyNC4yMDMgMjMuNjU0LTIzOC4yNjItNzEuNTc2LTIzOC4yNjItMTk2Ljk1NCAwLTcyLjIyMiAzOC42NjItMTM4LjYzNSAxMDEuNDk4LTE3NC4zOTQgOS42ODYtNS41MTIgNy4yNS0yMC4xOTctMy43NTYtMjIuMjNBMjU4LjE1NiAyNTguMTU2IDAgMCAwIDI4My4yMTEgMGMtMTQxLjMwOSAwLTI1NiAxMTQuNTExLTI1NiAyNTYgMCAxNDEuMzA5IDExNC41MTEgMjU2IDI1NiAyNTZ6XCI+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgIDogPHBhdGggZD1cIk0yNTYgMTYwYy01Mi45IDAtOTYgNDMuMS05NiA5NnM0My4xIDk2IDk2IDk2IDk2LTQzLjEgOTYtOTYtNDMuMS05Ni05Ni05NnptMjQ2LjQgODAuNWwtOTQuNy00Ny4zIDMzLjUtMTAwLjRjNC41LTEzLjYtOC40LTI2LjUtMjEuOS0yMS45bC0xMDAuNCAzMy41LTQ3LjQtOTQuOGMtNi40LTEyLjgtMjQuNi0xMi44LTMxIDBsLTQ3LjMgOTQuN0w5Mi43IDcwLjhjLTEzLjYtNC41LTI2LjUgOC40LTIxLjkgMjEuOWwzMy41IDEwMC40LTk0LjcgNDcuNGMtMTIuOCA2LjQtMTIuOCAyNC42IDAgMzFsOTQuNyA0Ny4zLTMzLjUgMTAwLjVjLTQuNSAxMy42IDguNCAyNi41IDIxLjkgMjEuOWwxMDAuNC0zMy41IDQ3LjMgOTQuN2M2LjQgMTIuOCAyNC42IDEyLjggMzEgMGw0Ny4zLTk0LjcgMTAwLjQgMzMuNWMxMy42IDQuNSAyNi41LTguNCAyMS45LTIxLjlsLTMzLjUtMTAwLjQgOTQuNy00Ny4zYzEzLTYuNSAxMy0yNC43LjItMzEuMXptLTE1NS45IDEwNmMtNDkuOSA0OS45LTEzMS4xIDQ5LjktMTgxIDAtNDkuOS00OS45LTQ5LjktMTMxLjEgMC0xODEgNDkuOS00OS45IDEzMS4xLTQ5LjkgMTgxIDAgNDkuOSA0OS45IDQ5LjkgMTMxLjEgMCAxODF6XCI+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9NZW51PlxyXG4gICAgICAgICAgPC9GbGV4PlxyXG4gICAgICAgIDwvRmxleD5cclxuXHJcbiAgICAgICAge2lzT3BlbiA/IChcclxuICAgICAgICAgIDxCb3ggcGI9ezR9PlxyXG4gICAgICAgICAgICA8U3RhY2sgYXM9eyduYXYnfSBzcGFjaW5nPXs0fT5cclxuICAgICAgICAgICAgICB7TGlua3MubWFwKChsaW5rKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8TmF2TGluayBrZXk9e2xpbmsubGlua30gbGluaz17bGluay5saW5rfT57bGluay5sYWJlbH08L05hdkxpbms+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvU3RhY2s+XHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICApIDogbnVsbH1cclxuICAgICAgPC9Cb3g+XHJcbiAgICA8Lz5cclxuICApO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==