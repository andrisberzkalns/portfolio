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
      h: "100%",
      w: "100%",
      color: "white",
      textAlign: "center",
      ref: ref,
      id: "home",
      style: {
        position: "relative",
        backgroundSize: "cover",
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
              alt: "Andris B\u0113rzkalns",
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
            children: "Hi, I'm Andris\xA0B\u0113rzkalns"
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
            children: "I am a Software Engineer"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvbWFpbi9pbmRleC50c3giXSwibmFtZXMiOlsiTElHSFRfU0laRSIsIk1haW4iLCJ0aGVtZSIsInVzZVRoZW1lIiwicmVmIiwiUmVhY3QiLCJ1c2VSZWYiLCJjYW52YXNSZWYiLCJ1c2VDb2xvck1vZGUiLCJjb2xvck1vZGUiLCJ1c2VXaW5kb3dTaXplIiwid2lkdGgiLCJoZWlnaHQiLCJ1c2VNb3VzZSIsImVsWCIsImVsWSIsInVzZUVmZmVjdCIsImN1cnJlbnQiLCJjYW52YXMiLCJjb250ZXh0IiwiZ2V0Q29udGV4dCIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwiY2xlYXJSZWN0IiwiZ3JkIiwiY3JlYXRlTGluZWFyR3JhZGllbnQiLCJhZGRDb2xvclN0b3AiLCJwb3NpdGlvbiIsImJhY2tncm91bmRTaXplIiwiYmFja2dyb3VuZENvbG9yIiwidG9wIiwibGVmdCIsImJvdHRvbSIsImJveFNoYWRvdyIsImZvbnRTaXplIiwiZm9udFNpemVzIiwiYmFja2dyb3VuZCIsImNvbG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBLElBQU1BLFVBQVUsR0FBRyxHQUFuQjtBQUVPLElBQU1DLElBQWMsR0FBRyxTQUFqQkEsSUFBaUIsR0FBTTtBQUFBOztBQUNsQyxNQUFNQyxLQUFLLEdBQUdDLGlFQUFRLEVBQXRCO0FBQ0EsTUFBTUMsR0FBRyxHQUFHQyw0Q0FBSyxDQUFDQyxNQUFOLENBQWEsSUFBYixDQUFaO0FBQ0EsTUFBTUMsU0FBUyxHQUFHRCxvREFBTSxDQUFDLElBQUQsQ0FBeEIsQ0FIa0MsQ0FJbEM7O0FBSmtDLHNCQUtaRSxxRUFBWSxFQUxBO0FBQUEsTUFLMUJDLFNBTDBCLGlCQUsxQkEsU0FMMEI7O0FBQUEsdUJBTVJDLCtEQUFhLEVBTkw7QUFBQSxNQU0xQkMsS0FOMEIsa0JBTTFCQSxLQU4wQjtBQUFBLE1B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O0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBWkYsZUFlRSxxRUFBQyxpREFBRDtBQUNFLHVCQUFXLEVBQUMsUUFEZDtBQUVFLGNBQUUsRUFBRSxTQUZOO0FBR0UsZUFBRyxFQUFFLElBSFA7QUFJRSxrQkFBTSxFQUFFLElBSlY7QUFLRSxrQkFBTSxFQUFFLENBQUMsRUFMWDtBQU1FLG9CQUFRLEVBQUUsR0FOWjtBQUFBLG1DQVFFLHFFQUFDLGtEQUFEO0FBQVEsZ0JBQUUsRUFBRSxDQUFaO0FBQWUsZ0JBQUUsRUFBRSxRQUFuQjtBQUE2QixvQkFBTSxFQUFFO0FBQUNDLDBCQUFVLEVBQUUsT0FBYjtBQUFzQkMscUJBQUssRUFBRTtBQUE3QixlQUFyQztBQUE0RSxxQkFBTyxFQUFDLE9BQXBGO0FBQTRGLG1CQUFLLEVBQUU7QUFBQ0oseUJBQVMsRUFBRTtBQUFaLGVBQW5HO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFmRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBbkNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLG1CQURGO0FBcUZELENBekhNOztHQUFNaEMsSTtVQUNHRSx5RCxFQUlRSyw2RCxFQUNJRSx1RCxFQUNMRyxrRDs7O0tBUFZaLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguODViODY4ZjNjYjFlM2JkM2MzNDQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQm94LCBDZW50ZXIsIHVzZVRoZW1lLCBUZXh0LCBJbWFnZSwgdXNlQ29sb3JNb2RlIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcbmltcG9ydCB7IHVzZVdpbmRvd1NpemUsIHVzZU1vdXNlLCB1c2VPcmllbnRhdGlvbiB9IGZyb20gXCJyZWFjdC11c2VcIjtcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgTGluayBhcyBTY3JvbGxMaW5rIH0gZnJvbSBcInJlYWN0LXNjcm9sbFwiO1xuaW1wb3J0IHsgQXJyb3dSaWdodEljb24gfSBmcm9tIFwiQGNoYWtyYS11aS9pY29uc1wiO1xuXG5jb25zdCBMSUdIVF9TSVpFID0gOTAwO1xuXG5leHBvcnQgY29uc3QgTWFpbjogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcbiAgY29uc3QgcmVmID0gUmVhY3QudXNlUmVmKG51bGwpO1xuICBjb25zdCBjYW52YXNSZWYgPSB1c2VSZWYobnVsbCk7XG4gIC8vIGNvbnN0IG9yaWVudGF0aW9uID0gdXNlT3JpZW50YXRpb24oKTtcbiAgY29uc3QgeyBjb2xvck1vZGUgfSA9IHVzZUNvbG9yTW9kZSgpO1xuICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IHVzZVdpbmRvd1NpemUoKTtcbiAgY29uc3QgeyBlbFgsIGVsWSB9ID0gdXNlTW91c2UocmVmKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmKGNhbnZhc1JlZi5jdXJyZW50KSB7XG4gICAgICBjb25zdCBjYW52YXMgPSBjYW52YXNSZWYuY3VycmVudFxuICAgICAgY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpXG4gICAgICBjYW52YXMud2lkdGggID0gd2lkdGg7XG4gICAgICBjYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xuXG4gICAgICBcblxuICAgICAgY29udGV4dC5maWxsU3R5bGUgPSAncmdiYSgwLDAsMCwwLjQpJztcbiAgICAgIGNvbnRleHQuZmlsbFJlY3QoMCwgMCwgY29udGV4dC5jYW52YXMud2lkdGgsIGNvbnRleHQuY2FudmFzLmhlaWdodCk7ICAvLyAoMCwwKSB0aGUgdG9wIGxlZnQgb2YgdGhlIGNhbnZhc1xuICAgICAgY29udGV4dC5jbGVhclJlY3QoZWxYIC0gKExJR0hUX1NJWkUgLyAyKSwgMCwgTElHSFRfU0laRSwgY29udGV4dC5jYW52YXMuaGVpZ2h0KTtcbiAgICAgIGNvbnN0IGdyZCA9IGNvbnRleHQuY3JlYXRlTGluZWFyR3JhZGllbnQoZWxYIC0gKExJR0hUX1NJWkUgLyAyKSwgMCwgZWxYICsgKExJR0hUX1NJWkUgLyAyKSwgMCk7XG4gICAgICBncmQuYWRkQ29sb3JTdG9wKDAsIFwicmdiYSgwLDAsMCwwLjQpXCIpO1xuICAgICAgZ3JkLmFkZENvbG9yU3RvcCgwLjUsIFwicmdiYSgwLDAsMCwwKVwiKTtcbiAgICAgIGdyZC5hZGRDb2xvclN0b3AoMSwgXCJyZ2JhKDAsMCwwLDAuNClcIik7XG5cbiAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gZ3JkO1xuICAgICAgLy8gY29udGV4dC5maWxsU3R5bGUgPSAncmdiYSgwLDAsMCwwLjE1KSc7XG4gICAgICBjb250ZXh0LmZpbGxSZWN0KGVsWCAtIChMSUdIVF9TSVpFIC8gMiksIDAsIExJR0hUX1NJWkUsIGNvbnRleHQuY2FudmFzLmhlaWdodCk7ICAvLyAoMCwwKSB0aGUgdG9wIGxlZnQgb2YgdGhlIGNhbnZhc1xuICAgICAgLy8gY29udGV4dC5maWxsUmVjdChlbFggKyAxNTAsIDAsIC01MCwgY29udGV4dC5jYW52YXMuaGVpZ2h0KTsgIC8vICgwLDApIHRoZSB0b3AgbGVmdCBvZiB0aGUgY2FudmFzXG4gICAgICAvLyBjb250ZXh0LmZpbGxTdHlsZSA9ICdyZ2JhKDAsMCwwLDAuMTUpJztcbiAgICAgIC8vIGNvbnRleHQuZmlsbFJlY3QoZWxYIC0gMTAwLCAwLCAxMDAsIGNvbnRleHQuY2FudmFzLmhlaWdodCk7ICAvLyAoMCwwKSB0aGUgdG9wIGxlZnQgb2YgdGhlIGNhbnZhc1xuXG4gICAgfVxuICB9LCBbZWxYLCBlbFksIHdpZHRoLCBoZWlnaHRdKVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxCb3ggXG4gICAgICAgIC8vIGJnPVwibWFpbi4xMDBcIlxuICAgICAgICBoPVwiMTAwJVwiXG4gICAgICAgIHc9XCIxMDAlXCJcbiAgICAgICAgY29sb3I9XCJ3aGl0ZVwiXG4gICAgICAgIHRleHRBbGlnbj1cImNlbnRlclwiIFxuICAgICAgICByZWY9e3JlZn1cbiAgICAgICAgaWQ9XCJob21lXCJcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICAgICAgICAgIGJhY2tncm91bmRTaXplOiBcImNvdmVyXCIsXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMCwwLDAsMSlcIlxuICAgICAgICB9fVxuICAgICAgICBiZ0ltYWdlPVwidXJsKCcvaW1hZ2VzL21haW4taW1nLmpwZycpXCJcbiAgICAgICAgYmdQb3NpdGlvbj1cImNlbnRlclwiXG4gICAgICAgIGJnUmVwZWF0PVwibm8tcmVwZWF0XCJcbiAgICAgICAgYmdBdHRhY2htZW50PVwiZml4ZWRcIlxuICAgICAgICBiZ1NpemU9XCJjb3ZlclwiXG4gICAgICA+XG4gICAgICAgIHtcbiAgICAgICAgICB3aWR0aCA+IDgwMCAmJlxuICAgICAgICAgIDxjYW52YXMgc3R5bGU9e3twb3NpdGlvbjogXCJhYnNvbHV0ZVwiLCB0b3A6IDAsIGxlZnQ6IDAsIHdpZHRoOiAnMTAwJScsIGhlaWdodDogJzEwMCUnfX0gcmVmPXtjYW52YXNSZWZ9IC8+XG4gICAgICAgIH1cbiAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAxMDAgMTAwXCIgcHJlc2VydmVBc3BlY3RSYXRpbz1cIm5vbmVcIlxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgICAgICAgYm90dG9tOiBcIjBcIixcbiAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgICAgIGhlaWdodDogXCIxMDBweFwiXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIHsvKiA8cG9seWdvbiBmaWxsPVwid2hpdGVcIiBwb2ludHM9XCIwLDEwMCA1MCwwIDEwMCwxMDBcIi8+ICovfVxuICAgICAgICAgIDxwb2x5Z29uIGZpbGw9e2NvbG9yTW9kZSA9PSAnbGlnaHQnID8gXCJ3aGl0ZVwiIDogXCJyZ2IoMjYsMzIsNDQpXCIgfSBwb2ludHM9XCIwLDAgNTAsMTAwIDEwMCwwIDEwMCwxMDAgMCwxMDAgMCwwXCIvPlxuICAgICAgICAgIHsvKiA8cG9seWdvbiBmaWxsPXtcIndoaXRlXCJ9IHBvaW50cz1cIjAsMCA1MCwxMDAgMTAwLDAgMTAwLDEwMCAwLDEwMCAwLDBcIi8+ICovfVxuICAgICAgICA8L3N2Zz5cbiAgICAgICAgPENlbnRlciBoPVwiMTAwJVwiPlxuICAgICAgICAgIDxCb3ggZGF0YS1hb3M9XCJ6b29tLWluXCI+XG4gICAgICAgICAgICA8Q2VudGVyPlxuICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM9XCJmdWxsXCJcbiAgICAgICAgICAgICAgICBib3hTaXplPVwiMTUwcHhcIlxuICAgICAgICAgICAgICAgIGxheW91dD1cImZpbGxcIlxuICAgICAgICAgICAgICAgIHNyYz1cIi9pbWFnZXMvcHJvZmlsZS1pbWctY29sb3IuanBnXCJcbiAgICAgICAgICAgICAgICBhbHQ9XCJBbmRyaXMgQsSTcnprYWxuc1wiXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tib3hTaGFkb3c6IFwiMHB4IDVweCAxMHB4ICMwMDBcIn19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0NlbnRlcj5cbiAgICAgICAgICAgIDxUZXh0IHRleHRTaGFkb3c9XCIwcHggNXB4IDEwcHggIzAwMFwiIGZvbnRXZWlnaHQ9e1wiYm9sZGVyXCJ9IGZvbnRTaXplPVwiNHhsXCIgcHg9ezJ9PkhpLCBJJ20gQW5kcmlzJm5ic3A7QsSTcnprYWxuczwvVGV4dD5cbiAgICAgICAgICAgIDxUZXh0IHRleHRTaGFkb3c9XCIwcHggNXB4IDEwcHggIzAwMFwiIGZvbnRXZWlnaHQ9e1wiYm9sZGVyXCJ9ICBzdHlsZT17eyBmb250U2l6ZTogdGhlbWUuZm9udFNpemVzW1wibGdcIl0gfX0+XG4gICAgICAgICAgICAgIEkgYW0gYSBTb2Z0d2FyZSBFbmdpbmVlclxuICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgPFNjcm9sbExpbmtcbiAgICAgICAgICAgICAgYWN0aXZlQ2xhc3M9XCJhY3RpdmVcIlxuICAgICAgICAgICAgICB0bz17J2NvbnRhY3QnfVxuICAgICAgICAgICAgICBzcHk9e3RydWV9XG4gICAgICAgICAgICAgIHNtb290aD17dHJ1ZX1cbiAgICAgICAgICAgICAgb2Zmc2V0PXstNzB9XG4gICAgICAgICAgICAgIGR1cmF0aW9uPXs1MDB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxCdXR0b24gbXQ9ezV9IGJnPXsncHVycGxlJ30gX2hvdmVyPXt7YmFja2dyb3VuZDogXCJ3aGl0ZVwiLCBjb2xvcjogXCJibGFja1wifX0gdmFyaWFudD1cInNvbGlkXCIgc3R5bGU9e3tib3hTaGFkb3c6IFwiMHB4IDVweCAxMHB4ICMwMDBcIn19PkNvbnRhY3QgbWU8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvU2Nyb2xsTGluaz5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgICB7LyogPEJveCBwb3NpdGlvbj1cImFic29sdXRlXCIgYm90dG9tPXt7YmFzZTogMCwgc206IDIwfX0gX2hvdmVyPXt7Y3Vyc29yOiBcInBvaW50ZXJcIiwgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZVkoNXB4KVwifX0+XG4gICAgICAgICAgICA8U2Nyb2xsTGlua1xuICAgICAgICAgICAgICBhY3RpdmVDbGFzcz1cImFjdGl2ZVwiXG4gICAgICAgICAgICAgIHRvPXsnYWJvdXQnfVxuICAgICAgICAgICAgICBzcHk9e3RydWV9XG4gICAgICAgICAgICAgIHNtb290aD17dHJ1ZX1cbiAgICAgICAgICAgICAgb2Zmc2V0PXstNzB9XG4gICAgICAgICAgICAgIGR1cmF0aW9uPXs1MDB9XG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogNVxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8Q2VudGVyPlxuICAgICAgICAgICAgICAgIDxBcnJvd1JpZ2h0SWNvbiBzdHlsZT17e3RyYW5zZm9ybTogXCJyb3RhdGUoOTBkZWcpXCJ9fSBjb2xvcj1cIndoaXRlXCIgdz1cIjZcIiBoPVwiNlwiLz5cbiAgICAgICAgICAgICAgPC9DZW50ZXI+XG4gICAgICAgICAgICA8L1Njcm9sbExpbms+XG4gICAgICAgICAgPC9Cb3g+ICovfVxuICAgICAgICA8L0NlbnRlcj5cbiAgICAgIDwvQm94PlxuICAgIDwvPlxuICApO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=