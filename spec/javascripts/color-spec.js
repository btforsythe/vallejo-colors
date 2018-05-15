'use strict'

const BLACK = new Color("rgb(0, 0, 0)")

describe("color", () => {
	
	describe("constructor", () => {
		let color = new Color('rgb(86, 42, 23)')
		it("should extract red", () => {
			expect(color.red).toBe(86)
		}),
		it("should extract green", () => {
			expect(color.green).toBe(42)
		}),
		it("should extract blue", () => {
			expect(color.blue).toBe(23)
		})
	}),
	it("should be creatable with RGB", () => {
		let expected = new Color('rgb(86, 42, 23)')
		let underTest = Color.fromRgb('562A17')

		expect(underTest.matches(expected)).toBe(true)
	}),
	describe("similarity", () => {

		it("should be zero", () => {
			let white = new Color("rgb(255, 255, 255)")
			expect(BLACK.similarityWith(white)).toBe(0)
		}),
		it("should be 50%", () => {
			let grey = new Color("rgb(127, 127, 127)")
			expect(BLACK.similarityWith(grey)).toBe(50)
		})
	}),
	describe("equality", () => {
		let underTest = new Color('rgb(1, 2, 3)')

		it("should not match", () => {
			let other = new Color('rgb(4, 5, 6)')

			expect(underTest.matches(other)).toBe(false)
		}),

		it("should match", () => {
			let other = new Color('rgb(1, 2, 3)')

			expect(underTest.matches(other)).toBe(true)
		}),

		it("should match rgb string", () => {
			let other = 'rgb(1, 2, 3)'

			expect(underTest.matches(other)).toBe(true)
		})
	})
}),
describe("a color null object should be available", () => {
	beforeEach(() => jasmine.addMatchers({toHaveImmutableProperty: immutablePropertyMatcher}))

	it("that is a constant", function() {
		expect(Color).toHaveImmutableProperty("UNCOLORED")
	})
	describe("with immutable properties named", () => {
		it("red", () => expect(Color.UNCOLORED).toHaveImmutableProperty("red"))
		it("green", () => expect(Color.UNCOLORED).toHaveImmutableProperty("green"))
		it("blue", () => expect(Color.UNCOLORED).toHaveImmutableProperty("blue"))
	})
	describe("to have default values", () => {
		describe("of -1 for", () => {
			it("red", () => expect(Color.UNCOLORED.red).toBe(-1)),
			it("green", () => expect(Color.UNCOLORED.green).toBe(-1))
			it("blue", () => expect(Color.UNCOLORED.blue).toBe(-1))
		})
	})
	it("should never match another color",
		() => expect(Color.UNCOLORED.matches(BLACK)).toBe(false))
})

let immutablePropertyMatcher = () => {
	return {
		compare: (underTest, propertyName) => {

			let result = {}
			try {
				underTest[propertyName] = "foo"
				result.message = "Expected property " + propertyName + " on "
					+ underTest + " to be immutable."

			} catch (e) {
				if(e instanceof TypeError) {
					result.pass = true
				} else {
					result.message = "Expected TypeError to be thrown on attempt " +
					" to update immutable property, "
					+ "but was " + e.constructor.name + "."
				}
			}
			return result
		}
	}
}