import type { WorldAge } from "+game/world-age"

export type WorldAgeStrategy = {
	readonly initialWorldAge: WorldAge
	readonly nextWorldAge: (currentWorldAge: WorldAge) => WorldAge
}
