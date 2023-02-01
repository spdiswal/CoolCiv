import type { City } from "./City"
import type { PositionString } from "./Position"
import type { Terrain } from "./Terrain"
import type { Unit } from "./Unit"

export type WorldLayout = {
	readonly cityAt: (position: PositionString) => City | null
	readonly terrainAt: (position: PositionString) => Terrain
	readonly unitAt: (position: PositionString) => Unit | null
}
