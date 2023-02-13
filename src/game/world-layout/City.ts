import type { Player } from "+game/turn-taking"

export type City = Readonly<{
	owner: Player
	populationSize: number
}>
