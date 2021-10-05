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
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              style: {
                display: 'none'
              },
              children: ["Toggle color mode", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Switch"], {
                size: "lg",
                style: {
                  display: 'block'
                },
                colorScheme: "black",
                cursor: 'pointer',
                onChange: toggleColorMode,
                type: "checkbox"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 101,
                columnNumber: 15
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 99,
              columnNumber: 13
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJMaW5rcyIsImxhYmVsIiwibGluayIsIk5hdkxpbmsiLCJjaGlsZHJlbiIsInVzZUNvbG9yTW9kZSIsImNvbG9yTW9kZSIsInRleHREZWNvcmF0aW9uIiwiY29sb3IiLCJ1c2VyU2VsZWN0IiwiSGVhZGVyIiwidXNlRGlzY2xvc3VyZSIsImlzT3BlbiIsIm9uT3BlbiIsIm9uQ2xvc2UiLCJ1c2VXaW5kb3dTY3JvbGwiLCJ5IiwidXNlV2luZG93U2l6ZSIsImhlaWdodCIsInRvZ2dsZUNvbG9yTW9kZSIsInRyYW5zaXRpb24iLCJtZCIsImJhc2UiLCJtYXAiLCJkaXNwbGF5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFZQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxLQUFLLEdBQUcsQ0FDWjtBQUNBO0FBQUNDLE9BQUssRUFBRSxVQUFSO0FBQW9CQyxNQUFJLEVBQUU7QUFBMUIsQ0FGWSxFQUdaO0FBQUNELE9BQUssRUFBRSxRQUFSO0FBQWtCQyxNQUFJLEVBQUU7QUFBeEIsQ0FIWSxFQUlaO0FBQUNELE9BQUssRUFBRSxZQUFSO0FBQXNCQyxNQUFJLEVBQUU7QUFBNUIsQ0FKWSxFQUtaO0FBQUNELE9BQUssRUFBRSxVQUFSO0FBQW9CQyxNQUFJLEVBQUU7QUFBMUIsQ0FMWSxFQU1aO0FBQ0E7QUFBQ0QsT0FBSyxFQUFFLFNBQVI7QUFBbUJDLE1BQUksRUFBRTtBQUF6QixDQVBZLENBQWQ7O0FBVUEsSUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsT0FBK0Q7QUFBQTs7QUFBQSxNQUE1REMsUUFBNEQsUUFBNURBLFFBQTREO0FBQUEsTUFBbERGLElBQWtELFFBQWxEQSxJQUFrRDs7QUFBQSxzQkFDdkRHLHFFQUFZLEVBRDJDO0FBQUEsTUFDckVDLFNBRHFFLGlCQUNyRUEsU0FEcUU7O0FBRzdFLHNC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LEdBQU4sQ0FBVSxVQUFDckIsSUFBRDtBQUFBLGdDQUNULHFFQUFDLE9BQUQ7QUFBeUIsa0JBQUksRUFBRUEsSUFBSSxDQUFDQSxJQUFwQztBQUFBLHdCQUEyQ0EsSUFBSSxDQUFDRDtBQUFoRCxlQUFjQyxJQUFJLENBQUNBLElBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRFM7QUFBQSxXQUFWO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESyxHQVFILElBOUROO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLG1CQURGO0FBb0VELENBM0VNOztJQUFNUSxNO1VBQ3lCQyw4RCxFQUN4QkkseUQsRUFDS0UsdUQsRUFFc0JaLDZEOzs7TUFMNUJLLE0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNzc0ZDQzY2FkMzYxODA2YjMyNDQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBSZWFjdE5vZGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7XG4gIEJveCxcbiAgRmxleCxcbiAgSFN0YWNrLFxuICBMaW5rLFxuICBJY29uQnV0dG9uLFxuICBNZW51LFxuICBTd2l0Y2gsXG4gIFN0YWNrLFxuICB1c2VEaXNjbG9zdXJlLFxuICB1c2VDb2xvck1vZGUsXG59IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xuaW1wb3J0IHsgSGFtYnVyZ2VySWNvbiwgQ2xvc2VJY29uIH0gZnJvbSAnQGNoYWtyYS11aS9pY29ucyc7XG5pbXBvcnQgeyB1c2VXaW5kb3dTY3JvbGwsIHVzZVdpbmRvd1NpemUgfSBmcm9tICdyZWFjdC11c2UnO1xuaW1wb3J0IHsgTGluayBhcyBTY3JvbGxMaW5rIH0gZnJvbSBcInJlYWN0LXNjcm9sbFwiO1xuXG5jb25zdCBMaW5rcyA9IFtcbiAgLy8ge2xhYmVsOiAnSG9tZScsIGxpbms6IFwiaG9tZVwifSwgXG4gIHtsYWJlbDogJ0Fib3V0IG1lJywgbGluazogXCJhYm91dFwifSxcbiAge2xhYmVsOiAnU2tpbGxzJywgbGluazogXCJza2lsbHNcIn0sIFxuICB7bGFiZWw6ICdFeHBlcmllbmNlJywgbGluazogXCJleHBlcmllbmNlXCJ9LCBcbiAge2xhYmVsOiAnUHJvamVjdHMnLCBsaW5rOiBcInByb2plY3RzXCJ9LCBcbiAgLy8ge2xhYmVsOiAnT2ZmZXJzJywgbGluazogXCJvZmZlcnNcIn0sIFxuICB7bGFiZWw6ICdDb250YWN0JywgbGluazogXCJjb250YWN0XCJ9LCBcbl07XG5cbmNvbnN0IE5hdkxpbmsgPSAoeyBjaGlsZHJlbiwgbGluayB9OiB7IGNoaWxkcmVuOiBSZWFjdE5vZGUsIGxpbms6IHN0cmluZyB9KSA9PiB7XG4gIGNvbnN0IHsgY29sb3JNb2RlIH0gPSB1c2VDb2xvck1vZGUoKTtcbiAgXG4gIHJldHVybiAoXG4gICAgPFNjcm9sbExpbmtcbiAgICAgIGFjdGl2ZUNsYXNzPVwiYWN0aXZlXCJcbiAgICAgIHRvPXtsaW5rfVxuICAgICAgc3B5PXt0cnVlfVxuICAgICAgc21vb3RoPXt0cnVlfVxuICAgICAgb2Zmc2V0PXstNzB9XG4gICAgICBkdXJhdGlvbj17NTAwfVxuICAgID5cbiAgICAgIDxMaW5rXG4gICAgICAgIHB4PXsyfVxuICAgICAgICBweT17MX1cbiAgICAgICAgcm91bmRlZD17J21kJ31cbiAgICAgICAgX2hvdmVyPXt7XG4gICAgICAgICAgdGV4dERlY29yYXRpb246ICdub25lJyxcbiAgICAgICAgICBjb2xvcjogKGNvbG9yTW9kZSA9PSAnbGlnaHQnID8gXCJncmF5LjMwMFwiIDogXCJncmF5LjQwMFwiKVxuICAgICAgICB9fVxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIHVzZXJTZWxlY3Q6IFwibm9uZVwiXG4gICAgICAgIH19XG4gICAgICAgIGhyZWY9e2xpbmt9XG4gICAgICA+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvTGluaz5cbiAgICA8L1Njcm9sbExpbms+XG4gIClcbn07XG5cbmV4cG9ydCBjb25zdCBIZWFkZXI6IFJlYWN0LkZDID0gKCkgPT4ge1xuICBjb25zdCB7IGlzT3Blbiwgb25PcGVuLCBvbkNsb3NlIH0gPSB1c2VEaXNjbG9zdXJlKCk7XG4gIGNvbnN0IHt5fSA9IHVzZVdpbmRvd1Njcm9sbCgpO1xuICBjb25zdCB7aGVpZ2h0fSA9IHVzZVdpbmRvd1NpemUoKTtcbiAgLy8gY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpXG4gIGNvbnN0IHsgY29sb3JNb2RlLCB0b2dnbGVDb2xvck1vZGUgfSA9IHVzZUNvbG9yTW9kZSgpO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxCb3hcbiAgICAgICAgYmc9e3kgPj0gKGhlaWdodCAtIDEwMCkgPyAoY29sb3JNb2RlID09ICdsaWdodCcgPyBcIm1haW4uMTAwXCIgOiBcImJsYWNrXCIpIDogXCJyZ2JhKDAsMCwwLDApXCJ9XG4gICAgICAgIHB4PXs0fVxuICAgICAgICBwb3NpdGlvbj1cImZpeGVkXCJcbiAgICAgICAgdz1cIjEwMCVcIlxuICAgICAgICB6SW5kZXg9XCIxMDBcIlxuICAgICAgICBzdHlsZT17e3RyYW5zaXRpb246IFwiMC40c1wifX1cbiAgICAgICAgY29sb3I9e3kgPj0gKGhlaWdodCAtIDEwMCkgPyBcIndoaXRlXCIgOiBcIndoaXRlXCJ9XG4gICAgICA+XG4gICAgICAgIDxGbGV4IGg9ezE2fSBhbGlnbkl0ZW1zPXsnY2VudGVyJ30ganVzdGlmeUNvbnRlbnQ9eydzcGFjZS1iZXR3ZWVuJ30+XG4gICAgICAgICAgPEljb25CdXR0b25cbiAgICAgICAgICAgIHNpemU9eydtZCd9XG4gICAgICAgICAgICBjb2xvclNjaGVtZT17Y29sb3JNb2RlID09ICdsaWdodCcgPyBcImJsYWNrXCIgOiBcImdyYXlcIn1cbiAgICAgICAgICAgIGljb249e2lzT3BlbiA/IDxDbG9zZUljb24gLz4gOiA8SGFtYnVyZ2VySWNvbiB3PXsnNjAlJ30gaD17JzYwJSd9IC8+fVxuICAgICAgICAgICAgYXJpYS1sYWJlbD17J09wZW4gTWVudSd9XG4gICAgICAgICAgICBkaXNwbGF5PXt7IG1kOiAhaXNPcGVuID8gJ25vbmUnIDogJ2luaGVyaXQnIH19XG4gICAgICAgICAgICBvbkNsaWNrPXtpc09wZW4gPyBvbkNsb3NlIDogb25PcGVufVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPEhTdGFjayBzcGFjaW5nPXs4fSBhbGlnbkl0ZW1zPXsnY2VudGVyJ30+XG4gICAgICAgICAgICB7LyogPEJveD5BbmRyaXMgQsSTcnprYWxuczwvQm94PiAqL31cbiAgICAgICAgICAgIDxIU3RhY2tcbiAgICAgICAgICAgICAgYXM9eyduYXYnfVxuICAgICAgICAgICAgICBzcGFjaW5nPXs0fVxuICAgICAgICAgICAgICBkaXNwbGF5PXt7IGJhc2U6ICdub25lJywgbWQ6ICdmbGV4JyB9fT5cbiAgICAgICAgICAgICAge0xpbmtzLm1hcCgobGluaykgPT4gKFxuICAgICAgICAgICAgICAgIDxOYXZMaW5rIGtleT17bGluay5saW5rfSBsaW5rPXtsaW5rLmxpbmt9PntsaW5rLmxhYmVsfTwvTmF2TGluaz5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L0hTdGFjaz5cbiAgICAgICAgICA8L0hTdGFjaz5cbiAgICAgICAgICA8RmxleCBhbGlnbkl0ZW1zPXsnY2VudGVyJ30+XG4gICAgICAgICAgICA8TWVudT5cbiAgICAgICAgICAgIDxsYWJlbCBzdHlsZT17e2Rpc3BsYXk6ICdub25lJ319PlxuICAgICAgICAgICAgICBUb2dnbGUgY29sb3IgbW9kZVxuICAgICAgICAgICAgICA8U3dpdGNoXG4gICAgICAgICAgICAgICAgc2l6ZT1cImxnXCJcbiAgICAgICAgICAgICAgICBzdHlsZT17e2Rpc3BsYXk6ICdibG9jayd9fVxuICAgICAgICAgICAgICAgIGNvbG9yU2NoZW1lPVwiYmxhY2tcIlxuICAgICAgICAgICAgICAgIGN1cnNvcj17J3BvaW50ZXInfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0b2dnbGVDb2xvck1vZGV9XG4gICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDwvU3dpdGNoPlxuICAgICAgICAgICAgPC9sYWJlbD5cblxuICAgICAgICAgICAgICB7LyogPE1lbnVMaXN0PlxuICAgICAgICAgICAgICAgIDxNZW51SXRlbT5MaW5rIDE8L01lbnVJdGVtPlxuICAgICAgICAgICAgICAgIDxNZW51SXRlbT5MaW5rIDI8L01lbnVJdGVtPlxuICAgICAgICAgICAgICAgIDxNZW51RGl2aWRlciAvPlxuICAgICAgICAgICAgICAgIDxNZW51SXRlbT5MaW5rIDM8L01lbnVJdGVtPlxuICAgICAgICAgICAgICA8L01lbnVMaXN0PiAqL31cbiAgICAgICAgICAgIDwvTWVudT5cbiAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgIDwvRmxleD5cblxuICAgICAgICB7aXNPcGVuID8gKFxuICAgICAgICAgIDxCb3ggcGI9ezR9PlxuICAgICAgICAgICAgPFN0YWNrIGFzPXsnbmF2J30gc3BhY2luZz17NH0+XG4gICAgICAgICAgICAgIHtMaW5rcy5tYXAoKGxpbmspID0+IChcbiAgICAgICAgICAgICAgICA8TmF2TGluayBrZXk9e2xpbmsubGlua30gbGluaz17bGluay5saW5rfT57bGluay5sYWJlbH08L05hdkxpbms+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgKSA6IG51bGx9XG4gICAgICA8L0JveD5cbiAgICA8Lz5cbiAgKTtcbn0iXSwic291cmNlUm9vdCI6IiJ9