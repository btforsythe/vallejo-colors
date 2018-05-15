it('product matcher should match products', () => {

	const BLACK = new Product('black', '70.xxx', 'rgb(0, 0, 0)')
	const WHITE = new Product('white', '70.yyy', 'rgb(255, 255, 255)')
	const GREY = new Product('grey', '70.zzz', 'rgb(128, 128, 128)')

	let set = new ColorSet(undefined, undefined, undefined, [BLACK, WHITE, GREY])

	let underTest = new ProductMatcher(set)
	let matches = underTest.match(new Color(0, 0, 0))

	expect(matches.get(BLACK)).toBe(100)
	expect(matches.get(WHITE)).toBe(0)
	expect(matches.get(GREY)).toBe(50)
})