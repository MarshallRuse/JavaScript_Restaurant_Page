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




const tabFunctions = {
	homePage: __WEBPACK_IMPORTED_MODULE_0__initialPage_js__["a" /* default */],
	menu: __WEBPACK_IMPORTED_MODULE_1__menu_js__["a" /* default */],
	aboutUs: __WEBPACK_IMPORTED_MODULE_2__about_js__["a" /* default */]
};

//set up tab area
const tabs = document.createElement("DIV");
const tabsClass = document.createAttribute("class");
tabsClass.value = "tabs";
tabs.setAttributeNode(tabsClass);


//set up the tab buttons
//home page tab button
const homePageBtn = document.createElement("BUTTON");
//add the button text
const homePageBtnText = document.createTextNode("Home");
homePageBtn.appendChild(homePageBtnText);
//add the tabLinks class
let tabLinksClass = document.createAttribute("class");
tabLinksClass.value = "tabLinks";
homePageBtn.setAttributeNode(tabLinksClass);
//add the data attribute for its .js file to run
homePageBtn.setAttribute("data-tab-function", "homePage"); //I just discovered .setAttribute(), leaving the rest as is b/c can be done both ways/laziness 
homePageBtn.addEventListener("click", openTab);
tabs.appendChild(homePageBtn);

//menu tab button
const menuBtn = document.createElement("BUTTON");
const menuBtnText = document.createTextNode("Menu");
menuBtn.appendChild(menuBtnText);
tabLinksClass = document.createAttribute("class");
tabLinksClass.value = "tabLinks";
menuBtn.setAttributeNode(tabLinksClass);
// set the data attribute
menuBtn.setAttribute("data-tab-function", "menu"); 
menuBtn.addEventListener("click",openTab);
tabs.appendChild(menuBtn);

//about us tab button
const aboutBtn = document.createElement("BUTTON");
const aboutBtnText = document.createTextNode("About Us");
aboutBtn.appendChild(aboutBtnText);
tabLinksClass = document.createAttribute("class");
tabLinksClass.value = "tabLinks";
aboutBtn.setAttributeNode(tabLinksClass);
aboutBtn.setAttribute("data-tab-function", "aboutUs");
aboutBtn.addEventListener("click", openTab);
tabs.appendChild(aboutBtn);

document.querySelector("#content").appendChild(tabs);

function openTab(evt){
	//find tab button (and associated tab) with active class
	let currentTabBtn = document.querySelector(".active");
	//remove active from tab button and remove tab elements (as per Odin Project instructions)
	currentTabBtn.className = currentTabBtn.className.replace(" active", "");
	let parent = document.querySelector("#content");
	let child = document.querySelector(".tabContent");
	console.log(child); 
	parent.removeChild(child);

	//add active to the clicked button
	evt.currentTarget.className += " active";
	let fn = evt.currentTarget.attributes.getNamedItem("data-tab-function").value;
	tabFunctions[fn]();
	console.log(document.querySelector(".tabContent"));
}

//call homePage and set its button to active upon initial page load
homePageBtn.className += " active";
Object(__WEBPACK_IMPORTED_MODULE_0__initialPage_js__["a" /* default */])();




/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const homePage = () => {

	const content = document.querySelector("#content");
	const thisTab = document.createElement("DIV");
	const tabID = document.createAttribute("id");
	tabID.value = "homePage";
	thisTab.setAttributeNode(tabID);
	const tabClass = document.createAttribute("class");
	tabClass.value = "tabContent";
	thisTab.setAttributeNode(tabClass);

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

	thisTab.appendChild(header);
	thisTab.appendChild(img);
	thisTab.appendChild(spiel);

	content.appendChild(thisTab);
};

/* harmony default export */ __webpack_exports__["a"] = (homePage);

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const menu = () => {

	const content = document.querySelector("#content");
	const thisTab = document.createElement("DIV");
	const tabID = document.createAttribute("id");
	tabID.value = "menu";
	thisTab.setAttributeNode(tabID);
	const tabClass = document.createAttribute("class");
	tabClass.value = "tabContent";
	thisTab.setAttributeNode(tabClass);

	let menuHeader = document.createElement("H1");
	let menuHeaderText = document.createTextNode("The Rice Cake Bounty");
	menuHeader.appendChild(menuHeaderText);

	thisTab.appendChild(menuHeader);

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

	thisTab.appendChild(menuList);
	content.appendChild(thisTab);
}

/* harmony default export */ __webpack_exports__["a"] = (menu);

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const aboutUs = () => {

	const content = document.querySelector("#content");
	const thisTab = document.createElement("DIV");
	const tabID = document.createAttribute("id");
	tabID.value = "aboutUs";
	thisTab.setAttributeNode(tabID);
	const tabClass = document.createAttribute("class");
	tabClass.value = "tabContent";
	thisTab.setAttributeNode(tabClass);

	let header = document.createElement("H1");
	let headerText = document.createTextNode("About Us");
	header.appendChild(headerText);
	thisTab.appendChild(header);

	let story = document.createElement("P");
	let storyText = document.createTextNode("Well, see it all started when I stopped eating gluten for a month.  " +
		"I was looking for a gluten free alternative to bread, one that was low-cal. BAM. There they were at Metro. " +
		"Rice Cakes. It was like devine inspiration. I had some stuff at home and started putting that on the Rice Cakes.  " +
		" Some say that was the day Marshall's Rice Cake Emporium was conceived.  It took years to gestate, but here it is, birthed in all its wonderful glory.");
	story.appendChild(storyText);
	thisTab.appendChild(story);
	content.appendChild(thisTab);

}

/* harmony default export */ __webpack_exports__["a"] = (aboutUs);

/***/ })
/******/ ]);