webpackHotUpdate("static/development/pages/share.js",{

/***/ "./pages/share.js":
/*!************************!*\
  !*** ./pages/share.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api_build_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/build-client */ "./api/build-client.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
var _this = undefined,
    _jsxFileName = "/Users/satheeskumarpalanisamy/service/careerservice/client/pages/share.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var SharePage = function SharePage(props) {
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      jobTitle = _useState[0],
      setJobTitle = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      customerDescription = _useState2[0],
      setCustomerDescription = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('Information Technology'),
      category = _useState3[0],
      setCategory = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      salary = _useState4[0],
      setSalary = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('Others'),
      subCategory = _useState5[0],
      setSubCategory = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      experience = _useState6[0],
      setExperience = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      subCategoryArray = _useState7[0],
      setSubCategoryArray = _useState7[1];

  var categoryChange = function categoryChange(event) {
    setCategory(event.target.value);
  };

  var handleSubmit = function handleSubmit(event) {
    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var current_datetime = new Date();
    var formatted_date = current_datetime.getDate() + "-" + months[current_datetime.getMonth()] + "-" + current_datetime.getFullYear();
    var DateNum = new Date().getTime();
    var data = {
      shortDescription: jobTitle,
      mainCategory: category,
      subCategory: subCategory,
      learningDetails: customerDescription,
      noOfLikes: 0,
      salaryDetail: salary,
      dateEntered: formatted_date,
      created: DateNum,
      updated: DateNum,
      experience: experience
    };
    console.log("jobTitle:" + jobTitle);
    console.log("category:" + category);
    console.log("subCategory:" + subCategory);
    console.log("customerDescription:" + customerDescription);
    console.log("salary:" + salary);
    console.log("formatted_date,:" + formatted_date);
    console.log("DateNum:" + DateNum);
    console.log("experience:" + experience);
    console.log("data:" + data); //  props.InsertCareerExec(data);

    event.preventDefault();
  };

  var curSkills = []; //   props.categoryList.map((curCategory: categoryDet) => {
  //        if (curCategory.title === category) {
  //            curSkills = [...curCategory.skills]
  //        }
  //    }) 

  var subCategoryList = curSkills.map(function (suCategories1) {
    return __jsx("option", {
      value: suCategories1,
      key: suCategories1,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 7
      }
    }, suCategories1);
  });

  var homePageLink = __jsx("span", {
    className: "homePagelink",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 22
    }
  }, __jsx("a", {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 3
    }
  }, __jsx("span", {
    className: "ion-md-home icon-medium",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 15
    }
  }, " ")));

  return __jsx("section", {
    className: "sharepath",
    id: "sharepath",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "section-form",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "row subHeadingContainer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 11
    }
  }, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 15
    }
  }, "Share Your Career Path"), homePageLink), __jsx("form", {
    onSubmit: handleSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "contact-form",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 23
    }
  }, __jsx("div", {
    className: "col span-1-of-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 27
    }
  }, __jsx("label", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 31
    }
  }, "Short description about your path")), __jsx("div", {
    className: "col span-2-of-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 27
    }
  }, __jsx("input", {
    type: "text",
    name: "jobTitle",
    id: "jobTitle",
    placeholder: "Your path",
    required: true,
    onChange: function onChange(event) {
      return setJobTitle(event.target.value);
    },
    value: jobTitle,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 31
    }
  }))), __jsx("div", {
    className: "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 23
    }
  }, __jsx("div", {
    className: "col span-1-of-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 27
    }
  }, __jsx("label", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 31
    }
  }, "Main Category")), __jsx("div", {
    className: "col span-2-of-3 classic",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 27
    }
  }, __jsx("select", {
    value: category,
    onChange: categoryChange,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 31
    }
  }, __jsx("option", {
    value: "Information Technology",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 35
    }
  }, "Information Technology"), __jsx("option", {
    value: "Textile",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 35
    }
  }, "Textile"), __jsx("option", {
    value: "Automobile",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 35
    }
  }, "Automobile"), __jsx("option", {
    value: "Medical Science",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 35
    }
  }, "Medical Science"), __jsx("option", {
    value: "Marine",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 35
    }
  }, "Marine"), __jsx("option", {
    value: "Business Management",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 35
    }
  }, "Business Management"), __jsx("option", {
    value: "Agriculture & Biology",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 35
    }
  }, "Agriculture & Biology"), __jsx("option", {
    value: "Electrical & Electronics",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 35
    }
  }, "Electrical & Electronics"), __jsx("option", {
    value: "Chemical",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 35
    }
  }, "Chemical"), __jsx("option", {
    value: "Communication",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 35
    }
  }, "Communication"), __jsx("option", {
    value: "Civil",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 35
    }
  }, "Civil"), __jsx("option", {
    value: "Mech & Manufacturing",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 35
    }
  }, "Mech & Manufacturing"), __jsx("option", {
    value: "Entertainment",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 35
    }
  }, "Entertainment"), __jsx("option", {
    value: "Aerospace",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 35
    }
  }, "Aerospace"), __jsx("option", {
    value: "Physics",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 35
    }
  }, "Physics"), __jsx("option", {
    value: "Maths",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 35
    }
  }, "Maths"), __jsx("option", {
    value: "Arts and Hotel",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 35
    }
  }, "Arts and Hotel")))), __jsx("div", {
    className: "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 23
    }
  }, __jsx("div", {
    className: "col span-1-of-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 27
    }
  }, __jsx("label", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 31
    }
  }, "Sub Category")), __jsx("div", {
    className: "col span-2-of-3 classic",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 27
    }
  }, __jsx("select", {
    value: subCategory,
    onChange: function onChange(event) {
      return setSubCategory(event.target.value);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 31
    }
  }, subCategoryList))), __jsx("div", {
    className: "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 23
    }
  }, __jsx("div", {
    className: "col span-1-of-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 27
    }
  }, __jsx("label", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 31
    }
  }, "Salary per Annum (lakhs)")), __jsx("div", {
    className: "col span-2-of-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 27
    }
  }, __jsx("input", {
    type: "number",
    name: "salary",
    id: "salary",
    placeholder: "Salary in lakhs",
    required: true,
    onChange: function onChange(event) {
      return setSalary(parseInt(event.target.value));
    },
    value: salary,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 31
    }
  }))), __jsx("div", {
    className: "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 23
    }
  }, __jsx("div", {
    className: "col span-1-of-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 27
    }
  }, __jsx("label", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 31
    }
  }, "Experience in years")), __jsx("div", {
    className: "col span-2-of-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 27
    }
  }, __jsx("input", {
    type: "number",
    name: "experience",
    id: "experience",
    placeholder: "Years of Experience",
    required: true,
    onChange: function onChange(event) {
      return setExperience(parseInt(event.target.value));
    },
    value: experience,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 31
    }
  }))), __jsx("div", {
    className: "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 23
    }
  }, __jsx("div", {
    className: "col span-1-of-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 27
    }
  }, __jsx("label", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 31
    }
  }, "What and Where to learn?")), __jsx("div", {
    className: "col span-2-of-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 27
    }
  }, __jsx("textarea", {
    className: "message",
    placeholder: "learning details",
    onChange: function onChange(event) {
      return setCustomerDescription(event.target.value);
    },
    required: true,
    value: customerDescription,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 31
    }
  }))), __jsx("div", {
    className: "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 23
    }
  }, __jsx("div", {
    className: "col span-1-of-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 27
    }
  }, __jsx("label", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 31
    }
  }, "\xA0")), __jsx("div", {
    className: "col span-2-of-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 27
    }
  }, __jsx("input", {
    type: "submit",
    value: "Send it!",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 31
    }
  })))))), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 11
    }
  }), __jsx("div", {
    className: "emailAdd",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 11
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (SharePage);

/***/ })

})
//# sourceMappingURL=share.js.927846fce792cc4e000b.hot-update.js.map