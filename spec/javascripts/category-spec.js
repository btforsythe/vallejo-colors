describe('catalog level', () => {
	let underTest

	beforeEach(() => underTest = new CatalogLevel('level name'))

	it('should have name', () => {
		expect(underTest.name).toBe('level name')
	}),
	it ('should have no children', () => {
		expect(underTest.children).toEqual([])
	}),
	it('should add child', () => {
		let child = new CatalogLevel('child')
		underTest.add(child)
		expect(underTest.children).toEqual([child])
	}),
	it('should create with parent', () => {
		let parent = new CatalogLevel('parent')
		let child = new CatalogLevel('child', parent)

		expect(parent.children).toEqual([child])
	})
})