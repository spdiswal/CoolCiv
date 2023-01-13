import type { Player, TurnTakingStrategy } from "./turn-taking"
import type { WorldAgeStrategy, Year } from "./world-age"

export type Game = {
	readonly initialState: GameState
	readonly nextTurn: (currentState: GameState) => GameState
}

export type GameState = {
	readonly playerInTurn: Player
	readonly worldAge: Year
}

type GameDependencies = {
	readonly turnTakingStrategy: TurnTakingStrategy
	readonly worldAgeStrategy: WorldAgeStrategy
}

export function createGame({
	turnTakingStrategy,
	worldAgeStrategy,
}: GameDependencies): Game {
	return {
		initialState: {
			playerInTurn: turnTakingStrategy.initialPlayerInTurn,
			worldAge: worldAgeStrategy.initialWorldAge,
		},
		nextTurn: (currentState) => {
			function nextRound() {
				return {
					playerInTurn: turnTakingStrategy.initialPlayerInTurn,
					worldAge: worldAgeStrategy.nextWorldAge(currentState.worldAge),
				}
			}

			const nextPlayerInTurn = turnTakingStrategy.nextPlayerInTurn(
				currentState.playerInTurn
			)

			return nextPlayerInTurn !== null
				? { ...currentState, playerInTurn: nextPlayerInTurn }
				: nextRound()
		},
	}
}
