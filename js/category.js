function CatalogLevel(name, parent) {

	this.name = name
	this.children = []

	if(parent) {
		parent.add(this)
	}
	
	this.add = (child) => {
		this.children.push(child)
	}
}