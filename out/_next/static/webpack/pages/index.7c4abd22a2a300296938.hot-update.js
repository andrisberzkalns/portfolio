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
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Link"], {
      _hover: {
        textDecoration: 'none'
      },
      style: {
        userSelect: "none"
      },
      href: link,
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
      lineNumber: 40,
      columnNumber: 7
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJMaW5rcyIsImxhYmVsIiwibGluayIsIk5hdkxpbmsiLCJjaGlsZHJlbiIsInVzZUNvbG9yTW9kZSIsImNvbG9yTW9kZSIsInRleHREZWNvcmF0aW9uIiwidXNlclNlbGVjdCIsImZvbnRXZWlnaHQiLCJjb2xvciIsImJhY2tncm91bmRDb2xvciIsIkhlYWRlciIsInVzZURpc2Nsb3N1cmUiLCJpc09wZW4iLCJvbk9wZW4iLCJvbkNsb3NlIiwidXNlV2luZG93U2Nyb2xsIiwieSIsInVzZVdpbmRvd1NpemUiLCJoZWlnaHQiLCJ0b2dnbGVDb2xvck1vZGUiLCJ0cmFuc2l0aW9uIiwibWQiLCJiYXNlIiwibWFwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFZQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxLQUFLLEdBQUcsQ0FDWjtBQUNBO0FBQ0E7QUFBQ0MsT0FBSyxFQUFFLFFBQVI7QUFBa0JDLE1BQUksRUFBRTtBQUF4QixDQUhZLEVBSVo7QUFBQ0QsT0FBSyxFQUFFLFlBQVI7QUFBc0JDLE1BQUksRUFBRTtBQUE1QixDQUpZLEVBS1o7QUFBQ0QsT0FBSyxFQUFFLFVBQVI7QUFBb0JDLE1BQUksRUFBRTtBQUExQixDQUxZLEVBTVo7QUFDQTtBQUFDRCxPQUFLLEVBQUUsU0FBUjtBQUFtQkMsTUFBSSxFQUFFO0FBQXpCLENBUFksQ0FBZDs7QUFVQSxJQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxPQUErRDtBQUFBOztBQUFBLE1BQTVEQyxRQUE0RCxRQUE1REEsUUFBNEQ7QUFBQSxNQUFsREYsSUFBa0QsUUFBbERBLElBQWtEOztBQUFBLHNCQUN2REcscUVBQVksRUFEMkM7QUFBQSxNQUNyRUMsU0FEcUUsaUJBQ3JFQSxTQURxRTs7QUFHN0Usc0JBQ0UscUVBQUMsaURBQUQ7QUFDRSxlQUFXLEVB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SjtBQUFBLDBCQUNHZixTQUFTLElBQUksT0FBYixnQkFDRztBQUFNLG1CQUFDLEVBQUM7QUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURILGdCQUVHO0FBQU0sbUJBQUMsRUFBQztBQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFITjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXBCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFURixFQW1ER1EsTUFBTSxnQkFDTCxxRUFBQyxvREFBRDtBQUFLLFVBQUUsRUFBRSxDQUFUO0FBQUEsK0JBQ0UscUVBQUMsc0RBQUQ7QUFBTyxZQUFFLEVBQUUsS0FBWDtBQUFrQixpQkFBTyxFQUFFLENBQTNCO0FBQUEsb0JBQ0dkLEtBQUssQ0FBQ3lCLEdBQU4sQ0FBVSxVQUFDdkIsSUFBRDtBQUFBLGdDQUNULHFFQUFDLE9BQUQ7QUFBeUIsa0JBQUksRUFBRUEsSUFBSSxDQUFDQSxJQUFwQztBQUFBLHdCQUEyQ0EsSUFBSSxDQUFDRDtBQUFoRCxlQUFjQyxJQUFJLENBQUNBLElBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRFM7QUFBQSxXQUFWO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESyxHQVFILElBM0ROO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLG1CQURGO0FBaUVELENBeEVNOztJQUFNVSxNO1VBQ3lCQyw4RCxFQUN4QkkseUQsRUFDS0UsdUQsRUFFc0JkLDZEOzs7TUFMNUJPLE0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguN2M0YWJkMjJhMmEzMDAyOTY5MzguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBSZWFjdE5vZGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtcclxuICBCb3gsXHJcbiAgQnV0dG9uLFxyXG4gIEZsZXgsXHJcbiAgSFN0YWNrLFxyXG4gIExpbmssXHJcbiAgSWNvbkJ1dHRvbixcclxuICBNZW51LFxyXG4gIFN0YWNrLFxyXG4gIHVzZURpc2Nsb3N1cmUsXHJcbiAgdXNlQ29sb3JNb2RlLFxyXG59IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xyXG5pbXBvcnQgeyBIYW1idXJnZXJJY29uLCBDbG9zZUljb24gfSBmcm9tICdAY2hha3JhLXVpL2ljb25zJztcclxuaW1wb3J0IHsgdXNlV2luZG93U2Nyb2xsLCB1c2VXaW5kb3dTaXplIH0gZnJvbSAncmVhY3QtdXNlJztcclxuaW1wb3J0IHsgTGluayBhcyBTY3JvbGxMaW5rIH0gZnJvbSBcInJlYWN0LXNjcm9sbFwiO1xyXG5cclxuY29uc3QgTGlua3MgPSBbXHJcbiAgLy8ge2xhYmVsOiAnSG9tZScsIGxpbms6IFwiaG9tZVwifSwgXHJcbiAgLy8ge2xhYmVsOiAnQWJvdXQgbWUnLCBsaW5rOiBcImFib3V0XCJ9LFxyXG4gIHtsYWJlbDogJ1NraWxscycsIGxpbms6IFwic2tpbGxzXCJ9LCBcclxuICB7bGFiZWw6ICdFeHBlcmllbmNlJywgbGluazogXCJleHBlcmllbmNlXCJ9LCBcclxuICB7bGFiZWw6ICdQcm9qZWN0cycsIGxpbms6IFwicHJvamVjdHNcIn0sIFxyXG4gIC8vIHtsYWJlbDogJ09mZmVycycsIGxpbms6IFwib2ZmZXJzXCJ9LCBcclxuICB7bGFiZWw6ICdDb250YWN0JywgbGluazogXCJjb250YWN0XCJ9LCBcclxuXTtcclxuXHJcbmNvbnN0IE5hdkxpbmsgPSAoeyBjaGlsZHJlbiwgbGluayB9OiB7IGNoaWxkcmVuOiBSZWFjdE5vZGUsIGxpbms6IHN0cmluZyB9KSA9PiB7XHJcbiAgY29uc3QgeyBjb2xvck1vZGUgfSA9IHVzZUNvbG9yTW9kZSgpO1xyXG4gIFxyXG4gIHJldHVybiAoXHJcbiAgICA8U2Nyb2xsTGlua1xyXG4gICAgICBhY3RpdmVDbGFzcz1cImFjdGl2ZVwiXHJcbiAgICAgIHRvPXtsaW5rfVxyXG4gICAgICBzcHk9e3RydWV9XHJcbiAgICAgIHNtb290aD17dHJ1ZX1cclxuICAgICAgb2Zmc2V0PXstNzB9XHJcbiAgICAgIGR1cmF0aW9uPXs1MDB9XHJcbiAgICA+XHJcbiAgICAgIDxMaW5rXHJcbiAgICAgICAgX2hvdmVyPXt7XHJcbiAgICAgICAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxyXG4gICAgICAgIH19XHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIHVzZXJTZWxlY3Q6IFwibm9uZVwiXHJcbiAgICAgICAgfX1cclxuICAgICAgICBocmVmPXtsaW5rfVxyXG4gICAgICA+XHJcbiAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgYmc9e1wibm9uZVwifVxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgZm9udFdlaWdodDogXCJub3JtYWxcIixcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICBfaG92ZXI9e3tcclxuICAgICAgICAgICAgY29sb3I6IChjb2xvck1vZGUgPT0gJ2xpZ2h0JyA/IFwiZ3JheS4zMDBcIiA6IFwiZ3JheS40MDBcIiksXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMjU2LDI1NiwyNTYsMC4yKScsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgPC9TY3JvbGxMaW5rPlxyXG4gIClcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBIZWFkZXI6IFJlYWN0LkZDID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgaXNPcGVuLCBvbk9wZW4sIG9uQ2xvc2UgfSA9IHVzZURpc2Nsb3N1cmUoKTtcclxuICBjb25zdCB7eX0gPSB1c2VXaW5kb3dTY3JvbGwoKTtcclxuICBjb25zdCB7aGVpZ2h0fSA9IHVzZVdpbmRvd1NpemUoKTtcclxuICAvLyBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKClcclxuICBjb25zdCB7IGNvbG9yTW9kZSwgdG9nZ2xlQ29sb3JNb2RlIH0gPSB1c2VDb2xvck1vZGUoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxCb3hcclxuICAgICAgICBiZz17eSA+PSAoaGVpZ2h0IC0gMTAwKSA/IChjb2xvck1vZGUgPT0gJ2xpZ2h0JyA/IFwibWFpbi4xMDBcIiA6IFwiYmxhY2tcIikgOiBcInJnYmEoMCwwLDAsMClcIn1cclxuICAgICAgICBweD17NH1cclxuICAgICAgICBwb3NpdGlvbj1cImZpeGVkXCJcclxuICAgICAgICB3PVwiMTAwJVwiXHJcbiAgICAgICAgekluZGV4PVwiMTAwXCJcclxuICAgICAgICBzdHlsZT17e3RyYW5zaXRpb246IFwiMC40c1wifX1cclxuICAgICAgICBjb2xvcj17eSA+PSAoaGVpZ2h0IC0gMTAwKSA/IFwid2hpdGVcIiA6IFwid2hpdGVcIn1cclxuICAgICAgPlxyXG4gICAgICAgIDxGbGV4IGg9ezE2fSBhbGlnbkl0ZW1zPXsnY2VudGVyJ30ganVzdGlmeUNvbnRlbnQ9eydzcGFjZS1iZXR3ZWVuJ30+XHJcbiAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICBzaXplPXsnbWQnfVxyXG4gICAgICAgICAgICBjb2xvclNjaGVtZT17Y29sb3JNb2RlID09ICdsaWdodCcgPyBcImJsYWNrXCIgOiBcImdyYXlcIn1cclxuICAgICAgICAgICAgaWNvbj17aXNPcGVuID8gPENsb3NlSWNvbiAvPiA6IDxIYW1idXJnZXJJY29uIHc9eyc2MCUnfSBoPXsnNjAlJ30gLz59XHJcbiAgICAgICAgICAgIGFyaWEtbGFiZWw9eydPcGVuIE1lbnUnfVxyXG4gICAgICAgICAgICBkaXNwbGF5PXt7IG1kOiAhaXNPcGVuID8gJ25vbmUnIDogJ2luaGVyaXQnIH19XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2lzT3BlbiA/IG9uQ2xvc2UgOiBvbk9wZW59XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPEhTdGFjayBzcGFjaW5nPXs4fSBhbGlnbkl0ZW1zPXsnY2VudGVyJ30+XHJcbiAgICAgICAgICAgIHsvKiA8Qm94PkFuZHJpcyBCxJNyemthbG5zPC9Cb3g+ICovfVxyXG4gICAgICAgICAgICA8SFN0YWNrXHJcbiAgICAgICAgICAgICAgYXM9eyduYXYnfVxyXG4gICAgICAgICAgICAgIHNwYWNpbmc9ezR9XHJcbiAgICAgICAgICAgICAgZGlzcGxheT17eyBiYXNlOiAnbm9uZScsIG1kOiAnZmxleCcgfX0+XHJcbiAgICAgICAgICAgICAge0xpbmtzLm1hcCgobGluaykgPT4gKFxyXG4gICAgICAgICAgICAgICAgPE5hdkxpbmsga2V5PXtsaW5rLmxpbmt9IGxpbms9e2xpbmsubGlua30+e2xpbmsubGFiZWx9PC9OYXZMaW5rPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L0hTdGFjaz5cclxuICAgICAgICAgIDwvSFN0YWNrPlxyXG4gICAgICAgICAgPEZsZXggYWxpZ25JdGVtcz17J2NlbnRlcid9PlxyXG4gICAgICAgICAgICA8TWVudT5cclxuICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICBzaXplPVwibWRcIlxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0PVwiNDhweFwiXHJcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjQ4cHhcIlxyXG4gICAgICAgICAgICAgICAgYmc9e1wibm9uZVwifVxyXG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbD17YFN3aXRjaCB0byAke2NvbG9yTW9kZSA9PSAnbGlnaHQnID8gJ2RhcmsnIDogJ2xpZ2h0J30gbW9kZWB9XHJcbiAgICAgICAgICAgICAgICBfaG92ZXI9e3tiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDI1NiwyNTYsMjU2LDAuMiknfX1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZUNvbG9yTW9kZX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8c3ZnIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBzdHJva2VXaWR0aD1cIjBcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIiBhcmlhLWhpZGRlbj1cInRydWVcIiBmb2N1c2FibGU9XCJmYWxzZVwiIGhlaWdodD1cIjFlbVwiIHdpZHRoPVwiMWVtXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxyXG4gICAgICAgICAgICAgICAgICB7Y29sb3JNb2RlID09ICdsaWdodCdcclxuICAgICAgICAgICAgICAgICAgICA/IDxwYXRoIGQ9XCJNMjgzLjIxMSA1MTJjNzguOTYyIDAgMTUxLjA3OS0zNS45MjUgMTk4Ljg1Ny05NC43OTIgNy4wNjgtOC43MDgtLjYzOS0yMS40My0xMS41NjItMTkuMzUtMTI0LjIwMyAyMy42NTQtMjM4LjI2Mi03MS41NzYtMjM4LjI2Mi0xOTYuOTU0IDAtNzIuMjIyIDM4LjY2Mi0xMzguNjM1IDEwMS40OTgtMTc0LjM5NCA5LjY4Ni01LjUxMiA3LjI1LTIwLjE5Ny0zLjc1Ni0yMi4yM0EyNTguMTU2IDI1OC4xNTYgMCAwIDAgMjgzLjIxMSAwYy0xNDEuMzA5IDAtMjU2IDExNC41MTEtMjU2IDI1NiAwIDE0MS4zMDkgMTE0LjUxMSAyNTYgMjU2IDI1NnpcIj48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgOiA8cGF0aCBkPVwiTTI1NiAxNjBjLTUyLjkgMC05NiA0My4xLTk2IDk2czQzLjEgOTYgOTYgOTYgOTYtNDMuMSA5Ni05Ni00My4xLTk2LTk2LTk2em0yNDYuNCA4MC41bC05NC43LTQ3LjMgMzMuNS0xMDAuNGM0LjUtMTMuNi04LjQtMjYuNS0yMS45LTIxLjlsLTEwMC40IDMzLjUtNDcuNC05NC44Yy02LjQtMTIuOC0yNC42LTEyLjgtMzEgMGwtNDcuMyA5NC43TDkyLjcgNzAuOGMtMTMuNi00LjUtMjYuNSA4LjQtMjEuOSAyMS45bDMzLjUgMTAwLjQtOTQuNyA0Ny40Yy0xMi44IDYuNC0xMi44IDI0LjYgMCAzMWw5NC43IDQ3LjMtMzMuNSAxMDAuNWMtNC41IDEzLjYgOC40IDI2LjUgMjEuOSAyMS45bDEwMC40LTMzLjUgNDcuMyA5NC43YzYuNCAxMi44IDI0LjYgMTIuOCAzMSAwbDQ3LjMtOTQuNyAxMDAuNCAzMy41YzEzLjYgNC41IDI2LjUtOC40IDIxLjktMjEuOWwtMzMuNS0xMDAuNCA5NC43LTQ3LjNjMTMtNi41IDEzLTI0LjcuMi0zMS4xem0tMTU1LjkgMTA2Yy00OS45IDQ5LjktMTMxLjEgNDkuOS0xODEgMC00OS45LTQ5LjktNDkuOS0xMzEuMSAwLTE4MSA0OS45LTQ5LjkgMTMxLjEtNDkuOSAxODEgMCA0OS45IDQ5LjkgNDkuOSAxMzEuMSAwIDE4MXpcIj48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L01lbnU+XHJcbiAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgPC9GbGV4PlxyXG5cclxuICAgICAgICB7aXNPcGVuID8gKFxyXG4gICAgICAgICAgPEJveCBwYj17NH0+XHJcbiAgICAgICAgICAgIDxTdGFjayBhcz17J25hdid9IHNwYWNpbmc9ezR9PlxyXG4gICAgICAgICAgICAgIHtMaW5rcy5tYXAoKGxpbmspID0+IChcclxuICAgICAgICAgICAgICAgIDxOYXZMaW5rIGtleT17bGluay5saW5rfSBsaW5rPXtsaW5rLmxpbmt9PntsaW5rLmxhYmVsfTwvTmF2TGluaz5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9TdGFjaz5cclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICkgOiBudWxsfVxyXG4gICAgICA8L0JveD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9