it('color matcher should match colors', () => {

	const BLACK = Color.fromRgb('000000')
	const WHITE = Color.fromRgb('ffffff')
	const GREY = Color.fromRgb('808080')

	let underTest = new ColorMatcher([BLACK, WHITE, GREY])
	let matches = underTest.match(BLACK)

	expect(matches.get(BLACK)).toBe(100)
	expect(matches.get(WHITE)).toBe(0)
	expect(matches.get(GREY)).toBe(50)
})