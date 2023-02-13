import type { WorldAgeStrategy } from "+game/world-age"
import { WorldAge } from "+game/world-age"

export function createProgressiveWorldAgeStrategy(): WorldAgeStrategy {
	return {
		initialWorldAge: WorldAge.fromString("4000 BCE"),
		nextWorldAge: (worldAge) => {
			const yearsToAdvance = getYearsToAdvance(worldAge)
			return worldAge.advancedBy(yearsToAdvance)
		},
	}
}

function getYearsToAdvance(worldAge: WorldAge): number {
	/* eslint-disable typescript/no-magic-numbers -- All magic numbers in this function denote the number of years to advance. */
	if (worldAge.isBefore("100 BCE")) {
		return 100
	}
	if (worldAge.equals("100 BCE")) {
		return 99
	}
	if (worldAge.equals("1 BCE")) {
		return 2
	}
	if (worldAge.equals("1 CE")) {
		return 49
	}
	if (worldAge.isBefore("1750 CE")) {
		return 50
	}
	if (worldAge.isBefore("1900 CE")) {
		return 25
	}
	if (worldAge.isBefore("1970 CE")) {
		return 5
	}

	return 1
	/* eslint-enable typescript/no-magic-numbers */
}
