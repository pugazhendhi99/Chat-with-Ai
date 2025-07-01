"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/dezalgo";
exports.ids = ["vendor-chunks/dezalgo"];
exports.modules = {

/***/ "(rsc)/./node_modules/dezalgo/dezalgo.js":
/*!*****************************************!*\
  !*** ./node_modules/dezalgo/dezalgo.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar wrappy = __webpack_require__(/*! wrappy */ \"(rsc)/./node_modules/wrappy/wrappy.js\");\nmodule.exports = wrappy(dezalgo);\nvar asap = __webpack_require__(/*! asap */ \"(rsc)/./node_modules/asap/asap.js\");\nfunction dezalgo(cb) {\n    var sync = true;\n    asap(function() {\n        sync = false;\n    });\n    return function zalgoSafe() {\n        var args = arguments;\n        var me = this;\n        if (sync) asap(function() {\n            cb.apply(me, args);\n        });\n        else cb.apply(me, args);\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvZGV6YWxnby9kZXphbGdvLmpzIiwibWFwcGluZ3MiOiI7QUFBQSxJQUFJQSxTQUFTQyxtQkFBT0EsQ0FBQztBQUNyQkMsT0FBT0MsT0FBTyxHQUFHSCxPQUFPSTtBQUV4QixJQUFJQyxPQUFPSixtQkFBT0EsQ0FBQztBQUVuQixTQUFTRyxRQUFTRSxFQUFFO0lBQ2xCLElBQUlDLE9BQU87SUFDWEYsS0FBSztRQUNIRSxPQUFPO0lBQ1Q7SUFFQSxPQUFPLFNBQVNDO1FBQ2QsSUFBSUMsT0FBT0M7UUFDWCxJQUFJQyxLQUFLLElBQUk7UUFDYixJQUFJSixNQUNGRixLQUFLO1lBQ0hDLEdBQUdNLEtBQUssQ0FBQ0QsSUFBSUY7UUFDZjthQUVBSCxHQUFHTSxLQUFLLENBQUNELElBQUlGO0lBQ2pCO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb2RlLW1lbnRvci1haS8uL25vZGVfbW9kdWxlcy9kZXphbGdvL2RlemFsZ28uanM/ZWMwNSJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgd3JhcHB5ID0gcmVxdWlyZSgnd3JhcHB5Jylcbm1vZHVsZS5leHBvcnRzID0gd3JhcHB5KGRlemFsZ28pXG5cbnZhciBhc2FwID0gcmVxdWlyZSgnYXNhcCcpXG5cbmZ1bmN0aW9uIGRlemFsZ28gKGNiKSB7XG4gIHZhciBzeW5jID0gdHJ1ZVxuICBhc2FwKGZ1bmN0aW9uICgpIHtcbiAgICBzeW5jID0gZmFsc2VcbiAgfSlcblxuICByZXR1cm4gZnVuY3Rpb24gemFsZ29TYWZlKCkge1xuICAgIHZhciBhcmdzID0gYXJndW1lbnRzXG4gICAgdmFyIG1lID0gdGhpc1xuICAgIGlmIChzeW5jKVxuICAgICAgYXNhcChmdW5jdGlvbigpIHtcbiAgICAgICAgY2IuYXBwbHkobWUsIGFyZ3MpXG4gICAgICB9KVxuICAgIGVsc2VcbiAgICAgIGNiLmFwcGx5KG1lLCBhcmdzKVxuICB9XG59XG4iXSwibmFtZXMiOlsid3JhcHB5IiwicmVxdWlyZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJkZXphbGdvIiwiYXNhcCIsImNiIiwic3luYyIsInphbGdvU2FmZSIsImFyZ3MiLCJhcmd1bWVudHMiLCJtZSIsImFwcGx5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/dezalgo/dezalgo.js\n");

/***/ })

};
;