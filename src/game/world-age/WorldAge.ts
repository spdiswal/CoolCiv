import type { Range0To9999, Range1To9999 } from "+utilities"
import { defineTypeFlavour } from "+utilities"

const flavour = defineTypeFlavour("WorldAge")

export type WorldAge = Readonly<{
	equals: (worldAge: WorldAgeString) => boolean
	isBefore: (worldAge: WorldAgeString) => boolean
	advancedBy: (years: number) => WorldAge
	toString: () => WorldAgeString
}> &
	typeof flavour

export type WorldAgeString = `${Range0To9999} CE` | `${Range1To9999} BCE`

export namespace WorldAge {
	const max: WorldAge = {
		...flavour,
		equals: (worldAge) => worldAge === "9999 CE",
		isBefore: () => false,
		advancedBy: () => max,
		toString: () => "9999 CE",
	}

	export function fromString(value: WorldAgeString): WorldAge {
		return fromYearValue(getYearValue(value))
	}

	// eslint-disable-next-line no-inner-declarations -- Temporarily disabled until it has been rewritten to a class.
	function fromYearValue(yearValue: number): WorldAge {
		const worldAgeString = (
			yearValue < 0 ? `${-yearValue} BCE` : `${yearValue} CE`
		) as WorldAgeString

		return {
			...flavour,
			equals: (worldAge) => worldAge === worldAgeString,
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

	// eslint-disable-next-line no-inner-declarations -- Temporarily disabled until it has been rewritten to a class.
	function getYearValue(value: WorldAgeString): number {
		const [yearString, suffix] = value.split(" ")
		const year = Number.parseInt(yearString)

		return suffix === "BCE" ? -year : year
	}
}
