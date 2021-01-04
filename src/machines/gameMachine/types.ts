import { CoordsType } from '../../types'

export interface StartButtonClickedType {
  type: 'START_BUTTON_CLICKED'
}

export interface PlayerDiedType {
  type: 'PLAYER_DIED'
}

export interface PlayerGotTreasureType {
  type: 'PLAYER_GOT_TREASURE'
}

export interface RestartButtonClickedType {
  type: 'RESTART_BUTTON_CLICKED'
}

export interface HomeButtonClickedType {
  type: 'HOME_BUTTON_CLICKED'
}

export interface PlayerWalkedThroughDoorType {
  type: 'PLAYER_WALKED_THROUGH_DOOR'
}

export interface PlayerMovedType {
  coords: CoordsType
  type: 'PLAYER_MOVED'
}

export interface AttackPlayerType {
  type: 'ATTACK_PLAYER'
}

export type GameEventType =
  | StartButtonClickedType
  | PlayerDiedType
  | PlayerGotTreasureType
  | RestartButtonClickedType
  | HomeButtonClickedType
  | PlayerWalkedThroughDoorType
  | PlayerMovedType
  | AttackPlayerType

export type GameStateType = {
  context: null
  value:
    | 'home'
    | 'playing'
    | 'playing.level1'
    | 'playing.level2'
    | 'playing.level3'
    | 'gameOver'
    | 'gameComplete'
}
