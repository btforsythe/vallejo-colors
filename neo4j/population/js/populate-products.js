window.onload = function() {
	findNon70Products()
}

const findNon70Products = function() {
	sets.forEach(s => s.productsByModel.forEach(
		(p) => p.model.startsWith('70')? {}: writeNon70Product(s, p))
	)
}

const writeNon70Product = function(set, product) {
	let tr = document.querySelector('.non-70-models').appendChild(document.createElement('tr'))
	appendTd(tr, set.name)
	appendTd(tr, product.name)
	appendTd(tr, product.model)
	appendTd(tr, product.category)
	appendTd(tr, product.range)
	appendTd(tr, product.line)
}

const appendTd =
	(tr, text) => tr.appendChild(document.createElement('td')).innerText = text