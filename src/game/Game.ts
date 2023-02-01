import type { Player } from "+game/turn-taking"
import type { WorldAge, WorldAgeStrategy } from "+game/world-age"
import type { WorldLayout } from "+game/world-layout"

export type Game = {
	readonly initialState: GameState
	readonly nextTurn: (currentState: GameState) => GameState
}

export type GameState = {
	readonly playerInTurn: Player
	readonly winner: Player | null
	readonly worldAge: WorldAge
	readonly worldLayout: WorldLayout
}

export type GameDependencies = {
	readonly worldAgeStrategy: WorldAgeStrategy
}

export function createGame({ worldAgeStrategy }: GameDependencies): Game {
	return {
		initialState: {
			playerInTurn: "red",
			winner: null,
			worldAge: worldAgeStrategy.initialWorldAge,
			worldLayout: {
				terrainAt: (positionString) => {
					switch (positionString) {
						case "0,1":
							return "hills"
						case "1,0":
							return "oceans"
						case "2,2":
							return "mountains"
						default:
							return "plains"
					}
				},
				cityAt: (positionString) => {
					switch (positionString) {
						case "1,1":
							return { owner: "red", populationSize: 1 }
						case "4,1":
							return { owner: "blue", populationSize: 1 }
						default:
							return null
					}
				},
				unitAt: (positionString) => {
					switch (positionString) {
						case "2,0":
							return { owner: "red", type: "archer" }
						case "3,2":
							return { owner: "blue", type: "legion" }
						case "4,3":
							return { owner: "red", type: "settler" }
						default:
							return null
					}
				},
			},
		},
		nextTurn: (currentState) => {
			function nextRound(): GameState {
				return {
					...currentState,
					playerInTurn: "red",
					winner:
						currentState.winner ??
						(currentState.worldAge.toString() === "3100 BCE" ? "red" : null),
					worldAge: worldAgeStrategy.nextWorldAge(currentState.worldAge),
				}
			}

			switch (currentState.playerInTurn) {
				case "red":
					return { ...currentState, playerInTurn: "blue" }
				case "blue":
					return nextRound()
			}
		},
	}
}
