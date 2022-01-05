"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/TimeLine/TimeLine.js":
/*!*********************************************!*\
  !*** ./src/components/TimeLine/TimeLine.js ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TimeLineStyles */ \"./src/components/TimeLine/TimeLineStyles.js\");\n/* harmony import */ var _styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/GlobalComponents */ \"./src/styles/GlobalComponents/index.js\");\n/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constants/constants */ \"./src/constants/constants.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar TOTAL_CAROUSEL_COUNT = _constants_constants__WEBPACK_IMPORTED_MODULE_4__.TimeLineData.length;\nvar Timeline = function() {\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), activeItem = ref[0], setActiveItem = ref[1];\n    var carouselRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var scroll = function(node, left) {\n        return node.scrollTo({\n            left: left,\n            behavior: 'smooth'\n        });\n    };\n    var handleClick = function(e, i) {\n        e.preventDefault();\n        if (carouselRef.current) {\n            var scrollLeft = Math.floor(carouselRef.current.scrollWidth * 0.7 * (i / _constants_constants__WEBPACK_IMPORTED_MODULE_4__.TimeLineData.length));\n            scroll(carouselRef.current, scrollLeft);\n        }\n    };\n    var handleScroll = function() {\n        if (carouselRef.current) {\n            var index = Math.round(carouselRef.current.scrollLeft / (carouselRef.current.scrollWidth * 0.7) * _constants_constants__WEBPACK_IMPORTED_MODULE_4__.TimeLineData.length);\n            setActiveItem(index);\n        }\n    };\n    // snap back to beginning of scroll when window is resized\n    // avoids a bug where content is covered up if coming from smaller screen\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var handleResize = function() {\n            scroll(carouselRef.current, 0);\n        };\n        window.addEventListener('resize', handleResize);\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__.Section, {\n        id: \"about\",\n        __source: {\n            fileName: \"/Users/macbookpro 1/GitProjects/Portfolio/src/components/TimeLine/TimeLine.js\",\n            lineNumber: 46,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__.SectionTitle, {\n                __source: {\n                    fileName: \"/Users/macbookpro 1/GitProjects/Portfolio/src/components/TimeLine/TimeLine.js\",\n                    lineNumber: 47,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: \"About Me\"\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__.SectionText, {\n                __source: {\n                    fileName: \"/Users/macbookpro 1/GitProjects/Portfolio/src/components/TimeLine/TimeLine.js\",\n                    lineNumber: 48,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: \"The purpose of JavaScript Mastery is to help aspiring and established developers to take their development skills to the next level and build awesome apps.\"\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselContainer, {\n                ref: carouselRef,\n                onScroll: handleScroll,\n                __source: {\n                    fileName: \"/Users/macbookpro 1/GitProjects/Portfolio/src/components/TimeLine/TimeLine.js\",\n                    lineNumber: 51,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: _constants_constants__WEBPACK_IMPORTED_MODULE_4__.TimeLineData.map(function(item, index) {\n                        /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselMobileScrollNode, {\n                            final: index === TOTAL_CAROUSEL_COUNT - 1,\n                            __source: {\n                                fileName: \"/Users/macbookpro 1/GitProjects/Portfolio/src/components/TimeLine/TimeLine.js\",\n                                lineNumber: 54,\n                                columnNumber: 13\n                            },\n                            __self: _this1,\n                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselItem, {\n                                index: index,\n                                id: \"carousel__item-\".concat(index),\n                                active: activeItem,\n                                onClick: function(e) {\n                                    return handleClick(e, index);\n                                },\n                                __source: {\n                                    fileName: \"/Users/macbookpro 1/GitProjects/Portfolio/src/components/TimeLine/TimeLine.js\",\n                                    lineNumber: 57,\n                                    columnNumber: 15\n                                },\n                                __self: _this1,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselItemTitle, {\n                                        __source: {\n                                            fileName: \"/Users/macbookpro 1/GitProjects/Portfolio/src/components/TimeLine/TimeLine.js\",\n                                            lineNumber: 62,\n                                            columnNumber: 17\n                                        },\n                                        __self: _this1,\n                                        children: [\n                                            \"\".concat(item.year),\n                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselItemImg, {\n                                                width: \"208\",\n                                                height: \"6\",\n                                                viewBox: \"0 0 208 6\",\n                                                fill: \"none\",\n                                                xmlns: \"http://www.w3.org/2000/svg\",\n                                                __source: {\n                                                    fileName: \"/Users/macbookpro 1/GitProjects/Portfolio/src/components/TimeLine/TimeLine.js\",\n                                                    lineNumber: 64,\n                                                    columnNumber: 19\n                                                },\n                                                __self: _this1,\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"path\", {\n                                                        \"fill-rule\": \"evenodd\",\n                                                        \"clip-rule\": \"evenodd\",\n                                                        d: \"M2.5 5.5C3.88071 5.5 5 4.38071 5 3V3.5L208 3.50002V2.50002L5 2.5V3C5 1.61929 3.88071 0.5 2.5 0.5C1.11929 0.5 0 1.61929 0 3C0 4.38071 1.11929 5.5 2.5 5.5Z\",\n                                                        fill: \"url(#paint0_linear)\",\n                                                        \"fill-opacity\": \"0.33\",\n                                                        __source: {\n                                                            fileName: \"/Users/macbookpro 1/GitProjects/Portfolio/src/components/TimeLine/TimeLine.js\",\n                                                            lineNumber: 70,\n                                                            columnNumber: 21\n                                                        },\n                                                        __self: _this1\n                                                    }),\n                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"defs\", {\n                                                        __source: {\n                                                            fileName: \"/Users/macbookpro 1/GitProjects/Portfolio/src/components/TimeLine/TimeLine.js\",\n                                                            lineNumber: 77,\n                                                            columnNumber: 21\n                                                        },\n                                                        __self: _this1,\n                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"linearGradient\", {\n                                                            id: \"paint0_linear\",\n                                                            x1: \"-4.30412e-10\",\n                                                            y1: \"0.5\",\n                                                            x2: \"208\",\n                                                            y2: \"0.500295\",\n                                                            gradientUnits: \"userSpaceOnUse\",\n                                                            __source: {\n                                                                fileName: \"/Users/macbookpro 1/GitProjects/Portfolio/src/components/TimeLine/TimeLine.js\",\n                                                                lineNumber: 78,\n                                                                columnNumber: 23\n                                                            },\n                                                            __self: _this1,\n                                                            children: [\n                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"stop\", {\n                                                                    \"stop-color\": \"white\",\n                                                                    __source: {\n                                                                        fileName: \"/Users/macbookpro 1/GitProjects/Portfolio/src/components/TimeLine/TimeLine.js\",\n                                                                        lineNumber: 85,\n                                                                        columnNumber: 25\n                                                                    },\n                                                                    __self: _this1\n                                                                }),\n                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"stop\", {\n                                                                    offset: \"0.79478\",\n                                                                    \"stop-color\": \"white\",\n                                                                    \"stop-opacity\": \"0\",\n                                                                    __source: {\n                                                                        fileName: \"/Users/macbookpro 1/GitProjects/Portfolio/src/components/TimeLine/TimeLine.js\",\n                                                                        lineNumber: 86,\n                                                                        columnNumber: 25\n                                                                    },\n                                                                    __self: _this1\n                                                                })\n                                                            ]\n                                                        })\n                                                    })\n                                                ]\n                                            })\n                                        ]\n                                    }),\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselItemText, {\n                                        __source: {\n                                            fileName: \"/Users/macbookpro 1/GitProjects/Portfolio/src/components/TimeLine/TimeLine.js\",\n                                            lineNumber: 95,\n                                            columnNumber: 17\n                                        },\n                                        __self: _this1,\n                                        children: item.text\n                                    })\n                                ]\n                            })\n                        }, index);\n                    })\n                })\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselButtons, {\n                __source: {\n                    fileName: \"/Users/macbookpro 1/GitProjects/Portfolio/src/components/TimeLine/TimeLine.js\",\n                    lineNumber: 101,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: _constants_constants__WEBPACK_IMPORTED_MODULE_4__.TimeLineData.map(function(item, index) {\n                    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselButton, {\n                        index: index,\n                        active: activeItem,\n                        onClick: function(e) {\n                            return handleClick(e, index);\n                        },\n                        type: \"button\",\n                        __source: {\n                            fileName: \"/Users/macbookpro 1/GitProjects/Portfolio/src/components/TimeLine/TimeLine.js\",\n                            lineNumber: 104,\n                            columnNumber: 13\n                        },\n                        __self: _this1,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselButtonDot, {\n                            active: activeItem,\n                            __source: {\n                                fileName: \"/Users/macbookpro 1/GitProjects/Portfolio/src/components/TimeLine/TimeLine.js\",\n                                lineNumber: 110,\n                                columnNumber: 15\n                            },\n                            __self: _this1\n                        })\n                    }, index));\n                })\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__.SectionDivider, {\n                __source: {\n                    fileName: \"/Users/macbookpro 1/GitProjects/Portfolio/src/components/TimeLine/TimeLine.js\",\n                    lineNumber: 115,\n                    columnNumber: 7\n                },\n                __self: _this\n            })\n        ]\n    }));\n};\n_s(Timeline, \"cLAENFIk71XY75CSSdCzNrBlXO8=\");\n_c = Timeline;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Timeline);\nvar _c;\n$RefreshReg$(_c, \"Timeline\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9UaW1lTGluZS9UaW1lTGluZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQTBEO0FBRTRJO0FBQ3BHO0FBQzFDOzs7QUFFeEQsR0FBSyxDQUFDa0Isb0JBQW9CLEdBQUdELHFFQUFtQjtBQUVoRCxHQUFLLENBQUNHLFFBQVEsR0FBRyxRQUNqQixHQUR1QixDQUFDOzs7SUFDdEIsR0FBSyxDQUErQm5CLEdBQVcsR0FBWEEsK0NBQVEsQ0FBQyxDQUFDLEdBQXZDb0IsVUFBVSxHQUFtQnBCLEdBQVcsS0FBNUJxQixhQUFhLEdBQUlyQixHQUFXO0lBQy9DLEdBQUssQ0FBQ3NCLFdBQVcsR0FBR3JCLDZDQUFNO0lBRTFCLEdBQUssQ0FBQ3NCLE1BQU0sR0FBRyxRQUFRLENBQVBDLElBQUksRUFBRUMsSUFBSSxFQUFLLENBQUM7UUFDOUIsTUFBTSxDQUFDRCxJQUFJLENBQUNFLFFBQVEsQ0FBQyxDQUFDO1lBQUNELElBQUksRUFBSkEsSUFBSTtZQUFFRSxRQUFRLEVBQUUsQ0FBUTtRQUFDLENBQUM7SUFDbkQsQ0FBQztJQUVELEdBQUssQ0FBQ0MsV0FBVyxHQUFHLFFBQVEsQ0FBUEMsQ0FBQyxFQUFFQyxDQUFDLEVBQUssQ0FBQztRQUM3QkQsQ0FBQyxDQUFDRSxjQUFjO1FBRWhCLEVBQUUsRUFBRVQsV0FBVyxDQUFDVSxPQUFPLEVBQUUsQ0FBQztZQUN4QixHQUFLLENBQUNDLFVBQVUsR0FBR0MsSUFBSSxDQUFDQyxLQUFLLENBQUNiLFdBQVcsQ0FBQ1UsT0FBTyxDQUFDSSxXQUFXLEdBQUcsR0FBRyxJQUFJTixDQUFDLEdBQUdkLHFFQUFtQjtZQUU5Rk8sTUFBTSxDQUFDRCxXQUFXLENBQUNVLE9BQU8sRUFBRUMsVUFBVTtRQUN4QyxDQUFDO0lBQ0gsQ0FBQztJQUVELEdBQUssQ0FBQ0ksWUFBWSxHQUFHLFFBQ3ZCLEdBRDZCLENBQUM7UUFDMUIsRUFBRSxFQUFFZixXQUFXLENBQUNVLE9BQU8sRUFBRSxDQUFDO1lBQ3hCLEdB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QixDQUFDOzRCQUFLRCxNQUFNLENBQU5BLFdBQVcsQ0FBQ0MsQ0FBQyxFQUFFUyxLQUFLOzt3QkFDcENvQyxJQUFJLEVBQUMsQ0FBUTs7Ozs7Ozt1R0FDWnRFLDhEQUFpQjs0QkFBQzZDLE1BQU0sRUFBRTdCLFVBQVU7Ozs7Ozs7O3VCQUxoQ2tCLEtBQUs7Z0JBUWhCLENBQUM7O2lGQUVGekIsb0VBQWM7Ozs7Ozs7Ozs7QUFHckIsQ0FBQztHQTdHS00sUUFBUTtLQUFSQSxRQUFRO0FBK0dkLCtEQUFlQSxRQUFRLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVGltZUxpbmUvVGltZUxpbmUuanM/OTEwNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBDYXJvdXNlbEJ1dHRvbiwgQ2Fyb3VzZWxCdXR0b25Eb3QsIENhcm91c2VsQnV0dG9ucywgQ2Fyb3VzZWxDb250YWluZXIsIENhcm91c2VsSXRlbSwgQ2Fyb3VzZWxJdGVtSW1nLCBDYXJvdXNlbEl0ZW1UZXh0LCBDYXJvdXNlbEl0ZW1UaXRsZSwgQ2Fyb3VzZWxNb2JpbGVTY3JvbGxOb2RlIH0gZnJvbSAnLi9UaW1lTGluZVN0eWxlcyc7XG5pbXBvcnQgeyBTZWN0aW9uLCBTZWN0aW9uRGl2aWRlciwgU2VjdGlvblRleHQsIFNlY3Rpb25UaXRsZSB9IGZyb20gJy4uLy4uL3N0eWxlcy9HbG9iYWxDb21wb25lbnRzJztcbmltcG9ydCB7IFRpbWVMaW5lRGF0YSB9IGZyb20gJy4uLy4uL2NvbnN0YW50cy9jb25zdGFudHMnO1xuXG5jb25zdCBUT1RBTF9DQVJPVVNFTF9DT1VOVCA9IFRpbWVMaW5lRGF0YS5sZW5ndGg7XG5cbmNvbnN0IFRpbWVsaW5lID0gKCkgPT4ge1xuICBjb25zdCBbYWN0aXZlSXRlbSwgc2V0QWN0aXZlSXRlbV0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgY2Fyb3VzZWxSZWYgPSB1c2VSZWYoKTtcblxuICBjb25zdCBzY3JvbGwgPSAobm9kZSwgbGVmdCkgPT4ge1xuICAgIHJldHVybiBub2RlLnNjcm9sbFRvKHsgbGVmdCwgYmVoYXZpb3I6ICdzbW9vdGgnIH0pO1xuICB9XG5cbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoZSwgaSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGlmIChjYXJvdXNlbFJlZi5jdXJyZW50KSB7XG4gICAgICBjb25zdCBzY3JvbGxMZWZ0ID0gTWF0aC5mbG9vcihjYXJvdXNlbFJlZi5jdXJyZW50LnNjcm9sbFdpZHRoICogMC43ICogKGkgLyBUaW1lTGluZURhdGEubGVuZ3RoKSk7XG4gICAgICBcbiAgICAgIHNjcm9sbChjYXJvdXNlbFJlZi5jdXJyZW50LCBzY3JvbGxMZWZ0KTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBoYW5kbGVTY3JvbGwgPSAoKSA9PiB7XG4gICAgaWYgKGNhcm91c2VsUmVmLmN1cnJlbnQpIHtcbiAgICAgIGNvbnN0IGluZGV4ID0gTWF0aC5yb3VuZCgoY2Fyb3VzZWxSZWYuY3VycmVudC5zY3JvbGxMZWZ0IC8gKGNhcm91c2VsUmVmLmN1cnJlbnQuc2Nyb2xsV2lkdGggKiAwLjcpKSAqIFRpbWVMaW5lRGF0YS5sZW5ndGgpO1xuXG4gICAgICBzZXRBY3RpdmVJdGVtKGluZGV4KTtcbiAgICB9XG4gIH1cblxuICAvLyBzbmFwIGJhY2sgdG8gYmVnaW5uaW5nIG9mIHNjcm9sbCB3aGVuIHdpbmRvdyBpcyByZXNpemVkXG4gIC8vIGF2b2lkcyBhIGJ1ZyB3aGVyZSBjb250ZW50IGlzIGNvdmVyZWQgdXAgaWYgY29taW5nIGZyb20gc21hbGxlciBzY3JlZW5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBoYW5kbGVSZXNpemUgPSAoKSA9PiB7XG4gICAgICBzY3JvbGwoY2Fyb3VzZWxSZWYuY3VycmVudCwgMCk7XG4gICAgfVxuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZVJlc2l6ZSk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxTZWN0aW9uIGlkPVwiYWJvdXRcIj5cbiAgICAgIDxTZWN0aW9uVGl0bGU+QWJvdXQgTWU8L1NlY3Rpb25UaXRsZT5cbiAgICAgIDxTZWN0aW9uVGV4dD5cbiAgICAgIFRoZSBwdXJwb3NlIG9mIEphdmFTY3JpcHQgTWFzdGVyeSBpcyB0byBoZWxwIGFzcGlyaW5nIGFuZCBlc3RhYmxpc2hlZCBkZXZlbG9wZXJzIHRvIHRha2UgdGhlaXIgZGV2ZWxvcG1lbnQgc2tpbGxzIHRvIHRoZSBuZXh0IGxldmVsIGFuZCBidWlsZCBhd2Vzb21lIGFwcHMuXG4gICAgICA8L1NlY3Rpb25UZXh0PlxuICAgICAgPENhcm91c2VsQ29udGFpbmVyIHJlZj17Y2Fyb3VzZWxSZWZ9IG9uU2Nyb2xsPXtoYW5kbGVTY3JvbGx9PlxuICAgICAgICA8PlxuICAgICAgICAgIHtUaW1lTGluZURhdGEubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPENhcm91c2VsTW9iaWxlU2Nyb2xsTm9kZVxuICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICBmaW5hbD17aW5kZXggPT09IFRPVEFMX0NBUk9VU0VMX0NPVU5UIC0gMX0+XG4gICAgICAgICAgICAgIDxDYXJvdXNlbEl0ZW1cbiAgICAgICAgICAgICAgICBpbmRleD17aW5kZXh9XG4gICAgICAgICAgICAgICAgaWQ9e2BjYXJvdXNlbF9faXRlbS0ke2luZGV4fWB9XG4gICAgICAgICAgICAgICAgYWN0aXZlPXthY3RpdmVJdGVtfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBoYW5kbGVDbGljayhlLCBpbmRleCl9PlxuICAgICAgICAgICAgICAgIDxDYXJvdXNlbEl0ZW1UaXRsZT5cbiAgICAgICAgICAgICAgICAgIHtgJHtpdGVtLnllYXJ9YH1cbiAgICAgICAgICAgICAgICAgIDxDYXJvdXNlbEl0ZW1JbWdcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIyMDhcIlxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCI2XCJcbiAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyMDggNlwiXG4gICAgICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICAgIGZpbGwtcnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICAgICAgICAgIGNsaXAtcnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMi41IDUuNUMzLjg4MDcxIDUuNSA1IDQuMzgwNzEgNSAzVjMuNUwyMDggMy41MDAwMlYyLjUwMDAyTDUgMi41VjNDNSAxLjYxOTI5IDMuODgwNzEgMC41IDIuNSAwLjVDMS4xMTkyOSAwLjUgMCAxLjYxOTI5IDAgM0MwIDQuMzgwNzEgMS4xMTkyOSA1LjUgMi41IDUuNVpcIlxuICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJ1cmwoI3BhaW50MF9saW5lYXIpXCJcbiAgICAgICAgICAgICAgICAgICAgICBmaWxsLW9wYWNpdHk9XCIwLjMzXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPGRlZnM+XG4gICAgICAgICAgICAgICAgICAgICAgPGxpbmVhckdyYWRpZW50XG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cInBhaW50MF9saW5lYXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgeDE9XCItNC4zMDQxMmUtMTBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgeTE9XCIwLjVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgeDI9XCIyMDhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgeTI9XCIwLjUwMDI5NVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBncmFkaWVudFVuaXRzPVwidXNlclNwYWNlT25Vc2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9XCJ3aGl0ZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3RvcFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXQ9XCIwLjc5NDc4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RvcC1jb2xvcj1cIndoaXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RvcC1vcGFjaXR5PVwiMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvbGluZWFyR3JhZGllbnQ+XG4gICAgICAgICAgICAgICAgICAgIDwvZGVmcz5cbiAgICAgICAgICAgICAgICAgIDwvQ2Fyb3VzZWxJdGVtSW1nPlxuICAgICAgICAgICAgICAgIDwvQ2Fyb3VzZWxJdGVtVGl0bGU+XG4gICAgICAgICAgICAgICAgPENhcm91c2VsSXRlbVRleHQ+e2l0ZW0udGV4dH08L0Nhcm91c2VsSXRlbVRleHQ+XG4gICAgICAgICAgICAgIDwvQ2Fyb3VzZWxJdGVtPlxuICAgICAgICAgICAgPC9DYXJvdXNlbE1vYmlsZVNjcm9sbE5vZGU+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvPlxuICAgICAgPC9DYXJvdXNlbENvbnRhaW5lcj5cbiAgICAgIDxDYXJvdXNlbEJ1dHRvbnM+XG4gICAgICAgIHtUaW1lTGluZURhdGEubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8Q2Fyb3VzZWxCdXR0b25cbiAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgaW5kZXg9e2luZGV4fVxuICAgICAgICAgICAgICBhY3RpdmU9e2FjdGl2ZUl0ZW19XG4gICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBoYW5kbGVDbGljayhlLCBpbmRleCl9XG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIj5cbiAgICAgICAgICAgICAgPENhcm91c2VsQnV0dG9uRG90IGFjdGl2ZT17YWN0aXZlSXRlbX0gLz5cbiAgICAgICAgICAgIDwvQ2Fyb3VzZWxCdXR0b24+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICA8L0Nhcm91c2VsQnV0dG9ucz5cbiAgICAgIDxTZWN0aW9uRGl2aWRlciAvPlxuICAgIDwvU2VjdGlvbj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRpbWVsaW5lOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiQ2Fyb3VzZWxCdXR0b24iLCJDYXJvdXNlbEJ1dHRvbkRvdCIsIkNhcm91c2VsQnV0dG9ucyIsIkNhcm91c2VsQ29udGFpbmVyIiwiQ2Fyb3VzZWxJdGVtIiwiQ2Fyb3VzZWxJdGVtSW1nIiwiQ2Fyb3VzZWxJdGVtVGV4dCIsIkNhcm91c2VsSXRlbVRpdGxlIiwiQ2Fyb3VzZWxNb2JpbGVTY3JvbGxOb2RlIiwiU2VjdGlvbiIsIlNlY3Rpb25EaXZpZGVyIiwiU2VjdGlvblRleHQiLCJTZWN0aW9uVGl0bGUiLCJUaW1lTGluZURhdGEiLCJUT1RBTF9DQVJPVVNFTF9DT1VOVCIsImxlbmd0aCIsIlRpbWVsaW5lIiwiYWN0aXZlSXRlbSIsInNldEFjdGl2ZUl0ZW0iLCJjYXJvdXNlbFJlZiIsInNjcm9sbCIsIm5vZGUiLCJsZWZ0Iiwic2Nyb2xsVG8iLCJiZWhhdmlvciIsImhhbmRsZUNsaWNrIiwiZSIsImkiLCJwcmV2ZW50RGVmYXVsdCIsImN1cnJlbnQiLCJzY3JvbGxMZWZ0IiwiTWF0aCIsImZsb29yIiwic2Nyb2xsV2lkdGgiLCJoYW5kbGVTY3JvbGwiLCJpbmRleCIsInJvdW5kIiwiaGFuZGxlUmVzaXplIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImlkIiwicmVmIiwib25TY3JvbGwiLCJtYXAiLCJpdGVtIiwiZmluYWwiLCJhY3RpdmUiLCJvbkNsaWNrIiwieWVhciIsIndpZHRoIiwiaGVpZ2h0Iiwidmlld0JveCIsImZpbGwiLCJ4bWxucyIsInBhdGgiLCJmaWxsLXJ1bGUiLCJjbGlwLXJ1bGUiLCJkIiwiZmlsbC1vcGFjaXR5IiwiZGVmcyIsImxpbmVhckdyYWRpZW50IiwieDEiLCJ5MSIsIngyIiwieTIiLCJncmFkaWVudFVuaXRzIiwic3RvcCIsInN0b3AtY29sb3IiLCJvZmZzZXQiLCJzdG9wLW9wYWNpdHkiLCJ0ZXh0IiwidHlwZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/TimeLine/TimeLine.js\n");

/***/ })

});