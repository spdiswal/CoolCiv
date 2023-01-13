import type { Year } from "./Year"

export type WorldAgeStrategy = {
	readonly initialWorldAge: Year
	readonly nextWorldAge: (yearOfCurrentWorldAge: Year) => Year
}
