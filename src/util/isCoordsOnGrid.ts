import { isEqual } from 'lodash'
import { CoordsType } from '../types'
import { gridCoordsList } from './gridCoordsList'

export const isCoordsOnGrid = (coords: CoordsType) =>
  gridCoordsList.some(gridCoords => isEqual(gridCoords, coords))
