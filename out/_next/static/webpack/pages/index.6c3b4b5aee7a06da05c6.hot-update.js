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
    duration: 500,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      bg: "none",
      style: {
        fontWeight: "normal"
      },
      _hover: {
        color: colorMode == 'light' ? "gray.300" : "gray.400",
        backgroundColor: 'rgba(256,256,256,0.2)'
      },
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }, _this)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJMaW5rcyIsImxhYmVsIiwibGluayIsIk5hdkxpbmsiLCJjaGlsZHJlbiIsInVzZUNvbG9yTW9kZSIsImNvbG9yTW9kZSIsImZvbnRXZWlnaHQiLCJjb2xvciIsImJhY2tncm91bmRDb2xvciIsIkhlYWRlciIsInVzZURpc2Nsb3N1cmUiLCJpc09wZW4iLCJvbk9wZW4iLCJvbkNsb3NlIiwidXNlV2luZG93U2Nyb2xsIiwieSIsInVzZVdpbmRvd1NpemUiLCJoZWlnaHQiLCJ0b2dnbGVDb2xvck1vZGUiLCJ0cmFuc2l0aW9uIiwibWQiLCJiYXNlIiwibWFwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFZQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxLQUFLLEdBQUcsQ0FDWjtBQUNBO0FBQ0E7QUFBQ0MsT0FBSyxFQUFFLFFBQVI7QUFBa0JDLE1BQUksRUFBRTtBQUF4QixDQUhZLEVBSVo7QUFBQ0QsT0FBSyxFQUFFLFlBQVI7QUFBc0JDLE1BQUksRUFBRTtBQUE1QixDQUpZLEVBS1o7QUFBQ0QsT0FBSyxFQUFFLFVBQVI7QUFBb0JDLE1BQUksRUFBRTtBQUExQixDQUxZLEVBTVo7QUFDQTtBQUFDRCxPQUFLLEVBQUUsU0FBUjtBQUFtQkMsTUFBSSxFQUFFO0FBQXpCLENBUFksQ0FBZDs7QUFVQSxJQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxPQUErRDtBQUFBOztBQUFBLE1BQTVEQyxRQUE0RCxRQUE1REEsUUFBNEQ7QUFBQSxNQUFsREYsSUFBa0QsUUFBbERBLElBQWtEOztBQUFBLHNCQUN2REcscUVBQVksRUFEMkM7QUFBQSxNQUNyRUMsU0FEcUUsaUJBQ3JFQSxTQURxRTs7QUFHN0Usc0JBQ0UscUVBQUMsaURBQUQ7QUFDRSxlQUFXLEVBQUMsUUFEZDtBQUVFLE1BQUUsRUFBRUosSUFGTjtB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RjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFwQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBVEYsRUFtREdNLE1BQU0sZ0JBQ0wscUVBQUMsb0RBQUQ7QUFBSyxVQUFFLEVBQUUsQ0FBVDtBQUFBLCtCQUNFLHFFQUFDLHNEQUFEO0FBQU8sWUFBRSxFQUFFLEtBQVg7QUFBa0IsaUJBQU8sRUFBRSxDQUEzQjtBQUFBLG9CQUNHWixLQUFLLENBQUN1QixHQUFOLENBQVUsVUFBQ3JCLElBQUQ7QUFBQSxnQ0FDVCxxRUFBQyxPQUFEO0FBQXlCLGtCQUFJLEVBQUVBLElBQUksQ0FBQ0EsSUFBcEM7QUFBQSx3QkFBMkNBLElBQUksQ0FBQ0Q7QUFBaEQsZUFBY0MsSUFBSSxDQUFDQSxJQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURTO0FBQUEsV0FBVjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREssR0FRSCxJQTNETjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixtQkFERjtBQWlFRCxDQXhFTTs7SUFBTVEsTTtVQUN5QkMsOEQsRUFDeEJJLHlELEVBQ0tFLHVELEVBRXNCWiw2RDs7O01BTDVCSyxNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjZjM2I0YjVhZWU3YTA2ZGEwNWM2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUmVhY3ROb2RlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7XHJcbiAgQm94LFxyXG4gIEJ1dHRvbixcclxuICBGbGV4LFxyXG4gIEhTdGFjayxcclxuICBMaW5rLFxyXG4gIEljb25CdXR0b24sXHJcbiAgTWVudSxcclxuICBTdGFjayxcclxuICB1c2VEaXNjbG9zdXJlLFxyXG4gIHVzZUNvbG9yTW9kZSxcclxufSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcclxuaW1wb3J0IHsgSGFtYnVyZ2VySWNvbiwgQ2xvc2VJY29uIH0gZnJvbSAnQGNoYWtyYS11aS9pY29ucyc7XHJcbmltcG9ydCB7IHVzZVdpbmRvd1Njcm9sbCwgdXNlV2luZG93U2l6ZSB9IGZyb20gJ3JlYWN0LXVzZSc7XHJcbmltcG9ydCB7IExpbmsgYXMgU2Nyb2xsTGluayB9IGZyb20gXCJyZWFjdC1zY3JvbGxcIjtcclxuXHJcbmNvbnN0IExpbmtzID0gW1xyXG4gIC8vIHtsYWJlbDogJ0hvbWUnLCBsaW5rOiBcImhvbWVcIn0sIFxyXG4gIC8vIHtsYWJlbDogJ0Fib3V0IG1lJywgbGluazogXCJhYm91dFwifSxcclxuICB7bGFiZWw6ICdTa2lsbHMnLCBsaW5rOiBcInNraWxsc1wifSwgXHJcbiAge2xhYmVsOiAnRXhwZXJpZW5jZScsIGxpbms6IFwiZXhwZXJpZW5jZVwifSwgXHJcbiAge2xhYmVsOiAnUHJvamVjdHMnLCBsaW5rOiBcInByb2plY3RzXCJ9LCBcclxuICAvLyB7bGFiZWw6ICdPZmZlcnMnLCBsaW5rOiBcIm9mZmVyc1wifSwgXHJcbiAge2xhYmVsOiAnQ29udGFjdCcsIGxpbms6IFwiY29udGFjdFwifSwgXHJcbl07XHJcblxyXG5jb25zdCBOYXZMaW5rID0gKHsgY2hpbGRyZW4sIGxpbmsgfTogeyBjaGlsZHJlbjogUmVhY3ROb2RlLCBsaW5rOiBzdHJpbmcgfSkgPT4ge1xyXG4gIGNvbnN0IHsgY29sb3JNb2RlIH0gPSB1c2VDb2xvck1vZGUoKTtcclxuICBcclxuICByZXR1cm4gKFxyXG4gICAgPFNjcm9sbExpbmtcclxuICAgICAgYWN0aXZlQ2xhc3M9XCJhY3RpdmVcIlxyXG4gICAgICB0bz17bGlua31cclxuICAgICAgc3B5PXt0cnVlfVxyXG4gICAgICBzbW9vdGg9e3RydWV9XHJcbiAgICAgIG9mZnNldD17LTcwfVxyXG4gICAgICBkdXJhdGlvbj17NTAwfVxyXG4gICAgPlxyXG4gICAgICB7LyogPExpbmtcclxuICAgICAgICBfaG92ZXI9e3tcclxuICAgICAgICAgIHRleHREZWNvcmF0aW9uOiAnbm9uZScsXHJcbiAgICAgICAgfX1cclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgdXNlclNlbGVjdDogXCJub25lXCJcclxuICAgICAgICB9fVxyXG4gICAgICAgIGhyZWY9e2xpbmt9XHJcbiAgICAgID4gKi99XHJcbiAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgYmc9e1wibm9uZVwifVxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgZm9udFdlaWdodDogXCJub3JtYWxcIixcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICBfaG92ZXI9e3tcclxuICAgICAgICAgICAgY29sb3I6IChjb2xvck1vZGUgPT0gJ2xpZ2h0JyA/IFwiZ3JheS4zMDBcIiA6IFwiZ3JheS40MDBcIiksXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMjU2LDI1NiwyNTYsMC4yKScsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgey8qIDwvTGluaz4gKi99XHJcbiAgICA8L1Njcm9sbExpbms+XHJcbiAgKVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IEhlYWRlcjogUmVhY3QuRkMgPSAoKSA9PiB7XHJcbiAgY29uc3QgeyBpc09wZW4sIG9uT3Blbiwgb25DbG9zZSB9ID0gdXNlRGlzY2xvc3VyZSgpO1xyXG4gIGNvbnN0IHt5fSA9IHVzZVdpbmRvd1Njcm9sbCgpO1xyXG4gIGNvbnN0IHtoZWlnaHR9ID0gdXNlV2luZG93U2l6ZSgpO1xyXG4gIC8vIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKVxyXG4gIGNvbnN0IHsgY29sb3JNb2RlLCB0b2dnbGVDb2xvck1vZGUgfSA9IHVzZUNvbG9yTW9kZSgpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEJveFxyXG4gICAgICAgIGJnPXt5ID49IChoZWlnaHQgLSAxMDApID8gKGNvbG9yTW9kZSA9PSAnbGlnaHQnID8gXCJtYWluLjEwMFwiIDogXCJibGFja1wiKSA6IFwicmdiYSgwLDAsMCwwKVwifVxyXG4gICAgICAgIHB4PXs0fVxyXG4gICAgICAgIHBvc2l0aW9uPVwiZml4ZWRcIlxyXG4gICAgICAgIHc9XCIxMDAlXCJcclxuICAgICAgICB6SW5kZXg9XCIxMDBcIlxyXG4gICAgICAgIHN0eWxlPXt7dHJhbnNpdGlvbjogXCIwLjRzXCJ9fVxyXG4gICAgICAgIGNvbG9yPXt5ID49IChoZWlnaHQgLSAxMDApID8gXCJ3aGl0ZVwiIDogXCJ3aGl0ZVwifVxyXG4gICAgICA+XHJcbiAgICAgICAgPEZsZXggaD17MTZ9IGFsaWduSXRlbXM9eydjZW50ZXInfSBqdXN0aWZ5Q29udGVudD17J3NwYWNlLWJldHdlZW4nfT5cclxuICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgIHNpemU9eydtZCd9XHJcbiAgICAgICAgICAgIGNvbG9yU2NoZW1lPXtjb2xvck1vZGUgPT0gJ2xpZ2h0JyA/IFwiYmxhY2tcIiA6IFwiZ3JheVwifVxyXG4gICAgICAgICAgICBpY29uPXtpc09wZW4gPyA8Q2xvc2VJY29uIC8+IDogPEhhbWJ1cmdlckljb24gdz17JzYwJSd9IGg9eyc2MCUnfSAvPn1cclxuICAgICAgICAgICAgYXJpYS1sYWJlbD17J09wZW4gTWVudSd9XHJcbiAgICAgICAgICAgIGRpc3BsYXk9e3sgbWQ6ICFpc09wZW4gPyAnbm9uZScgOiAnaW5oZXJpdCcgfX1cclxuICAgICAgICAgICAgb25DbGljaz17aXNPcGVuID8gb25DbG9zZSA6IG9uT3Blbn1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8SFN0YWNrIHNwYWNpbmc9ezh9IGFsaWduSXRlbXM9eydjZW50ZXInfT5cclxuICAgICAgICAgICAgey8qIDxCb3g+QW5kcmlzIELEk3J6a2FsbnM8L0JveD4gKi99XHJcbiAgICAgICAgICAgIDxIU3RhY2tcclxuICAgICAgICAgICAgICBhcz17J25hdid9XHJcbiAgICAgICAgICAgICAgc3BhY2luZz17NH1cclxuICAgICAgICAgICAgICBkaXNwbGF5PXt7IGJhc2U6ICdub25lJywgbWQ6ICdmbGV4JyB9fT5cclxuICAgICAgICAgICAgICB7TGlua3MubWFwKChsaW5rKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8TmF2TGluayBrZXk9e2xpbmsubGlua30gbGluaz17bGluay5saW5rfT57bGluay5sYWJlbH08L05hdkxpbms+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvSFN0YWNrPlxyXG4gICAgICAgICAgPC9IU3RhY2s+XHJcbiAgICAgICAgICA8RmxleCBhbGlnbkl0ZW1zPXsnY2VudGVyJ30+XHJcbiAgICAgICAgICAgIDxNZW51PlxyXG4gICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgIHNpemU9XCJtZFwiXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9XCI0OHB4XCJcclxuICAgICAgICAgICAgICAgIHdpZHRoPVwiNDhweFwiXHJcbiAgICAgICAgICAgICAgICBiZz17XCJub25lXCJ9XHJcbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPXtgU3dpdGNoIHRvICR7Y29sb3JNb2RlID09ICdsaWdodCcgPyAnZGFyaycgOiAnbGlnaHQnfSBtb2RlYH1cclxuICAgICAgICAgICAgICAgIF9ob3Zlcj17e2JhY2tncm91bmRDb2xvcjogJ3JnYmEoMjU2LDI1NiwyNTYsMC4yKSd9fVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17dG9nZ2xlQ29sb3JNb2RlfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxzdmcgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIHN0cm9rZVdpZHRoPVwiMFwiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGZvY3VzYWJsZT1cImZhbHNlXCIgaGVpZ2h0PVwiMWVtXCIgd2lkdGg9XCIxZW1cIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XHJcbiAgICAgICAgICAgICAgICAgIHtjb2xvck1vZGUgPT0gJ2xpZ2h0J1xyXG4gICAgICAgICAgICAgICAgICAgID8gPHBhdGggZD1cIk0yODMuMjExIDUxMmM3OC45NjIgMCAxNTEuMDc5LTM1LjkyNSAxOTguODU3LTk0Ljc5MiA3LjA2OC04LjcwOC0uNjM5LTIxLjQzLTExLjU2Mi0xOS4zNS0xMjQuMjAzIDIzLjY1NC0yMzguMjYyLTcxLjU3Ni0yMzguMjYyLTE5Ni45NTQgMC03Mi4yMjIgMzguNjYyLTEzOC42MzUgMTAxLjQ5OC0xNzQuMzk0IDkuNjg2LTUuNTEyIDcuMjUtMjAuMTk3LTMuNzU2LTIyLjIzQTI1OC4xNTYgMjU4LjE1NiAwIDAgMCAyODMuMjExIDBjLTE0MS4zMDkgMC0yNTYgMTE0LjUxMS0yNTYgMjU2IDAgMTQxLjMwOSAxMTQuNTExIDI1NiAyNTYgMjU2elwiPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICA6IDxwYXRoIGQ9XCJNMjU2IDE2MGMtNTIuOSAwLTk2IDQzLjEtOTYgOTZzNDMuMSA5NiA5NiA5NiA5Ni00My4xIDk2LTk2LTQzLjEtOTYtOTYtOTZ6bTI0Ni40IDgwLjVsLTk0LjctNDcuMyAzMy41LTEwMC40YzQuNS0xMy42LTguNC0yNi41LTIxLjktMjEuOWwtMTAwLjQgMzMuNS00Ny40LTk0LjhjLTYuNC0xMi44LTI0LjYtMTIuOC0zMSAwbC00Ny4zIDk0LjdMOTIuNyA3MC44Yy0xMy42LTQuNS0yNi41IDguNC0yMS45IDIxLjlsMzMuNSAxMDAuNC05NC43IDQ3LjRjLTEyLjggNi40LTEyLjggMjQuNiAwIDMxbDk0LjcgNDcuMy0zMy41IDEwMC41Yy00LjUgMTMuNiA4LjQgMjYuNSAyMS45IDIxLjlsMTAwLjQtMzMuNSA0Ny4zIDk0LjdjNi40IDEyLjggMjQuNiAxMi44IDMxIDBsNDcuMy05NC43IDEwMC40IDMzLjVjMTMuNiA0LjUgMjYuNS04LjQgMjEuOS0yMS45bC0zMy41LTEwMC40IDk0LjctNDcuM2MxMy02LjUgMTMtMjQuNy4yLTMxLjF6bS0xNTUuOSAxMDZjLTQ5LjkgNDkuOS0xMzEuMSA0OS45LTE4MSAwLTQ5LjktNDkuOS00OS45LTEzMS4xIDAtMTgxIDQ5LjktNDkuOSAxMzEuMS00OS45IDE4MSAwIDQ5LjkgNDkuOSA0OS45IDEzMS4xIDAgMTgxelwiPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvTWVudT5cclxuICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICA8L0ZsZXg+XHJcblxyXG4gICAgICAgIHtpc09wZW4gPyAoXHJcbiAgICAgICAgICA8Qm94IHBiPXs0fT5cclxuICAgICAgICAgICAgPFN0YWNrIGFzPXsnbmF2J30gc3BhY2luZz17NH0+XHJcbiAgICAgICAgICAgICAge0xpbmtzLm1hcCgobGluaykgPT4gKFxyXG4gICAgICAgICAgICAgICAgPE5hdkxpbmsga2V5PXtsaW5rLmxpbmt9IGxpbms9e2xpbmsubGlua30+e2xpbmsubGFiZWx9PC9OYXZMaW5rPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L1N0YWNrPlxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgIDwvQm94PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=