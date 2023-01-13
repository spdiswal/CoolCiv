import type { DigitX1, DigitX2, DigitX3, DigitX4 } from "../../utilities"
import { defineTypeFlavour } from "../../utilities"

const flavour = defineTypeFlavour("Year")

export type Year = typeof flavour & {
	readonly plus: (yearsToAdvance: number) => Year
	readonly toString: () => YearString
}

export type YearString = `${DigitX1 | DigitX2 | DigitX3 | DigitX4} ${Suffix}`
type Suffix = "BCE" | "CE"

const yearStringRegex = /(?<value>\d{1,4}) (?<suffix>BCE|CE)/u

export function createYearFromString(yearString: YearString): Year {
	const result = yearStringRegex.exec(yearString)

	if (result === null || result.groups === undefined) {
		throw new TypeError(`${yearString} must be a valid year string`)
	}

	const value = Number.parseInt(result.groups.value, 10)
	const suffixModifier = result.groups.suffix === "BCE" ? -1 : 1

	return createYearFromNumber(suffixModifier * value)
}

function createYearFromNumber(value: number): Year {
	if (!Number.isInteger(value)) {
		throw new TypeError(`${value} must be an integer`)
	}

	const suffix: Suffix = value < 0 ? "BCE" : "CE"
	const stringRepresentation = `${Math.abs(value)} ${suffix}` as YearString

	return {
		...flavour,
		plus: (yearsToAdvance) => createYearFromNumber(value + yearsToAdvance),
		toString: () => stringRepresentation,
	}
}
