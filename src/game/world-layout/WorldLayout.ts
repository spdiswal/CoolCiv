import type { City } from "./City"
import type { PositionString } from "./Position"
import type { Terrain } from "./Terrain"
import type { Unit } from "./Unit"

export type WorldLayout = Readonly<{
	cityAt: (position: PositionString) => City | null
	terrainAt: (position: PositionString) => Terrain
	unitAt: (position: PositionString) => Unit | null
}>
