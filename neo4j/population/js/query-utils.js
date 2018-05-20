var populateQueries = function(selector, queries) {
	document.querySelector(selector).innerText = queries.join('\n')
}

var toSnakeCase = input => input.toLowerCase().replace(' ', '_')
