const MAX_DISTANCE = Math.sqrt(Math.pow(255, 2) * 3)

function Color(red, green, blue) {
	this.red = red
	this.green = green
	this.blue = blue
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

var defaults = {
	matches: () => false
}
Object.defineProperty(defaults, 'red', { value: -1 })
Object.defineProperty(defaults, 'green', { value: -1 })
Object.defineProperty(defaults, 'blue', { value: -1 })

Object.defineProperty(Color, 'UNCOLORED', {
	value: defaults
})

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