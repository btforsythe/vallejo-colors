const MAX_DISTANCE = Math.sqrt(Math.pow(255, 2) * 3)

function Color(sourceString) {

	var results = sourceString.match(/\d+/g)
	this.red = parseInt(results[0])
	this.green = parseInt(results[1])
	this.blue = parseInt(results[2])

	this.similarityWith = (other) => 100 - this.differenceWith(other)

	this.differenceWith = (other) => {
		var distance = Math.sqrt(Math.pow(this.red - other.red, 2)
			+ Math.pow(this.green - other.green, 2)
			+ Math.pow(this.blue - other.blue, 2))
		return Math.round(distance / MAX_DISTANCE * 100)
	}

	this.matches = (other) => {
		if(other instanceof Color) {
			return this.red == other.red
				&& this.green == other.green
				&& this.blue == other.blue
		}
		return this.matches(new Color(other))
	}
}