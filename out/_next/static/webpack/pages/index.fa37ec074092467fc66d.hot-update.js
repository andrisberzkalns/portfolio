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
              alt: "Profile image of Andris B\u0113rzkalns",
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
            fontSize: "4xl",
            px: 2,
            children: "Hi, I'm Andris\xA0B\u0113rzkalns"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvbWFpbi9pbmRleC50c3giXSwibmFtZXMiOlsiTElHSFRfU0laRSIsIk1haW4iLCJ0aGVtZSIsInVzZVRoZW1lIiwicmVmIiwiUmVhY3QiLCJ1c2VSZWYiLCJjYW52YXNSZWYiLCJ1c2VDb2xvck1vZGUiLCJjb2xvck1vZGUiLCJ1c2VXaW5kb3dTaXplIiwid2lkdGgiLCJoZWlnaHQiLCJ1c2VNb3VzZSIsImVsWCIsImVsWSIsInVzZUVmZmVjdCIsImN1cnJlbnQiLCJjYW52YXMiLCJjb250ZXh0IiwiZ2V0Q29udGV4dCIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwiY2xlYXJSZWN0IiwiZ3JkIiwiY3JlYXRlTGluZWFyR3JhZGllbnQiLCJhZGRDb2xvclN0b3AiLCJwb3NpdGlvbiIsImJhY2tncm91bmRDb2xvciIsInRvcCIsImxlZnQiLCJib3R0b20iLCJib3hTaGFkb3ciLCJmb250U2l6ZSIsImZvbnRTaXplcyIsImJhY2tncm91bmQiLCJjb2xvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQSxJQUFNQSxVQUFVLEdBQUcsR0FBbkI7QUFFTyxJQUFNQyxJQUFjLEdBQUcsU0FBakJBLElBQWlCLEdBQU07QUFBQTs7QUFDbEMsTUFBTUMsS0FBSyxHQUFHQyxpRUFBUSxFQUF0QjtBQUNBLE1BQU1DLEdBQUcsR0FBR0MsNENBQUssQ0FBQ0MsTUFBTixDQUFhLElBQWIsQ0FBWjtBQUNBLE1BQU1DLFNBQVMsR0FBR0Qsb0RBQU0sQ0FBQyxJQUFELENBQXhCLENBSGtDLENBSWxDOztBQUprQyxzQkFLWkUscUVBQVksRUFMQTtBQUFBLE1BSzFCQyxTQUwwQixpQkFLMUJBLFNBTDBCOztBQUFBLHVCQU1SQywrREFBYSxFQU5MO0FBQUEsTUFNMUJDLEtBTjBCLGtCQU0xQkEsS0FOMEI7QUFBQSxNQU1uQkMsTUFObUIsa0JBTW5CQSxNQU5tQjs7QUFBQSxrQkFPYkMsMERBQVEsQ0FBQ1QsR0FBRCxDQVBLO0FBQUEsTUFPMUJVLEdBUDBCLGFBTzFCQSxHQVAwQjtBQUFBLE1BT3JCQyxHQVBxQixhQU9yQkEsR0FQcUI7O0FBU2xDQyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFHVCxTQUFTLENBQUNVLE9BQWIsRUFBc0I7QUFDcEIsVUFBTUMsTUFBTSxHQUFHWCxTQUFTLENBQUNVLE9BQXpCO0FBQ0EsVUFBTUUsT0FBTyxHQUFHRCxNQUFNLENBQUNFLFVBQVAsQ0FBa0IsSUFBbEIsQ0FBaEI7QUFDQUYsWUFBTSxDQUFDUCxLQUFQLEdBQWdCQSxLQUFoQjtBQUNBTyxZQUFNLENBQUNOLE1BQVAsR0FBZ0JBLE1BQWhCO0FBSUFPLGFBQU8sQ0FBQ0UsU0FBUixHQUFvQixpQkFBcEI7QUFDQUYsYUFBTyxDQUFDRyxRQUFSLENBQWlCLENBQWpCLEVBQW9CLENBQXBCLEVBQXVCSCxPQUFPLENBQUNELE1BQVIsQ0FBZVAsS0FBdEMsRUFBNkNRLE9BQU8sQ0FBQ0QsTUFBUixDQUFlTixNQUE1RCxFQVRvQixDQVNrRDs7QUFDdEVPLGFBQU8sQ0FBQ0ksU0FBUixDQUFrQlQsR0FBRyxHQUFJZCxVQUFVLEdBQUcsQ0FBdEMsRUFBMEMsQ0FBMUMsRUFBNkNBLFVBQTdDLEVBQXlEbUIsT0FBTyxDQUFDRCxNQUFSLENBQWVOLE1BQXhFO0FBQ0EsVUFBTVksR0FBRyxHQUFHTCxPQUFPLENBQUNNLG9CQUFSLENBQTZCWCxHQUFHLEdBQUlkLFVBQVUsR0FBRyxDQUFqRCxFQUFxRCxDQUFyRCxFQUF3RGMsR0FBRyxHQUFJZCxVQUFVLEdBQUcsQ0FBNUUsRUFBZ0YsQ0FBaEYsQ0FBWjtBQUNBd0IsU0FBRyxDQUFDRSxZQUFKLENBQWlCLENBQWpCLEVBQW9CLGlCQUFwQjtBQUNBRixTQUFHLENBQUNFLFlBQUosQ0FBaUIsR0FBakIsRUFBc0IsZUFBdEI7QUFDQUYsU0FBRyxDQUFDRSxZQUFKLENBQWlCLENBQWpCLEVBQW9CLGlCQUFwQjtBQUVBUCxhQUFPLENBQUNFLFNBQVIsR0FBb0JHLEdBQXBCLENBaEJvQixDQWlCcEI7O0FBQ0FMLGFBQU8sQ0FBQ0csUUFBUixDQUFpQlIsR0FBRyxHQUFJZCxVQUFVLEdBQUcsQ0FBckMsRUFBeUMsQ0FBekMsRUFBNENBLFVBQTVDLEVBQXdEbUIsT0FBTyxDQUFDRCxNQUFSLENBQWVOLE1BQXZFLEVBbEJvQixDQWtCNkQ7QUFDakY7QUFDQTtBQUNBO0FBRUQ7QUFDRixHQXpCUSxFQXlCTixDQUFDRSxHQUFELEVBQU1DLEdBQU4sRUFBV0osS0FBWCxFQUFrQkMsTUFBbEIsQ0F6Qk0sQ0FBVDtBQTJCQSxzQkFDRTtBQUFBLDJCQUNFLHFFQUFDLG9EQUFELENBQ0U7QUFERjtBQUVFLE9BQUMsRUFBQyxPQUZKO0FBR0UsT0FBQyxFQUFDLE1BSEo7QUFJRSxXQUFLLEVBQUMsT0FKUjtBQUtFLGVBQVMsRUFBQyxRQUxaO0FBTUUsU0FBRyxFQUFFUixHQU5QO0FBT0UsUUFBRSxFQUFDLE1BUEw7QUFRRSxXQUFLLEVBQUU7QUFDTHVCLGdCQUFRLEVBQUUsVUFETDtBQUVMQyx1QkFBZSxFQUFFO0FBRlosT0FSVDtBQVlFLGFBQU8sRUFBQyw2QkFaVjtBQWFFLGdCQUFVLEVBQUMsUUFiYjtBQWNFLGNBQVEsRUFBQyxXQWRYO0FBZUUsa0JBQVksRUFBQyxPQWZmO0FBZ0JFLFlBQU0sRUFBQyxPQWhCVDtBQUFBLGlCQW1CSWpCLEtBQUssR0FBRyxHQUFSLGlCQUNBO0FBQVEsYUFBSyxFQUFFO0FBQUNnQixrQkFBUSxFQUFFLFVBQVg7QUFBdUJFLGFBQUcsRUFBRSxDQUE1QjtBQUErQkMsY0FBSSxFQUFFLENBQXJDO0FBQXdDbkIsZUFBSyxFQUFFLE1BQS9DO0FBQXVEQyxnQkFBTSxFQUFFO0FBQS9ELFNBQWY7QUFBdUYsV0FBRyxFQUFFTDtBQUE1RjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBcEJKLGVBc0JFO0FBQUssYUFBSyxFQUFDLDRCQUFYO0FBQXdDLGVBQU8sRUFBQyxhQUFoRDtBQUE4RCwyQkFBbUIsRUFBQyxNQUFsRjtBQUNFLGFBQUssRUFBRTtBQUNMb0Isa0JBQVEsRUFBRSxVQURMO0FBRUxJLGdCQUFNLEVBQUUsR0FGSDtBQUdMcEIsZUFBSyxFQUFFLE1BSEY7QUFJTEMsZ0JBQU0sRUFBRTtBQUpILFNBRFQ7QUFBQSwrQkFTRTtBQUFTLGNBQUksRUFBRUgsU0FBUyxJQUFJLE9BQWIsR0FBdUIsT0FBdkIsR0FBaUMsZUFBaEQ7QUFBa0UsZ0JBQU0sRUFBQztBQUF6RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXRCRixlQWtDRSxxRUFBQyx1REFBRDtBQUFRLFNBQUMsRUFBQyxNQUFWO0FBQUEsK0JBQ0UscUVBQUMsb0RBQUQ7QUFBSyxzQkFBUyxTQUFkO0FBQUEsa0NBQ0UscUVBQUMsdURBQUQ7QUFBQSxtQ0FDRSxxRUFBQyxzREFBRDtBQUNFLDBCQUFZLEVBQUMsTUFEZjtBQUVFLHFCQUFPLEVBQUMsT0FGVjtBQUdFLG9CQUFNLEVBQUMsTUFIVDtBQUlFLGlCQUFHLEVBQUMsK0JBSk47QUFLRSxpQkFBRyxFQUFDLHdDQUxOO0FBTUUsbUJBQUssRUFBRTtBQUFDdUIseUJBQVMsRUFBRTtBQUFaO0FBTlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFXRSxxRUFBQyxxREFBRDtBQUFNLHNCQUFVLEVBQUMsbUJBQWpCO0FBQXFDLHNCQUFVLEVBQUUsUUFBakQ7QUFBMkQsb0JBQVEsRUFBQyxLQUFwRTtBQUEwRSxjQUFFLEVBQUUsQ0FBOUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBWEYsZUFZRSxxRUFBQyxxREFBRDtBQUFNLHNCQUFVLEVBQUMsbUJBQWpCO0FBQXFDLHNCQUFVLEVBQUUsUUFBakQ7QUFBNEQsaUJBQUssRUFBRTtBQUFFQyxzQkFBUSxFQUFFL0IsS0FBSyxDQUFDZ0MsU0FBTixDQUFnQixJQUFoQjtBQUFaLGFBQW5FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVpGLGVBZUUscUVBQUMsaURBQUQ7QUFDRSx1QkFBVyxFQUFDLFFBRGQ7QUFFRSxjQUFFLEVBQUUsU0FGTjtBQUdFLGVBQUcsRUFBRSxJQUhQO0FBSUUsa0JBQU0sRUFBRSxJQUpWO0FBS0Usa0JBQU0sRUFBRSxDQUFDLEVBTFg7QUFNRSxvQkFBUSxFQUFFLEdBTlo7QUFBQSxtQ0FRRSxxRUFBQyxrREFBRDtBQUFRLGdCQUFFLEVBQUUsQ0FBWjtBQUFlLGdCQUFFLEVBQUUsUUFBbkI7QUFBNkIsb0JBQU0sRUFBRTtBQUFDQywwQkFBVSxFQUFFLE9BQWI7QUFBc0JDLHFCQUFLLEVBQUU7QUFBN0IsZUFBckM7QUFBNEUscUJBQU8sRUFBQyxPQUFwRjtBQUE0RixtQkFBSyxFQUFFO0FBQUNKLHlCQUFTLEVBQUU7QUFBWixlQUFuRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBZkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWxDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixtQkFERjtBQW9GRCxDQXhITTs7R0FBTS9CLEk7VUFDR0UseUQsRUFJUUssNkQsRUFDSUUsdUQsRUFDTEcsa0Q7OztLQVBWWixJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmZhMzdlYzA3NDA5MjQ2N2ZjNjZkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEJveCwgQ2VudGVyLCB1c2VUaGVtZSwgVGV4dCwgSW1hZ2UsIHVzZUNvbG9yTW9kZSB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5pbXBvcnQgeyB1c2VXaW5kb3dTaXplLCB1c2VNb3VzZSwgdXNlT3JpZW50YXRpb24gfSBmcm9tIFwicmVhY3QtdXNlXCI7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiQGNvbXBvbmVudHNcIjtcbmltcG9ydCB7IExpbmsgYXMgU2Nyb2xsTGluayB9IGZyb20gXCJyZWFjdC1zY3JvbGxcIjtcbmltcG9ydCB7IEFycm93UmlnaHRJY29uIH0gZnJvbSBcIkBjaGFrcmEtdWkvaWNvbnNcIjtcblxuY29uc3QgTElHSFRfU0laRSA9IDkwMDtcblxuZXhwb3J0IGNvbnN0IE1haW46IFJlYWN0LkZDID0gKCkgPT4ge1xuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XG4gIGNvbnN0IHJlZiA9IFJlYWN0LnVzZVJlZihudWxsKTtcbiAgY29uc3QgY2FudmFzUmVmID0gdXNlUmVmKG51bGwpO1xuICAvLyBjb25zdCBvcmllbnRhdGlvbiA9IHVzZU9yaWVudGF0aW9uKCk7XG4gIGNvbnN0IHsgY29sb3JNb2RlIH0gPSB1c2VDb2xvck1vZGUoKTtcbiAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSB1c2VXaW5kb3dTaXplKCk7XG4gIGNvbnN0IHsgZWxYLCBlbFkgfSA9IHVzZU1vdXNlKHJlZik7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZihjYW52YXNSZWYuY3VycmVudCkge1xuICAgICAgY29uc3QgY2FudmFzID0gY2FudmFzUmVmLmN1cnJlbnRcbiAgICAgIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKVxuICAgICAgY2FudmFzLndpZHRoICA9IHdpZHRoO1xuICAgICAgY2FudmFzLmhlaWdodCA9IGhlaWdodDtcblxuICAgICAgXG5cbiAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gJ3JnYmEoMCwwLDAsMC40KSc7XG4gICAgICBjb250ZXh0LmZpbGxSZWN0KDAsIDAsIGNvbnRleHQuY2FudmFzLndpZHRoLCBjb250ZXh0LmNhbnZhcy5oZWlnaHQpOyAgLy8gKDAsMCkgdGhlIHRvcCBsZWZ0IG9mIHRoZSBjYW52YXNcbiAgICAgIGNvbnRleHQuY2xlYXJSZWN0KGVsWCAtIChMSUdIVF9TSVpFIC8gMiksIDAsIExJR0hUX1NJWkUsIGNvbnRleHQuY2FudmFzLmhlaWdodCk7XG4gICAgICBjb25zdCBncmQgPSBjb250ZXh0LmNyZWF0ZUxpbmVhckdyYWRpZW50KGVsWCAtIChMSUdIVF9TSVpFIC8gMiksIDAsIGVsWCArIChMSUdIVF9TSVpFIC8gMiksIDApO1xuICAgICAgZ3JkLmFkZENvbG9yU3RvcCgwLCBcInJnYmEoMCwwLDAsMC40KVwiKTtcbiAgICAgIGdyZC5hZGRDb2xvclN0b3AoMC41LCBcInJnYmEoMCwwLDAsMClcIik7XG4gICAgICBncmQuYWRkQ29sb3JTdG9wKDEsIFwicmdiYSgwLDAsMCwwLjQpXCIpO1xuXG4gICAgICBjb250ZXh0LmZpbGxTdHlsZSA9IGdyZDtcbiAgICAgIC8vIGNvbnRleHQuZmlsbFN0eWxlID0gJ3JnYmEoMCwwLDAsMC4xNSknO1xuICAgICAgY29udGV4dC5maWxsUmVjdChlbFggLSAoTElHSFRfU0laRSAvIDIpLCAwLCBMSUdIVF9TSVpFLCBjb250ZXh0LmNhbnZhcy5oZWlnaHQpOyAgLy8gKDAsMCkgdGhlIHRvcCBsZWZ0IG9mIHRoZSBjYW52YXNcbiAgICAgIC8vIGNvbnRleHQuZmlsbFJlY3QoZWxYICsgMTUwLCAwLCAtNTAsIGNvbnRleHQuY2FudmFzLmhlaWdodCk7ICAvLyAoMCwwKSB0aGUgdG9wIGxlZnQgb2YgdGhlIGNhbnZhc1xuICAgICAgLy8gY29udGV4dC5maWxsU3R5bGUgPSAncmdiYSgwLDAsMCwwLjE1KSc7XG4gICAgICAvLyBjb250ZXh0LmZpbGxSZWN0KGVsWCAtIDEwMCwgMCwgMTAwLCBjb250ZXh0LmNhbnZhcy5oZWlnaHQpOyAgLy8gKDAsMCkgdGhlIHRvcCBsZWZ0IG9mIHRoZSBjYW52YXNcblxuICAgIH1cbiAgfSwgW2VsWCwgZWxZLCB3aWR0aCwgaGVpZ2h0XSlcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8Qm94IFxuICAgICAgICAvLyBiZz1cIm1haW4uMTAwXCJcbiAgICAgICAgaD1cIjEwMHZoXCJcbiAgICAgICAgdz1cIjEwMCVcIlxuICAgICAgICBjb2xvcj1cIndoaXRlXCJcbiAgICAgICAgdGV4dEFsaWduPVwiY2VudGVyXCIgXG4gICAgICAgIHJlZj17cmVmfVxuICAgICAgICBpZD1cImhvbWVcIlxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMCwwLDAsMSlcIlxuICAgICAgICB9fVxuICAgICAgICBiZ0ltYWdlPVwidXJsKCcvaW1hZ2VzL21haW4taW1nLmpwZycpXCJcbiAgICAgICAgYmdQb3NpdGlvbj1cImNlbnRlclwiXG4gICAgICAgIGJnUmVwZWF0PVwibm8tcmVwZWF0XCJcbiAgICAgICAgYmdBdHRhY2htZW50PVwiZml4ZWRcIlxuICAgICAgICBiZ1NpemU9XCJjb3ZlclwiXG4gICAgICA+XG4gICAgICAgIHtcbiAgICAgICAgICB3aWR0aCA+IDgwMCAmJlxuICAgICAgICAgIDxjYW52YXMgc3R5bGU9e3twb3NpdGlvbjogXCJhYnNvbHV0ZVwiLCB0b3A6IDAsIGxlZnQ6IDAsIHdpZHRoOiAnMTAwJScsIGhlaWdodDogJzEwMCUnfX0gcmVmPXtjYW52YXNSZWZ9IC8+XG4gICAgICAgIH1cbiAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAxMDAgMTAwXCIgcHJlc2VydmVBc3BlY3RSYXRpbz1cIm5vbmVcIlxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgICAgICAgYm90dG9tOiBcIjBcIixcbiAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgICAgIGhlaWdodDogXCIxMDBweFwiXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIHsvKiA8cG9seWdvbiBmaWxsPVwid2hpdGVcIiBwb2ludHM9XCIwLDEwMCA1MCwwIDEwMCwxMDBcIi8+ICovfVxuICAgICAgICAgIDxwb2x5Z29uIGZpbGw9e2NvbG9yTW9kZSA9PSAnbGlnaHQnID8gXCJ3aGl0ZVwiIDogXCJyZ2IoMjYsMzIsNDQpXCIgfSBwb2ludHM9XCIwLDAgNTAsMTAwIDEwMCwwIDEwMCwxMDAgMCwxMDAgMCwwXCIvPlxuICAgICAgICAgIHsvKiA8cG9seWdvbiBmaWxsPXtcIndoaXRlXCJ9IHBvaW50cz1cIjAsMCA1MCwxMDAgMTAwLDAgMTAwLDEwMCAwLDEwMCAwLDBcIi8+ICovfVxuICAgICAgICA8L3N2Zz5cbiAgICAgICAgPENlbnRlciBoPVwiMTAwJVwiPlxuICAgICAgICAgIDxCb3ggZGF0YS1hb3M9XCJ6b29tLWluXCI+XG4gICAgICAgICAgICA8Q2VudGVyPlxuICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM9XCJmdWxsXCJcbiAgICAgICAgICAgICAgICBib3hTaXplPVwiMTUwcHhcIlxuICAgICAgICAgICAgICAgIGxheW91dD1cImZpbGxcIlxuICAgICAgICAgICAgICAgIHNyYz1cIi9pbWFnZXMvcHJvZmlsZS1pbWctY29sb3IuanBnXCJcbiAgICAgICAgICAgICAgICBhbHQ9XCJQcm9maWxlIGltYWdlIG9mIEFuZHJpcyBCxJNyemthbG5zXCJcbiAgICAgICAgICAgICAgICBzdHlsZT17e2JveFNoYWRvdzogXCIwcHggNXB4IDEwcHggIzAwMFwifX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvQ2VudGVyPlxuICAgICAgICAgICAgPFRleHQgdGV4dFNoYWRvdz1cIjBweCA1cHggMTBweCAjMDAwXCIgZm9udFdlaWdodD17XCJib2xkZXJcIn0gZm9udFNpemU9XCI0eGxcIiBweD17Mn0+SGksIEknbSBBbmRyaXMmbmJzcDtCxJNyemthbG5zPC9UZXh0PlxuICAgICAgICAgICAgPFRleHQgdGV4dFNoYWRvdz1cIjBweCA1cHggMTBweCAjMDAwXCIgZm9udFdlaWdodD17XCJib2xkZXJcIn0gIHN0eWxlPXt7IGZvbnRTaXplOiB0aGVtZS5mb250U2l6ZXNbXCJsZ1wiXSB9fT5cbiAgICAgICAgICAgICAgSSBhbSBhIFNvZnR3YXJlIEVuZ2luZWVyXG4gICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICA8U2Nyb2xsTGlua1xuICAgICAgICAgICAgICBhY3RpdmVDbGFzcz1cImFjdGl2ZVwiXG4gICAgICAgICAgICAgIHRvPXsnY29udGFjdCd9XG4gICAgICAgICAgICAgIHNweT17dHJ1ZX1cbiAgICAgICAgICAgICAgc21vb3RoPXt0cnVlfVxuICAgICAgICAgICAgICBvZmZzZXQ9ey03MH1cbiAgICAgICAgICAgICAgZHVyYXRpb249ezUwMH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEJ1dHRvbiBtdD17NX0gYmc9eydwdXJwbGUnfSBfaG92ZXI9e3tiYWNrZ3JvdW5kOiBcIndoaXRlXCIsIGNvbG9yOiBcImJsYWNrXCJ9fSB2YXJpYW50PVwic29saWRcIiBzdHlsZT17e2JveFNoYWRvdzogXCIwcHggNXB4IDEwcHggIzAwMFwifX0+Q29udGFjdCBtZTwvQnV0dG9uPlxuICAgICAgICAgICAgPC9TY3JvbGxMaW5rPlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIHsvKiA8Qm94IHBvc2l0aW9uPVwiYWJzb2x1dGVcIiBib3R0b209e3tiYXNlOiAwLCBzbTogMjB9fSBfaG92ZXI9e3tjdXJzb3I6IFwicG9pbnRlclwiLCB0cmFuc2Zvcm06IFwidHJhbnNsYXRlWSg1cHgpXCJ9fT5cbiAgICAgICAgICAgIDxTY3JvbGxMaW5rXG4gICAgICAgICAgICAgIGFjdGl2ZUNsYXNzPVwiYWN0aXZlXCJcbiAgICAgICAgICAgICAgdG89eydhYm91dCd9XG4gICAgICAgICAgICAgIHNweT17dHJ1ZX1cbiAgICAgICAgICAgICAgc21vb3RoPXt0cnVlfVxuICAgICAgICAgICAgICBvZmZzZXQ9ey03MH1cbiAgICAgICAgICAgICAgZHVyYXRpb249ezUwMH1cbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA1XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxDZW50ZXI+XG4gICAgICAgICAgICAgICAgPEFycm93UmlnaHRJY29uIHN0eWxlPXt7dHJhbnNmb3JtOiBcInJvdGF0ZSg5MGRlZylcIn19IGNvbG9yPVwid2hpdGVcIiB3PVwiNlwiIGg9XCI2XCIvPlxuICAgICAgICAgICAgICA8L0NlbnRlcj5cbiAgICAgICAgICAgIDwvU2Nyb2xsTGluaz5cbiAgICAgICAgICA8L0JveD4gKi99XG4gICAgICAgIDwvQ2VudGVyPlxuICAgICAgPC9Cb3g+XG4gICAgPC8+XG4gICk7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==