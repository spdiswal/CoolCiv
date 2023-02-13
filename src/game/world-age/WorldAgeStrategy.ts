import type { WorldAge } from "+game/world-age"

export type WorldAgeStrategy = Readonly<{
	initialWorldAge: WorldAge
	nextWorldAge: (currentWorldAge: WorldAge) => WorldAge
}>
