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
	var queries = [createLineMatch(PRODUCT_LINES.DECORATIVE_ARTS),
		createLineMatch(PRODUCT_LINES.MODEL_PAINTS),
		createRangeMergeQuery(PRODUCT_LINES.DECORATIVE_ARTS, PRODUCT_RANGES.AUXILIARIES)]
	for(const range in PRODUCT_RANGES) {
		queries.push(createRangeMergeQuery(PRODUCT_LINES.MODEL_PAINTS, PRODUCT_RANGES[range]))
	}
	populateQueries('.rangeQueries', queries)
}

var createLineMatch = (line) => `match(${toSnakeCase(line)}:Line {name:"${line}"})`

var createRangeMergeQuery = (line, range) =>
	`merge(${toSnakeCase(line)})<-[:belongs_to]-(:Range {name:"${range}"})`