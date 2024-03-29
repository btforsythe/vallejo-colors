describe("color set", () => {
	describe("should have properties:", () => {
		it("name", () => {
			let underTest = new ColorSet("set name", undefined, undefined, [])

			expect(underTest.name).toBe("set name")
		})
		it("model number", () => {
			let underTest = new ColorSet(undefined, "model number", undefined, [])

			expect(underTest.model).toBe("model number")
		})
		it("url", () => {
			let underTest = new ColorSet(undefined, undefined, "http://foo.bar", [])

			expect(underTest.url).toBe("http://foo.bar")
		})
		it("products", () => {
			let product = mockProductWithModelNumber('42.xxx')
			let underTest = new ColorSet(undefined, undefined, undefined, [product])

			expect(underTest.products).toEqual([product])
		})
	})

	let mockProductWithModelNumber = model => { return { model: model }}

	it("should be able to retrieve products by model number", () => {
		let product = mockProductWithModelNumber('42.xxx')
		let underTest = new ColorSet(undefined, undefined, undefined, [product])

		expect(underTest.findProductByModelNumber('42.xxx')).toBe(product)
	})
})