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

export default menu;