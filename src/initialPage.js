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

export default onPageLoad;