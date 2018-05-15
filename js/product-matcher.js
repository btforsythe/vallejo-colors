function ColorMatcher(set) {
	this.products = set.products
}

ColorMatcher.prototype.match = function(color) {
	let matchSimilarities = new Map()
	this.products.forEach(p => {
		matchSimilarities.set(p, p.color.similarityWith(color))
	})
	return matchSimilarities
}