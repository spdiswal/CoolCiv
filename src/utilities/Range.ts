export type Range0To15 = Range0To9 | "10" | "11" | "12" | "13" | "14" | "15"
export type Range0To9999 =
	| Range0To9
	| Range10To99
	| Range100To999
	| Range1000To9999
export type Range1To9999 = Exclude<Range0To9999, "0">

type Range0To9 = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9"
type Range1To9 = Exclude<Range0To9, "0">
type Range10To99 = `${Range1To9}${Range0To9}`
type Range100To999 = `${Range1To9}${Range0To9}${Range0To9}`
type Range1000To9999 = `${Range1To9}${Range0To9}${Range0To9}${Range0To9}`
