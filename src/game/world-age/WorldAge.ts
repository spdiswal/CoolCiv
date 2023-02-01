import type { Range0To9999, Range1To9999 } from "+utilities"
import { defineTypeFlavour } from "+utilities"

const flavour = defineTypeFlavour("WorldAge")

export type WorldAge = typeof flavour & {
	readonly isBefore: (worldAge: WorldAgeString) => boolean
	readonly advancedBy: (years: number) => WorldAge
	readonly toString: () => WorldAgeString
}

export type WorldAgeString = `${Range0To9999} CE` | `${Range1To9999} BCE`

export namespace WorldAge {
	const max: WorldAge = {
		...flavour,
		isBefore: () => false,
		advancedBy: () => max,
		toString: () => "9999 CE",
	}

	export function fromString(value: WorldAgeString): WorldAge {
		return fromYearValue(getYearValue(value))
	}

	function fromYearValue(yearValue: number): WorldAge {
		const worldAgeString = (
			yearValue < 0 ? `${-yearValue} BCE` : `${yearValue} CE`
		) as WorldAgeString

		return {
			...flavour,
			isBefore: (worldAge) => yearValue < getYearValue(worldAge),
			advancedBy: (years) => {
				if (!Number.isInteger(years) || years <= 0) {
					throw new TypeError(`Expected '${years}' to be a positive integer`)
				}

				const advancedYearValue = yearValue + years
				const maximumWorldAge = 9999

				if (advancedYearValue > maximumWorldAge) {
					return max
				}

				return fromYearValue(advancedYearValue)
			},
			toString: () => worldAgeString,
		}
	}

	function getYearValue(value: WorldAgeString): number {
		const [yearString, suffix] = value.split(" ")
		const year = Number.parseInt(yearString, 10)

		return suffix === "BCE" ? -year : year
	}
}
