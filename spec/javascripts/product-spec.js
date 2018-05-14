describe('product', () => {

	let underTest = new Product('Product Name', 'xx.xxx', 'rgb(23, 42, 86)')

	it('should have name',
		() => expect(underTest.name).toBe('Product Name')),

	it('should have model number',
		() => expect(underTest.model).toBe('xx.xxx')),

	it('should have rgb',
		() => expect(underTest.rgb).toBe('rgb(23, 42, 86)')),

	it('should have color', () => {
		var other = 'rgb(23, 42, 86)'
		expect(underTest.color.matches(other)).toBe(true)
	}),

	describe('should have category', () => {
		it('as default when not specified', () => {
			expect(underTest.category).toBe(PRODUCT_CATEGORIES.PAINT)
		}),
		it('as specified value', () => {
			let underTest = new Product('irrelevant', 'irrelevant',
				'rgb(0, 0, 0)', 'expected category')
			expect(underTest.category).toBe('expected category')
		})
	}),

	describe('should have range', () => {
		it('as default when not specified', () => {
			expect(underTest.range).toBe(PRODUCT_RANGES.MODEL_COLOR)
		}),
		it('as specified value', () => {
			let underTest = new Product('irrelevant', 'irrelevant',
				'rgb(0, 0, 0)', 'irrelevant', 'expected range')
			expect(underTest.range).toBe('expected range')
		})
	})
	describe('should have line', () => {
		it('as default when not specified', () => {
			expect(underTest.line).toBe(PRODUCT_LINES.MODEL_PAINTS)
		}),
		it('as specified value', () => {
			let underTest = new Product('irrelevant', 'irrelevant',
				'rgb(0, 0, 0)', 'irrelevant', 'irrelevant', 'expected line')
			expect(underTest.line).toBe('expected line')
		})
	}),

	it('should not have color if undefined', () => {
		let underTest = new Product('irrelevant', 'irrelevant', undefined)

		expect(underTest.rgb).toBe(undefined)
		expect(underTest.color).toBe(undefined)
	})
})