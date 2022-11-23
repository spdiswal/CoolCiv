import { composeAlphaCivGame } from "./game"

describe("an AlphaCiv game", () => {
	it("begins in 4000 BCE", () => {
		// GIVEN an AlphaCiv game.
		const game = composeAlphaCivGame()

		// THEN the current year is 4000 BCE initially.
		const expectedYear = "4000 BCE"
		expect(game.currentYear).toBe(expectedYear)
	})
})
