import type { GameState } from "+game"
import { alphaCivGame } from "+game"
import type { Player } from "+game/turn-taking"

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

	describe("after the red player completes their turn", () => {
		// GIVEN that the player in turn is the red player.
		const playerInTurn: Player = "red"

		// WHEN the player completes their turn.
		const { playerInTurn: nextPlayerInTurn, worldAge: nextWorldAge } =
			game.nextTurn({
				...game.initialState,
				playerInTurn,
			})

		it("advances to the blue player", () => {
			// THEN the blue player is in turn.
			expect(nextPlayerInTurn).toBe("blue")
		})

		it("stays in 4000 BCE", () => {
			// THEN the world age is 4000 BCE.
			expect(nextWorldAge.toString()).toBe("4000 BCE")
		})
	})

	describe("after the blue player completes their turn", () => {
		// GIVEN that the player in turn is the blue player.
		const playerInTurn: Player = "blue"

		// WHEN the player completes their turn.
		const { playerInTurn: nextPlayerInTurn, worldAge: nextWorldAge } =
			game.nextTurn({
				...game.initialState,
				playerInTurn,
			})

		it("advances to the red player", () => {
			// THEN the red player is in turn.
			expect(nextPlayerInTurn).toBe("red")
		})

		it("advances to 3900 BCE", () => {
			// THEN the world age is 3900 BCE.
			expect(nextWorldAge.toString()).toBe("3900 BCE")
		})
	})

	describe("after two rounds", () => {
		// GIVEN that the game has advanced one round.
		const { worldAge: nextWorldAge } = advanceTwoRounds(game.initialState)

		it("advances to 3800 BCE", () => {
			// THEN the world age is 3800 BCE.
			expect(nextWorldAge.toString()).toBe("3800 BCE")
		})
	})

	describe("after three rounds", () => {
		// GIVEN that the game has advanced three rounds.
		const { worldAge: nextWorldAge } = advanceThreeRounds(game.initialState)

		it("advances to 3700 BCE", () => {
			// THEN the world age is 3700 BCE.
			expect(nextWorldAge.toString()).toBe("3700 BCE")
		})
	})

	function advanceOneRound(state: GameState): GameState {
		return game.nextTurn(game.nextTurn(state))
	}

	function advanceTwoRounds(state: GameState): GameState {
		return advanceOneRound(advanceOneRound(state))
	}

	function advanceThreeRounds(state: GameState): GameState {
		return advanceOneRound(advanceOneRound(advanceOneRound(state)))
	}
})
