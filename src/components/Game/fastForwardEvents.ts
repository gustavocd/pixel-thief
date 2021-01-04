import { GameEventType } from '../../machines/gameMachine/types'

export const fastForwardToLevel1Events: GameEventType[] = [
  {
    type: 'START_BUTTON_CLICKED',
  },
]

export const fastForwardToLevel2Events: GameEventType[] = [
  ...fastForwardToLevel1Events,
  {
    type: 'PLAYER_WALKED_THROUGH_DOOR',
  },
]

export const fastForwardToLevel3Events: GameEventType[] = [
  ...fastForwardToLevel2Events,
  {
    type: 'PLAYER_WALKED_THROUGH_DOOR',
  },
]

export const fastForwardToGameCompleteEvents: GameEventType[] = [
  ...fastForwardToLevel3Events,
  {
    type: 'PLAYER_GOT_TREASURE',
  },
]

export const fastForwardToGameOverEvents: GameEventType[] = [
  ...fastForwardToLevel1Events,
  {
    type: 'PLAYER_DIED',
  },
]
