module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/suggestion.js":
/*!*****************************!*\
  !*** ./pages/suggestion.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/satheeskumarpalanisamy/service/careerservice/client/pages/suggestion.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const SuggestionPage = props => {
  const {
    0: dataList,
    1: setdataList
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: email,
    1: setEmail
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: customerDescription,
    1: setCustomerDescription
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: uploadStatus,
    1: setUploadStatus
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: uiStatus,
    1: setUiStatus
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');

  const emailChange = event => {
    setEmail(event.target.value);
  };

  const DeleteClick = (id, e) => {
    const data = {
      id: id,
      email: "",
      detail: "",
      date: ""
    };
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/feedback/delete', data).then(response => {
      displayList();
    }).catch(error => {
      console.log(error);
    });
  };

  const descriptionChange = event => {
    setCustomerDescription(event.target.value);
  };

  const displayList = event => {
    setUiStatus('list');
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/api/feedback/list').then(response => {
      setdataList([...response.data]);
    }).catch(error => {
      console.log(error);
    });
  };

  const handleSubmit = event => {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let current_datetime = new Date();
    let formatted_date = current_datetime.getDate() + "-" + months[current_datetime.getMonth()] + "-" + current_datetime.getFullYear() + "." + current_datetime.getTime();
    const data = {
      id: "",
      email: email,
      detail: customerDescription,
      date: formatted_date
    };
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/feedback/create', data).then(response => {
      console.log('response.status:', response.status);

      if (response.status === 200) {
        setUploadStatus('Thank you for helping us.');
      } else {
        setUploadStatus('Server Error');
      }
    }).catch(error => {
      console.log(error);
      setUploadStatus('Server Error');
    });
    setEmail('');
    setCustomerDescription('');
    event.preventDefault();
  };

  let homePageLink = __jsx("span", {
    className: "homePagelink",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 28
    }
  }, __jsx("a", {
    href: "/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 13
    }
  }, __jsx("span", {
    className: "ion-md-home icon-medium",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 25
    }
  }, " ")));

  let renderList;

  if (uiStatus === '') {
    renderList = __jsx("div", {
      className: "section-form",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 26
      }
    }, __jsx("div", {
      className: "row subHeadingContainer",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 17
      }
    }, __jsx("h2", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 21
      }
    }, "Suggestion Form"), homePageLink), __jsx("form", {
      onSubmit: handleSubmit,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "row",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 21
      }
    }, __jsx("div", {
      className: "contact-form",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 25
      }
    }, __jsx("div", {
      className: "row",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 29
      }
    }, __jsx("div", {
      className: "col span-1-of-3",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 33
      }
    }, __jsx("label", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 37
      }
    }, "Email ID")), __jsx("div", {
      className: "col span-2-of-3",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 33
      }
    }, __jsx("input", {
      type: "text",
      name: "email",
      id: "email",
      placeholder: "Your Email ID",
      required: true,
      onChange: emailChange,
      value: email,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 37
      }
    }))), __jsx("div", {
      className: "row",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 29
      }
    }, __jsx("div", {
      className: "col span-1-of-3",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 33
      }
    }, __jsx("label", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 37
      }
    }, "Suggestion Details")), __jsx("div", {
      className: "col span-2-of-3",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 33
      }
    }, __jsx("textarea", {
      className: "message",
      placeholder: "details",
      onChange: descriptionChange,
      required: true,
      value: customerDescription,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 37
      }
    }))), __jsx("div", {
      className: "row",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 29
      }
    }, __jsx("div", {
      className: "col span-1-of-3",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 33
      }
    }, __jsx("label", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 37
      }
    }, "\xA0")), __jsx("div", {
      className: "col span-2-of-3",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 33
      }
    }, __jsx("input", {
      type: "submit",
      value: "Log it!",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 37
      }
    })))))), __jsx("br", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 17
      }
    }), __jsx("div", {
      className: "emailAdd",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 17
      }
    }, __jsx("p", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 21
      }
    }, uploadStatus)), __jsx("br", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147,
        columnNumber: 17
      }
    }), __jsx("br", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 17
      }
    }), __jsx("div", {
      className: "row",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "col span-1-of-3",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 21
      }
    }, __jsx("label", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151,
        columnNumber: 25
      }
    }, "\xA0")), __jsx("div", {
      className: "col span-2-of-3",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 21
      }
    }, __jsx("input", {
      type: "button",
      value: "List of Suggestions",
      onClick: displayList,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 25
      }
    }))));
  }

  let suggestionListPage;

  if (uiStatus === 'list') {
    suggestionListPage = dataList.map(indiSuggestion => __jsx("div", {
      className: "section-plans",
      key: indiSuggestion.id,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "row",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167,
        columnNumber: 21
      }
    }, __jsx("div", {
      className: "col col-width-1",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 25
      }
    }), __jsx("div", {
      className: "col col-width-2",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 170,
        columnNumber: 25
      }
    }, __jsx("div", {
      className: "plan-box",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171,
        columnNumber: 29
      }
    }, __jsx("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 172,
        columnNumber: 33
      }
    }, __jsx("ul", {
      className: "iconDisplay",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173,
        columnNumber: 37
      }
    }, __jsx("li", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 174,
        columnNumber: 41
      }
    }, __jsx("p", {
      className: "plan-price",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 174,
        columnNumber: 45
      }
    }, indiSuggestion.email)), __jsx("li", {
      className: "customerInter",
      onClick: e => DeleteClick(indiSuggestion.id, e),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 175,
        columnNumber: 41
      }
    }, __jsx("i", {
      className: "ion-ios-crop icon-small",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 176,
        columnNumber: 42
      }
    }), "Delete")), __jsx("p", {
      className: "plan-price-meal",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 178,
        columnNumber: 37
      }
    }, indiSuggestion.detail)), __jsx("div", {
      className: "historyDet",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 180,
        columnNumber: 33
      }
    }, __jsx("ul", {
      className: "iconDisplay",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 181,
        columnNumber: 37
      }
    }, __jsx("li", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 182,
        columnNumber: 41
      }
    }, __jsx("i", {
      className: "ion-ios-calendar icon-small",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 182,
        columnNumber: 45
      }
    }), indiSuggestion.date, " Shared Date"))))), __jsx("div", {
      className: "col col-width-3",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 187,
        columnNumber: 25
      }
    })), __jsx("br", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 190,
        columnNumber: 18
      }
    }), __jsx("br", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 191,
        columnNumber: 18
      }
    })));
    renderList = __jsx("div", {
      className: "section-form",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 196,
        columnNumber: 26
      }
    }, __jsx("div", {
      className: "row subHeadingContainer",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 197,
        columnNumber: 17
      }
    }, __jsx("h2", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 199,
        columnNumber: 21
      }
    }, "Suggestion List"), homePageLink), suggestionListPage);
  }

  return __jsx("section", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 13
    }
  }, renderList);
};

/* harmony default export */ __webpack_exports__["default"] = (SuggestionPage);

/***/ }),

/***/ 4:
/*!***********************************!*\
  !*** multi ./pages/suggestion.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/satheeskumarpalanisamy/service/careerservice/client/pages/suggestion.js */"./pages/suggestion.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=suggestion.js.map