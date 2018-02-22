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

export default homePage;