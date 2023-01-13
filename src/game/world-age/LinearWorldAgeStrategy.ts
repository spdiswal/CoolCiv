import type { WorldAgeStrategy } from "./WorldAgeStrategy"
import { createYearFromString } from "./Year"

export function createLinearWorldAgeStrategy(): WorldAgeStrategy {
	const yearsToAdvance = 100

	return {
		initialWorldAge: createYearFromString("4000 BCE"),
		nextWorldAge: (yearOfCurrentAge) => yearOfCurrentAge.plus(yearsToAdvance),
	}
}
