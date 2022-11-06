function genHeader(isRoot) {
	let paths;
	if (isRoot) {
		paths = [
			"index.html", 
			"you/index.html", 
			"shop/index.html", 
			"cart/index.html"
		];
	} else {
		paths = [
			"../index.html", 
			"../you/index.html", 
			"../shop/index.html", 
			"../cart/index.html"
		];
	}
	let header = document.createElement("header");
	header.setAttribute("class", "flex-center");

	let nav = document.createElement("nav");
	nav.setAttribute("class", "flex-center justify-start");

	let h2 = document.createElement("h2");
	h2.setAttribute("class", "main-title");
	h2.textContent = "TStore";
	nav.append(h2);

	let menu = document.createElement("menu");
	menu.setAttribute("class", "main-list flex-center justify-start");

	let items = [
		document.createElement("li"),
		document.createElement("li"),
		document.createElement("li"),
		document.createElement("li")
	];

	let links = [
		document.createElement("a"),
		document.createElement("a"),
		document.createElement("a"),
		document.createElement("a")
	];

	links[0].setAttribute("href", paths[0]);
	links[1].setAttribute("href", paths[1]);
	links[2].setAttribute("href", paths[2]);
	links[3].setAttribute("href", paths[3]);

	let texts = [
		document.createElement("p"),
		document.createElement("p"),
		document.createElement("p"),
		document.createElement("p")
	];

	texts[0].textContent = "HOME";
	texts[0].setAttribute("class", "main-home");
	texts[1].textContent = "YOU";
	texts[1].setAttribute("class", "main-you");
	texts[2].textContent = "SHOP";
	texts[2].setAttribute("class", "main-shop");
	texts[3].textContent = "CART";
	texts[3].setAttribute("class", "main-cart");

	for (let j = 0; j < items.length; j++){
		links[j].append(texts[j]);
		items[j].append(links[j]);
		menu.append(items[j]);
	}

	nav.append(menu);

	let textArea = document.createElement("textArea");
	textArea.setAttribute("class", "main-search");
	textArea.setAttribute("id", "main-search");
	textArea.setAttribute("rows", "1");
	textArea.setAttribute("maxlength", "30");
	textArea.setAttribute("placeholder", "Name, Location or Event...");
	nav.append(textArea);

	let button = document.createElement("button");
	button.setAttribute("class", "main-button left-end");
	button.setAttribute("id", "main-button");
	button.setAttribute("type", "button");
	button.textContent = "SEARCH";
	nav.append(button);

	header.append(nav);

	document.body.prepend(header);
}
