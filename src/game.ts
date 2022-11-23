export type Game = {
	readonly currentYear: string
}

export function composeAlphaCivGame(): Game {
	return {
		currentYear: "",
	}
}
