const PRODUCT_LINES = {
	MODEL_PAINTS: "Model Paints",
	DECORATIVE_ARTS: "Decorative Arts"
}

const PRODUCT_RANGES = {
	MODEL_COLOR: "Model Color",
	MODEL_WASH: "Model Wash",
	PIGMENTS: "Pigments",
	MODEL_AIR: "Model Air",
	GAME_COLOR: "Game Color",
	AUXILIARIES: "Auxiliaries"
}

const PRODUCT_CATEGORIES = {
	PAINT: "paint",
	WASH: "wash",
	MEDIUM: "medium"
}

function Product(name, model, rgb, category, range, line) {

	this.name = name
	this.model = model
	this.rgb = rgb

	this.color = new Color(rgb)

	this.category = category || PRODUCT_CATEGORIES.PAINT
	this.range = range || PRODUCT_RANGES.MODEL_COLOR
	this.line = line || PRODUCT_LINES.MODEL_PAINTS
}