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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJMaW5rcyIsImxhYmVsIiwibGluayIsIk5hdkxpbmsiLCJjaGlsZHJlbiIsInVzZUNvbG9yTW9kZSIsImNvbG9yTW9kZSIsInRleHREZWNvcmF0aW9uIiwiY29sb3IiLCJ1c2VyU2VsZWN0IiwiSGVhZGVyIiwidXNlRGlzY2xvc3VyZSIsImlzT3BlbiIsIm9uT3BlbiIsIm9uQ2xvc2UiLCJ1c2VXaW5kb3dTY3JvbGwiLCJ5IiwidXNlV2luZG93U2l6ZSIsImhlaWdodCIsInRvZ2dsZUNvbG9yTW9kZSIsInRyYW5zaXRpb24iLCJtZCIsImJhc2UiLCJtYXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQVlBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLEtBQUssR0FBRyxDQUNaO0FBQ0E7QUFBQ0MsT0FBSyxFQUFFLFVBQVI7QUFBb0JDLE1BQUksRUFBRTtBQUExQixDQUZZLEVBR1o7QUFBQ0QsT0FBSyxFQUFFLFFBQVI7QUFBa0JDLE1BQUksRUFBRTtBQUF4QixDQUhZLEVBSVo7QUFBQ0QsT0FBSyxFQUFFLFlBQVI7QUFBc0JDLE1BQUksRUFBRTtBQUE1QixDQUpZLEVBS1o7QUFBQ0QsT0FBSyxFQUFFLFVBQVI7QUFBb0JDLE1BQUksRUFBRTtBQUExQixDQUxZLEVBTVo7QUFDQTtBQUFDRCxPQUFLLEVBQUUsU0FBUjtBQUFtQkMsTUFBSSxFQUFFO0FBQXpCLENBUFksQ0FBZDs7QUFVQSxJQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxPQUErRDtBQUFBOztBQUFBLE1BQTVEQyxRQUE0RCxRQUE1REEsUUFBNEQ7QUFBQSxNQUFsREYsSUFBa0QsUUFBbERBLElBQWtEOztBQUFBLHNCQUN2REcscUVBQVksRUFEMkM7QUFBQSxNQUNyRUMsU0FEcUUsaUJBQ3JFQSxTQURxRTs7QUFHN0Usc0JBQ0UscUVBQUMs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Q0FDVCxxRUFBQyxPQUFEO0FBQXlCLGtCQUFJLEVBQUVBLElBQUksQ0FBQ0EsSUFBcEM7QUFBQSx3QkFBMkNBLElBQUksQ0FBQ0Q7QUFBaEQsZUFBY0MsSUFBSSxDQUFDQSxJQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURTO0FBQUEsV0FBVjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREssR0FRSCxJQTlETjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixtQkFERjtBQW9FRCxDQTNFTTs7SUFBTVEsTTtVQUN5QkMsOEQsRUFDeEJJLHlELEVBQ0tFLHVELEVBRXNCWiw2RDs7O01BTDVCSyxNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjVmYTEwMmNmMjE3ZTJiZjcwMGIwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUmVhY3ROb2RlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1xuICBCb3gsXG4gIEZsZXgsXG4gIEhTdGFjayxcbiAgTGluayxcbiAgSWNvbkJ1dHRvbixcbiAgTWVudSxcbiAgU3dpdGNoLFxuICBTdGFjayxcbiAgdXNlRGlzY2xvc3VyZSxcbiAgdXNlQ29sb3JNb2RlLFxufSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcbmltcG9ydCB7IEhhbWJ1cmdlckljb24sIENsb3NlSWNvbiB9IGZyb20gJ0BjaGFrcmEtdWkvaWNvbnMnO1xuaW1wb3J0IHsgdXNlV2luZG93U2Nyb2xsLCB1c2VXaW5kb3dTaXplIH0gZnJvbSAncmVhY3QtdXNlJztcbmltcG9ydCB7IExpbmsgYXMgU2Nyb2xsTGluayB9IGZyb20gXCJyZWFjdC1zY3JvbGxcIjtcblxuY29uc3QgTGlua3MgPSBbXG4gIC8vIHtsYWJlbDogJ0hvbWUnLCBsaW5rOiBcImhvbWVcIn0sIFxuICB7bGFiZWw6ICdBYm91dCBtZScsIGxpbms6IFwiYWJvdXRcIn0sXG4gIHtsYWJlbDogJ1NraWxscycsIGxpbms6IFwic2tpbGxzXCJ9LCBcbiAge2xhYmVsOiAnRXhwZXJpZW5jZScsIGxpbms6IFwiZXhwZXJpZW5jZVwifSwgXG4gIHtsYWJlbDogJ1Byb2plY3RzJywgbGluazogXCJwcm9qZWN0c1wifSwgXG4gIC8vIHtsYWJlbDogJ09mZmVycycsIGxpbms6IFwib2ZmZXJzXCJ9LCBcbiAge2xhYmVsOiAnQ29udGFjdCcsIGxpbms6IFwiY29udGFjdFwifSwgXG5dO1xuXG5jb25zdCBOYXZMaW5rID0gKHsgY2hpbGRyZW4sIGxpbmsgfTogeyBjaGlsZHJlbjogUmVhY3ROb2RlLCBsaW5rOiBzdHJpbmcgfSkgPT4ge1xuICBjb25zdCB7IGNvbG9yTW9kZSB9ID0gdXNlQ29sb3JNb2RlKCk7XG4gIFxuICByZXR1cm4gKFxuICAgIDxTY3JvbGxMaW5rXG4gICAgICBhY3RpdmVDbGFzcz1cImFjdGl2ZVwiXG4gICAgICB0bz17bGlua31cbiAgICAgIHNweT17dHJ1ZX1cbiAgICAgIHNtb290aD17dHJ1ZX1cbiAgICAgIG9mZnNldD17LTcwfVxuICAgICAgZHVyYXRpb249ezUwMH1cbiAgICA+XG4gICAgICA8TGlua1xuICAgICAgICBweD17Mn1cbiAgICAgICAgcHk9ezF9XG4gICAgICAgIHJvdW5kZWQ9eydtZCd9XG4gICAgICAgIF9ob3Zlcj17e1xuICAgICAgICAgIHRleHREZWNvcmF0aW9uOiAnbm9uZScsXG4gICAgICAgICAgY29sb3I6IChjb2xvck1vZGUgPT0gJ2xpZ2h0JyA/IFwiZ3JheS4zMDBcIiA6IFwiZ3JheS40MDBcIilcbiAgICAgICAgfX1cbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICB1c2VyU2VsZWN0OiBcIm5vbmVcIlxuICAgICAgICB9fVxuICAgICAgICBocmVmPXtsaW5rfVxuICAgICAgPlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L0xpbms+XG4gICAgPC9TY3JvbGxMaW5rPlxuICApXG59O1xuXG5leHBvcnQgY29uc3QgSGVhZGVyOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgY29uc3QgeyBpc09wZW4sIG9uT3Blbiwgb25DbG9zZSB9ID0gdXNlRGlzY2xvc3VyZSgpO1xuICBjb25zdCB7eX0gPSB1c2VXaW5kb3dTY3JvbGwoKTtcbiAgY29uc3Qge2hlaWdodH0gPSB1c2VXaW5kb3dTaXplKCk7XG4gIC8vIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKVxuICBjb25zdCB7IGNvbG9yTW9kZSwgdG9nZ2xlQ29sb3JNb2RlIH0gPSB1c2VDb2xvck1vZGUoKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8Qm94XG4gICAgICAgIGJnPXt5ID49IChoZWlnaHQgLSAxMDApID8gKGNvbG9yTW9kZSA9PSAnbGlnaHQnID8gXCJtYWluLjEwMFwiIDogXCJibGFja1wiKSA6IFwicmdiYSgwLDAsMCwwKVwifVxuICAgICAgICBweD17NH1cbiAgICAgICAgcG9zaXRpb249XCJmaXhlZFwiXG4gICAgICAgIHc9XCIxMDAlXCJcbiAgICAgICAgekluZGV4PVwiMTAwXCJcbiAgICAgICAgc3R5bGU9e3t0cmFuc2l0aW9uOiBcIjAuNHNcIn19XG4gICAgICAgIGNvbG9yPXt5ID49IChoZWlnaHQgLSAxMDApID8gXCJ3aGl0ZVwiIDogXCJ3aGl0ZVwifVxuICAgICAgPlxuICAgICAgICA8RmxleCBoPXsxNn0gYWxpZ25JdGVtcz17J2NlbnRlcid9IGp1c3RpZnlDb250ZW50PXsnc3BhY2UtYmV0d2Vlbid9PlxuICAgICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgICBzaXplPXsnbWQnfVxuICAgICAgICAgICAgY29sb3JTY2hlbWU9e2NvbG9yTW9kZSA9PSAnbGlnaHQnID8gXCJibGFja1wiIDogXCJncmF5XCJ9XG4gICAgICAgICAgICBpY29uPXtpc09wZW4gPyA8Q2xvc2VJY29uIC8+IDogPEhhbWJ1cmdlckljb24gdz17JzYwJSd9IGg9eyc2MCUnfSAvPn1cbiAgICAgICAgICAgIGFyaWEtbGFiZWw9eydPcGVuIE1lbnUnfVxuICAgICAgICAgICAgZGlzcGxheT17eyBtZDogIWlzT3BlbiA/ICdub25lJyA6ICdpbmhlcml0JyB9fVxuICAgICAgICAgICAgb25DbGljaz17aXNPcGVuID8gb25DbG9zZSA6IG9uT3Blbn1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxIU3RhY2sgc3BhY2luZz17OH0gYWxpZ25JdGVtcz17J2NlbnRlcid9PlxuICAgICAgICAgICAgey8qIDxCb3g+QW5kcmlzIELEk3J6a2FsbnM8L0JveD4gKi99XG4gICAgICAgICAgICA8SFN0YWNrXG4gICAgICAgICAgICAgIGFzPXsnbmF2J31cbiAgICAgICAgICAgICAgc3BhY2luZz17NH1cbiAgICAgICAgICAgICAgZGlzcGxheT17eyBiYXNlOiAnbm9uZScsIG1kOiAnZmxleCcgfX0+XG4gICAgICAgICAgICAgIHtMaW5rcy5tYXAoKGxpbmspID0+IChcbiAgICAgICAgICAgICAgICA8TmF2TGluayBrZXk9e2xpbmsubGlua30gbGluaz17bGluay5saW5rfT57bGluay5sYWJlbH08L05hdkxpbms+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9IU3RhY2s+XG4gICAgICAgICAgPC9IU3RhY2s+XG4gICAgICAgICAgPEZsZXggYWxpZ25JdGVtcz17J2NlbnRlcid9PlxuICAgICAgICAgICAgPE1lbnU+XG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiY29sb3ItbW9kZVwiPlxuICAgICAgICAgICAgICAgIFRvZ2dsZSBjb2xvciBtb2RlXG4gICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgIDxTd2l0Y2hcbiAgICAgICAgICAgICAgICBpZD1cImNvbG9yLW1vZGVcIlxuICAgICAgICAgICAgICAgIHNpemU9XCJsZ1wiXG4gICAgICAgICAgICAgICAgbWw9ezJ9XG4gICAgICAgICAgICAgICAgY29sb3JTY2hlbWU9XCJibGFja1wiXG4gICAgICAgICAgICAgICAgY3Vyc29yPXsncG9pbnRlcid9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RvZ2dsZUNvbG9yTW9kZX1cbiAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPC9Td2l0Y2g+XG4gICAgICAgICAgICAgIHsvKiA8TWVudUxpc3Q+XG4gICAgICAgICAgICAgICAgPE1lbnVJdGVtPkxpbmsgMTwvTWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgPE1lbnVJdGVtPkxpbmsgMjwvTWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgPE1lbnVEaXZpZGVyIC8+XG4gICAgICAgICAgICAgICAgPE1lbnVJdGVtPkxpbmsgMzwvTWVudUl0ZW0+XG4gICAgICAgICAgICAgIDwvTWVudUxpc3Q+ICovfVxuICAgICAgICAgICAgPC9NZW51PlxuICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgPC9GbGV4PlxuXG4gICAgICAgIHtpc09wZW4gPyAoXG4gICAgICAgICAgPEJveCBwYj17NH0+XG4gICAgICAgICAgICA8U3RhY2sgYXM9eyduYXYnfSBzcGFjaW5nPXs0fT5cbiAgICAgICAgICAgICAge0xpbmtzLm1hcCgobGluaykgPT4gKFxuICAgICAgICAgICAgICAgIDxOYXZMaW5rIGtleT17bGluay5saW5rfSBsaW5rPXtsaW5rLmxpbmt9PntsaW5rLmxhYmVsfTwvTmF2TGluaz5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICApIDogbnVsbH1cbiAgICAgIDwvQm94PlxuICAgIDwvPlxuICApO1xufSJdLCJzb3VyY2VSb290IjoiIn0=