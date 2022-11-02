/*
const items = require('../items.json');
console.log(items + "shiz");
*/
let items, itemsFilter, searchQuery;
let order = {
	relevance: false,
	ratings: false,
	cheaper: false,
	expensive: false,
	popularity: false
};

let filters = {
	price: undefined,
	maintainance: undefined,
	originalLife: undefined,
	cloneLife: undefined,
	period: undefined,
	politic: undefined,
	movement: undefined,
	country: undefined,
	sizes: undefined,
	gen: undefined,
	danger: undefined
};

let searchArea = document.getElementById('main-search');

// there might be a better way to do this
orderItems = function(value) {
	switch (value){
		case 0:
			order = {
				relevance: true,
				ratings: false,
				cheaper: false,
				expensive: false,
				popularity: false
			};
			// change button to active
		break;

		case 1:
			order = {
				relevance: false,
				ratings: true,
				cheaper: false,
				expensive: false,
				popularity: false
			};
			// change button to active
		break;

		case 2:
			order = {
				relevance: false,
				ratings: false,
				cheaper: true,
				expensive: false,
				popularity: false
			};
			// change button to active
		break;

		case 3:
			order = {
				relevance: false,
				ratings: false,
				cheaper: false,
				expensive: true,
				popularity: false
			};
			// change button to active
		break;

		case 4:
			order = {
				relevance: false,
				ratings: false,
				cheaper: false,
				expensive: false,
				popularity: true 
			};
			// change button to active
		break;
	}
}

restartItems = function() {
	itemsFilter = items;
	updateItems();
	searchArea.value = '';
	searchedText.textContent = "NONE";
}

searchItems = function() {
	searchQuery = searchArea.value;
	const searchedItems= items.filter((el) => {
		if(el.name.toLowerCase().includes(searchQuery.toLowerCase())
		|| el.nick.toLowerCase().includes(searchQuery.toLowerCase())
		|| el.longDescription.toLowerCase().includes(searchQuery.toLowerCase())
		|| el.period.toLowerCase().includes(searchQuery.toLowerCase())
		|| el.movement.toLowerCase().includes(searchQuery.toLowerCase())
		|| el.country.toLowerCase().includes(searchQuery.toLowerCase())){
			return true;
		} else {
			return false;
		}
	});
	itemsFilter = searchedItems;
	searchedText.textContent = "< " + searchQuery + " >";
	updateItems();
}

filterItems = function() {
	filters = {
		price: [document.getElementById('pr-min').value,
			document.getElementById('pr-max').value],
		maintainance: [document.getElementById('ma-min').value,
			document.getElementById('ma-max').value],
		originalLife: [document.getElementById('og-min').value,
			document.getElementById('og-max').value],
		cloneLife: [document.getElementById('cl-min').value,
			document.getElementById('cl-max').value],
		period: document.getElementById('period-list').value,
		politic: document.getElementById('politic-list').value,
		movement: document.getElementById('movement-list').value,
		country: document.getElementById('country-list').value,
		sizes: document.getElementById('size-list').value,
		gen: document.getElementById('gen-list').value,
		danger: document.getElementById('danger-list').value
	};
	let filteredItems = itemsFilter.filter((el) => {

		function isInPrice () {
			if(filters.price[0] != '' && filters.price[0] != undefined
			&& filters.price[1] != '' && filters.price[1] != undefined){
				if(filters.price[0] <= el.price 
				&& filters.price[1] >= el.price){
					return true;
				} else {
					return false;
				}
			} else {
				return undefined;
			}
		};

		function isInMaint () {
			if(filters.maintainance[0] != '' 
				&& filters.maintainance[0] != undefined
				&& filters.maintainance[1] != undefined
				&& filters.maintainance[1] != ''){
				if(filters.maintainance[0] <= el.maintainance
				&& filters.maintainance[1] >= el.maintainance){
					return true;
				} else {
					return false;
				}
			} else {
				return undefined;
			}
		};

		function isInOrigin () {
			if(filters.originalLife[0] != '' 
				&& filters.originalLife[0] != undefined
				&& filters.originalLife[1] != undefined
				&& filters.originalLife[1] != ''){
				if (parseFloat(filters.originalLife[0]) 
					<= ((el.originalLife[0] + el.originalLife[1]) / 2)
					&& parseFloat(filters.originalLife[1]) 
					>= ((el.originalLife[0] + el.originalLife[1]) / 2)){
					return true;
				} else {
					return false;
				}
			} else {
				return undefined;
			}
		};

		function isInClone () {
			if(filters.cloneLife[0] != '' 
				&& filters.cloneLife[0] != undefined
				&& filters.cloneLife[1] != undefined
				&& filters.cloneLife[1] != ''){
				if (parseFloat(filters.cloneLife[0]) 
					<= ((el.clonelLife[0] + el.clonelLife[1]) / 2)
					&& parseFloat(filters.clonelLife[1]) 
					>= ((el.clonelLife[0] + el.clonelLife[1]) / 2)){
					return true;
				} else {
					return false;
				}
			} else {
				return undefined;
			}
		};

		function isInDanger () {
			if(filters.danger != undefined){
				if(filters.danger >= el.danger){
					return true;
				} else {
					return false;
				}
			} else {
				return undefined;
			}
		};

		function isInPeriod() {
			if(filters.period != "" && filters.period != undefined){
				return filters.period === el.period;
			} else {
				return undefined;
			}
		};

		function isInPolitic() {
			if(filters.politic != "" && filters.politic != undefined){
				return filters.politic === el.politic;
			} else {
				return undefined;
			}
		};

		function isInMovement() {
			if(filters.movement != "" && filters.movement != undefined){
				return filters.movement === el.movement;
			} else {
				return undefined;
			}
		};

		function isInCountry() {
			if(filters.country != "" && filters.country != undefined){
				return filters.country === el.country;
			} else {
				return undefined;
			}
		};

		function isInPeriod() {
			if(filters.period != "" && filters.period != undefined){
				return filters.period === el.period;
			} else {
				return undefined;
			}
		};

		function isInSizes() {
			if(filters.sizes != "" && filters.sizes != undefined){
				let qSizes = el.sizes.filter((el) => {
					return el === filters.sizes;
				});
				return qSizes.length > 0;
			} else {
				return undefined
			}
		};

		function isInGen() {
			if(filters.gen!= "" && filters.gen != undefined){
				return filters.gen === el.gen;
			} else {
				return undefined;
			}
		};

		let filterChecks = [
			isInPrice(), 
			isInClone(), 
			isInMaint(), 
			isInOrigin(),
			isInDanger(),
			isInPeriod(),
			isInPolitic(),
			isInMovement(),
			isInCountry(),
			isInSizes(),
			isInGen
		];
		console.log(filterChecks);
	});

	console.log(filteredItems);
	console.log(filters);
	itemsFilter = filteredItems;
	updateItems();
}

updateItems = function () {
	const grid = document.getElementById('grid-shop');

	// clear previous items
	while (grid.firstChild){
		grid.removeChild(grid.firstChild);
	}
	/*
	let text = document.createElement("p");
	text.setAttribute("class","black bold");
	text.textContent = 'text?REGer';
	grid.append(text);
	*/
	
	//  iterator for every item
	for (let j = 0; j < itemsFilter.length; j++){
		let article = document.createElement("article");
		article.setAttribute("class", "item-article-shop black section-end flex-straight");

		let img = document.createElement("img");

		// all of this to change path
		let imgPath = itemsFilter[j].image[0];
		let imgPathArray = Array.from(imgPath);
		imgPathArray.unshift('.');
		let imgPathFinal = imgPathArray.join('')

		img.setAttribute("src", imgPathFinal);
		article.append(img);
		img.setAttribute("heigth", "100%");
		img.setAttribute("width", "45%");

		let section = document.createElement("section");
		section.setAttribute("class", "side-section item-desc-shop");

		let name = document.createElement("h2");
		name.setAttribute("class", "section-end");
		name.textContent = itemsFilter[j].name;
		section.append(name);

		let price = document.createElement("p");
		price.setAttribute("class", "bold normal-end");
		price.textContent = '$' + itemsFilter[j].price +
			' USD - Stock: ' + itemsFilter[j].stock;
		section.append(price);

		let desc = document.createElement("p");
		desc.textContent = itemsFilter[j].shortDescription;
		section.append(desc);

		article.append(section);

		grid.append(article);
	}
}

let searchedText = document.getElementById('searched-text');

let searchButton = document.getElementById('main-button');
searchButton.addEventListener("click", searchItems, {once: false});

let relevanceButton = document.getElementById('relevance-button');
relevanceButton.addEventListener('click', orderItems(0), {once: false});

let ratingsButton = document.getElementById('ratings-button');
ratingsButton.addEventListener('click', orderItems(1), {once: false});

let cheaperButton = document.getElementById('cheaper-button');
cheaperButton.addEventListener('click', orderItems(2), {once: false});

let expensiveButton = document.getElementById('expensive-button');
expensiveButton.addEventListener('click', orderItems(3), {once: false});

let popularityButton = document.getElementById('popularity-button');
popularityButton.addEventListener('click', orderItems(4), {once: false});

let resetButton = document.getElementById('reset-button');
resetButton.addEventListener('click', restartItems, {once: false});

let filterButton = document.getElementById('filter-button');
filterButton.addEventListener('click', filterItems, {once: false});

// get the products from the json array
fetch("../items.json")
.then(response => {
	   return response.json();
})
.then(data => {
	items = data;
	itemsFilter = items;
	updateItems();
});

