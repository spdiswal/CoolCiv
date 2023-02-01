import type { WorldAgeString } from "+game/world-age"
import { createLinearWorldAgeStrategy, WorldAge } from "+game/world-age"

describe("the linear world age", () => {
	// GIVEN a linear world age strategy.
	const strategy = createLinearWorldAgeStrategy()

	it("starts in 4000 BCE", () => {
		// THEN the world age is 4000 BCE initially.
		expect(strategy.initialWorldAge.toString()).toBe("4000 BCE")
	})

	it.each<{
		readonly current: WorldAgeString
		readonly expected: WorldAgeString
	}>([
		{ current: "4000 BCE", expected: "3900 BCE" },
		{ current: "200 BCE", expected: "100 BCE" },
		{ current: "100 BCE", expected: "0 CE" },
		{ current: "0 CE", expected: "100 CE" },
		{ current: "100 CE", expected: "200 CE" },
		{ current: "1800 CE", expected: "1900 CE" },
		{ current: "1900 CE", expected: "2000 CE" },
		{ current: "9900 CE", expected: "9999 CE" },
	])("advances from $current to $expected", ({ current, expected }) => {
		// GIVEN the current world age.
		const currentWorldAge = WorldAge.fromString(current)

		// WHEN it advances to the next world age.
		const yearOfNextWorldAge = strategy.nextWorldAge(currentWorldAge)

		// THEN the next world age is a hundred years after the current world age.
		expect(yearOfNextWorldAge.toString()).toBe(expected)
	})
})
