export function defineTypeFlavour(name: string) {
	return { [Symbol(name)]: true }
}
