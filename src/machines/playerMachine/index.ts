import { createMachine, assign } from 'xstate'
import { choose, sendParent } from 'xstate/lib/actions'

import { PLAYER_STARTING_COORDS, PLAYER_STARTING_HEALTH } from '../../constants'
import { getTargetCoords } from '../../util/getTargetCoords'
import { isCoordsOnGrid } from '../../util/isCoordsOnGrid'
import { PlayerMovedType } from '../gameMachine/types'
import {
  PlayerContextType,
  PlayerEventType,
  PlayerStateType,
  ArrowButtonClickedType,
} from './types'

export const playerMachine = createMachine<
  PlayerContextType,
  PlayerEventType,
  PlayerStateType
>(
  {
    id: 'player',
    context: {
      coords: PLAYER_STARTING_COORDS,
      health: PLAYER_STARTING_HEALTH,
    },
    initial: 'alive',
    states: {
      alive: {
        on: {
          ARROW_BUTTON_CLICKED: {
            actions: 'onArrowButtonClicked',
          },
          RESET_PLAYER_COORDS: {
            actions: 'resetCoords',
          },
          ATTACK_PLAYER: {
            actions: 'reduceHealth',
            target: 'determining',
          },
        },
      },
      dead: {},
      determining: {
        always: [
          {
            cond: 'isHealth0',
            target: 'dead',
            actions: 'broadcastPlayerDied',
          },
          {
            target: 'alive',
          },
        ],
      },
    },
  },
  {
    actions: {
      onArrowButtonClicked: choose([
        {
          cond: 'isSquareAvailable',
          actions: ['move', 'broadcastPlayerMoved'],
        },
      ]),
      resetCoords: assign<PlayerContextType>(() => ({
        coords: PLAYER_STARTING_COORDS,
      })) as any,
      broadcastPlayerDied: sendParent('PLAYER_DIED'),
      move: assign<PlayerContextType, ArrowButtonClickedType>(
        (context, event) => {
          const { coords } = context
          const { direction } = event
          const targetCoords = getTargetCoords({ coords, direction })

          return {
            coords: targetCoords,
          }
        },
      ) as any,
      broadcastPlayerMoved: sendParent(context => {
        const { coords } = context
        const event: PlayerMovedType = {
          type: 'PLAYER_MOVED',
          coords,
        }
        return event
      }),
      reduceHealth: assign<PlayerContextType>(context => ({
        health: context.health - 1,
      })) as any,
    },
    guards: {
      isSquareAvailable: (
        context: PlayerContextType,
        event: PlayerEventType,
      ) => {
        if (event.type === 'ARROW_BUTTON_CLICKED') {
          const { coords } = context
          const { direction } = event
          const targetCoords = getTargetCoords({ coords, direction })
          return isCoordsOnGrid(targetCoords)
        }
        return false
      },
      isHealth0: (context: PlayerContextType) => {
        const { health } = context
        return health === 0
      },
    },
  },
)
