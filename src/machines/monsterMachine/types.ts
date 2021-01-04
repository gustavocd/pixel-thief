import { Actor, Interpreter } from 'xstate'
import { CoordsType } from '../../types'
import { PlayerMovedType } from '../gameMachine/types'

export interface MonsterContextType {
  coords: CoordsType
  playerCoords?: CoordsType
}

export type MonsterEventsType = PlayerMovedType

export type MonsterStateType = {
  context: MonsterContextType
  value: 'up' | 'down'
}

export type MonsterActorType =
  | Actor<MonsterContextType, MonsterEventsType>
  | Interpreter<MonsterContextType>
