import type { Player } from "+game/turn-taking"

export type Unit = Readonly<{
	owner: Player
	type: UnitType
}>

export type UnitType = "archer" | "legion" | "settler"
