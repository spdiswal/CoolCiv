import { createLinearWorldAgeStrategy } from "+game/world-age"
import { createGame } from "./Game"

export const alphaCivGame = createGame({
	worldAgeStrategy: createLinearWorldAgeStrategy(),
})
