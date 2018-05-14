function ColorMatcher(colors) {
	this.colors = colors
}

ColorMatcher.prototype.match = function(other) {
	let matchSimilarities = new Map()
	this.colors.forEach(c => {
		matchSimilarities.set(c, c.similarityWith(other))
	})
	return matchSimilarities
}