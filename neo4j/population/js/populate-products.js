window.onload = function() {
	findNon70Products()
	findDuplicatedProducts()
	writeProductCreationQueries()
}

const findNon70Products = function() {
	sets.forEach(s => s.productsByModel.forEach(
		(p) => p.model.startsWith('70')? {}: writeProblemProductRow(s, p, '.non-70-models'))
	)
}

const writeProblemProductRow = function(set, product, parentSelector) {
	let tr = document.querySelector(parentSelector).appendChild(document.createElement('tr'))
	appendTd(tr, set.name)
	appendTd(tr, product.name)
	appendTd(tr, product.model)
	appendTd(tr, product.category)
	appendTd(tr, product.range)
	appendTd(tr, product.line)
}

const appendTd =
	(tr, text) => tr.appendChild(document.createElement('td')).innerText = text

const findDuplicatedProducts = function() {

	var productModelNumbers = []
	var duplicateModelNumbers = []
	sets.forEach(function(set) {
		Array.from(set.productsByModel.keys()).forEach(function(modelNumber) {
			if(productModelNumbers.includes(modelNumber)) {
				if(!duplicateModelNumbers.includes(modelNumber)) {
					duplicateModelNumbers.push(modelNumber)
				}
			} else {
				productModelNumbers.push(modelNumber)
			}
		})
	})
	duplicateModelNumbers.forEach(duplicate => {
		forEverySetAndProduct(
			(set, product, modelNumber) => {
				if(duplicate === modelNumber) {
					writeProblemProductRow(set, product, '.duplicatedProducts')
				}
			}
		)
	})
}

const writeProductCreationQueries = function() {
	var queries = []
	forEverySetAndProduct((s, p) => queries.push(buildCreateProductQuery(s, p)))
	populateQueries('.productCreationQueries', queries)
}

const forEverySetAndProduct = function(callback) {
	sets.forEach(function(set) {
		set.productsByModel.forEach(function(product, productModelNumber) {
			callback(set, product, productModelNumber)
		})
	})
}

const buildCreateProductQuery = (s, p) => `match (:Set {modelNumber:"${s.model}"})<-[:belongs_to]-(:Product ${buildProduct(p)})`

const buildProduct = (p) =>
	p.color === Color.UNCOLORED?
		`{name:"${p.name}", modelNumber:"${p.model}"}`:
		`{name:"${p.name}", modelNumber:"${p.model}", ${buildRgb(p.color)}}`

const buildRgb = (c) => `red:${c.red}, green:${c.green}, blue:${c.blue}`