webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/main/index.tsx":
/*!***************************************!*\
  !*** ./src/components/main/index.tsx ***!
  \***************************************/
/*! exports provided: Main */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Main", function() { return Main; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/esm/index.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-use */ "./node_modules/react-use/esm/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components */ "./src/components/index.ts");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-scroll */ "./node_modules/react-scroll/modules/index.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_5__);



var _jsxFileName = "C:\\Users\\berzk\\Documents\\Projects\\Portfolio-v2\\portfolio\\src\\components\\main\\index.tsx",
    _this = undefined,
    _s = $RefreshSig$();






var LIGHT_SIZE = 900;
var Main = function Main() {
  _s();

  var theme = Object(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["useTheme"])();
  var ref = react__WEBPACK_IMPORTED_MODULE_1___default.a.useRef(null);
  var canvasRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null); // const orientation = useOrientation();

  var _useColorMode = Object(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["useColorMode"])(),
      colorMode = _useColorMode.colorMode;

  var _useWindowSize = Object(react_use__WEBPACK_IMPORTED_MODULE_3__["useWindowSize"])(),
      width = _useWindowSize.width,
      height = _useWindowSize.height;

  var _useMouse = Object(react_use__WEBPACK_IMPORTED_MODULE_3__["useMouse"])(ref),
      elX = _useMouse.elX,
      elY = _useMouse.elY;

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (canvasRef.current) {
      var canvas = canvasRef.current;
      var context = canvas.getContext('2d');
      canvas.width = width;
      canvas.height = height;
      context.fillStyle = 'rgba(0,0,0,0.4)';
      context.fillRect(0, 0, context.canvas.width, context.canvas.height); // (0,0) the top left of the canvas

      context.clearRect(elX - LIGHT_SIZE / 2, 0, LIGHT_SIZE, context.canvas.height);
      var grd = context.createLinearGradient(elX - LIGHT_SIZE / 2, 0, elX + LIGHT_SIZE / 2, 0);
      grd.addColorStop(0, "rgba(0,0,0,0.4)");
      grd.addColorStop(0.5, "rgba(0,0,0,0)");
      grd.addColorStop(1, "rgba(0,0,0,0.4)");
      context.fillStyle = grd; // context.fillStyle = 'rgba(0,0,0,0.15)';

      context.fillRect(elX - LIGHT_SIZE / 2, 0, LIGHT_SIZE, context.canvas.height); // (0,0) the top left of the canvas
      // context.fillRect(elX + 150, 0, -50, context.canvas.height);  // (0,0) the top left of the canvas
      // context.fillStyle = 'rgba(0,0,0,0.15)';
      // context.fillRect(elX - 100, 0, 100, context.canvas.height);  // (0,0) the top left of the canvas
    }
  }, [elX, elY, width, height]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Box"] // bg="main.100"
    , {
      h: "100vh",
      w: "100%",
      color: "white",
      textAlign: "center",
      ref: ref,
      id: "home",
      style: {
        position: "relative",
        backgroundColor: "rgba(0,0,0,1)",
        backgroundSize: "auto ".concat(window.screen.height)
      },
      bgImage: "url('/images/main-img-compressed.jpg')",
      bgPosition: "center",
      bgRepeat: "no-repeat",
      bgAttachment: "fixed",
      bgSize: "cover",
      children: [width > 800 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("canvas", {
        style: {
          position: "absolute",
          top: 0,
          left: 0,
          width: '100%',
          height: '100%'
        },
        ref: canvasRef
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 100 100",
        preserveAspectRatio: "none",
        style: {
          position: "absolute",
          bottom: "0",
          width: "100%",
          height: "100px"
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("polygon", {
          fill: colorMode == 'light' ? "white" : "rgb(26,32,44)",
          points: "0,0 50,100 100,0 100,100 0,100 0,0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Center"], {
        h: "100%",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Box"], {
          "data-aos": "zoom-in",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Center"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Image"], {
              borderRadius: "full",
              boxSize: "150px",
              layout: "fill",
              src: "/images/profile-img-color.jpg",
              alt: "Profile image of Andris B\u0113rzkalns",
              style: {
                boxShadow: "0px 5px 10px #000"
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 86,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Text"], {
            textShadow: "0px 5px 10px #000",
            fontWeight: "bolder",
            fontSize: "4xl",
            px: 2,
            pt: 2,
            mb: 2,
            children: "Andris\xA0B\u0113rzkalns"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Text"], {
            textShadow: "0px 5px 10px #000",
            fontWeight: "bolder",
            style: {
              fontSize: theme.fontSizes["lg"]
            },
            children: "Software\xA0Engineer"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_scroll__WEBPACK_IMPORTED_MODULE_5__["Link"], {
            activeClass: "active",
            to: 'contact',
            spy: true,
            smooth: true,
            offset: -70,
            duration: 500,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_4__["Button"], {
              mt: 5,
              bg: 'purple',
              _hover: {
                background: "white",
                color: "black"
              },
              variant: "solid",
              style: {
                boxShadow: "0px 5px 10px #000"
              },
              children: "Contact me"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 107,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 99,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }, _this)
  }, void 0, false);
};

_s(Main, "Q4Dscu/7pMyz9Z7nI96mSvJ4QEM=", false, function () {
  return [_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["useTheme"], _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["useColorMode"], react_use__WEBPACK_IMPORTED_MODULE_3__["useWindowSize"], react_use__WEBPACK_IMPORTED_MODULE_3__["useMouse"]];
});

_c = Main;

var _c;

$RefreshReg$(_c, "Main");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvbWFpbi9pbmRleC50c3giXSwibmFtZXMiOlsiTElHSFRfU0laRSIsIk1haW4iLCJ0aGVtZSIsInVzZVRoZW1lIiwicmVmIiwiUmVhY3QiLCJ1c2VSZWYiLCJjYW52YXNSZWYiLCJ1c2VDb2xvck1vZGUiLCJjb2xvck1vZGUiLCJ1c2VXaW5kb3dTaXplIiwid2lkdGgiLCJoZWlnaHQiLCJ1c2VNb3VzZSIsImVsWCIsImVsWSIsInVzZUVmZmVjdCIsImN1cnJlbnQiLCJjYW52YXMiLCJjb250ZXh0IiwiZ2V0Q29udGV4dCIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwiY2xlYXJSZWN0IiwiZ3JkIiwiY3JlYXRlTGluZWFyR3JhZGllbnQiLCJhZGRDb2xvclN0b3AiLCJwb3NpdGlvbiIsImJhY2tncm91bmRDb2xvciIsImJhY2tncm91bmRTaXplIiwid2luZG93Iiwic2NyZWVuIiwidG9wIiwibGVmdCIsImJvdHRvbSIsImJveFNoYWRvdyIsImZvbnRTaXplIiwiZm9udFNpemVzIiwiYmFja2dyb3VuZCIsImNvbG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBLElBQU1BLFVBQVUsR0FBRyxHQUFuQjtBQUVPLElBQU1DLElBQWMsR0FBRyxTQUFqQkEsSUFBaUIsR0FBTTtBQUFBOztBQUNsQyxNQUFNQyxLQUFLLEdBQUdDLGlFQUFRLEVBQXRCO0FBQ0EsTUFBTUMsR0FBRyxHQUFHQyw0Q0FBSyxDQUFDQyxNQUFOLENBQWEsSUFBYixDQUFaO0FBQ0EsTUFBTUMsU0FBUyxHQUFHRCxvREFBTSxDQUFDLElBQUQsQ0FBeEIsQ0FIa0MsQ0FJbEM7O0FBSmtDLHNCQUtaRSxxRUFBWSxFQUxBO0FBQUEsTUFLMUJDLFNBTDBCLGlCQUsxQkEsU0FMMEI7O0FBQUEsdUJBTVJDLCtEQUFhLEVBTkw7QUFBQSxNQU0xQkMsS0FOMEIsa0JB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LFFBQWpEO0FBQTJELGlCQUFLLEVBQUU7QUFBRUMsc0JBQVEsRUFBRWxDLEtBQUssQ0FBQ21DLFNBQU4sQ0FBZ0IsSUFBaEI7QUFBWixhQUFsRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFaRixlQWVFLHFFQUFDLGlEQUFEO0FBQ0UsdUJBQVcsRUFBQyxRQURkO0FBRUUsY0FBRSxFQUFFLFNBRk47QUFHRSxlQUFHLEVBQUUsSUFIUDtBQUlFLGtCQUFNLEVBQUUsSUFKVjtBQUtFLGtCQUFNLEVBQUUsQ0FBQyxFQUxYO0FBTUUsb0JBQVEsRUFBRSxHQU5aO0FBQUEsbUNBUUUscUVBQUMsa0RBQUQ7QUFBUSxnQkFBRSxFQUFFLENBQVo7QUFBZSxnQkFBRSxFQUFFLFFBQW5CO0FBQTZCLG9CQUFNLEVBQUU7QUFBQ0MsMEJBQVUsRUFBRSxPQUFiO0FBQXNCQyxxQkFBSyxFQUFFO0FBQTdCLGVBQXJDO0FBQTRFLHFCQUFPLEVBQUMsT0FBcEY7QUFBNEYsbUJBQUssRUFBRTtBQUFDSix5QkFBUyxFQUFFO0FBQVosZUFBbkc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQWZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFuQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsbUJBREY7QUFxRkQsQ0F6SE07O0dBQU1sQyxJO1VBQ0dFLHlELEVBSVFLLDZELEVBQ0lFLHVELEVBQ0xHLGtEOzs7S0FQVlosSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC45OTJkOTkxZjQ4Nzc2NTViNDliNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBCb3gsIENlbnRlciwgdXNlVGhlbWUsIFRleHQsIEltYWdlLCB1c2VDb2xvck1vZGUgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0IHsgdXNlV2luZG93U2l6ZSwgdXNlTW91c2UsIHVzZU9yaWVudGF0aW9uIH0gZnJvbSBcInJlYWN0LXVzZVwiO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkBjb21wb25lbnRzXCI7XG5pbXBvcnQgeyBMaW5rIGFzIFNjcm9sbExpbmsgfSBmcm9tIFwicmVhY3Qtc2Nyb2xsXCI7XG5pbXBvcnQgeyBBcnJvd1JpZ2h0SWNvbiB9IGZyb20gXCJAY2hha3JhLXVpL2ljb25zXCI7XG5cbmNvbnN0IExJR0hUX1NJWkUgPSA5MDA7XG5cbmV4cG9ydCBjb25zdCBNYWluOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpO1xuICBjb25zdCByZWYgPSBSZWFjdC51c2VSZWYobnVsbCk7XG4gIGNvbnN0IGNhbnZhc1JlZiA9IHVzZVJlZihudWxsKTtcbiAgLy8gY29uc3Qgb3JpZW50YXRpb24gPSB1c2VPcmllbnRhdGlvbigpO1xuICBjb25zdCB7IGNvbG9yTW9kZSB9ID0gdXNlQ29sb3JNb2RlKCk7XG4gIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gdXNlV2luZG93U2l6ZSgpO1xuICBjb25zdCB7IGVsWCwgZWxZIH0gPSB1c2VNb3VzZShyZWYpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYoY2FudmFzUmVmLmN1cnJlbnQpIHtcbiAgICAgIGNvbnN0IGNhbnZhcyA9IGNhbnZhc1JlZi5jdXJyZW50XG4gICAgICBjb25zdCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJylcbiAgICAgIGNhbnZhcy53aWR0aCAgPSB3aWR0aDtcbiAgICAgIGNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XG5cbiAgICAgIFxuXG4gICAgICBjb250ZXh0LmZpbGxTdHlsZSA9ICdyZ2JhKDAsMCwwLDAuNCknO1xuICAgICAgY29udGV4dC5maWxsUmVjdCgwLCAwLCBjb250ZXh0LmNhbnZhcy53aWR0aCwgY29udGV4dC5jYW52YXMuaGVpZ2h0KTsgIC8vICgwLDApIHRoZSB0b3AgbGVmdCBvZiB0aGUgY2FudmFzXG4gICAgICBjb250ZXh0LmNsZWFyUmVjdChlbFggLSAoTElHSFRfU0laRSAvIDIpLCAwLCBMSUdIVF9TSVpFLCBjb250ZXh0LmNhbnZhcy5oZWlnaHQpO1xuICAgICAgY29uc3QgZ3JkID0gY29udGV4dC5jcmVhdGVMaW5lYXJHcmFkaWVudChlbFggLSAoTElHSFRfU0laRSAvIDIpLCAwLCBlbFggKyAoTElHSFRfU0laRSAvIDIpLCAwKTtcbiAgICAgIGdyZC5hZGRDb2xvclN0b3AoMCwgXCJyZ2JhKDAsMCwwLDAuNClcIik7XG4gICAgICBncmQuYWRkQ29sb3JTdG9wKDAuNSwgXCJyZ2JhKDAsMCwwLDApXCIpO1xuICAgICAgZ3JkLmFkZENvbG9yU3RvcCgxLCBcInJnYmEoMCwwLDAsMC40KVwiKTtcblxuICAgICAgY29udGV4dC5maWxsU3R5bGUgPSBncmQ7XG4gICAgICAvLyBjb250ZXh0LmZpbGxTdHlsZSA9ICdyZ2JhKDAsMCwwLDAuMTUpJztcbiAgICAgIGNvbnRleHQuZmlsbFJlY3QoZWxYIC0gKExJR0hUX1NJWkUgLyAyKSwgMCwgTElHSFRfU0laRSwgY29udGV4dC5jYW52YXMuaGVpZ2h0KTsgIC8vICgwLDApIHRoZSB0b3AgbGVmdCBvZiB0aGUgY2FudmFzXG4gICAgICAvLyBjb250ZXh0LmZpbGxSZWN0KGVsWCArIDE1MCwgMCwgLTUwLCBjb250ZXh0LmNhbnZhcy5oZWlnaHQpOyAgLy8gKDAsMCkgdGhlIHRvcCBsZWZ0IG9mIHRoZSBjYW52YXNcbiAgICAgIC8vIGNvbnRleHQuZmlsbFN0eWxlID0gJ3JnYmEoMCwwLDAsMC4xNSknO1xuICAgICAgLy8gY29udGV4dC5maWxsUmVjdChlbFggLSAxMDAsIDAsIDEwMCwgY29udGV4dC5jYW52YXMuaGVpZ2h0KTsgIC8vICgwLDApIHRoZSB0b3AgbGVmdCBvZiB0aGUgY2FudmFzXG5cbiAgICB9XG4gIH0sIFtlbFgsIGVsWSwgd2lkdGgsIGhlaWdodF0pXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEJveCBcbiAgICAgICAgLy8gYmc9XCJtYWluLjEwMFwiXG4gICAgICAgIGg9XCIxMDB2aFwiXG4gICAgICAgIHc9XCIxMDAlXCJcbiAgICAgICAgY29sb3I9XCJ3aGl0ZVwiXG4gICAgICAgIHRleHRBbGlnbj1cImNlbnRlclwiIFxuICAgICAgICByZWY9e3JlZn1cbiAgICAgICAgaWQ9XCJob21lXCJcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDAsMCwwLDEpXCIsXG4gICAgICAgICAgYmFja2dyb3VuZFNpemU6IGBhdXRvICR7d2luZG93LnNjcmVlbi5oZWlnaHR9YFxuICAgICAgICB9fVxuICAgICAgICBiZ0ltYWdlPVwidXJsKCcvaW1hZ2VzL21haW4taW1nLWNvbXByZXNzZWQuanBnJylcIlxuICAgICAgICBiZ1Bvc2l0aW9uPVwiY2VudGVyXCJcbiAgICAgICAgYmdSZXBlYXQ9XCJuby1yZXBlYXRcIlxuICAgICAgICBiZ0F0dGFjaG1lbnQ9XCJmaXhlZFwiXG4gICAgICAgIGJnU2l6ZT1cImNvdmVyXCJcbiAgICAgID5cbiAgICAgICAge1xuICAgICAgICAgIHdpZHRoID4gODAwICYmXG4gICAgICAgICAgPGNhbnZhcyBzdHlsZT17e3Bvc2l0aW9uOiBcImFic29sdXRlXCIsIHRvcDogMCwgbGVmdDogMCwgd2lkdGg6ICcxMDAlJywgaGVpZ2h0OiAnMTAwJSd9fSByZWY9e2NhbnZhc1JlZn0gLz5cbiAgICAgICAgfVxuICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDEwMCAxMDBcIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPVwibm9uZVwiXG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgICAgICAgICBib3R0b206IFwiMFwiLFxuICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICAgICAgaGVpZ2h0OiBcIjEwMHB4XCJcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgey8qIDxwb2x5Z29uIGZpbGw9XCJ3aGl0ZVwiIHBvaW50cz1cIjAsMTAwIDUwLDAgMTAwLDEwMFwiLz4gKi99XG4gICAgICAgICAgPHBvbHlnb24gZmlsbD17Y29sb3JNb2RlID09ICdsaWdodCcgPyBcIndoaXRlXCIgOiBcInJnYigyNiwzMiw0NClcIiB9IHBvaW50cz1cIjAsMCA1MCwxMDAgMTAwLDAgMTAwLDEwMCAwLDEwMCAwLDBcIi8+XG4gICAgICAgICAgey8qIDxwb2x5Z29uIGZpbGw9e1wid2hpdGVcIn0gcG9pbnRzPVwiMCwwIDUwLDEwMCAxMDAsMCAxMDAsMTAwIDAsMTAwIDAsMFwiLz4gKi99XG4gICAgICAgIDwvc3ZnPlxuICAgICAgICA8Q2VudGVyIGg9XCIxMDAlXCI+XG4gICAgICAgICAgPEJveCBkYXRhLWFvcz1cInpvb20taW5cIj5cbiAgICAgICAgICAgIDxDZW50ZXI+XG4gICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1cz1cImZ1bGxcIlxuICAgICAgICAgICAgICAgIGJveFNpemU9XCIxNTBweFwiXG4gICAgICAgICAgICAgICAgbGF5b3V0PVwiZmlsbFwiXG4gICAgICAgICAgICAgICAgc3JjPVwiL2ltYWdlcy9wcm9maWxlLWltZy1jb2xvci5qcGdcIlxuICAgICAgICAgICAgICAgIGFsdD1cIlByb2ZpbGUgaW1hZ2Ugb2YgQW5kcmlzIELEk3J6a2FsbnNcIlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7Ym94U2hhZG93OiBcIjBweCA1cHggMTBweCAjMDAwXCJ9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9DZW50ZXI+XG4gICAgICAgICAgICA8VGV4dCB0ZXh0U2hhZG93PVwiMHB4IDVweCAxMHB4ICMwMDBcIiBmb250V2VpZ2h0PXtcImJvbGRlclwifSBmb250U2l6ZT1cIjR4bFwiIHB4PXsyfSBwdD17Mn0gbWI9ezJ9PkFuZHJpcyZuYnNwO0LEk3J6a2FsbnM8L1RleHQ+XG4gICAgICAgICAgICA8VGV4dCB0ZXh0U2hhZG93PVwiMHB4IDVweCAxMHB4ICMwMDBcIiBmb250V2VpZ2h0PXtcImJvbGRlclwifSBzdHlsZT17eyBmb250U2l6ZTogdGhlbWUuZm9udFNpemVzW1wibGdcIl0gfX0+XG4gICAgICAgICAgICAgIFNvZnR3YXJlJm5ic3A7RW5naW5lZXJcbiAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgIDxTY3JvbGxMaW5rXG4gICAgICAgICAgICAgIGFjdGl2ZUNsYXNzPVwiYWN0aXZlXCJcbiAgICAgICAgICAgICAgdG89eydjb250YWN0J31cbiAgICAgICAgICAgICAgc3B5PXt0cnVlfVxuICAgICAgICAgICAgICBzbW9vdGg9e3RydWV9XG4gICAgICAgICAgICAgIG9mZnNldD17LTcwfVxuICAgICAgICAgICAgICBkdXJhdGlvbj17NTAwfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8QnV0dG9uIG10PXs1fSBiZz17J3B1cnBsZSd9IF9ob3Zlcj17e2JhY2tncm91bmQ6IFwid2hpdGVcIiwgY29sb3I6IFwiYmxhY2tcIn19IHZhcmlhbnQ9XCJzb2xpZFwiIHN0eWxlPXt7Ym94U2hhZG93OiBcIjBweCA1cHggMTBweCAjMDAwXCJ9fT5Db250YWN0IG1lPC9CdXR0b24+XG4gICAgICAgICAgICA8L1Njcm9sbExpbms+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgey8qIDxCb3ggcG9zaXRpb249XCJhYnNvbHV0ZVwiIGJvdHRvbT17e2Jhc2U6IDAsIHNtOiAyMH19IF9ob3Zlcj17e2N1cnNvcjogXCJwb2ludGVyXCIsIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGVZKDVweClcIn19PlxuICAgICAgICAgICAgPFNjcm9sbExpbmtcbiAgICAgICAgICAgICAgYWN0aXZlQ2xhc3M9XCJhY3RpdmVcIlxuICAgICAgICAgICAgICB0bz17J2Fib3V0J31cbiAgICAgICAgICAgICAgc3B5PXt0cnVlfVxuICAgICAgICAgICAgICBzbW9vdGg9e3RydWV9XG4gICAgICAgICAgICAgIG9mZnNldD17LTcwfVxuICAgICAgICAgICAgICBkdXJhdGlvbj17NTAwfVxuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPENlbnRlcj5cbiAgICAgICAgICAgICAgICA8QXJyb3dSaWdodEljb24gc3R5bGU9e3t0cmFuc2Zvcm06IFwicm90YXRlKDkwZGVnKVwifX0gY29sb3I9XCJ3aGl0ZVwiIHc9XCI2XCIgaD1cIjZcIi8+XG4gICAgICAgICAgICAgIDwvQ2VudGVyPlxuICAgICAgICAgICAgPC9TY3JvbGxMaW5rPlxuICAgICAgICAgIDwvQm94PiAqL31cbiAgICAgICAgPC9DZW50ZXI+XG4gICAgICA8L0JveD5cbiAgICA8Lz5cbiAgKTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9