import type { WorldAgeStrategy } from "+game/world-age"
import { WorldAge } from "+game/world-age"

export function createLinearWorldAgeStrategy(): WorldAgeStrategy {
	const yearsToAdvance = 100

	return {
		initialWorldAge: WorldAge.fromString("4000 BCE"),
		nextWorldAge: (worldAge) => worldAge.advancedBy(yearsToAdvance),
	}
}
