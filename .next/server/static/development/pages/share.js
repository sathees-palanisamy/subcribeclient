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

/***/ "./pages/share.js":
/*!************************!*\
  !*** ./pages/share.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api_build_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/build-client */ "./api/build-client.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/satheeskumarpalanisamy/service/careerservice/client/pages/share.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const SharePage = props => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  const {
    0: jobTitle,
    1: setJobTitle
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: customerDescription,
    1: setCustomerDescription
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: category,
    1: setCategory
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('Information Technology');
  const {
    0: salary,
    1: setSalary
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const {
    0: subCategory,
    1: setSubCategory
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('Others');
  const {
    0: experience,
    1: setExperience
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const {
    0: subCategoryArray,
    1: setSubCategoryArray
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: curError,
    1: setCurError
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const dataReducer = [{
    title: 'Information Technology',
    skills: ["Others", "Big Data Analytics", "Block Chain", "Cloud", "Data Science", "Databases", "Desktop Application", "Embedded Systems", "Enterprise Application", "Game Development", "Microservices", "Mobiles Apps", "Quality Assurance", "Tools", "Website"]
  }, {
    title: 'Textile',
    skills: ["Others", "Apparel", "Chemical Processing", "Draping and Pattern Making", "Dyeing", "Fashion Technology", "Garment Export Merchandising", "Interiors Design", "Knitwear Design", "Man Made Fibre Technology", "Mechanical Processing", "Quality Control & Testing", "Spinning", "Weaving", "Textile Engineering", "Textile Management", "Textile Production"]
  }, {
    title: 'Automobile',
    skills: ["Others", "Automation and Robotics", "Automobile Engineering", "Four wheeler Jobs", "Logistics and Supply Chain", "Mechanical Automobile", "Quality Control & Testing", "Transportation", "Two wheeler Jobs"]
  }, {
    title: 'Medical Science',
    skills: ["Others", "Ayurveda", "Biomedical", "Dentistry", "General Medicine", "Surgery", "Genetic Engineering", "Homeopathy", "Hospital Management", "Medical Electronics", "Nursing", "Occupational Therapy", "Pharmaceutical", "Physiotherapy"]
  }, {
    title: 'Marine',
    skills: ["Others", "Bridge Manoeuvring", "Cadet", "Engine Control", "Hydraulics", "Instrumentation & Process Control", "Marine Electrical", "Naval Architecture & Ocean Engineering", "Navigation", "Operating Ships", "Tanker Cargo", "Tester"]
  }, {
    title: 'Business Management',
    skills: ["Others", "Banking Management", "Disaster Management", "Entrepreneurship", "Finance", "Hospitality Management", "Human Resource", "Insurance", "International Business", "Marketing", "Operation Management", "Sales & Marketing", "System Management"]
  }, {
    title: "Agriculture & Biology",
    skills: ["Others", "Agriculture", "Food Engineering", "Agriculture & Business Management", "Applied MicroBiology", "Bioinformatics", "Botany", "Dairy Technology", "Food Technology", "Forestry Management", "Foundry", "Irrigation Water Management", "Zoology"]
  }, {
    title: 'Electrical & Electronics',
    skills: ["Others", "Applied Electronics", "Control and Instrumentation", "Electrical Engineer", "Electronics Control Systems", "Electronics Engineering", "Embedded Systems", "High Voltage", "Power Electronics and Drives", "Power Engineering and Management", "Power Systems", "Program Logic Controllers", "VLSI Design"]
  }, {
    title: 'Chemical',
    skills: ["Others", "Applied Chemistry", "Catalysis Technology", "Chemical Engineering", "Crystal Science", "Leather Technology", "Paint Technology", "Petrochemical", "Polymer", "Rubber", "Plastic"]
  }, {
    title: 'Communication',
    skills: ["Others", "Communication Systems", "Networking", "Sensor Systems", "Telecommunication", "Wireless Technologies"]
  }, {
    title: 'Civil',
    skills: ["Others", "Soil Mechanics and Foundation", "Applied Geology", "Ceramic Engineering", "Civil Engineering", "Coastal Management", "Construction Engineering & Management", "Environmental & Management", "Geo Informatics", "Hydrology & Water Resources", "Interior Design", "Remote Sensing and Geomatics", "Structural", "Transportation"]
  }, {
    title: 'Mech & Manufacturing',
    skills: ["Others", "Green Manufacturing", "CAD/CAM", "Computer Integrated Manufacturing", "Energy Engineering", "Energy Management", "Hydraulics & Water Res", "Industrial Design", "Manufacturing Management", "Materials Science", "Mechanical Engineering", "Mechanics", "Mechatronics", "Mining", "Offshore Structures", "Printing & Packaging", "Product Design & Development", "Production & Industrial Engineering", "Quality Management", "Solar Energy", "Solid Fluid Mechanics", "Thermal Engineering"]
  }, {
    title: 'Entertainment',
    skills: ["Others", "Animation and Design", "Animation Film Making", "Electronic Media", "Film Making", "Game Art and Design", "Graphic Designing", "Journalism", "Media Management", "Multimedia", "Visual Communication", "Visual Effects"]
  }, {
    title: 'Aerospace',
    skills: ["Others", "Aeronautical Engineering", "Air Traffic Control", "AirCraft Manufacturing and Maintenance", "Airport Management", "Aviation Management", "Avionics and Systems", "Cabin Crew", "Fight Simulation", "Helicopters", "Pilot", "Propulsion", "Supply Chain"]
  }, {
    title: 'Physics',
    skills: ["Others", "Physics Teaching", "Medical Physics", "Nanotechnology", "Nuclear Engineering", "Photonics"]
  }, {
    title: 'Maths',
    skills: ["Others", "Maths Teaching", "Industrial Mathematics", "Scientific Computing", "Applied Mathematics", "Business Statistics", "Computational Statistics", "Maths and Computing Engineering"]
  }, {
    title: 'Arts and Hotel',
    skills: ["Others", "Catering", "Hotel Management", "Tourism Management", "Commerce", "Economics", "Earth and Atmospheric", "Language Specific", "English", "Finance", "Fine and Performing Arts", "History", "Law", "Physical Education and Sports", "Political Science"]
  }];

  const categoryChange = event => {
    setCategory(event.target.value);
  };

  const handleSubmit = event => {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let current_datetime = new Date();
    let formatted_date = current_datetime.getDate() + "-" + months[current_datetime.getMonth()] + "-" + current_datetime.getFullYear();
    let DateNum = new Date().getTime();
    const data = {
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

    axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("/api/insert", {
      newCareer: data
    }).then(response => {
      if (response.status == 200) {
        setCurError('Your Career added successfully');
      } else {
        setCurError('Insert Error');
      }
    }).catch(error => {
      console.log(error);
      setCurError('Insert Error');
    });
    event.preventDefault();
  };

  let curSkills = [];
  dataReducer.map(curCategory => {
    if (curCategory.title === category) {
      curSkills = [...curCategory.skills];
    }
  });
  let subCategoryList = curSkills.map(suCategories1 => __jsx("option", {
    value: suCategories1,
    key: suCategories1,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 326,
      columnNumber: 7
    }
  }, suCategories1));

  let homePageLink = __jsx("span", {
    className: "homePagelink",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 329,
      columnNumber: 22
    }
  }, __jsx("a", {
    href: "/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 330,
      columnNumber: 3
    }
  }, __jsx("span", {
    className: "ion-md-home icon-medium",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 330,
      columnNumber: 15
    }
  }, " ")));

  return __jsx("section", {
    className: "sharepath",
    id: "sharepath",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 334,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "section-form",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 336,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "row subHeadingContainer",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 337,
      columnNumber: 11
    }
  }, __jsx("h2", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 339,
      columnNumber: 15
    }
  }, "Share Your Career Path"), homePageLink), __jsx("form", {
    onSubmit: handleSubmit,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 343,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "row",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 344,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "contact-form",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 345,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "row",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 346,
      columnNumber: 23
    }
  }, __jsx("div", {
    className: "col span-1-of-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 347,
      columnNumber: 27
    }
  }, __jsx("label", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 348,
      columnNumber: 31
    }
  }, "Short description about your path")), __jsx("div", {
    className: "col span-2-of-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 350,
      columnNumber: 27
    }
  }, __jsx("input", {
    type: "text",
    name: "jobTitle",
    id: "jobTitle",
    placeholder: "Your path",
    required: true,
    onChange: event => setJobTitle(event.target.value),
    value: jobTitle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 351,
      columnNumber: 31
    }
  }))), __jsx("div", {
    className: "row",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 355,
      columnNumber: 23
    }
  }, __jsx("div", {
    className: "col span-1-of-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 356,
      columnNumber: 27
    }
  }, __jsx("label", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 357,
      columnNumber: 31
    }
  }, "Main Category")), __jsx("div", {
    className: "col span-2-of-3 classic",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 359,
      columnNumber: 27
    }
  }, __jsx("select", {
    value: category,
    onChange: categoryChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 360,
      columnNumber: 31
    }
  }, __jsx("option", {
    value: "Information Technology",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 361,
      columnNumber: 35
    }
  }, "Information Technology"), __jsx("option", {
    value: "Textile",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 362,
      columnNumber: 35
    }
  }, "Textile"), __jsx("option", {
    value: "Automobile",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 363,
      columnNumber: 35
    }
  }, "Automobile"), __jsx("option", {
    value: "Medical Science",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 364,
      columnNumber: 35
    }
  }, "Medical Science"), __jsx("option", {
    value: "Marine",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 365,
      columnNumber: 35
    }
  }, "Marine"), __jsx("option", {
    value: "Business Management",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 366,
      columnNumber: 35
    }
  }, "Business Management"), __jsx("option", {
    value: "Agriculture & Biology",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 367,
      columnNumber: 35
    }
  }, "Agriculture & Biology"), __jsx("option", {
    value: "Electrical & Electronics",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 368,
      columnNumber: 35
    }
  }, "Electrical & Electronics"), __jsx("option", {
    value: "Chemical",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 369,
      columnNumber: 35
    }
  }, "Chemical"), __jsx("option", {
    value: "Communication",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 370,
      columnNumber: 35
    }
  }, "Communication"), __jsx("option", {
    value: "Civil",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 371,
      columnNumber: 35
    }
  }, "Civil"), __jsx("option", {
    value: "Mech & Manufacturing",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 372,
      columnNumber: 35
    }
  }, "Mech & Manufacturing"), __jsx("option", {
    value: "Entertainment",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 373,
      columnNumber: 35
    }
  }, "Entertainment"), __jsx("option", {
    value: "Aerospace",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 374,
      columnNumber: 35
    }
  }, "Aerospace"), __jsx("option", {
    value: "Physics",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 375,
      columnNumber: 35
    }
  }, "Physics"), __jsx("option", {
    value: "Maths",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 376,
      columnNumber: 35
    }
  }, "Maths"), __jsx("option", {
    value: "Arts and Hotel",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 377,
      columnNumber: 35
    }
  }, "Arts and Hotel")))), __jsx("div", {
    className: "row",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 382,
      columnNumber: 23
    }
  }, __jsx("div", {
    className: "col span-1-of-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 383,
      columnNumber: 27
    }
  }, __jsx("label", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 384,
      columnNumber: 31
    }
  }, "Sub Category")), __jsx("div", {
    className: "col span-2-of-3 classic",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 386,
      columnNumber: 27
    }
  }, __jsx("select", {
    value: subCategory,
    onChange: event => setSubCategory(event.target.value),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 387,
      columnNumber: 31
    }
  }, subCategoryList))), __jsx("div", {
    className: "row",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 394,
      columnNumber: 23
    }
  }, __jsx("div", {
    className: "col span-1-of-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 395,
      columnNumber: 27
    }
  }, __jsx("label", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 396,
      columnNumber: 31
    }
  }, "Salary per Annum (lakhs)")), __jsx("div", {
    className: "col span-2-of-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 398,
      columnNumber: 27
    }
  }, __jsx("input", {
    type: "number",
    name: "salary",
    id: "salary",
    placeholder: "Salary in lakhs",
    required: true,
    onChange: event => setSalary(event.target.value),
    value: salary,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 399,
      columnNumber: 31
    }
  }))), __jsx("div", {
    className: "row",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 403,
      columnNumber: 23
    }
  }, __jsx("div", {
    className: "col span-1-of-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 404,
      columnNumber: 27
    }
  }, __jsx("label", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 405,
      columnNumber: 31
    }
  }, "Experience in years")), __jsx("div", {
    className: "col span-2-of-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 407,
      columnNumber: 27
    }
  }, __jsx("input", {
    type: "number",
    name: "experience",
    id: "experience",
    placeholder: "Years of Experience",
    required: true,
    onChange: event => setExperience(event.target.value),
    value: experience,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 408,
      columnNumber: 31
    }
  }))), __jsx("div", {
    className: "row",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 412,
      columnNumber: 23
    }
  }, __jsx("div", {
    className: "col span-1-of-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 413,
      columnNumber: 27
    }
  }, __jsx("label", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 414,
      columnNumber: 31
    }
  }, "What and Where to learn?")), __jsx("div", {
    className: "col span-2-of-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 416,
      columnNumber: 27
    }
  }, __jsx("textarea", {
    className: "message",
    placeholder: "learning details",
    onChange: event => setCustomerDescription(event.target.value),
    required: true,
    value: customerDescription,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 417,
      columnNumber: 31
    }
  }))), __jsx("div", {
    className: "row",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 420,
      columnNumber: 23
    }
  }, __jsx("div", {
    className: "col span-1-of-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 421,
      columnNumber: 27
    }
  }, __jsx("label", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 422,
      columnNumber: 31
    }
  }, "\xA0")), __jsx("div", {
    className: "col span-2-of-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 424,
      columnNumber: 27
    }
  }, __jsx("input", {
    type: "submit",
    value: "Send it!",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 425,
      columnNumber: 31
    }
  })))))), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 433,
      columnNumber: 11
    }
  }), __jsx("div", {
    className: "emailAdd",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 434,
      columnNumber: 11
    }
  }, curError)));
};

/* harmony default export */ __webpack_exports__["default"] = (SharePage);

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/share.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/satheeskumarpalanisamy/service/careerservice/client/pages/share.js */"./pages/share.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

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
//# sourceMappingURL=share.js.map