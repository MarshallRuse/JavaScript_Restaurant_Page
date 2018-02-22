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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__initialPage_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__menu_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_js__ = __webpack_require__(3);




Object(__WEBPACK_IMPORTED_MODULE_0__initialPage_js__["a" /* default */])();
Object(__WEBPACK_IMPORTED_MODULE_1__menu_js__["a" /* default */])();
Object(__WEBPACK_IMPORTED_MODULE_2__about_js__["a" /* default */])();

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const onPageLoad = () => {

	const content = document.querySelector("#content");
	let header = document.createElement("H1");
	let headerText = document.createTextNode("Marshall's Rice Cake Emporium");
	header.appendChild(headerText);

	let img = document.createElement("IMG");
	let imgSrc = document.createAttribute("src");
	imgSrc.value = "https://img.aws.livestrongcdn.com/ls-article-image-673/ds-photo/getty/article/211/187/451063615.jpg";
	img.setAttributeNode(imgSrc);

	let spiel = document.createElement("P");
	let spielVal = "Welcome to Marshall's Rice Cake Emporium. Enjoy our delicious selection of Rice Cakes, " +
	"from the humble Peanut Butter Rice Cake, to the slightly more sophisticated Blue Cheese Peanut Butter Rice Cake, " +
	"to the creme-de-la-creme, the Peanut Butter Blue Cheese All Dressed seasoning Seaweed Rice Cake, and more!";
	let spielText = document.createTextNode(spielVal);
	spiel.appendChild(spielText);

	content.appendChild(header);
	content.appendChild(img);
	content.appendChild(spiel);
};

/* harmony default export */ __webpack_exports__["a"] = (onPageLoad);

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const menu = () => {

	const content = document.querySelector("#content");

	let menuHeader = document.createElement("H1");
	let menuHeaderText = document.createTextNode("The Rice Cake Bounty");
	menuHeader.appendChild(menuHeaderText);

	content.appendChild(menuHeader);

	let menuList = document.createElement("OL");
	let menuItems = ["Plain Rice Cake", "Rice Cake with Butter", "Rice Cake with American Cheese Slice",
	"Rice Cake with Peanut Butter", "Rice Cake with Peanut Butter and Jam", "Rice Cake with Peanut Butter, Jam, Protein Powder",
	"Rice Cake with Peanut Butter and Seaweed", "Rice Cake with Peanut Butter, Blue Cheese, Seaweed"];
	menuItems.forEach(function(item){
		let listItem = document.createElement("LI");
		let listItemText = document.createTextNode(item);
		listItem.appendChild(listItemText);
		menuList.appendChild(listItem);
	});

	content.appendChild(menuList);
	console.log(menuList);

}

/* harmony default export */ __webpack_exports__["a"] = (menu);

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const aboutUs = () => {

	const content = document.querySelector("#content");

	let header = document.createElement("H1");
	let headerText = document.createTextNode("About Us");
	header.appendChild(headerText);
	content.appendChild(header);

	let story = document.createElement("P");
	let storyText = document.createTextNode("Well, see it all started when I stopped eating gluten for a month.  " +
		"I was looking for a gluten free alternative to bread, one that was low-cal. BAM. There they were at Metro. " +
		"Rice Cakes. It was like devine inspiration. I had some stuff at home and started putting that on the Rice Cakes.  " +
		" Some say that was the day Marshall's Rice Cake Emporium was conceived.  It took years to gestate, but here it is, birthed in all its wonderful glory.");
	story.appendChild(storyText);
	content.appendChild(story);

}

/* harmony default export */ __webpack_exports__["a"] = (aboutUs);

/***/ })
/******/ ]);