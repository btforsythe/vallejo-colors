describe('product matcher', () => {

	const BLACK = new Product('black', '70.xxx', 'rgb(0, 0, 0)')
	const WHITE = new Product('white', '70.yyy', 'rgb(255, 255, 255)')
	const GREY = new Product('grey', '70.zzz', 'rgb(128, 128, 128)')

	it('should match products', () => {

		let matches = matchBlackTo([BLACK, WHITE, GREY])

		expect(matches.similarities.get(BLACK)).toBe(100)
		expect(matches.similarities.get(WHITE)).toBe(0)
		expect(matches.similarities.get(GREY)).toBe(50)
	})

	let matchBlackTo = (colors) => {
		let set = new ColorSet(undefined, undefined, undefined, colors)

		let underTest = new ProductMatcher(set)
		let matches = underTest.match(new Color(0, 0, 0))

		return matches
	}

	it('should indicate highest match similarity', () => {
		let matches = matchBlackTo([BLACK])

		expect(matches.highest).toEqual([BLACK])
		expect(matches.highestSimilarity).toEqual(100)
	})

	it('should return two elements if match percentage is tied', () => {
		fail('not implemented')
	})
})