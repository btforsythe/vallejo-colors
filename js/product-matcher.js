function ProductMatcher(set) {
	this.products = set.products
}

ProductMatcher.prototype.match = function(color) {
	let matchSimilarities = new Map()
	this.products.forEach(p => {
		matchSimilarities.set(p, p.color.similarityWith(color))
	})
	return matchSimilarities
}