window.onload = function() {
	writeLineQueries()
	writeRangeQueries()
}

var writeLineQueries = function() {
	var queries = []
	for(const line in PRODUCT_LINES) {
		queries.push(`create(:Line {name: "${PRODUCT_LINES[line]}"})`)
	}
	populateQueries('.lineQueries', queries)
}

var writeRangeQueries = function() {
	var queries = [createLineMatch('decorativeArts', PRODUCT_LINES.DECORATIVE_ARTS),
		createLineMatch('modelPaints', PRODUCT_LINES.MODEL_PAINTS),
		createRangeMergeQuery('decorativeArts', PRODUCT_RANGES.AUXILIARIES)]
	for(const range in PRODUCT_RANGES) {
		queries.push(createRangeMergeQuery('modelPaints', PRODUCT_RANGES[range]))
	}
	populateQueries('.rangeQueries', queries)
}

var createLineMatch = (lineVariable, line) => `match(${lineVariable}:Line {name:"${line}"})`

var createRangeMergeQuery = (lineVariable, range) =>
	`merge(${lineVariable})<-[:belongs_to]-(:Range {name:"${range}"})`

var populateQueries = function(selector, queries) {
	document.querySelector(selector).innerText = queries.join('\n')
}
