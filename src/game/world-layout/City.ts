import type { Player } from "+game/turn-taking"

export type City = {
	readonly owner: Player
	readonly populationSize: number
}
