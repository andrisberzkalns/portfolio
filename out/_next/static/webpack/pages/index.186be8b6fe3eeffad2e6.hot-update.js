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
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              htmlFor: "color-mode",
              style: {
                base: 'none',
                md: 'block'
              },
              children: "Toggle color mode"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 99,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Switch"], {
              id: "color-mode",
              size: "lg",
              ml: 2,
              colorScheme: "black",
              cursor: 'pointer',
              onChange: toggleColorMode,
              type: "checkbox"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 102,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJMaW5rcyIsImxhYmVsIiwibGluayIsIk5hdkxpbmsiLCJjaGlsZHJlbiIsInVzZUNvbG9yTW9kZSIsImNvbG9yTW9kZSIsInRleHREZWNvcmF0aW9uIiwiY29sb3IiLCJ1c2VyU2VsZWN0IiwiSGVhZGVyIiwidXNlRGlzY2xvc3VyZSIsImlzT3BlbiIsIm9uT3BlbiIsIm9uQ2xvc2UiLCJ1c2VXaW5kb3dTY3JvbGwiLCJ5IiwidXNlV2luZG93U2l6ZSIsImhlaWdodCIsInRvZ2dsZUNvbG9yTW9kZSIsInRyYW5zaXRpb24iLCJtZCIsImJhc2UiLCJtYXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQVlBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLEtBQUssR0FBRyxDQUNaO0FBQ0E7QUFBQ0MsT0FBSyxFQUFFLFVBQVI7QUFBb0JDLE1BQUksRUFBRTtBQUExQixDQUZZLEVBR1o7QUFBQ0QsT0FBSyxFQUFFLFFBQVI7QUFBa0JDLE1BQUksRUFBRTtBQUF4QixDQUhZLEVBSVo7QUFBQ0QsT0FBSyxFQUFFLFlBQVI7QUFBc0JDLE1BQUksRUFBRTtBQUE1QixDQUpZLEVBS1o7QUFBQ0QsT0FBSyxFQUFFLFVBQVI7QUFBb0JDLE1BQUksRUFBRTtBQUExQixDQUxZLEVBTVo7QUFDQTtBQUFDRCxPQUFLLEVBQUUsU0FBUjtBQUFtQkMsTUFBSSxFQUFFO0FBQXpCLENBUFksQ0FBZDs7QUFVQSxJQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxPQUErRDtBQUFBOztBQUFBLE1BQTVEQyxRQUE0RCxRQUE1REEsUUFBNEQ7QUFBQSxNQUFsREYsSUFBa0QsUUFBbERBLElBQWtEOztBQUFBLHNCQUN2REcscUVBQVksRUFEMkM7QUFBQSxNQUNyRUMsU0FEcUUsaUJBQ3JFQSxTQURxRTs7QUFHN0Usc0JBQ0UscUVBQUMs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QkFBTyxFQUFFLENBQTNCO0FBQUEsb0JBQ0daLEtBQUssQ0FBQ3VCLEdBQU4sQ0FBVSxVQUFDckIsSUFBRDtBQUFBLGdDQUNULHFFQUFDLE9BQUQ7QUFBeUIsa0JBQUksRUFBRUEsSUFBSSxDQUFDQSxJQUFwQztBQUFBLHdCQUEyQ0EsSUFBSSxDQUFDRDtBQUFoRCxlQUFjQyxJQUFJLENBQUNBLElBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRFM7QUFBQSxXQUFWO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESyxHQVFILElBOUROO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLG1CQURGO0FBb0VELENBM0VNOztJQUFNUSxNO1VBQ3lCQyw4RCxFQUN4QkkseUQsRUFDS0UsdUQsRUFFc0JaLDZEOzs7TUFMNUJLLE0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMTg2YmU4YjZmZTNlZWZmYWQyZTYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBSZWFjdE5vZGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7XG4gIEJveCxcbiAgRmxleCxcbiAgSFN0YWNrLFxuICBMaW5rLFxuICBJY29uQnV0dG9uLFxuICBNZW51LFxuICBTd2l0Y2gsXG4gIFN0YWNrLFxuICB1c2VEaXNjbG9zdXJlLFxuICB1c2VDb2xvck1vZGUsXG59IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xuaW1wb3J0IHsgSGFtYnVyZ2VySWNvbiwgQ2xvc2VJY29uIH0gZnJvbSAnQGNoYWtyYS11aS9pY29ucyc7XG5pbXBvcnQgeyB1c2VXaW5kb3dTY3JvbGwsIHVzZVdpbmRvd1NpemUgfSBmcm9tICdyZWFjdC11c2UnO1xuaW1wb3J0IHsgTGluayBhcyBTY3JvbGxMaW5rIH0gZnJvbSBcInJlYWN0LXNjcm9sbFwiO1xuXG5jb25zdCBMaW5rcyA9IFtcbiAgLy8ge2xhYmVsOiAnSG9tZScsIGxpbms6IFwiaG9tZVwifSwgXG4gIHtsYWJlbDogJ0Fib3V0IG1lJywgbGluazogXCJhYm91dFwifSxcbiAge2xhYmVsOiAnU2tpbGxzJywgbGluazogXCJza2lsbHNcIn0sIFxuICB7bGFiZWw6ICdFeHBlcmllbmNlJywgbGluazogXCJleHBlcmllbmNlXCJ9LCBcbiAge2xhYmVsOiAnUHJvamVjdHMnLCBsaW5rOiBcInByb2plY3RzXCJ9LCBcbiAgLy8ge2xhYmVsOiAnT2ZmZXJzJywgbGluazogXCJvZmZlcnNcIn0sIFxuICB7bGFiZWw6ICdDb250YWN0JywgbGluazogXCJjb250YWN0XCJ9LCBcbl07XG5cbmNvbnN0IE5hdkxpbmsgPSAoeyBjaGlsZHJlbiwgbGluayB9OiB7IGNoaWxkcmVuOiBSZWFjdE5vZGUsIGxpbms6IHN0cmluZyB9KSA9PiB7XG4gIGNvbnN0IHsgY29sb3JNb2RlIH0gPSB1c2VDb2xvck1vZGUoKTtcbiAgXG4gIHJldHVybiAoXG4gICAgPFNjcm9sbExpbmtcbiAgICAgIGFjdGl2ZUNsYXNzPVwiYWN0aXZlXCJcbiAgICAgIHRvPXtsaW5rfVxuICAgICAgc3B5PXt0cnVlfVxuICAgICAgc21vb3RoPXt0cnVlfVxuICAgICAgb2Zmc2V0PXstNzB9XG4gICAgICBkdXJhdGlvbj17NTAwfVxuICAgID5cbiAgICAgIDxMaW5rXG4gICAgICAgIHB4PXsyfVxuICAgICAgICBweT17MX1cbiAgICAgICAgcm91bmRlZD17J21kJ31cbiAgICAgICAgX2hvdmVyPXt7XG4gICAgICAgICAgdGV4dERlY29yYXRpb246ICdub25lJyxcbiAgICAgICAgICBjb2xvcjogKGNvbG9yTW9kZSA9PSAnbGlnaHQnID8gXCJncmF5LjMwMFwiIDogXCJncmF5LjQwMFwiKVxuICAgICAgICB9fVxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIHVzZXJTZWxlY3Q6IFwibm9uZVwiXG4gICAgICAgIH19XG4gICAgICAgIGhyZWY9e2xpbmt9XG4gICAgICA+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvTGluaz5cbiAgICA8L1Njcm9sbExpbms+XG4gIClcbn07XG5cbmV4cG9ydCBjb25zdCBIZWFkZXI6IFJlYWN0LkZDID0gKCkgPT4ge1xuICBjb25zdCB7IGlzT3Blbiwgb25PcGVuLCBvbkNsb3NlIH0gPSB1c2VEaXNjbG9zdXJlKCk7XG4gIGNvbnN0IHt5fSA9IHVzZVdpbmRvd1Njcm9sbCgpO1xuICBjb25zdCB7aGVpZ2h0fSA9IHVzZVdpbmRvd1NpemUoKTtcbiAgLy8gY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpXG4gIGNvbnN0IHsgY29sb3JNb2RlLCB0b2dnbGVDb2xvck1vZGUgfSA9IHVzZUNvbG9yTW9kZSgpO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxCb3hcbiAgICAgICAgYmc9e3kgPj0gKGhlaWdodCAtIDEwMCkgPyAoY29sb3JNb2RlID09ICdsaWdodCcgPyBcIm1haW4uMTAwXCIgOiBcImJsYWNrXCIpIDogXCJyZ2JhKDAsMCwwLDApXCJ9XG4gICAgICAgIHB4PXs0fVxuICAgICAgICBwb3NpdGlvbj1cImZpeGVkXCJcbiAgICAgICAgdz1cIjEwMCVcIlxuICAgICAgICB6SW5kZXg9XCIxMDBcIlxuICAgICAgICBzdHlsZT17e3RyYW5zaXRpb246IFwiMC40c1wifX1cbiAgICAgICAgY29sb3I9e3kgPj0gKGhlaWdodCAtIDEwMCkgPyBcIndoaXRlXCIgOiBcIndoaXRlXCJ9XG4gICAgICA+XG4gICAgICAgIDxGbGV4IGg9ezE2fSBhbGlnbkl0ZW1zPXsnY2VudGVyJ30ganVzdGlmeUNvbnRlbnQ9eydzcGFjZS1iZXR3ZWVuJ30+XG4gICAgICAgICAgPEljb25CdXR0b25cbiAgICAgICAgICAgIHNpemU9eydtZCd9XG4gICAgICAgICAgICBjb2xvclNjaGVtZT17Y29sb3JNb2RlID09ICdsaWdodCcgPyBcImJsYWNrXCIgOiBcImdyYXlcIn1cbiAgICAgICAgICAgIGljb249e2lzT3BlbiA/IDxDbG9zZUljb24gLz4gOiA8SGFtYnVyZ2VySWNvbiB3PXsnNjAlJ30gaD17JzYwJSd9IC8+fVxuICAgICAgICAgICAgYXJpYS1sYWJlbD17J09wZW4gTWVudSd9XG4gICAgICAgICAgICBkaXNwbGF5PXt7IG1kOiAhaXNPcGVuID8gJ25vbmUnIDogJ2luaGVyaXQnIH19XG4gICAgICAgICAgICBvbkNsaWNrPXtpc09wZW4gPyBvbkNsb3NlIDogb25PcGVufVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPEhTdGFjayBzcGFjaW5nPXs4fSBhbGlnbkl0ZW1zPXsnY2VudGVyJ30+XG4gICAgICAgICAgICB7LyogPEJveD5BbmRyaXMgQsSTcnprYWxuczwvQm94PiAqL31cbiAgICAgICAgICAgIDxIU3RhY2tcbiAgICAgICAgICAgICAgYXM9eyduYXYnfVxuICAgICAgICAgICAgICBzcGFjaW5nPXs0fVxuICAgICAgICAgICAgICBkaXNwbGF5PXt7IGJhc2U6ICdub25lJywgbWQ6ICdmbGV4JyB9fT5cbiAgICAgICAgICAgICAge0xpbmtzLm1hcCgobGluaykgPT4gKFxuICAgICAgICAgICAgICAgIDxOYXZMaW5rIGtleT17bGluay5saW5rfSBsaW5rPXtsaW5rLmxpbmt9PntsaW5rLmxhYmVsfTwvTmF2TGluaz5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L0hTdGFjaz5cbiAgICAgICAgICA8L0hTdGFjaz5cbiAgICAgICAgICA8RmxleCBhbGlnbkl0ZW1zPXsnY2VudGVyJ30+XG4gICAgICAgICAgICA8TWVudT5cbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJjb2xvci1tb2RlXCIgc3R5bGU9e3tiYXNlOiAnbm9uZScsIG1kOiAnYmxvY2snfX0+XG4gICAgICAgICAgICAgICAgVG9nZ2xlIGNvbG9yIG1vZGVcbiAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgPFN3aXRjaFxuICAgICAgICAgICAgICAgIGlkPVwiY29sb3ItbW9kZVwiXG4gICAgICAgICAgICAgICAgc2l6ZT1cImxnXCJcbiAgICAgICAgICAgICAgICBtbD17Mn1cbiAgICAgICAgICAgICAgICBjb2xvclNjaGVtZT1cImJsYWNrXCJcbiAgICAgICAgICAgICAgICBjdXJzb3I9eydwb2ludGVyJ31cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dG9nZ2xlQ29sb3JNb2RlfVxuICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8L1N3aXRjaD5cbiAgICAgICAgICAgICAgey8qIDxNZW51TGlzdD5cbiAgICAgICAgICAgICAgICA8TWVudUl0ZW0+TGluayAxPC9NZW51SXRlbT5cbiAgICAgICAgICAgICAgICA8TWVudUl0ZW0+TGluayAyPC9NZW51SXRlbT5cbiAgICAgICAgICAgICAgICA8TWVudURpdmlkZXIgLz5cbiAgICAgICAgICAgICAgICA8TWVudUl0ZW0+TGluayAzPC9NZW51SXRlbT5cbiAgICAgICAgICAgICAgPC9NZW51TGlzdD4gKi99XG4gICAgICAgICAgICA8L01lbnU+XG4gICAgICAgICAgPC9GbGV4PlxuICAgICAgICA8L0ZsZXg+XG5cbiAgICAgICAge2lzT3BlbiA/IChcbiAgICAgICAgICA8Qm94IHBiPXs0fT5cbiAgICAgICAgICAgIDxTdGFjayBhcz17J25hdid9IHNwYWNpbmc9ezR9PlxuICAgICAgICAgICAgICB7TGlua3MubWFwKChsaW5rKSA9PiAoXG4gICAgICAgICAgICAgICAgPE5hdkxpbmsga2V5PXtsaW5rLmxpbmt9IGxpbms9e2xpbmsubGlua30+e2xpbmsubGFiZWx9PC9OYXZMaW5rPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgICkgOiBudWxsfVxuICAgICAgPC9Cb3g+XG4gICAgPC8+XG4gICk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==