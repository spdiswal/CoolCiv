import type { Digit } from "+utilities"

export type PositionString = `${Row},${Column}`

type Row = Digit | 10 | 11 | 12 | 13 | 14 | 15
type Column = Digit | 10 | 11 | 12 | 13 | 14 | 15
