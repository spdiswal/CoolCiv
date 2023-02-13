import type { GameState } from "+game"
import { alphaCivGame } from "+game"
import type { Player } from "+game/turn-taking"

describe("an AlphaCiv game", () => {
	// GIVEN a game with the AlphaCiv configuration.
	const game = alphaCivGame

	describe("that has just started", () => {
		// GIVEN that the game has just started.
		const { playerInTurn, winner, worldAge, worldLayout } = game.initialState

		it("starts in 4000 BCE", () => {
			// THEN the world age is 4000 BCE.
			expect(worldAge.toString()).toBe("4000 BCE")
		})

		it("starts with the red player in turn", () => {
			// THEN the red player is in turn.
			expect(playerInTurn).toBe("red")
		})

		it("has not declared a winner yet", () => {
			// THEN there is no winner.
			expect(winner).toBeNull()
		})

		describe("the terrain", () => {
			it("has oceans at (1,0)", () => {
				// THEN there are oceans at (1,0).
				expect(worldLayout.terrainAt("1,0")).toBe("oceans")
			})

			it("has hills at (0,1)", () => {
				// THEN there are hills at (0,1).
				expect(worldLayout.terrainAt("0,1")).toBe("hills")
			})

			it("has mountains at (2,2)", () => {
				// THEN there are mountains at (2,2).
				expect(worldLayout.terrainAt("2,2")).toBe("mountains")
			})

			it("has plains at (0,0)", () => {
				// THEN there are plains at (0,0).
				expect(worldLayout.terrainAt("0,0")).toBe("plains")
			})

			it("has plains at (3,3)", () => {
				// THEN there are plains at (3,3).
				expect(worldLayout.terrainAt("3,3")).toBe("plains")
			})

			it("has plains at (15,15)", () => {
				// THEN there are plains at (15,15).
				expect(worldLayout.terrainAt("15,15")).toBe("plains")
			})
		})

		describe("the city at (1,1)", () => {
			const city = worldLayout.cityAt("1,1")

			it("is owned by the red player", () => {
				// THEN there is a red city at (1,1).
				expect(city).not.toBeNull()
				expect(city?.owner).toBe("red")
			})

			it("has a population of 1", () => {
				// THEN there is a city at (1,1) with a population of 1.
				expect(city).not.toBeNull()
				expect(city?.populationSize).toBe(1)
			})
		})

		describe("the city at (4,1)", () => {
			const city = worldLayout.cityAt("4,1")

			it("is owned by the blue player", () => {
				// THEN there is a blue city at (4,1).
				expect(city).not.toBeNull()
				expect(city?.owner).toBe("blue")
			})

			it("has a population of 1", () => {
				// THEN there is a city at (4,1) with a population of 1.
				expect(city).not.toBeNull()
				expect(city?.populationSize).toBe(1)
			})
		})

		it("has no city at (2,1)", () => {
			// THEN there is no city at (2,1).
			expect(worldLayout.cityAt("2,1")).toBeNull()
		})

		it("has no city at (5,0)", () => {
			// THEN there is no city at (5,0).
			expect(worldLayout.cityAt("5,0")).toBeNull()
		})

		describe("the unit at (2,0)", () => {
			const unit = worldLayout.unitAt("2,0")

			it("is owned by the red player", () => {
				// THEN there is a red unit at (2,0).
				expect(unit).not.toBeNull()
				expect(unit?.owner).toBe("red")
			})

			it("is an archer", () => {
				// THEN there is an archer at (2,0).
				expect(unit).not.toBeNull()
				expect(unit?.type).toBe("archer")
			})
		})

		describe("the unit at (3,2)", () => {
			const unit = worldLayout.unitAt("3,2")

			it("is owned by the blue player", () => {
				// THEN there is a blue unit at (3,2).
				expect(unit).not.toBeNull()
				expect(unit?.owner).toBe("blue")
			})

			it("is a legion", () => {
				// THEN there is a legion at (3,2).
				expect(unit).not.toBeNull()
				expect(unit?.type).toBe("legion")
			})
		})

		describe("the unit at (4,3)", () => {
			const unit = worldLayout.unitAt("4,3")

			it("is owned by the red player", () => {
				// THEN there is a red unit at (4,3).
				expect(unit).not.toBeNull()
				expect(unit?.owner).toBe("red")
			})

			it("is a settler", () => {
				// THEN there is a settler at (4,3).
				expect(unit).not.toBeNull()
				expect(unit?.type).toBe("settler")
			})
		})

		it("has no unit at (2,1)", () => {
			// THEN there is no unit at (2,1).
			expect(worldLayout.unitAt("2,1")).toBeNull()
		})

		it("has no unit at (5,0)", () => {
			// THEN there is no unit at (5,0).
			expect(worldLayout.unitAt("5,0")).toBeNull()
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

	describe("after nine rounds", () => {
		// GIVEN that the game has advanced nine rounds.
		const { winner } = advanceNineRounds(game.initialState)

		it("has not declared a winner yet", () => {
			// THEN there is no winner.
			expect(winner).toBeNull()
		})
	})

	describe("after ten rounds", () => {
		// GIVEN that the game has advanced ten rounds.
		const { winner } = advanceTenRounds(game.initialState)

		it("declares the red player as the winner", () => {
			// THEN the red player has won.
			expect(winner).toBe("red")
		})
	})

	describe("after eleven rounds", () => {
		// GIVEN that the game has advanced eleven rounds.
		const { winner } = advanceElevenRounds(game.initialState)

		it("retains the red player as the winner", () => {
			// THEN the red player has won.
			expect(winner).toBe("red")
		})
	})

	describe("after 150 rounds", () => {
		// GIVEN that the game has advanced 150 rounds.
		const { worldAge: nextWorldAge } = advance150Rounds(game.initialState)

		it("stays at 9999 CE", () => {
			// THEN the world age is 9999 CE.
			expect(nextWorldAge.toString()).toBe("9999 CE")
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

	function advanceNineRounds(state: GameState): GameState {
		return advanceThreeRounds(advanceThreeRounds(advanceThreeRounds(state)))
	}

	function advanceTenRounds(state: GameState): GameState {
		return advanceOneRound(advanceNineRounds(state))
	}

	function advanceElevenRounds(state: GameState): GameState {
		return advanceOneRound(advanceTenRounds(state))
	}

	function advance50Rounds(state: GameState): GameState {
		return advanceTenRounds(
			advanceTenRounds(
				advanceTenRounds(advanceTenRounds(advanceTenRounds(state))),
			),
		)
	}

	function advance150Rounds(state: GameState): GameState {
		return advance50Rounds(advance50Rounds(advance50Rounds(state)))
	}
})
