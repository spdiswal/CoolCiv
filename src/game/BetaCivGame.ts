import { createProgressiveWorldAgeStrategy } from "+game/world-age"
import { createGame } from "./Game"

export const betaCivGame = createGame({
	worldAgeStrategy: createProgressiveWorldAgeStrategy(),
})
