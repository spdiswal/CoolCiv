import { createGame } from "./Game"
import { createRoundRobinTurnTakingStrategy } from "./turn-taking"
import { createLinearWorldAgeStrategy } from "./world-age"

export const alphaCivGame = createGame({
	turnTakingStrategy: createRoundRobinTurnTakingStrategy(),
	worldAgeStrategy: createLinearWorldAgeStrategy(),
})
