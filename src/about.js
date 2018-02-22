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

export default aboutUs;