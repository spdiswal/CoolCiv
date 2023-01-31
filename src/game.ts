import type { Player } from "./game/turn-taking"
import { createYearFromString } from "./game/world-age"
import type { Year } from "./game/world-age"

export type Game = {
	readonly computeNextTurn: (currentState: GameState) => GameState
}

export type GameState = {
	readonly currentPlayer: Player
	readonly currentYear: Year
}

export function composeAlphaCivGame(): Game {
	const yearsToAdvancePerRound = 100

	return {
		computeNextTurn: (currentState) => {
			switch (currentState.currentPlayer) {
				case "red":
					return {
						currentYear: currentState.currentYear,
						currentPlayer: "blue",
					}
				case "blue":
					return {
						currentYear: currentState.currentYear.plus(yearsToAdvancePerRound),
						currentPlayer: "red",
					}
			}
		},
	}
}

export function createInitialGameState(): GameState {
	return {
		currentPlayer: "red",
		currentYear: createYearFromString("4000 BCE"),
	}
}
