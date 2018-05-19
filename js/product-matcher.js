function ProductMatcher(set) {
	this.products = set.products
}

ProductMatcher.prototype.match = function(color) {
	let matches = {
		similarities: new Map(),
		highestSimilarity: 0,
		highest: new Array(),
		add: function(product) {
			const similarity = product.color.similarityWith(color)
			this.similarities.set(product, similarity)
			this.highestSimilarity = Math.max(this.highestSimilarity, similarity)
		},
		populateHighest: function() {
			this.similarities.forEach(function (similarity, product) {
				if(similarity == matches.highestSimilarity) {
					matches.highest.push(product)
				}
			})
		}
	}

	this.products.forEach(p => matches.add(p))
	matches.populateHighest()

	return matches
}