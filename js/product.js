function Product(name, model, rgb) {

	this.name = name
	this.model = model
	this.rgb = rgb

	this.color = new Color(rgb)
}