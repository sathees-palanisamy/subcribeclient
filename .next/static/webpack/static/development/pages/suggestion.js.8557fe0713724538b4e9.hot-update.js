webpackHotUpdate("static/development/pages/suggestion.js",{

/***/ "./pages/suggestion.js":
/*!*****************************!*\
  !*** ./pages/suggestion.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);


var _this = undefined,
    _jsxFileName = "/Users/satheeskumarpalanisamy/service/careerservice/client/pages/suggestion.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var SuggestionPage = function SuggestionPage(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      dataList = _useState[0],
      setdataList = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      email = _useState2[0],
      setEmail = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      customerDescription = _useState3[0],
      setCustomerDescription = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      uploadStatus = _useState4[0],
      setUploadStatus = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      uiStatus = _useState5[0],
      setUiStatus = _useState5[1];

  var emailChange = function emailChange(event) {
    setEmail(event.target.value);
  };

  var DeleteClick = function DeleteClick(id, e) {
    var data = {
      id: id,
      email: "",
      detail: "",
      date: ""
    };
    axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/api/feedback/delete', data).then(function (response) {
      displayList();
    })["catch"](function (error) {
      console.log(error);
    });
  };

  var descriptionChange = function descriptionChange(event) {
    setCustomerDescription(event.target.value);
  };

  var displayList = function displayList(event) {
    setUiStatus('list');
    axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('/api/feedback/list').then(function (response) {
      setdataList(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(response.data));
    })["catch"](function (error) {
      console.log(error);
    });
  };

  var handleSubmit = function handleSubmit(event) {
    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var current_datetime = new Date();
    var formatted_date = current_datetime.getDate() + "-" + months[current_datetime.getMonth()] + "-" + current_datetime.getFullYear() + "." + current_datetime.getTime();
    var data = {
      id: "",
      email: email,
      detail: customerDescription,
      date: formatted_date
    };
    axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/api/feedback/create', data).then(function (response) {
      console.log('response.status:', response.status);

      if (response.status === 200) {
        setUploadStatus('Thank you for helping us.');
      } else {
        setUploadStatus('Server Error');
      }
    })["catch"](function (error) {
      console.log(error);
      setUploadStatus('Server Error');
    });
    setEmail('');
    setCustomerDescription('');
    event.preventDefault();
  };

  var homePageLink = __jsx("span", {
    className: "homePagelink",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 28
    }
  }, __jsx("a", {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 13
    }
  }, __jsx("span", {
    className: "ion-md-home icon-medium",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 25
    }
  }, " ")));

  var renderList;

  if (uiStatus === '') {
    renderList = __jsx("div", {
      className: "section-form",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 26
      }
    }, __jsx("div", {
      className: "row subHeadingContainer",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 17
      }
    }, __jsx("h2", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 21
      }
    }, "Suggestion Form"), homePageLink), __jsx("form", {
      onSubmit: handleSubmit,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "row",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 21
      }
    }, __jsx("div", {
      className: "contact-form",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 25
      }
    }, __jsx("div", {
      className: "row",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 29
      }
    }, __jsx("div", {
      className: "col span-1-of-3",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 33
      }
    }, __jsx("label", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 37
      }
    }, "Email ID")), __jsx("div", {
      className: "col span-2-of-3",
      __self: _this,
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
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 37
      }
    }))), __jsx("div", {
      className: "row",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 29
      }
    }, __jsx("div", {
      className: "col span-1-of-3",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 33
      }
    }, __jsx("label", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 37
      }
    }, "Suggestion Details")), __jsx("div", {
      className: "col span-2-of-3",
      __self: _this,
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
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 37
      }
    }))), __jsx("div", {
      className: "row",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 29
      }
    }, __jsx("div", {
      className: "col span-1-of-3",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 33
      }
    }, __jsx("label", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 37
      }
    }, "\xA0")), __jsx("div", {
      className: "col span-2-of-3",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 33
      }
    }, __jsx("input", {
      type: "submit",
      value: "Log it!",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 37
      }
    })))))), __jsx("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 17
      }
    }), __jsx("div", {
      className: "emailAdd",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 17
      }
    }, __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 21
      }
    }, uploadStatus)), __jsx("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147,
        columnNumber: 17
      }
    }), __jsx("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 17
      }
    }), __jsx("div", {
      className: "row",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "col span-1-of-3",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 21
      }
    }, __jsx("label", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151,
        columnNumber: 25
      }
    }, "\xA0")), __jsx("div", {
      className: "col span-2-of-3",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 21
      }
    }, __jsx("input", {
      type: "button",
      value: "List of Suggestions",
      onClick: displayList,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 25
      }
    }))));
  }

  var suggestionListPage;

  if (uiStatus === 'list') {
    suggestionListPage = dataList.map(function (indiSuggestion) {
      return __jsx("div", {
        className: "section-plans",
        key: indiSuggestion.id,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "row",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167,
          columnNumber: 21
        }
      }, __jsx("div", {
        className: "col col-width-1",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168,
          columnNumber: 25
        }
      }), __jsx("div", {
        className: "col col-width-2",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170,
          columnNumber: 25
        }
      }, __jsx("div", {
        className: "plan-box",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171,
          columnNumber: 29
        }
      }, __jsx("div", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172,
          columnNumber: 33
        }
      }, __jsx("ul", {
        className: "iconDisplay",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173,
          columnNumber: 37
        }
      }, __jsx("li", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174,
          columnNumber: 41
        }
      }, __jsx("p", {
        className: "plan-price",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174,
          columnNumber: 45
        }
      }, indiSuggestion.email)), __jsx("li", {
        className: "customerInter",
        onClick: function onClick(e) {
          return DeleteClick(indiSuggestion.id, e);
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175,
          columnNumber: 41
        }
      }, __jsx("i", {
        className: "ion-ios-crop icon-small",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176,
          columnNumber: 42
        }
      }), "Delete")), __jsx("p", {
        className: "plan-price-meal",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178,
          columnNumber: 37
        }
      }, indiSuggestion.detail)), __jsx("div", {
        className: "historyDet",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180,
          columnNumber: 33
        }
      }, __jsx("ul", {
        className: "iconDisplay",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181,
          columnNumber: 37
        }
      }, __jsx("li", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182,
          columnNumber: 41
        }
      }, __jsx("i", {
        className: "ion-ios-calendar icon-small",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182,
          columnNumber: 45
        }
      }), indiSuggestion.date, " Shared Date"))))), __jsx("div", {
        className: "col col-width-3",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187,
          columnNumber: 25
        }
      })));
    });
    renderList = __jsx("div", {
      className: "section-form",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 194,
        columnNumber: 26
      }
    }, __jsx("div", {
      className: "row subHeadingContainer",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 195,
        columnNumber: 17
      }
    }, __jsx("h2", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 197,
        columnNumber: 21
      }
    }, "Suggestion List"), homePageLink), suggestionListPage);
  }

  return __jsx("section", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 13
    }
  }, renderList);
};

/* harmony default export */ __webpack_exports__["default"] = (SuggestionPage);

/***/ })

})
//# sourceMappingURL=suggestion.js.8557fe0713724538b4e9.hot-update.js.map