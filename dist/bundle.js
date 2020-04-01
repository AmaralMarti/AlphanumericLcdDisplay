/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/alphanumeric.js":
/*!*****************************!*\
  !*** ./src/alphanumeric.js ***!
  \*****************************/
/*! exports provided: Alphanumeric */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Alphanumeric\", function() { return Alphanumeric; });\nconst Alphanumeric = {\n    init(canvasId) {\n        this._canvas = document.getElementById(canvasId)\n        this._context = this._canvas.getContext(\"2d\")\n\n        this._loadStyles()\n        this.style('green')\n\n        this._pixelSize = 4\n        this._pixelSpace = 1\n        this._charWidth = 5\n        this._charHeight = 8\n        this._padding = 20\n\n        this._rows = 4\n        this._cols = 20\n\n        this._loadCursorStyles()\n        this.cursorStyle = this._cursorStyles[0]\n\n        this._cursorPosition = {\n          row: 1,\n          col: 1,\n        }\n\n        this._drawComponent()\n    },\n\n    get cursorStyle() {\n      return this._cursorStyle\n    },\n\n    set cursorStyle(style) {\n      if (this._cursorStyles.includes(style)) {\n        this._cursorStyle = style\n      }\n    },\n\n    get cursorPosition() {\n      return this._cursorPosition\n    },\n\n    set cursorPosition(value) {\n      const { row, col } = value\n\n      if ((row !== undefined) && (row > 0) && (row <= this._rows)) {\n        this._cursorPosition.row = row\n      }\n\n      if ((col !== undefined) && (col > 0) && (col <= this._cols)) {\n        this._cursorPosition.col = col\n      }\n    },\n\n    style(value) {\n        const style = this._styles[value]\n        if (style !== undefined) {\n            this._backgroundColor = style._backgroundColor\n            this._dotOff = style._dotOff\n            this._dotOn = style._dotOn\n\n            this._drawComponent()\n        }\n    },\n\n    cursor(row = 1, col = 1) {\n        let active = true\n        setInterval(() => {\n            let color = undefined\n            if (active) {\n                color = this._dotOn\n            }\n            active = !active\n            this._drawBaseChar(row, col, color)\n        }, 400)\n    },\n\n    get padding() {\n        return this._padding\n    },\n\n    set padding(value) {\n        this._padding = value\n        this._drawComponent()\n    },\n\n    get backgroundColor() {\n        return this._backgroundColor\n    },\n\n    set backgroundColor(value) {\n        this._backgroundColor = value\n        this._drawComponent()\n    },\n\n    get dotOff() {\n        return this._dotOff\n    },\n\n    set dotOff(value) {\n        this._dotOff = value\n        this._drawComponent()\n    },\n\n    get dotOn() {\n        return this._dotOn\n    },\n\n    set dotOn(value) {\n        this._dotOn = value\n        this._drawComponent()\n    },\n\n    get pixelSize() {\n        return this._pixelSize\n    },\n\n    set pixelSize(value) {\n        this._pixelSize = value\n        this._drawComponent()\n    },\n\n    get pixelSpace() {\n        return this._pixelSpace\n    },\n\n    set pixelSpace(value) {\n        this._pixelSpace = value\n        this._drawComponent()\n    },\n\n    get charWidth() {\n        return this._charWidth\n    },\n\n    set charWidth(value) {\n        this._charWidth = value\n        this._drawComponent()\n    },\n\n    get charHeight() {\n        return this._charHeight\n    },\n\n    set charHeight(value) {\n        this._charHeight = value\n        this._drawComponent()\n    },\n\n    get rows() {\n        return this._rows\n    },\n\n    set rows(value) {\n        this._rows = value\n        this._drawComponent()\n    },\n\n    get cols() {\n        return this._cols\n    },\n\n    set cols(value) {\n      this._cols = value\n      this._drawComponent()\n    },\n\n    _loadStyles() {\n        this._styles = {\n            green: {\n                _backgroundColor: '#b5e803',\n                _dotOff: '#a2ca32',\n                _dotOn: '#2b4b02',\n            },\n            blue: {\n                _backgroundColor: '#0493fc',\n                _dotOff: '#0173c7',\n                _dotOn: '#ffffff',\n            }\n        }\n    },\n\n    _loadCursorStyles() {\n      this._cursorStyles = ['none', 'line', 'lineBlink', 'bar', 'barBlink']\n    },\n\n    _drawComponent() {\n        this._refreshSize()\n\n        this._context.fillStyle = this._backgroundColor\n        this._context.fillRect(0, 0, this._canvas.width, this._canvas.height)\n\n        for (let row = 1; row <= this._rows; row++) {\n            for (let col = 1; col <= this._cols; col++) {\n                this._drawBaseChar(row, col)\n            }\n        }\n    },\n\n    _refreshSize() {\n        this._height = (this._charHeight * this._pixelSize) + ((this._charHeight + 1) * this._pixelSpace)\n        this._width = (this._charWidth * this._pixelSize) + ((this._charWidth + 1) * this._pixelSpace)\n\n        this._canvas.width = this._width * this._cols + this._padding\n        this._canvas.height = this._height * this._rows + this._padding\n    },\n\n    _getCharCoord(row, col) {\n        const x = ((col - 1) * this._width) + (this._padding / 2 | 0)\n        const y = ((row - 1) * this._height) + (this._padding / 2 | 0)\n\n        return {\n            x, y\n        }\n    },\n\n    _drawBaseChar(row, col, dotColor) {\n        const { x, y } = this._getCharCoord(row, col)\n\n        this._context.fillStyle = this._backgroundColor\n        this._context.fillRect(x, y, this._width, this._height)\n\n        this._context.fillStyle = dotColor || this._dotOff\n\n        for (let i = 0; i < this._charWidth; i++) {\n            const xc = ((this._pixelSpace + this._pixelSize) * i) + this._pixelSpace + x\n            for (let j = 0; j < this._charHeight; j++) {\n                const yc = ((this._pixelSpace + this._pixelSize) * j) + this._pixelSpace + y\n\n                this._context.fillRect(xc, yc, this._pixelSize, this._pixelSize)\n            }\n        }\n    }\n}\n\n\n\n\n//# sourceURL=webpack:///./src/alphanumeric.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _alphanumeric__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alphanumeric */ \"./src/alphanumeric.js\");\n\n\nconst disp = _alphanumeric__WEBPACK_IMPORTED_MODULE_0__[\"Alphanumeric\"]\ndisp.init(\"display\")\ndisp.rows = 4\ndisp.cols = 20\ndisp.pixelSize = 3\ndisp.style('blue')\ndisp.cursor()\n\ndocument.getElementById('styleGreen').onclick = green\ndocument.getElementById('styleBlue').onclick = blue\n\nfunction green() {\n    disp.style('green')\n}\n\nfunction blue() {\n    disp.style('blue')\n}\n\ndocument.getElementById('apply-rows').onclick = () => {\n    const rows = document.getElementById('rows').value\n    disp.rows = rows\n}\n\ndocument.getElementById('apply-cols').onclick = () => {\n    const cols = document.getElementById('cols').value\n    disp.cols = cols\n}\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });