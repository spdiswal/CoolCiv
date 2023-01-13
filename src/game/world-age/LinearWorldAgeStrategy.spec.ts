import { createLinearWorldAgeStrategy } from "./LinearWorldAgeStrategy"
import type { YearString } from "./Year"
import { createYearFromString } from "./Year"

describe("the linear world age strategy", () => {
	// GIVEN a linear world age strategy.
	const strategy = createLinearWorldAgeStrategy()

	it("starts in 4000 BCE", () => {
		// THEN the world age is 4000 BCE initially.
		expect(strategy.initialWorldAge.toString()).toBe("4000 BCE")
	})

	it.each<{
		readonly current: YearString
		readonly expected: YearString
	}>([
		{ current: "4000 BCE", expected: "3900 BCE" },
		{ current: "200 BCE", expected: "100 BCE" },
		{ current: "100 BCE", expected: "0 CE" },
		{ current: "0 CE", expected: "100 CE" },
		{ current: "1900 CE", expected: "2000 CE" },
	])("advances from $current to $expected", ({ current, expected }) => {
		// GIVEN the year of the current world age.
		const yearOfCurrentAge = createYearFromString(current)

		// WHEN it advances to the next world age.
		const yearOfNextAge = strategy.nextWorldAge(yearOfCurrentAge)

		// THEN the next age is a hundred years after the current age.
		expect(yearOfNextAge.toString()).toBe(expected)
	})
})
