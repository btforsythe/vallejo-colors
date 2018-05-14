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
	})
})