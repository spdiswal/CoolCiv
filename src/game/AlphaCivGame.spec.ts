import { alphaCivGame } from "./AlphaCivGame"
import type { GameState } from "./Game"

describe("an AlphaCiv game", () => {
	// GIVEN a game with the AlphaCiv configuration.
	const game = alphaCivGame

	describe("that has just started", () => {
		// GIVEN that the game has just started.
		const { playerInTurn, worldAge } = game.initialState

		it("starts in 4000 BCE", () => {
			// THEN the world age is 4000 BCE.
			expect(worldAge.toString()).toBe("4000 BCE")
		})

		it("starts with the red player in turn", () => {
			// THEN the red player is in turn.
			expect(playerInTurn).toBe("red")
		})
	})

	describe("after one round", () => {
		// GIVEN that the game has advanced one round.
		const { worldAge } = advanceOneRound(game.initialState)

		it("has advanced to 3900 BCE", () => {
			// THEN the world age is 3900 BCE.
			expect(worldAge.toString()).toBe("3900 BCE")
		})
	})

	describe("after three rounds", () => {
		// GIVEN that the game has advanced three rounds.
		const { worldAge } = advanceThreeRounds(game.initialState)

		it("has advanced to 3700 BCE", () => {
			// THEN the world age is 3700 BCE.
			expect(worldAge.toString()).toBe("3700 BCE")
		})
	})

	function advanceOneRound(state: GameState): GameState {
		return game.nextTurn(game.nextTurn(state))
	}

	function advanceThreeRounds(state: GameState): GameState {
		return advanceOneRound(advanceOneRound(advanceOneRound(state)))
	}
})
