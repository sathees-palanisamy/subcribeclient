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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./api/build-client.js":
/*!*****************************!*\
  !*** ./api/build-client.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (({
  req
}) => {
  if (true) {
    // We are on the server
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
      baseURL: 'http://localhost:5001/',
      headers: req.headers
    });
  } else {}
});

/***/ }),

/***/ "./pages/edit.js":
/*!***********************!*\
  !*** ./pages/edit.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api_build_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/build-client */ "./api/build-client.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/satheeskumarpalanisamy/service/careerservice/client/pages/edit.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const EditSubCribe = ({
  currentUser
}) => {
  const {
    0: depList,
    1: SetDepList
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: newDepList,
    1: SetNewDepList
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: checkBoxList,
    1: setCheckBoxList
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: subId,
    1: setSubID
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const curDepList = ["Information Technology", "Textile", "Automobile", "Medical Science", "Marine", "Business Management", "Agriculture & Biology", "Electrical & Electronics", "Chemical", "Communication", "Civil", "Mech & Manufacturing", "Entertainment", "Aerospace", "Physics", "Maths", "Arts and Hotel"];

  const handleCheckboxClick = (event, checkBoxDepart) => {
    let newCheckObj = [...checkBoxList];
    newCheckObj.map((singleCObj, index) => {
      if (singleCObj.department === checkBoxDepart.department) {
        let newState = newCheckObj[index].subcribed;
        newCheckObj[index].subcribed = !newState;

        if (newCheckObj[index].subcribed === true) {
          let newdepList = [...newDepList, newCheckObj[index].department];
          SetNewDepList([...newdepList]);
        } else {
          const newlist2 = depList.map(dep1 => dep1 !== checkBoxDepart.department);
        }
      }
    });
    setCheckBoxList([...newCheckObj]);
  };

  const submitHandler = event => {
    event.preventDefault();

    try {
      const response = axios__WEBPACK_IMPORTED_MODULE_2___default.a.put("/api/updatesubcribe", {
        id: subId,
        depart: [...newDepList]
      });
    } catch (err) {
      console.log('err:' + err);
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    var newList1 = [];
    axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("/api/subcribe").then(response => {
      setSubID(response.data.id);
      SetDepList([...response.data.departlist]);

      if (newDepList.length === 0) {
        SetNewDepList([...response.data.departlist]);
        newList1 = [...response.data.departlist];
      } else {
        newList1 = [...newDepList];
      }

      const checkBoxInitObj = curDepList.map((sinDep, index) => {
        let subcribedValue = false;

        for (let j = 0; j < newList1.length; j++) {
          if (newList1[j] === sinDep) {
            subcribedValue = true;
          }
        }

        return {
          "department": sinDep,
          "subcribed": subcribedValue
        };
      });
      setCheckBoxList([...checkBoxInitObj]);
    }).catch(error => {
      console.log(error);
    });
  }, []);
  const depRenderList = checkBoxList.map((sinDep, index) => {
    return __jsx("div", {
      key: index,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 2
      }
    }, __jsx("input", {
      type: "checkbox",
      checked: sinDep.subcribed,
      onChange: e => handleCheckboxClick(e, sinDep),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 4
      }
    }), __jsx("span", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 4
      }
    }, " "), __jsx("label", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 18
      }
    }, sinDep.department));
  });

  const finalRenderDep = __jsx("div", {
    className: "p-d-flex p-flex-column",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 26
    }
  }, depRenderList);

  return currentUser ? __jsx("div", {
    className: "container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 5
    }
  }, __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 7
    }
  }), __jsx("h2", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 5
    }
  }, "Subcribed Department List"), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 5
    }
  }), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 5
    }
  }, finalRenderDep), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 5
    }
  }), __jsx("button", {
    onClick: submitHandler,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 4
    }
  }, "Submit")) : __jsx("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 5
    }
  }, "You are NOT signed in");
};

EditSubCribe.getInitialProps = async context => {
  console.log('Edit Page!');
  const client = Object(_api_build_client__WEBPACK_IMPORTED_MODULE_1__["default"])(context);
  const {
    data
  } = await client.get('/api/users/currentuser');
  console.log('data:' + data.currentUser);
  return data;
};

/* harmony default export */ __webpack_exports__["default"] = (EditSubCribe);

/***/ }),

/***/ 3:
/*!*****************************!*\
  !*** multi ./pages/edit.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/satheeskumarpalanisamy/service/careerservice/client/pages/edit.js */"./pages/edit.js");


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
//# sourceMappingURL=edit.js.map