import { Actor } from 'xstate'
import { CoordsType, DirectionType } from '../../types'
import { AttackPlayerType } from '../gameMachine/types'

export interface PlayerContextType {
  coords: CoordsType
  health: number
}

export type PlayerStateType = {
  context: PlayerContextType
  value: 'alive' | 'dead' | 'determining'
}

export type ArrowButtonClickedType = {
  direction: DirectionType
  type: 'ARROW_BUTTON_CLICKED'
}

export type ResetPlayerCoordsType = {
  type: 'RESET_PLAYER_COORDS'
}

export type PlayerEventType =
  | ArrowButtonClickedType
  | ResetPlayerCoordsType
  | AttackPlayerType

export type PlayerActorType = Actor<PlayerContextType, PlayerEventType>
