import type { Player } from "+game/turn-taking"

export type Unit = {
	readonly owner: Player
	readonly type: UnitType
}

export type UnitType = "archer" | "legion" | "settler"
