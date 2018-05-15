'use strict'

const BLACK = Color.fromCss("rgb(0, 0, 0)")

describe("color", () => {
	
	describe("constructor", () => {
		let underTest = new Color(86, 42, 23)
		it("should extract red", () => {
			expect(underTest.red).toBe(86)
		}),
		it("should extract green", () => {
			expect(underTest.green).toBe(42)
		}),
		it("should extract blue", () => {
			expect(underTest.blue).toBe(23)
		})
	})
	describe("should have factory method for creation", () => {
		it("via RGB", () => {
			let expected = Color.fromCss('rgb(86, 42, 23)')
			let underTest = Color.fromRgb('562A17')

			expect(underTest.matches(expected)).toBe(true)
		})
		it("via CSS", () => {
			let underTest = Color.fromCss('rgb(0, 0, 0)')

			expect(underTest.matches(BLACK)).toBe(true)
		})
	})
	describe("similarity", () => {

		it("should be zero", () => {
			let white = Color.fromCss("rgb(255, 255, 255)")
			expect(BLACK.similarityWith(white)).toBe(0)
		}),
		it("should be 50%", () => {
			let grey = Color.fromCss("rgb(127, 127, 127)")
			expect(BLACK.similarityWith(grey)).toBe(50)
		})
	}),
	describe("equality", () => {
		let underTest = Color.fromCss('rgb(1, 2, 3)')

		it("should not match", () => {
			let other = Color.fromCss('rgb(4, 5, 6)')

			expect(underTest.matches(other)).toBe(false)
		}),

		it("should match", () => {
			let other = Color.fromCss('rgb(1, 2, 3)')

			expect(underTest.matches(other)).toBe(true)
		}),

		it("should match rgb string", () => {
			let other = 'rgb(1, 2, 3)'

			expect(underTest.matches(other)).toBe(true)
		})
	})
})

describe("a color should have an immutable property named", () => {
	it("red", () => expectObj(BLACK).toHaveImmutableProperty("red"))
	it("green", () => expectObj(BLACK).toHaveImmutableProperty("green"))
	it("blue", () => expectObj(BLACK).toHaveImmutableProperty("blue"))
})

describe("a color null object should be available", () => {
	it("that is a constant", function() {
		expectObj(Color).toHaveImmutableProperty("UNCOLORED")
	})
	describe("with immutable properties named", () => {
		it("red", () => expectObj(Color.UNCOLORED).toHaveImmutableProperty("red"))
		it("green", () => expectObj(Color.UNCOLORED).toHaveImmutableProperty("green"))
		it("blue", () => expectObj(Color.UNCOLORED).toHaveImmutableProperty("blue"))
	})

	describe("to have default values", () => {
		describe("of -1 for", () => {
			it("red", () => expect(Color.UNCOLORED.red).toBe(-1)),
			it("green", () => expect(Color.UNCOLORED.green).toBe(-1))
			it("blue", () => expect(Color.UNCOLORED.blue).toBe(-1))
		})
	})
	describe("that should never match", () => {
		it("another color",
			() => expect(Color.UNCOLORED.matches(BLACK)).toBe(false))
		it("itself",
			() => expect(Color.UNCOLORED.matches(Color.UNCOLORED)).toBe(false))
		it("when another tries to match it",
			() => expect(BLACK.matches(Color.UNCOLORED)).toBe(false))
	})
	it("should always have a similarity of zero", () => {
		expect(Color.UNCOLORED.differenceWith(Color.UNCOLORED)).toBe(100)
		expect(Color.UNCOLORED.similarityWith(Color.UNCOLORED)).toBe(0)
	})
})


var expectObj = (o) => {
	return {
		toHaveImmutableProperty: (name) => expect(() => o[name] = "foo")
			.toThrowError(TypeError)
	}
}
