import type { Player } from "./Player"
import { createRoundRobinTurnTakingStrategy } from "./RoundRobinTurnTakingStrategy"

describe("a round-robin turn-taking strategy", () => {
	// GIVEN a round-robin turn-taking strategy.
	const strategy = createRoundRobinTurnTakingStrategy()

	it("starts with the red player in turn", () => {
		// THEN the red player is in turn initially.
		expect(strategy.initialPlayerInTurn).toBe("red")
	})

	it("advances to the blue player after the red player", () => {
		// GIVEN that the red player is in turn.
		const playerInTurn: Player = "red"

		// WHEN it advances to the next player.
		const nextPlayerInTurn = strategy.nextPlayerInTurn(playerInTurn)

		// THEN the blue player is in turn.
		expect(nextPlayerInTurn).toBe("blue")
	})

	it("marks the round to be completed after the blue player", () => {
		// GIVEN that the blue player is in turn.
		const playerInTurn: Player = "blue"

		// WHEN it advances to the next player.
		const nextPlayerInTurn = strategy.nextPlayerInTurn(playerInTurn)

		// THEN the round is completed.
		expect(nextPlayerInTurn).toBeNull()
	})
})
