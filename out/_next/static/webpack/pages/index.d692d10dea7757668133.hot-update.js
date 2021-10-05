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
                display: 'hidden'
              },
              children: ["Toggle color mode", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Switch"], {
                size: "lg",
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
              lineNumber: 125,
              columnNumber: 17
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 122,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJMaW5rcyIsImxhYmVsIiwibGluayIsIk5hdkxpbmsiLCJjaGlsZHJlbiIsInVzZUNvbG9yTW9kZSIsImNvbG9yTW9kZSIsInRleHREZWNvcmF0aW9uIiwiY29sb3IiLCJ1c2VyU2VsZWN0IiwiSGVhZGVyIiwidXNlRGlzY2xvc3VyZSIsImlzT3BlbiIsIm9uT3BlbiIsIm9uQ2xvc2UiLCJ1c2VXaW5kb3dTY3JvbGwiLCJ5IiwidXNlV2luZG93U2l6ZSIsImhlaWdodCIsInRvZ2dsZUNvbG9yTW9kZSIsInRyYW5zaXRpb24iLCJtZCIsImJhc2UiLCJtYXAiLCJkaXNwbGF5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFZQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxLQUFLLEdBQUcsQ0FDWjtBQUNBO0FBQUNDLE9BQUssRUFBRSxVQUFSO0FBQW9CQyxNQUFJLEVBQUU7QUFBMUIsQ0FGWSxFQUdaO0FBQUNELE9BQUssRUFBRSxRQUFSO0FBQWtCQyxNQUFJLEVBQUU7QUFBeEIsQ0FIWSxFQUlaO0FBQUNELE9BQUssRUFBRSxZQUFSO0FBQXNCQyxNQUFJLEVBQUU7QUFBNUIsQ0FKWSxFQUtaO0FBQUNELE9BQUssRUFBRSxVQUFSO0FBQW9CQyxNQUFJLEVBQUU7QUFBMUIsQ0FMWSxFQU1aO0FBQ0E7QUFBQ0QsT0FBSyxFQUFFLFNBQVI7QUFBbUJDLE1BQUksRUFBRTtBQUF6QixDQVBZLENBQWQ7O0FBVUEsSUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsT0FBK0Q7QUFBQTs7QUFBQSxNQUE1REMsUUFBNEQsUUFBNURBLFFBQTREO0FBQUEsTUFBbERGLElBQWtELFFBQWxEQSxJQUFrRDs7QUFBQSxzQkFDdkRHLHFFQUFZLEVBRDJDO0FBQUEsTUFDckVDLFNBRHFFLGlCQUNyRUEsU0FEcUU7O0FBRzdFLHNC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O0FBQXlCLGtCQUFJLEVBQUVBLElBQUksQ0FBQ0EsSUFBcEM7QUFBQSx3QkFBMkNBLElBQUksQ0FBQ0Q7QUFBaEQsZUFBY0MsSUFBSSxDQUFDQSxJQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURTO0FBQUEsV0FBVjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREssR0FRSCxJQTdETjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixtQkFERjtBQW1FRCxDQTFFTTs7SUFBTVEsTTtVQUN5QkMsOEQsRUFDeEJJLHlELEVBQ0tFLHVELEVBRXNCWiw2RDs7O01BTDVCSyxNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmQ2OTJkMTBkZWE3NzU3NjY4MTMzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUmVhY3ROb2RlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1xuICBCb3gsXG4gIEZsZXgsXG4gIEhTdGFjayxcbiAgTGluayxcbiAgSWNvbkJ1dHRvbixcbiAgTWVudSxcbiAgU3dpdGNoLFxuICBTdGFjayxcbiAgdXNlRGlzY2xvc3VyZSxcbiAgdXNlQ29sb3JNb2RlLFxufSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcbmltcG9ydCB7IEhhbWJ1cmdlckljb24sIENsb3NlSWNvbiB9IGZyb20gJ0BjaGFrcmEtdWkvaWNvbnMnO1xuaW1wb3J0IHsgdXNlV2luZG93U2Nyb2xsLCB1c2VXaW5kb3dTaXplIH0gZnJvbSAncmVhY3QtdXNlJztcbmltcG9ydCB7IExpbmsgYXMgU2Nyb2xsTGluayB9IGZyb20gXCJyZWFjdC1zY3JvbGxcIjtcblxuY29uc3QgTGlua3MgPSBbXG4gIC8vIHtsYWJlbDogJ0hvbWUnLCBsaW5rOiBcImhvbWVcIn0sIFxuICB7bGFiZWw6ICdBYm91dCBtZScsIGxpbms6IFwiYWJvdXRcIn0sXG4gIHtsYWJlbDogJ1NraWxscycsIGxpbms6IFwic2tpbGxzXCJ9LCBcbiAge2xhYmVsOiAnRXhwZXJpZW5jZScsIGxpbms6IFwiZXhwZXJpZW5jZVwifSwgXG4gIHtsYWJlbDogJ1Byb2plY3RzJywgbGluazogXCJwcm9qZWN0c1wifSwgXG4gIC8vIHtsYWJlbDogJ09mZmVycycsIGxpbms6IFwib2ZmZXJzXCJ9LCBcbiAge2xhYmVsOiAnQ29udGFjdCcsIGxpbms6IFwiY29udGFjdFwifSwgXG5dO1xuXG5jb25zdCBOYXZMaW5rID0gKHsgY2hpbGRyZW4sIGxpbmsgfTogeyBjaGlsZHJlbjogUmVhY3ROb2RlLCBsaW5rOiBzdHJpbmcgfSkgPT4ge1xuICBjb25zdCB7IGNvbG9yTW9kZSB9ID0gdXNlQ29sb3JNb2RlKCk7XG4gIFxuICByZXR1cm4gKFxuICAgIDxTY3JvbGxMaW5rXG4gICAgICBhY3RpdmVDbGFzcz1cImFjdGl2ZVwiXG4gICAgICB0bz17bGlua31cbiAgICAgIHNweT17dHJ1ZX1cbiAgICAgIHNtb290aD17dHJ1ZX1cbiAgICAgIG9mZnNldD17LTcwfVxuICAgICAgZHVyYXRpb249ezUwMH1cbiAgICA+XG4gICAgICA8TGlua1xuICAgICAgICBweD17Mn1cbiAgICAgICAgcHk9ezF9XG4gICAgICAgIHJvdW5kZWQ9eydtZCd9XG4gICAgICAgIF9ob3Zlcj17e1xuICAgICAgICAgIHRleHREZWNvcmF0aW9uOiAnbm9uZScsXG4gICAgICAgICAgY29sb3I6IChjb2xvck1vZGUgPT0gJ2xpZ2h0JyA/IFwiZ3JheS4zMDBcIiA6IFwiZ3JheS40MDBcIilcbiAgICAgICAgfX1cbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICB1c2VyU2VsZWN0OiBcIm5vbmVcIlxuICAgICAgICB9fVxuICAgICAgICBocmVmPXtsaW5rfVxuICAgICAgPlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L0xpbms+XG4gICAgPC9TY3JvbGxMaW5rPlxuICApXG59O1xuXG5leHBvcnQgY29uc3QgSGVhZGVyOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgY29uc3QgeyBpc09wZW4sIG9uT3Blbiwgb25DbG9zZSB9ID0gdXNlRGlzY2xvc3VyZSgpO1xuICBjb25zdCB7eX0gPSB1c2VXaW5kb3dTY3JvbGwoKTtcbiAgY29uc3Qge2hlaWdodH0gPSB1c2VXaW5kb3dTaXplKCk7XG4gIC8vIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKVxuICBjb25zdCB7IGNvbG9yTW9kZSwgdG9nZ2xlQ29sb3JNb2RlIH0gPSB1c2VDb2xvck1vZGUoKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8Qm94XG4gICAgICAgIGJnPXt5ID49IChoZWlnaHQgLSAxMDApID8gKGNvbG9yTW9kZSA9PSAnbGlnaHQnID8gXCJtYWluLjEwMFwiIDogXCJibGFja1wiKSA6IFwicmdiYSgwLDAsMCwwKVwifVxuICAgICAgICBweD17NH1cbiAgICAgICAgcG9zaXRpb249XCJmaXhlZFwiXG4gICAgICAgIHc9XCIxMDAlXCJcbiAgICAgICAgekluZGV4PVwiMTAwXCJcbiAgICAgICAgc3R5bGU9e3t0cmFuc2l0aW9uOiBcIjAuNHNcIn19XG4gICAgICAgIGNvbG9yPXt5ID49IChoZWlnaHQgLSAxMDApID8gXCJ3aGl0ZVwiIDogXCJ3aGl0ZVwifVxuICAgICAgPlxuICAgICAgICA8RmxleCBoPXsxNn0gYWxpZ25JdGVtcz17J2NlbnRlcid9IGp1c3RpZnlDb250ZW50PXsnc3BhY2UtYmV0d2Vlbid9PlxuICAgICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgICBzaXplPXsnbWQnfVxuICAgICAgICAgICAgY29sb3JTY2hlbWU9e2NvbG9yTW9kZSA9PSAnbGlnaHQnID8gXCJibGFja1wiIDogXCJncmF5XCJ9XG4gICAgICAgICAgICBpY29uPXtpc09wZW4gPyA8Q2xvc2VJY29uIC8+IDogPEhhbWJ1cmdlckljb24gdz17JzYwJSd9IGg9eyc2MCUnfSAvPn1cbiAgICAgICAgICAgIGFyaWEtbGFiZWw9eydPcGVuIE1lbnUnfVxuICAgICAgICAgICAgZGlzcGxheT17eyBtZDogIWlzT3BlbiA/ICdub25lJyA6ICdpbmhlcml0JyB9fVxuICAgICAgICAgICAgb25DbGljaz17aXNPcGVuID8gb25DbG9zZSA6IG9uT3Blbn1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxIU3RhY2sgc3BhY2luZz17OH0gYWxpZ25JdGVtcz17J2NlbnRlcid9PlxuICAgICAgICAgICAgey8qIDxCb3g+QW5kcmlzIELEk3J6a2FsbnM8L0JveD4gKi99XG4gICAgICAgICAgICA8SFN0YWNrXG4gICAgICAgICAgICAgIGFzPXsnbmF2J31cbiAgICAgICAgICAgICAgc3BhY2luZz17NH1cbiAgICAgICAgICAgICAgZGlzcGxheT17eyBiYXNlOiAnbm9uZScsIG1kOiAnZmxleCcgfX0+XG4gICAgICAgICAgICAgIHtMaW5rcy5tYXAoKGxpbmspID0+IChcbiAgICAgICAgICAgICAgICA8TmF2TGluayBrZXk9e2xpbmsubGlua30gbGluaz17bGluay5saW5rfT57bGluay5sYWJlbH08L05hdkxpbms+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9IU3RhY2s+XG4gICAgICAgICAgPC9IU3RhY2s+XG4gICAgICAgICAgPEZsZXggYWxpZ25JdGVtcz17J2NlbnRlcid9PlxuICAgICAgICAgICAgPE1lbnU+XG4gICAgICAgICAgICA8bGFiZWwgc3R5bGU9e3tkaXNwbGF5OiAnaGlkZGVuJ319PlxuICAgICAgICAgICAgICBUb2dnbGUgY29sb3IgbW9kZVxuICAgICAgICAgICAgICA8U3dpdGNoXG4gICAgICAgICAgICAgICAgc2l6ZT1cImxnXCJcbiAgICAgICAgICAgICAgICBjb2xvclNjaGVtZT1cImJsYWNrXCJcbiAgICAgICAgICAgICAgICBjdXJzb3I9eydwb2ludGVyJ31cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dG9nZ2xlQ29sb3JNb2RlfVxuICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8L1N3aXRjaD5cbiAgICAgICAgICAgIDwvbGFiZWw+XG5cbiAgICAgICAgICAgICAgey8qIDxNZW51TGlzdD5cbiAgICAgICAgICAgICAgICA8TWVudUl0ZW0+TGluayAxPC9NZW51SXRlbT5cbiAgICAgICAgICAgICAgICA8TWVudUl0ZW0+TGluayAyPC9NZW51SXRlbT5cbiAgICAgICAgICAgICAgICA8TWVudURpdmlkZXIgLz5cbiAgICAgICAgICAgICAgICA8TWVudUl0ZW0+TGluayAzPC9NZW51SXRlbT5cbiAgICAgICAgICAgICAgPC9NZW51TGlzdD4gKi99XG4gICAgICAgICAgICA8L01lbnU+XG4gICAgICAgICAgPC9GbGV4PlxuICAgICAgICA8L0ZsZXg+XG5cbiAgICAgICAge2lzT3BlbiA/IChcbiAgICAgICAgICA8Qm94IHBiPXs0fT5cbiAgICAgICAgICAgIDxTdGFjayBhcz17J25hdid9IHNwYWNpbmc9ezR9PlxuICAgICAgICAgICAgICB7TGlua3MubWFwKChsaW5rKSA9PiAoXG4gICAgICAgICAgICAgICAgPE5hdkxpbmsga2V5PXtsaW5rLmxpbmt9IGxpbms9e2xpbmsubGlua30+e2xpbmsubGFiZWx9PC9OYXZMaW5rPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgICkgOiBudWxsfVxuICAgICAgPC9Cb3g+XG4gICAgPC8+XG4gICk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==