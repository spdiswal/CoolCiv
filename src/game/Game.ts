import type { Player } from "+game/turn-taking"
import type { Year } from "+game/world-age"
import { createYearFromString } from "+game/world-age"
import type { WorldLayout } from "+game/world-layout"

export type Game = {
	readonly initialState: GameState
	readonly nextTurn: (currentState: GameState) => GameState
}

export type GameState = {
	readonly playerInTurn: Player
	readonly winner: Player | null
	readonly worldAge: Year
	readonly worldLayout: WorldLayout
}

export function createGame(): Game {
	const yearsToAdvancePerRound = 100

	return {
		initialState: {
			playerInTurn: "red",
			winner: null,
			worldAge: createYearFromString("4000 BCE"),
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
			switch (currentState.playerInTurn) {
				case "red":
					return {
						...currentState,
						playerInTurn: "blue",
					}
				case "blue":
					return {
						...currentState,
						winner:
							currentState.winner ??
							(currentState.worldAge.toString() === "3100 BCE" ? "red" : null),
						worldAge: currentState.worldAge.plus(yearsToAdvancePerRound),
						playerInTurn: "red",
					}
			}
		},
	}
}
