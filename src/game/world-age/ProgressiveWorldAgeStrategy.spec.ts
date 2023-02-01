import type { WorldAgeString } from "+game/world-age"
import { createProgressiveWorldAgeStrategy, WorldAge } from "+game/world-age"

describe("the progressive world age strategy", () => {
	// GIVEN a progressive world age strategy.
	const strategy = createProgressiveWorldAgeStrategy()

	it("starts in 4000 BCE", () => {
		// THEN the world age is 4000 BCE initially.
		expect(strategy.initialWorldAge.toString()).toBe("4000 BCE")
	})

	it.each<{
		readonly current: WorldAgeString
		readonly expected: WorldAgeString
	}>([
		{ current: "4000 BCE", expected: "3900 BCE" },
		{ current: "3900 BCE", expected: "3800 BCE" },
		{ current: "200 BCE", expected: "100 BCE" },
		{ current: "100 BCE", expected: "1 BCE" },
		{ current: "1 BCE", expected: "1 CE" },
		{ current: "1 CE", expected: "50 CE" },
		{ current: "50 CE", expected: "100 CE" },
		{ current: "100 CE", expected: "150 CE" },
		{ current: "1700 CE", expected: "1750 CE" },
		{ current: "1750 CE", expected: "1775 CE" },
		{ current: "1775 CE", expected: "1800 CE" },
		{ current: "1875 CE", expected: "1900 CE" },
		{ current: "1900 CE", expected: "1905 CE" },
		{ current: "1905 CE", expected: "1910 CE" },
		{ current: "1965 CE", expected: "1970 CE" },
		{ current: "1970 CE", expected: "1971 CE" },
		{ current: "1971 CE", expected: "1972 CE" },
		{ current: "1999 CE", expected: "2000 CE" },
		{ current: "2000 CE", expected: "2001 CE" },
		{ current: "9999 CE", expected: "9999 CE" },
	])("advances from $current to $expected", ({ current, expected }) => {
		// GIVEN the current world age.
		const currentWorldAge = WorldAge.fromString(current)

		// WHEN it advances to the next world age.
		const nextWorldAge = strategy.nextWorldAge(currentWorldAge)

		// THEN the next world age is after the current world age.
		expect(nextWorldAge.toString()).toBe(expected)
	})
})
