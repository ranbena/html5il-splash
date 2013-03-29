// prepare
letter(document.querySelector("h1"), function(i, el) {
	var delay = i * 50;
		el.style["-webkit-animation-delay"] = delay+"ms";
});
	
// ready
document.body.classList.add("ready");
// animate
document.body.classList.add("animateText");
document.body.classList.add("animateIcons");
document.body.classList.add("animateSwirl");
// animate back
setTimeout(function() {
	document.body.classList.remove("animateIcons");
}, 2000);

function letter(el, cb) {
	var elText = el.innerText,
		frag = document.createDocumentFragment(),
		innerElTagName = "span";

	for (var i=0, len=elText.length; i<len; i++) {
		var innerEl = document.createElement(innerElTagName);
		innerEl.innerText = elText[i];
		frag.appendChild(innerEl);
		cb && cb(i, innerEl);
	}
	el.innerHTML = "";
	el.appendChild(frag);
}