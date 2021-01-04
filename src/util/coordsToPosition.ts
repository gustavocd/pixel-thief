import { GRID_SQUARE_SIZE } from '../constants'
import { CoordsType } from '../types'

export const coordsToPosition = (coords: CoordsType) =>
  coords.map(coord => `${coord * GRID_SQUARE_SIZE}px`)
