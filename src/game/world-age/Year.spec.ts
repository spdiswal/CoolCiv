import type { YearString } from "./Year"
import { createYearFromString } from "./Year"

describe("years", () => {
	it.each<{ readonly value: YearString }>([
		{ value: "4000 BCE" },
		{ value: "3900 BCE" },
		{ value: "200 BCE" },
		{ value: "100 BCE" },
		{ value: "0 CE" },
		{ value: "100 CE" },
		{ value: "1900 CE" },
		{ value: "2000 CE" },
	])("parses a string of $value", ({ value }) => {
		// GIVEN a year from a string.
		const year = createYearFromString(value)

		// THEN the year has an equivalent string representation.
		expect(year.toString()).toBe(value)
	})

	it.each<{
		readonly current: YearString
		readonly advanceBy: number
		readonly expected: YearString
	}>([
		{ current: "4000 BCE", advanceBy: 100, expected: "3900 BCE" },
		{ current: "150 BCE", advanceBy: 50, expected: "100 BCE" },
		{ current: "10 BCE", advanceBy: 10, expected: "0 CE" },
		{ current: "0 CE", advanceBy: 1, expected: "1 CE" },
		{ current: "1 CE", advanceBy: 99, expected: "100 CE" },
	])(
		"advances from $current by $advanceBy to $expected",
		({ current, advanceBy, expected }) => {
			// GIVEN a year to advance.
			const year = createYearFromString(current)

			// WHEN it advances by an according number of years.
			const nextYear = year.plus(advanceBy)

			// THEN the result is computed accordingly.
			expect(nextYear.toString()).toBe(expected)
		}
	)

	it("rejects advancing by 0.5 year", () => {
		// GIVEN a year to advance.
		const year = createYearFromString("4000 BCE")

		// WHEN it advances by 0.5 year.
		// THEN it throws an error.
		expect(() => year.plus(0.5)).toThrow(`0.5 must be a positive integer`)
	})

	it("rejects advancing by 0 years", () => {
		// GIVEN a year to advance.
		const year = createYearFromString("4000 BCE")

		// WHEN it advances by 0 years.
		// THEN it throws an error.
		expect(() => year.plus(0)).toThrow(`0 must be a positive integer`)
	})

	it("rejects advancing by -1 year", () => {
		// GIVEN a year to advance.
		const year = createYearFromString("4000 BCE")

		// WHEN it advances by -1 year.
		// THEN it throws an error.
		expect(() => year.plus(-1)).toThrow(`-1 must be a positive integer`)
	})
})
