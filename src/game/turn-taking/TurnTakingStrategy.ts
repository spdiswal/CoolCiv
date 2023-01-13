import type { Player } from "./Player"

export type TurnTakingStrategy = {
	readonly initialPlayerInTurn: Player
	readonly nextPlayerInTurn: (currentPlayerInTurn: Player) => Player | null
}
