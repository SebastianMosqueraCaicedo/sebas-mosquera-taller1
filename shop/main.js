/*
const items = require('../items.json');
console.log(items + "shiz");
*/
let items

fetch("../items.json")
.then(response => {
	   return response.json();
})
.then(data => {
	items = data;
	updateItems()});

updateItems = function () {
	const grid = document.getElementById('grid-shop');
	/*
	let text = document.createElement("p");
	text.setAttribute("class","black bold");
	text.textContent = 'text?REGer';
	grid.append(text);
	*/
	
	//  iterator for every item
	for (let j = 0; j < items.length; j++){
		let article = document.createElement("article");
		article.setAttribute("class", "item-article-shop black section-end flex-straight");

		let img = document.createElement("img");

		// all of this to change path
		let imgPath = items[j].image[0];
		let imgPathArray = Array.from(imgPath);
		imgPathArray.unshift('.');
		let imgPathFinal = imgPathArray.join('')

		img.setAttribute("src", imgPathFinal);
		img.setAttribute("heigth", "250px");
		img.setAttribute("width", "45%");
		article.append(img);

		let section = document.createElement("section");
		section.setAttribute("class", "side-section item-desc-shop");

		let name = document.createElement("h2");
		name.setAttribute("class", "section-end");
		name.textContent = items[j].name;
		section.append(name);

		let price = document.createElement("p");
		price.setAttribute("class", "bold normal-end");
		price.textContent = '$' + items[j].price +
			' USD - Stock: ' + items[j].stock;
		section.append(price);

		let desc = document.createElement("p");
		desc.textContent = items[j].shortDescription;
		section.append(desc);

		article.append(section);

		grid.append(article);
	}
	console.log(items);
}

