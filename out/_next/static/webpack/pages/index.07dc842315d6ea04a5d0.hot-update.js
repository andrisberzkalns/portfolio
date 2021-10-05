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
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Switch"], {
              id: "color-mode",
              size: "lg",
              ml: 2,
              colorScheme: "black",
              cursor: 'pointer',
              onChange: toggleColorMode,
              type: "checkbox"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 99,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              htmlFor: "color-mode",
              style: {
                display: 'none'
              },
              children: "Toggle color mode"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 109,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
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
              lineNumber: 126,
              columnNumber: 17
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 123,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJMaW5rcyIsImxhYmVsIiwibGluayIsIk5hdkxpbmsiLCJjaGlsZHJlbiIsInVzZUNvbG9yTW9kZSIsImNvbG9yTW9kZSIsInRleHREZWNvcmF0aW9uIiwiY29sb3IiLCJ1c2VyU2VsZWN0IiwiSGVhZGVyIiwidXNlRGlzY2xvc3VyZSIsImlzT3BlbiIsIm9uT3BlbiIsIm9uQ2xvc2UiLCJ1c2VXaW5kb3dTY3JvbGwiLCJ5IiwidXNlV2luZG93U2l6ZSIsImhlaWdodCIsInRvZ2dsZUNvbG9yTW9kZSIsInRyYW5zaXRpb24iLCJtZCIsImJhc2UiLCJtYXAiLCJkaXNwbGF5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFZQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxLQUFLLEdBQUcsQ0FDWjtBQUNBO0FBQUNDLE9BQUssRUFBRSxVQUFSO0FBQW9CQyxNQUFJLEVBQUU7QUFBMUIsQ0FGWSxFQUdaO0FBQUNELE9BQUssRUFBRSxRQUFSO0FBQWtCQyxNQUFJLEVBQUU7QUFBeEIsQ0FIWSxFQUlaO0FBQUNELE9BQUssRUFBRSxZQUFSO0FBQXNCQyxNQUFJLEVBQUU7QUFBNUIsQ0FKWSxFQUtaO0FBQUNELE9BQUssRUFBRSxVQUFSO0FBQW9CQyxNQUFJLEVBQUU7QUFBMUIsQ0FMWSxFQU1aO0FBQ0E7QUFBQ0QsT0FBSyxFQUFFLFNBQVI7QUFBbUJDLE1BQUksRUFBRTtBQUF6QixDQVBZLENBQWQ7O0FBVUEsSUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsT0FBK0Q7QUFBQTs7QUFBQSxNQUE1REMsUUFBNEQsUUFBNURBLFFBQTREO0FBQUEsTUFBbERGLElBQWtELFFBQWxEQSxJQUFrRDs7QUFBQSxzQkFDdkRHLHFFQUFZLEVBRDJDO0FBQUEsTUFDckVDLFNBRHFFLGlCQUNyRUEsU0FEcUU7O0FBRzdFLHNC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M0I7QUFBQSxvQkFDR1osS0FBSyxDQUFDdUIsR0FBTixDQUFVLFVBQUNyQixJQUFEO0FBQUEsZ0NBQ1QscUVBQUMsT0FBRDtBQUF5QixrQkFBSSxFQUFFQSxJQUFJLENBQUNBLElBQXBDO0FBQUEsd0JBQTJDQSxJQUFJLENBQUNEO0FBQWhELGVBQWNDLElBQUksQ0FBQ0EsSUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFEUztBQUFBLFdBQVY7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURLLEdBUUgsSUE5RE47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsbUJBREY7QUFvRUQsQ0EzRU07O0lBQU1RLE07VUFDeUJDLDhELEVBQ3hCSSx5RCxFQUNLRSx1RCxFQUVzQlosNkQ7OztNQUw1QkssTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4wN2RjODQyMzE1ZDZlYTA0YTVkMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFJlYWN0Tm9kZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtcbiAgQm94LFxuICBGbGV4LFxuICBIU3RhY2ssXG4gIExpbmssXG4gIEljb25CdXR0b24sXG4gIE1lbnUsXG4gIFN3aXRjaCxcbiAgU3RhY2ssXG4gIHVzZURpc2Nsb3N1cmUsXG4gIHVzZUNvbG9yTW9kZSxcbn0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCc7XG5pbXBvcnQgeyBIYW1idXJnZXJJY29uLCBDbG9zZUljb24gfSBmcm9tICdAY2hha3JhLXVpL2ljb25zJztcbmltcG9ydCB7IHVzZVdpbmRvd1Njcm9sbCwgdXNlV2luZG93U2l6ZSB9IGZyb20gJ3JlYWN0LXVzZSc7XG5pbXBvcnQgeyBMaW5rIGFzIFNjcm9sbExpbmsgfSBmcm9tIFwicmVhY3Qtc2Nyb2xsXCI7XG5cbmNvbnN0IExpbmtzID0gW1xuICAvLyB7bGFiZWw6ICdIb21lJywgbGluazogXCJob21lXCJ9LCBcbiAge2xhYmVsOiAnQWJvdXQgbWUnLCBsaW5rOiBcImFib3V0XCJ9LFxuICB7bGFiZWw6ICdTa2lsbHMnLCBsaW5rOiBcInNraWxsc1wifSwgXG4gIHtsYWJlbDogJ0V4cGVyaWVuY2UnLCBsaW5rOiBcImV4cGVyaWVuY2VcIn0sIFxuICB7bGFiZWw6ICdQcm9qZWN0cycsIGxpbms6IFwicHJvamVjdHNcIn0sIFxuICAvLyB7bGFiZWw6ICdPZmZlcnMnLCBsaW5rOiBcIm9mZmVyc1wifSwgXG4gIHtsYWJlbDogJ0NvbnRhY3QnLCBsaW5rOiBcImNvbnRhY3RcIn0sIFxuXTtcblxuY29uc3QgTmF2TGluayA9ICh7IGNoaWxkcmVuLCBsaW5rIH06IHsgY2hpbGRyZW46IFJlYWN0Tm9kZSwgbGluazogc3RyaW5nIH0pID0+IHtcbiAgY29uc3QgeyBjb2xvck1vZGUgfSA9IHVzZUNvbG9yTW9kZSgpO1xuICBcbiAgcmV0dXJuIChcbiAgICA8U2Nyb2xsTGlua1xuICAgICAgYWN0aXZlQ2xhc3M9XCJhY3RpdmVcIlxuICAgICAgdG89e2xpbmt9XG4gICAgICBzcHk9e3RydWV9XG4gICAgICBzbW9vdGg9e3RydWV9XG4gICAgICBvZmZzZXQ9ey03MH1cbiAgICAgIGR1cmF0aW9uPXs1MDB9XG4gICAgPlxuICAgICAgPExpbmtcbiAgICAgICAgcHg9ezJ9XG4gICAgICAgIHB5PXsxfVxuICAgICAgICByb3VuZGVkPXsnbWQnfVxuICAgICAgICBfaG92ZXI9e3tcbiAgICAgICAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxuICAgICAgICAgIGNvbG9yOiAoY29sb3JNb2RlID09ICdsaWdodCcgPyBcImdyYXkuMzAwXCIgOiBcImdyYXkuNDAwXCIpXG4gICAgICAgIH19XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgdXNlclNlbGVjdDogXCJub25lXCJcbiAgICAgICAgfX1cbiAgICAgICAgaHJlZj17bGlua31cbiAgICAgID5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9MaW5rPlxuICAgIDwvU2Nyb2xsTGluaz5cbiAgKVxufTtcblxuZXhwb3J0IGNvbnN0IEhlYWRlcjogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIGNvbnN0IHsgaXNPcGVuLCBvbk9wZW4sIG9uQ2xvc2UgfSA9IHVzZURpc2Nsb3N1cmUoKTtcbiAgY29uc3Qge3l9ID0gdXNlV2luZG93U2Nyb2xsKCk7XG4gIGNvbnN0IHtoZWlnaHR9ID0gdXNlV2luZG93U2l6ZSgpO1xuICAvLyBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKClcbiAgY29uc3QgeyBjb2xvck1vZGUsIHRvZ2dsZUNvbG9yTW9kZSB9ID0gdXNlQ29sb3JNb2RlKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEJveFxuICAgICAgICBiZz17eSA+PSAoaGVpZ2h0IC0gMTAwKSA/IChjb2xvck1vZGUgPT0gJ2xpZ2h0JyA/IFwibWFpbi4xMDBcIiA6IFwiYmxhY2tcIikgOiBcInJnYmEoMCwwLDAsMClcIn1cbiAgICAgICAgcHg9ezR9XG4gICAgICAgIHBvc2l0aW9uPVwiZml4ZWRcIlxuICAgICAgICB3PVwiMTAwJVwiXG4gICAgICAgIHpJbmRleD1cIjEwMFwiXG4gICAgICAgIHN0eWxlPXt7dHJhbnNpdGlvbjogXCIwLjRzXCJ9fVxuICAgICAgICBjb2xvcj17eSA+PSAoaGVpZ2h0IC0gMTAwKSA/IFwid2hpdGVcIiA6IFwid2hpdGVcIn1cbiAgICAgID5cbiAgICAgICAgPEZsZXggaD17MTZ9IGFsaWduSXRlbXM9eydjZW50ZXInfSBqdXN0aWZ5Q29udGVudD17J3NwYWNlLWJldHdlZW4nfT5cbiAgICAgICAgICA8SWNvbkJ1dHRvblxuICAgICAgICAgICAgc2l6ZT17J21kJ31cbiAgICAgICAgICAgIGNvbG9yU2NoZW1lPXtjb2xvck1vZGUgPT0gJ2xpZ2h0JyA/IFwiYmxhY2tcIiA6IFwiZ3JheVwifVxuICAgICAgICAgICAgaWNvbj17aXNPcGVuID8gPENsb3NlSWNvbiAvPiA6IDxIYW1idXJnZXJJY29uIHc9eyc2MCUnfSBoPXsnNjAlJ30gLz59XG4gICAgICAgICAgICBhcmlhLWxhYmVsPXsnT3BlbiBNZW51J31cbiAgICAgICAgICAgIGRpc3BsYXk9e3sgbWQ6ICFpc09wZW4gPyAnbm9uZScgOiAnaW5oZXJpdCcgfX1cbiAgICAgICAgICAgIG9uQ2xpY2s9e2lzT3BlbiA/IG9uQ2xvc2UgOiBvbk9wZW59XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8SFN0YWNrIHNwYWNpbmc9ezh9IGFsaWduSXRlbXM9eydjZW50ZXInfT5cbiAgICAgICAgICAgIHsvKiA8Qm94PkFuZHJpcyBCxJNyemthbG5zPC9Cb3g+ICovfVxuICAgICAgICAgICAgPEhTdGFja1xuICAgICAgICAgICAgICBhcz17J25hdid9XG4gICAgICAgICAgICAgIHNwYWNpbmc9ezR9XG4gICAgICAgICAgICAgIGRpc3BsYXk9e3sgYmFzZTogJ25vbmUnLCBtZDogJ2ZsZXgnIH19PlxuICAgICAgICAgICAgICB7TGlua3MubWFwKChsaW5rKSA9PiAoXG4gICAgICAgICAgICAgICAgPE5hdkxpbmsga2V5PXtsaW5rLmxpbmt9IGxpbms9e2xpbmsubGlua30+e2xpbmsubGFiZWx9PC9OYXZMaW5rPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvSFN0YWNrPlxuICAgICAgICAgIDwvSFN0YWNrPlxuICAgICAgICAgIDxGbGV4IGFsaWduSXRlbXM9eydjZW50ZXInfT5cbiAgICAgICAgICAgIDxNZW51PlxuICAgICAgICAgICAgICA8U3dpdGNoXG4gICAgICAgICAgICAgICAgaWQ9XCJjb2xvci1tb2RlXCJcbiAgICAgICAgICAgICAgICBzaXplPVwibGdcIlxuICAgICAgICAgICAgICAgIG1sPXsyfVxuICAgICAgICAgICAgICAgIGNvbG9yU2NoZW1lPVwiYmxhY2tcIlxuICAgICAgICAgICAgICAgIGN1cnNvcj17J3BvaW50ZXInfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0b2dnbGVDb2xvck1vZGV9XG4gICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDwvU3dpdGNoPlxuICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImNvbG9yLW1vZGVcIiBzdHlsZT17e2Rpc3BsYXk6ICdub25lJ319PlxuICAgICAgICAgICAgICAgIFRvZ2dsZSBjb2xvciBtb2RlXG4gICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgIHsvKiA8TWVudUxpc3Q+XG4gICAgICAgICAgICAgICAgPE1lbnVJdGVtPkxpbmsgMTwvTWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgPE1lbnVJdGVtPkxpbmsgMjwvTWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgPE1lbnVEaXZpZGVyIC8+XG4gICAgICAgICAgICAgICAgPE1lbnVJdGVtPkxpbmsgMzwvTWVudUl0ZW0+XG4gICAgICAgICAgICAgIDwvTWVudUxpc3Q+ICovfVxuICAgICAgICAgICAgPC9NZW51PlxuICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgPC9GbGV4PlxuXG4gICAgICAgIHtpc09wZW4gPyAoXG4gICAgICAgICAgPEJveCBwYj17NH0+XG4gICAgICAgICAgICA8U3RhY2sgYXM9eyduYXYnfSBzcGFjaW5nPXs0fT5cbiAgICAgICAgICAgICAge0xpbmtzLm1hcCgobGluaykgPT4gKFxuICAgICAgICAgICAgICAgIDxOYXZMaW5rIGtleT17bGluay5saW5rfSBsaW5rPXtsaW5rLmxpbmt9PntsaW5rLmxhYmVsfTwvTmF2TGluaz5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICApIDogbnVsbH1cbiAgICAgIDwvQm94PlxuICAgIDwvPlxuICApO1xufSJdLCJzb3VyY2VSb290IjoiIn0=