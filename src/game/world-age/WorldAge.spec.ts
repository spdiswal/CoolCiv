import type { WorldAgeString } from "./WorldAge"
import { WorldAge } from "./WorldAge"

describe("a world age", () => {
	it.each<{ readonly value: WorldAgeString }>([
		{ value: "9999 BCE" },
		{ value: "3456 BCE" },
		{ value: "999 BCE" },
		{ value: "258 BCE" },
		{ value: "99 BCE" },
		{ value: "42 BCE" },
		{ value: "9 BCE" },
		{ value: "1 BCE" },
		{ value: "0 CE" },
		{ value: "1 CE" },
		{ value: "7 CE" },
		{ value: "10 CE" },
		{ value: "37 CE" },
		{ value: "100 CE" },
		{ value: "473 CE" },
		{ value: "1000 CE" },
		{ value: "1337 CE" },
		{ value: "2023 CE" },
	])("is creatable from '$value'", ({ value }) => {
		// GIVEN a world age from a string.
		const worldAge = WorldAge.fromString(value)

		// THEN the world age has an equivalent string representation.
		expect(worldAge.toString()).toBe(value)
	})

	it.each<{
		readonly current: WorldAgeString
		readonly yearsToAdvance: number
		readonly expected: WorldAgeString
	}>([
		{ current: "4000 BCE", yearsToAdvance: 100, expected: "3900 BCE" },
		{ current: "150 BCE", yearsToAdvance: 50, expected: "100 BCE" },
		{ current: "10 BCE", yearsToAdvance: 10, expected: "0 CE" },
		{ current: "0 CE", yearsToAdvance: 1, expected: "1 CE" },
		{ current: "1 CE", yearsToAdvance: 99, expected: "100 CE" },
		{ current: "9999 CE", yearsToAdvance: 1, expected: "9999 CE" },
		{ current: "9999 CE", yearsToAdvance: 100, expected: "9999 CE" },
	])(
		"advances from $current by $yearsToAdvance year(s) to $expected",
		({ current, yearsToAdvance, expected }) => {
			// GIVEN a world age to advance.
			const worldAge = WorldAge.fromString(current)

			// WHEN it advances by a number of years.
			const nextWorldAge = worldAge.advancedBy(yearsToAdvance)

			// THEN the result is computed accordingly.
			expect(nextWorldAge.toString()).toBe(expected)
		},
	)

	it.each<{
		readonly yearsToAdvance: number
	}>([
		{ yearsToAdvance: -5 },
		{ yearsToAdvance: -1 },
		{ yearsToAdvance: 0 },
		{ yearsToAdvance: 0.5 },
		{ yearsToAdvance: 0.25 },
		{ yearsToAdvance: Number.NaN },
	])("rejects advancing by $yearsToAdvance year(s)", ({ yearsToAdvance }) => {
		// GIVEN a world age to advance.
		const worldAge = WorldAge.fromString("0 CE")

		// WHEN it advances by an illegal number of years.
		// THEN it raises an error.
		expect(() => worldAge.advancedBy(yearsToAdvance)).toThrow(
			`Expected '${yearsToAdvance}' to be a positive integer`,
		)
	})
})
