const MAX_DISTANCE = Math.sqrt(Math.pow(255, 2) * 3)

function Color(red, green, blue) {
	Object.defineProperty(this, 'red', { value: red})
	Object.defineProperty(this, 'green', { value: green})
	Object.defineProperty(this, 'blue', { value: blue})
}

Color.prototype.similarityWith = function(other) {
	return 100 - this.differenceWith(other)
}

Color.prototype.differenceWith = function(other) {
	var distance = Math.sqrt(Math.pow(this.red - other.red, 2)
		+ Math.pow(this.green - other.green, 2)
		+ Math.pow(this.blue - other.blue, 2))
	return Math.round(distance / MAX_DISTANCE * 100)
}

Color.prototype.matches = function(other) {

	if(other instanceof Color) {
		return this.red == other.red
			&& this.green == other.green
			&& this.blue == other.blue
	}
	return this.matches(Color.fromCss(other))
}

Color.fromRgb = function(rgb) {
	let red = parseInt(rgb.substr(0, 2), 16)
	let green = parseInt(rgb.substr(2, 2), 16)
	let blue = parseInt(rgb.substr(4, 2), 16)

	return new Color(red, green, blue)
}

Color.fromCss = function(css) {
	var results = css.match(/\d+/g)

	return new Color(parseInt(results[0]), parseInt(results[1]), parseInt(results[2]))
}

function NullObjectDefaults() {
	Color.call(this, -1, -1, -1)
}
NullObjectDefaults.prototype = Object.create(Color.prototype)
NullObjectDefaults.prototype.matches = () => false
NullObjectDefaults.prototype.differenceWith = () => 100

Object.defineProperty(Color, 'UNCOLORED', {
	value: new NullObjectDefaults()
})

