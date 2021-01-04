import { isEqual } from 'lodash'
import { assign, createMachine } from 'xstate'
import { choose, sendParent } from 'xstate/lib/actions'
import { CoordsType } from '../../types'
import { PlayerMovedType } from '../gameMachine/types'
import {
  MonsterContextType,
  MonsterEventsType,
  MonsterStateType,
} from './types'

const coordsList: CoordsType[] = [
  [8, 1],
  [8, 2],
]

export const monsterMachine = createMachine<
  MonsterContextType,
  MonsterEventsType,
  MonsterStateType
>(
  {
    context: {
      coords: coordsList[0],
      playerCoords: undefined,
    },
    id: 'monster',
    initial: 'up',
    on: {
      PLAYER_MOVED: {
        actions: ['storePlayerCoords', 'attemptAttack'],
      },
    },
    states: {
      up: {
        entry: 'attemptAttack',
        after: {
          2000: {
            actions: 'moveDown',
            target: 'down',
          },
        },
      },
      down: {
        entry: 'attemptAttack',
        after: {
          2000: {
            actions: 'moveUp',
            target: 'up',
          },
        },
      },
    },
  },
  {
    actions: {
      moveDown: assign<MonsterContextType>(() => ({
        coords: coordsList[1],
      })) as any,
      moveUp: assign<MonsterContextType>(() => ({
        coords: coordsList[0],
      })) as any,
      storePlayerCoords: assign<MonsterContextType, PlayerMovedType>(
        (_context, event) => ({
          playerCoords: event.coords,
        }),
      ),
      attemptAttack: choose([
        {
          actions: 'attack',
          cond: 'isMonsterPlayerCoordsEqual',
        },
      ]),
      attack: sendParent('ATTACK_PLAYER'),
    },
    guards: {
      isMonsterPlayerCoordsEqual: (context, _event) =>
        isEqual(context.coords, context.playerCoords),
    },
  },
)
