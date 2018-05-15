function ColorSet(name, url, products) {
	this.name = name
	this.url = url

	this.productsByModel = new Map()
	products.forEach(p => this.productsByModel.set(p.model, p))

	Object.defineProperty(this, 'products', {
		get: function() {
			return Array.from(this.productsByModel.values())
		}
	})
}

ColorSet.prototype.findProductByModelNumber = function(model) {
	return this.productsByModel.get(model)
}