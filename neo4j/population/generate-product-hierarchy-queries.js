window.onload = function() {
	writeLineQueries()
}

var writeLineQueries = function() {
	var queries = ''
	for(const line in PRODUCT_LINES) {
		queries += `create(line:Line {name: "${PRODUCT_LINES[line]}"})\n`
	}
	populateQueries('.lineQueries', queries)
}

var populateQueries = function(selector, queries) {
	document.querySelector(selector).innerText = queries
}
