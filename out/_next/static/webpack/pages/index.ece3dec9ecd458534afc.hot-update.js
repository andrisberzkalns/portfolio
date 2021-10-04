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
        backgroundColor: "rgba(0,0,0,1)"
      },
      bgImage: "url('/images/main-img.jpg')",
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
        lineNumber: 68,
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
          lineNumber: 79,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
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
              alt: "Andris B\u0113rzkalns",
              style: {
                boxShadow: "0px 5px 10px #000"
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 85,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Text"], {
            textShadow: "0px 5px 10px #000",
            fontWeight: "bolder",
            style: {
              fontSize: theme.fontSizes["4xl"],
              padding: 0,
              margin: 0
            },
            children: "Hi, I'm Andris B\u0113rzkalns"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Text"], {
            textShadow: "0px 5px 10px #000",
            fontWeight: "bolder",
            style: {
              fontSize: theme.fontSizes["lg"]
            },
            children: "I am a Software Engineer"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 95,
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
              lineNumber: 106,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 82,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvbWFpbi9pbmRleC50c3giXSwibmFtZXMiOlsiTElHSFRfU0laRSIsIk1haW4iLCJ0aGVtZSIsInVzZVRoZW1lIiwicmVmIiwiUmVhY3QiLCJ1c2VSZWYiLCJjYW52YXNSZWYiLCJ1c2VDb2xvck1vZGUiLCJjb2xvck1vZGUiLCJ1c2VXaW5kb3dTaXplIiwid2lkdGgiLCJoZWlnaHQiLCJ1c2VNb3VzZSIsImVsWCIsImVsWSIsInVzZUVmZmVjdCIsImN1cnJlbnQiLCJjYW52YXMiLCJjb250ZXh0IiwiZ2V0Q29udGV4dCIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwiY2xlYXJSZWN0IiwiZ3JkIiwiY3JlYXRlTGluZWFyR3JhZGllbnQiLCJhZGRDb2xvclN0b3AiLCJwb3NpdGlvbiIsImJhY2tncm91bmRDb2xvciIsInRvcCIsImxlZnQiLCJib3R0b20iLCJib3hTaGFkb3ciLCJmb250U2l6ZSIsImZvbnRTaXplcyIsInBhZGRpbmciLCJtYXJnaW4iLCJiYWNrZ3JvdW5kIiwiY29sb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0EsSUFBTUEsVUFBVSxHQUFHLEdBQW5CO0FBRU8sSUFBTUMsSUFBYyxHQUFHLFNBQWpCQSxJQUFpQixHQUFNO0FBQUE7O0FBQ2xDLE1BQU1DLEtBQUssR0FBR0MsaUVBQVEsRUFBdEI7QUFDQSxNQUFNQyxHQUFHLEdBQUdDLDRDQUFLLENBQUNDLE1BQU4sQ0FBYSxJQUFiLENBQVo7QUFDQSxNQUFNQyxTQUFTLEdBQUdELG9EQUFNLENBQUMsSUFBRCxDQUF4QixDQUhrQyxDQUlsQzs7QUFKa0Msc0JBS1pFLHFFQUFZLEVBTEE7QUFBQSxNQUsxQkMsU0FMMEIsaUJBSzFCQSxTQUwwQjs7QUFBQSx1QkFNUkMsK0RBQWEsRUFOTDtBQUFBLE1BTTFCQyxLQU4wQixrQkFNMUJBLEtBTjBCO0FBQUEs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LEVBQUUvQixLQUFLLENBQUNnQyxTQUFOLENBQWdCLElBQWhCO0FBQVosYUFBbkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBWkYsZUFlRSxxRUFBQyxpREFBRDtBQUNFLHVCQUFXLEVBQUMsUUFEZDtBQUVFLGNBQUUsRUFBRSxTQUZOO0FBR0UsZUFBRyxFQUFFLElBSFA7QUFJRSxrQkFBTSxFQUFFLElBSlY7QUFLRSxrQkFBTSxFQUFFLENBQUMsRUFMWDtBQU1FLG9CQUFRLEVBQUUsR0FOWjtBQUFBLG1DQVFFLHFFQUFDLGtEQUFEO0FBQVEsZ0JBQUUsRUFBRSxDQUFaO0FBQWUsZ0JBQUUsRUFBRSxRQUFuQjtBQUE2QixvQkFBTSxFQUFFO0FBQUNHLDBCQUFVLEVBQUUsT0FBYjtBQUFzQkMscUJBQUssRUFBRTtBQUE3QixlQUFyQztBQUE0RSxxQkFBTyxFQUFDLE9BQXBGO0FBQTRGLG1CQUFLLEVBQUU7QUFBQ04seUJBQVMsRUFBRTtBQUFaLGVBQW5HO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFmRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBbENGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLG1CQURGO0FBb0ZELENBeEhNOztHQUFNL0IsSTtVQUNHRSx5RCxFQUlRSyw2RCxFQUNJRSx1RCxFQUNMRyxrRDs7O0tBUFZaLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZWNlM2RlYzllY2Q0NTg1MzRhZmMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQm94LCBDZW50ZXIsIHVzZVRoZW1lLCBUZXh0LCBJbWFnZSwgdXNlQ29sb3JNb2RlIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcbmltcG9ydCB7IHVzZVdpbmRvd1NpemUsIHVzZU1vdXNlLCB1c2VPcmllbnRhdGlvbiB9IGZyb20gXCJyZWFjdC11c2VcIjtcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgTGluayBhcyBTY3JvbGxMaW5rIH0gZnJvbSBcInJlYWN0LXNjcm9sbFwiO1xuaW1wb3J0IHsgQXJyb3dSaWdodEljb24gfSBmcm9tIFwiQGNoYWtyYS11aS9pY29uc1wiO1xuXG5jb25zdCBMSUdIVF9TSVpFID0gOTAwO1xuXG5leHBvcnQgY29uc3QgTWFpbjogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcbiAgY29uc3QgcmVmID0gUmVhY3QudXNlUmVmKG51bGwpO1xuICBjb25zdCBjYW52YXNSZWYgPSB1c2VSZWYobnVsbCk7XG4gIC8vIGNvbnN0IG9yaWVudGF0aW9uID0gdXNlT3JpZW50YXRpb24oKTtcbiAgY29uc3QgeyBjb2xvck1vZGUgfSA9IHVzZUNvbG9yTW9kZSgpO1xuICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IHVzZVdpbmRvd1NpemUoKTtcbiAgY29uc3QgeyBlbFgsIGVsWSB9ID0gdXNlTW91c2UocmVmKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmKGNhbnZhc1JlZi5jdXJyZW50KSB7XG4gICAgICBjb25zdCBjYW52YXMgPSBjYW52YXNSZWYuY3VycmVudFxuICAgICAgY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpXG4gICAgICBjYW52YXMud2lkdGggID0gd2lkdGg7XG4gICAgICBjYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xuXG4gICAgICBcblxuICAgICAgY29udGV4dC5maWxsU3R5bGUgPSAncmdiYSgwLDAsMCwwLjQpJztcbiAgICAgIGNvbnRleHQuZmlsbFJlY3QoMCwgMCwgY29udGV4dC5jYW52YXMud2lkdGgsIGNvbnRleHQuY2FudmFzLmhlaWdodCk7ICAvLyAoMCwwKSB0aGUgdG9wIGxlZnQgb2YgdGhlIGNhbnZhc1xuICAgICAgY29udGV4dC5jbGVhclJlY3QoZWxYIC0gKExJR0hUX1NJWkUgLyAyKSwgMCwgTElHSFRfU0laRSwgY29udGV4dC5jYW52YXMuaGVpZ2h0KTtcbiAgICAgIGNvbnN0IGdyZCA9IGNvbnRleHQuY3JlYXRlTGluZWFyR3JhZGllbnQoZWxYIC0gKExJR0hUX1NJWkUgLyAyKSwgMCwgZWxYICsgKExJR0hUX1NJWkUgLyAyKSwgMCk7XG4gICAgICBncmQuYWRkQ29sb3JTdG9wKDAsIFwicmdiYSgwLDAsMCwwLjQpXCIpO1xuICAgICAgZ3JkLmFkZENvbG9yU3RvcCgwLjUsIFwicmdiYSgwLDAsMCwwKVwiKTtcbiAgICAgIGdyZC5hZGRDb2xvclN0b3AoMSwgXCJyZ2JhKDAsMCwwLDAuNClcIik7XG5cbiAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gZ3JkO1xuICAgICAgLy8gY29udGV4dC5maWxsU3R5bGUgPSAncmdiYSgwLDAsMCwwLjE1KSc7XG4gICAgICBjb250ZXh0LmZpbGxSZWN0KGVsWCAtIChMSUdIVF9TSVpFIC8gMiksIDAsIExJR0hUX1NJWkUsIGNvbnRleHQuY2FudmFzLmhlaWdodCk7ICAvLyAoMCwwKSB0aGUgdG9wIGxlZnQgb2YgdGhlIGNhbnZhc1xuICAgICAgLy8gY29udGV4dC5maWxsUmVjdChlbFggKyAxNTAsIDAsIC01MCwgY29udGV4dC5jYW52YXMuaGVpZ2h0KTsgIC8vICgwLDApIHRoZSB0b3AgbGVmdCBvZiB0aGUgY2FudmFzXG4gICAgICAvLyBjb250ZXh0LmZpbGxTdHlsZSA9ICdyZ2JhKDAsMCwwLDAuMTUpJztcbiAgICAgIC8vIGNvbnRleHQuZmlsbFJlY3QoZWxYIC0gMTAwLCAwLCAxMDAsIGNvbnRleHQuY2FudmFzLmhlaWdodCk7ICAvLyAoMCwwKSB0aGUgdG9wIGxlZnQgb2YgdGhlIGNhbnZhc1xuXG4gICAgfVxuICB9LCBbZWxYLCBlbFksIHdpZHRoLCBoZWlnaHRdKVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxCb3ggXG4gICAgICAgIC8vIGJnPVwibWFpbi4xMDBcIlxuICAgICAgICBoPVwiMTAwdmhcIlxuICAgICAgICB3PVwiMTAwJVwiXG4gICAgICAgIGNvbG9yPVwid2hpdGVcIlxuICAgICAgICB0ZXh0QWxpZ249XCJjZW50ZXJcIiBcbiAgICAgICAgcmVmPXtyZWZ9XG4gICAgICAgIGlkPVwiaG9tZVwiXG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgwLDAsMCwxKVwiXG4gICAgICAgIH19XG4gICAgICAgIGJnSW1hZ2U9XCJ1cmwoJy9pbWFnZXMvbWFpbi1pbWcuanBnJylcIlxuICAgICAgICBiZ1Bvc2l0aW9uPVwiY2VudGVyXCJcbiAgICAgICAgYmdSZXBlYXQ9XCJuby1yZXBlYXRcIlxuICAgICAgICBiZ0F0dGFjaG1lbnQ9XCJmaXhlZFwiXG4gICAgICAgIGJnU2l6ZT1cImNvdmVyXCJcbiAgICAgID5cbiAgICAgICAge1xuICAgICAgICAgIHdpZHRoID4gODAwICYmXG4gICAgICAgICAgPGNhbnZhcyBzdHlsZT17e3Bvc2l0aW9uOiBcImFic29sdXRlXCIsIHRvcDogMCwgbGVmdDogMCwgd2lkdGg6ICcxMDAlJywgaGVpZ2h0OiAnMTAwJSd9fSByZWY9e2NhbnZhc1JlZn0gLz5cbiAgICAgICAgfVxuICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDEwMCAxMDBcIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPVwibm9uZVwiXG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgICAgICAgICBib3R0b206IFwiMFwiLFxuICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICAgICAgaGVpZ2h0OiBcIjEwMHB4XCJcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgey8qIDxwb2x5Z29uIGZpbGw9XCJ3aGl0ZVwiIHBvaW50cz1cIjAsMTAwIDUwLDAgMTAwLDEwMFwiLz4gKi99XG4gICAgICAgICAgPHBvbHlnb24gZmlsbD17Y29sb3JNb2RlID09ICdsaWdodCcgPyBcIndoaXRlXCIgOiBcInJnYigyNiwzMiw0NClcIiB9IHBvaW50cz1cIjAsMCA1MCwxMDAgMTAwLDAgMTAwLDEwMCAwLDEwMCAwLDBcIi8+XG4gICAgICAgICAgey8qIDxwb2x5Z29uIGZpbGw9e1wid2hpdGVcIn0gcG9pbnRzPVwiMCwwIDUwLDEwMCAxMDAsMCAxMDAsMTAwIDAsMTAwIDAsMFwiLz4gKi99XG4gICAgICAgIDwvc3ZnPlxuICAgICAgICA8Q2VudGVyIGg9XCIxMDAlXCI+XG4gICAgICAgICAgPEJveCBkYXRhLWFvcz1cInpvb20taW5cIj5cbiAgICAgICAgICAgIDxDZW50ZXI+XG4gICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1cz1cImZ1bGxcIlxuICAgICAgICAgICAgICAgIGJveFNpemU9XCIxNTBweFwiXG4gICAgICAgICAgICAgICAgbGF5b3V0PVwiZmlsbFwiXG4gICAgICAgICAgICAgICAgc3JjPVwiL2ltYWdlcy9wcm9maWxlLWltZy1jb2xvci5qcGdcIlxuICAgICAgICAgICAgICAgIGFsdD1cIkFuZHJpcyBCxJNyemthbG5zXCJcbiAgICAgICAgICAgICAgICBzdHlsZT17e2JveFNoYWRvdzogXCIwcHggNXB4IDEwcHggIzAwMFwifX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvQ2VudGVyPlxuICAgICAgICAgICAgPFRleHQgdGV4dFNoYWRvdz1cIjBweCA1cHggMTBweCAjMDAwXCIgZm9udFdlaWdodD17XCJib2xkZXJcIn0gc3R5bGU9e3sgZm9udFNpemU6IHRoZW1lLmZvbnRTaXplc1tcIjR4bFwiXSwgcGFkZGluZzogMCwgbWFyZ2luOiAwIH19PkhpLCBJJ20gQW5kcmlzIELEk3J6a2FsbnM8L1RleHQ+XG4gICAgICAgICAgICA8VGV4dCB0ZXh0U2hhZG93PVwiMHB4IDVweCAxMHB4ICMwMDBcIiBmb250V2VpZ2h0PXtcImJvbGRlclwifSAgc3R5bGU9e3sgZm9udFNpemU6IHRoZW1lLmZvbnRTaXplc1tcImxnXCJdIH19PlxuICAgICAgICAgICAgICBJIGFtIGEgU29mdHdhcmUgRW5naW5lZXJcbiAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgIDxTY3JvbGxMaW5rXG4gICAgICAgICAgICAgIGFjdGl2ZUNsYXNzPVwiYWN0aXZlXCJcbiAgICAgICAgICAgICAgdG89eydjb250YWN0J31cbiAgICAgICAgICAgICAgc3B5PXt0cnVlfVxuICAgICAgICAgICAgICBzbW9vdGg9e3RydWV9XG4gICAgICAgICAgICAgIG9mZnNldD17LTcwfVxuICAgICAgICAgICAgICBkdXJhdGlvbj17NTAwfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8QnV0dG9uIG10PXs1fSBiZz17J3B1cnBsZSd9IF9ob3Zlcj17e2JhY2tncm91bmQ6IFwid2hpdGVcIiwgY29sb3I6IFwiYmxhY2tcIn19IHZhcmlhbnQ9XCJzb2xpZFwiIHN0eWxlPXt7Ym94U2hhZG93OiBcIjBweCA1cHggMTBweCAjMDAwXCJ9fT5Db250YWN0IG1lPC9CdXR0b24+XG4gICAgICAgICAgICA8L1Njcm9sbExpbms+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgey8qIDxCb3ggcG9zaXRpb249XCJhYnNvbHV0ZVwiIGJvdHRvbT17e2Jhc2U6IDAsIHNtOiAyMH19IF9ob3Zlcj17e2N1cnNvcjogXCJwb2ludGVyXCIsIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGVZKDVweClcIn19PlxuICAgICAgICAgICAgPFNjcm9sbExpbmtcbiAgICAgICAgICAgICAgYWN0aXZlQ2xhc3M9XCJhY3RpdmVcIlxuICAgICAgICAgICAgICB0bz17J2Fib3V0J31cbiAgICAgICAgICAgICAgc3B5PXt0cnVlfVxuICAgICAgICAgICAgICBzbW9vdGg9e3RydWV9XG4gICAgICAgICAgICAgIG9mZnNldD17LTcwfVxuICAgICAgICAgICAgICBkdXJhdGlvbj17NTAwfVxuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPENlbnRlcj5cbiAgICAgICAgICAgICAgICA8QXJyb3dSaWdodEljb24gc3R5bGU9e3t0cmFuc2Zvcm06IFwicm90YXRlKDkwZGVnKVwifX0gY29sb3I9XCJ3aGl0ZVwiIHc9XCI2XCIgaD1cIjZcIi8+XG4gICAgICAgICAgICAgIDwvQ2VudGVyPlxuICAgICAgICAgICAgPC9TY3JvbGxMaW5rPlxuICAgICAgICAgIDwvQm94PiAqL31cbiAgICAgICAgPC9DZW50ZXI+XG4gICAgICA8L0JveD5cbiAgICA8Lz5cbiAgKTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9