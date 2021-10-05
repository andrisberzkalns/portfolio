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
{
  label: 'About me',
  link: "about"
}, {
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
      px: 2,
      py: 1,
      rounded: 'md',
      _hover: {
        textDecoration: 'none',
        color: colorMode == 'light' ? "gray.300" : "gray.400"
      },
      style: {
        userSelect: "none"
      },
      href: link,
      children: children
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
            lineNumber: 81,
            columnNumber: 28
          }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__["HamburgerIcon"], {
            w: '60%',
            h: '60%'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 44
          }, _this),
          "aria-label": 'Open Menu',
          display: {
            md: !isOpen ? 'none' : 'inherit'
          },
          onClick: isOpen ? onClose : onOpen
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 78,
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
                lineNumber: 93,
                columnNumber: 17
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
          alignItems: 'center',
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Menu"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Switch"], {
              size: "lg",
              colorScheme: "black",
              cursor: 'pointer',
              onChange: toggleColorMode,
              type: "checkbox"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 99,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 77,
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
              lineNumber: 121,
              columnNumber: 17
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 11
      }, _this) : null]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 68,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJMaW5rcyIsImxhYmVsIiwibGluayIsIk5hdkxpbmsiLCJjaGlsZHJlbiIsInVzZUNvbG9yTW9kZSIsImNvbG9yTW9kZSIsInRleHREZWNvcmF0aW9uIiwiY29sb3IiLCJ1c2VyU2VsZWN0IiwiSGVhZGVyIiwidXNlRGlzY2xvc3VyZSIsImlzT3BlbiIsIm9uT3BlbiIsIm9uQ2xvc2UiLCJ1c2VXaW5kb3dTY3JvbGwiLCJ5IiwidXNlV2luZG93U2l6ZSIsImhlaWdodCIsInRvZ2dsZUNvbG9yTW9kZSIsInRyYW5zaXRpb24iLCJtZCIsImJhc2UiLCJtYXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQVlBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLEtBQUssR0FBRyxDQUNaO0FBQ0E7QUFBQ0MsT0FBSyxFQUFFLFVBQVI7QUFBb0JDLE1BQUksRUFBRTtBQUExQixDQUZZLEVBR1o7QUFBQ0QsT0FBSyxFQUFFLFFBQVI7QUFBa0JDLE1BQUksRUFBRTtBQUF4QixDQUhZLEVBSVo7QUFBQ0QsT0FBSyxFQUFFLFlBQVI7QUFBc0JDLE1BQUksRUFBRTtBQUE1QixDQUpZLEVBS1o7QUFBQ0QsT0FBSyxFQUFFLFVBQVI7QUFBb0JDLE1BQUksRUFBRTtBQUExQixDQUxZLEVBTVo7QUFDQTtBQUFDRCxPQUFLLEVBQUUsU0FBUjtBQUFtQkMsTUFBSSxFQUFFO0FBQXpCLENBUFksQ0FBZDs7QUFVQSxJQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxPQUErRDtBQUFBOztBQUFBLE1BQTVEQyxRQUE0RCxRQUE1REEsUUFBNEQ7QUFBQSxNQUFsREYsSUFBa0QsUUFBbERBLElBQWtEOztBQUFBLHNCQUN2REcscUVBQVksRUFEMkM7QUFBQSxNQUNyRUMsU0FEcUUsaUJBQ3JFQSxTQURxRTs7QUFHN0Usc0JBQ0UscUVBQUMs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QUFBO0FBQUE7QUFBQSxxQkFEUztBQUFBLFdBQVY7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURLLEdBUUgsSUF6RE47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsbUJBREY7QUErREQsQ0F0RU07O0lBQU1RLE07VUFDeUJDLDhELEVBQ3hCSSx5RCxFQUNLRSx1RCxFQUVzQlosNkQ7OztNQUw1QkssTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC40NTY1MzFhY2RmMDE1ZGRlYjNkMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFJlYWN0Tm9kZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtcbiAgQm94LFxuICBGbGV4LFxuICBIU3RhY2ssXG4gIExpbmssXG4gIEljb25CdXR0b24sXG4gIE1lbnUsXG4gIFN3aXRjaCxcbiAgU3RhY2ssXG4gIHVzZURpc2Nsb3N1cmUsXG4gIHVzZUNvbG9yTW9kZSxcbn0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCc7XG5pbXBvcnQgeyBIYW1idXJnZXJJY29uLCBDbG9zZUljb24gfSBmcm9tICdAY2hha3JhLXVpL2ljb25zJztcbmltcG9ydCB7IHVzZVdpbmRvd1Njcm9sbCwgdXNlV2luZG93U2l6ZSB9IGZyb20gJ3JlYWN0LXVzZSc7XG5pbXBvcnQgeyBMaW5rIGFzIFNjcm9sbExpbmsgfSBmcm9tIFwicmVhY3Qtc2Nyb2xsXCI7XG5cbmNvbnN0IExpbmtzID0gW1xuICAvLyB7bGFiZWw6ICdIb21lJywgbGluazogXCJob21lXCJ9LCBcbiAge2xhYmVsOiAnQWJvdXQgbWUnLCBsaW5rOiBcImFib3V0XCJ9LFxuICB7bGFiZWw6ICdTa2lsbHMnLCBsaW5rOiBcInNraWxsc1wifSwgXG4gIHtsYWJlbDogJ0V4cGVyaWVuY2UnLCBsaW5rOiBcImV4cGVyaWVuY2VcIn0sIFxuICB7bGFiZWw6ICdQcm9qZWN0cycsIGxpbms6IFwicHJvamVjdHNcIn0sIFxuICAvLyB7bGFiZWw6ICdPZmZlcnMnLCBsaW5rOiBcIm9mZmVyc1wifSwgXG4gIHtsYWJlbDogJ0NvbnRhY3QnLCBsaW5rOiBcImNvbnRhY3RcIn0sIFxuXTtcblxuY29uc3QgTmF2TGluayA9ICh7IGNoaWxkcmVuLCBsaW5rIH06IHsgY2hpbGRyZW46IFJlYWN0Tm9kZSwgbGluazogc3RyaW5nIH0pID0+IHtcbiAgY29uc3QgeyBjb2xvck1vZGUgfSA9IHVzZUNvbG9yTW9kZSgpO1xuICBcbiAgcmV0dXJuIChcbiAgICA8U2Nyb2xsTGlua1xuICAgICAgYWN0aXZlQ2xhc3M9XCJhY3RpdmVcIlxuICAgICAgdG89e2xpbmt9XG4gICAgICBzcHk9e3RydWV9XG4gICAgICBzbW9vdGg9e3RydWV9XG4gICAgICBvZmZzZXQ9ey03MH1cbiAgICAgIGR1cmF0aW9uPXs1MDB9XG4gICAgPlxuICAgICAgPExpbmtcbiAgICAgICAgcHg9ezJ9XG4gICAgICAgIHB5PXsxfVxuICAgICAgICByb3VuZGVkPXsnbWQnfVxuICAgICAgICBfaG92ZXI9e3tcbiAgICAgICAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxuICAgICAgICAgIGNvbG9yOiAoY29sb3JNb2RlID09ICdsaWdodCcgPyBcImdyYXkuMzAwXCIgOiBcImdyYXkuNDAwXCIpXG4gICAgICAgIH19XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgdXNlclNlbGVjdDogXCJub25lXCJcbiAgICAgICAgfX1cbiAgICAgICAgaHJlZj17bGlua31cbiAgICAgID5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9MaW5rPlxuICAgIDwvU2Nyb2xsTGluaz5cbiAgKVxufTtcblxuZXhwb3J0IGNvbnN0IEhlYWRlcjogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIGNvbnN0IHsgaXNPcGVuLCBvbk9wZW4sIG9uQ2xvc2UgfSA9IHVzZURpc2Nsb3N1cmUoKTtcbiAgY29uc3Qge3l9ID0gdXNlV2luZG93U2Nyb2xsKCk7XG4gIGNvbnN0IHtoZWlnaHR9ID0gdXNlV2luZG93U2l6ZSgpO1xuICAvLyBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKClcbiAgY29uc3QgeyBjb2xvck1vZGUsIHRvZ2dsZUNvbG9yTW9kZSB9ID0gdXNlQ29sb3JNb2RlKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEJveFxuICAgICAgICBiZz17eSA+PSAoaGVpZ2h0IC0gMTAwKSA/IChjb2xvck1vZGUgPT0gJ2xpZ2h0JyA/IFwibWFpbi4xMDBcIiA6IFwiYmxhY2tcIikgOiBcInJnYmEoMCwwLDAsMClcIn1cbiAgICAgICAgcHg9ezR9XG4gICAgICAgIHBvc2l0aW9uPVwiZml4ZWRcIlxuICAgICAgICB3PVwiMTAwJVwiXG4gICAgICAgIHpJbmRleD1cIjEwMFwiXG4gICAgICAgIHN0eWxlPXt7dHJhbnNpdGlvbjogXCIwLjRzXCJ9fVxuICAgICAgICBjb2xvcj17eSA+PSAoaGVpZ2h0IC0gMTAwKSA/IFwid2hpdGVcIiA6IFwid2hpdGVcIn1cbiAgICAgID5cbiAgICAgICAgPEZsZXggaD17MTZ9IGFsaWduSXRlbXM9eydjZW50ZXInfSBqdXN0aWZ5Q29udGVudD17J3NwYWNlLWJldHdlZW4nfT5cbiAgICAgICAgICA8SWNvbkJ1dHRvblxuICAgICAgICAgICAgc2l6ZT17J21kJ31cbiAgICAgICAgICAgIGNvbG9yU2NoZW1lPXtjb2xvck1vZGUgPT0gJ2xpZ2h0JyA/IFwiYmxhY2tcIiA6IFwiZ3JheVwifVxuICAgICAgICAgICAgaWNvbj17aXNPcGVuID8gPENsb3NlSWNvbiAvPiA6IDxIYW1idXJnZXJJY29uIHc9eyc2MCUnfSBoPXsnNjAlJ30gLz59XG4gICAgICAgICAgICBhcmlhLWxhYmVsPXsnT3BlbiBNZW51J31cbiAgICAgICAgICAgIGRpc3BsYXk9e3sgbWQ6ICFpc09wZW4gPyAnbm9uZScgOiAnaW5oZXJpdCcgfX1cbiAgICAgICAgICAgIG9uQ2xpY2s9e2lzT3BlbiA/IG9uQ2xvc2UgOiBvbk9wZW59XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8SFN0YWNrIHNwYWNpbmc9ezh9IGFsaWduSXRlbXM9eydjZW50ZXInfT5cbiAgICAgICAgICAgIHsvKiA8Qm94PkFuZHJpcyBCxJNyemthbG5zPC9Cb3g+ICovfVxuICAgICAgICAgICAgPEhTdGFja1xuICAgICAgICAgICAgICBhcz17J25hdid9XG4gICAgICAgICAgICAgIHNwYWNpbmc9ezR9XG4gICAgICAgICAgICAgIGRpc3BsYXk9e3sgYmFzZTogJ25vbmUnLCBtZDogJ2ZsZXgnIH19PlxuICAgICAgICAgICAgICB7TGlua3MubWFwKChsaW5rKSA9PiAoXG4gICAgICAgICAgICAgICAgPE5hdkxpbmsga2V5PXtsaW5rLmxpbmt9IGxpbms9e2xpbmsubGlua30+e2xpbmsubGFiZWx9PC9OYXZMaW5rPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvSFN0YWNrPlxuICAgICAgICAgIDwvSFN0YWNrPlxuICAgICAgICAgIDxGbGV4IGFsaWduSXRlbXM9eydjZW50ZXInfT5cbiAgICAgICAgICAgIDxNZW51PlxuICAgICAgICAgICAgICA8U3dpdGNoXG4gICAgICAgICAgICAgICAgc2l6ZT1cImxnXCJcbiAgICAgICAgICAgICAgICBjb2xvclNjaGVtZT1cImJsYWNrXCJcbiAgICAgICAgICAgICAgICBjdXJzb3I9eydwb2ludGVyJ31cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dG9nZ2xlQ29sb3JNb2RlfVxuICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8L1N3aXRjaD5cbiAgICAgICAgICAgICAgey8qIDxNZW51TGlzdD5cbiAgICAgICAgICAgICAgICA8TWVudUl0ZW0+TGluayAxPC9NZW51SXRlbT5cbiAgICAgICAgICAgICAgICA8TWVudUl0ZW0+TGluayAyPC9NZW51SXRlbT5cbiAgICAgICAgICAgICAgICA8TWVudURpdmlkZXIgLz5cbiAgICAgICAgICAgICAgICA8TWVudUl0ZW0+TGluayAzPC9NZW51SXRlbT5cbiAgICAgICAgICAgICAgPC9NZW51TGlzdD4gKi99XG4gICAgICAgICAgICA8L01lbnU+XG4gICAgICAgICAgPC9GbGV4PlxuICAgICAgICA8L0ZsZXg+XG5cbiAgICAgICAge2lzT3BlbiA/IChcbiAgICAgICAgICA8Qm94IHBiPXs0fT5cbiAgICAgICAgICAgIDxTdGFjayBhcz17J25hdid9IHNwYWNpbmc9ezR9PlxuICAgICAgICAgICAgICB7TGlua3MubWFwKChsaW5rKSA9PiAoXG4gICAgICAgICAgICAgICAgPE5hdkxpbmsga2V5PXtsaW5rLmxpbmt9IGxpbms9e2xpbmsubGlua30+e2xpbmsubGFiZWx9PC9OYXZMaW5rPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgICkgOiBudWxsfVxuICAgICAgPC9Cb3g+XG4gICAgPC8+XG4gICk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==