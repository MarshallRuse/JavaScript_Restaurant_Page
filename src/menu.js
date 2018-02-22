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

export default menu;