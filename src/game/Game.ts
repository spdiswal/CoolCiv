import type { Player } from "+game/turn-taking"
import { createYearFromString } from "+game/world-age"
import type { Year } from "+game/world-age"

export type Game = {
	readonly initialState: GameState
	readonly nextTurn: (currentState: GameState) => GameState
}

export type GameState = {
	readonly playerInTurn: Player
	readonly worldAge: Year
}

export function createGame(): Game {
	const yearsToAdvancePerRound = 100

	return {
		initialState: {
			playerInTurn: "red",
			worldAge: createYearFromString("4000 BCE"),
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
						worldAge: currentState.worldAge.plus(yearsToAdvancePerRound),
						playerInTurn: "red",
					}
			}
		},
	}
}
