import homePage from "./initialPage.js";
import menu from "./menu.js";
import aboutUs from "./about.js";

const tabFunctions = {
	homePage: homePage,
	menu: menu,
	aboutUs: aboutUs
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
homePage();


