import type { Player } from "./Player"
import type { TurnTakingStrategy } from "./TurnTakingStrategy"

export function createRoundRobinTurnTakingStrategy(): TurnTakingStrategy {
	const playerSequence: ReadonlyArray<Player> = ["red", "blue"]

	return {
		initialPlayerInTurn: playerSequence[0],
		nextPlayerInTurn: (currentPlayerInTurn) => {
			const currentPlayerIndex = playerSequence.indexOf(currentPlayerInTurn)

			return currentPlayerIndex < playerSequence.length - 1
				? playerSequence[currentPlayerIndex + 1]
				: null
		},
	}
}
