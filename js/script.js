// prepare
letter(document.querySelector("h1"));
	
// ready
document.body.classList.add("ready");

// animate
setTimeout(function() {
	document.body.classList.add("animateText");
	document.body.classList.add("animateIcons");
}, 0);

// animate back
setTimeout(function() {
	document.body.classList.add("animateIconsBack");
}, 2000);

function letter(el) {
	var textProp = "textContent" in el ? "textContent" : "innerText";
		elText = el[textProp],
		frag = document.createDocumentFragment(),
		innerElTagName = "span";

	for (var i=0, len=elText.length; i<len; i++) {
		var innerEl = document.createElement(innerElTagName);
		innerEl[textProp] = elText[i];
		frag.appendChild(innerEl);
	}
	el.innerHTML = "";
	el.appendChild(frag);
}