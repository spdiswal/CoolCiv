export function defineTypeFlavour(
	name: string,
): Readonly<Record<symbol, boolean>> {
	return { [Symbol(name)]: true }
}
