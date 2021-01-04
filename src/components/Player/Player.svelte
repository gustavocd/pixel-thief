<script lang="ts">
  import { onDestroy, onMount } from 'svelte'
  import Health from '../Health/Health.svelte'
  import Image from '../Image/Image.svelte'
  import { coordsToPosition } from '../../util/coordsToPosition'

  import thiefGif from '../../images/thief.gif'
  // import { ArrowButtonClickedType } from '../../machines/playerMachine/types'
  // import { DirectionType } from '../../types'

  export let actor: any
  let position: string[] = []

  const { coords } = actor.state.context
  position = coordsToPosition(coords)

  let handleKeyDown: (e: KeyboardEvent) => void
  const { send } = actor

  actor.onTransition((state: any) => {
    const { coords } = state.context
    position = coordsToPosition(coords)
  })

  const handleArrowUp = () => {
    send({
      type: 'ARROW_BUTTON_CLICKED',
      direction: 'Up',
    } as any)
  }

  const handleArrowDown = () => {
    send({
      type: 'ARROW_BUTTON_CLICKED',
      direction: 'Down',
    } as any)
  }

  const handleArrowLeft = () =>
    send({
      type: 'ARROW_BUTTON_CLICKED',
      direction: 'Left',
    } as any)

  const handleArrowRight = () =>
    send({
      type: 'ARROW_BUTTON_CLICKED',
      direction: 'Right',
    } as any)

  onMount(() => {
    handleKeyDown = (e: KeyboardEvent) => {
      switch (e.code) {
        case 'ArrowDown':
          handleArrowDown()
          break

        case 'ArrowUp':
          handleArrowUp()
          break

        case 'ArrowLeft':
          handleArrowLeft()
          break

        case 'ArrowRight':
          handleArrowRight()
          break
      }
    }

    document.addEventListener('keydown', handleKeyDown)
  })

  onDestroy(() => {
    document.removeEventListener('keydown', handleKeyDown)
  })
</script>

<style>
  .health-layout {
    position: absolute;
    top: calc(calc(var(--space) * 30) * -1px);
    left: calc(calc(var(--space) * 2) * -1px);
    display: flex;
  }

  .image-layout {
    position: absolute;
    display: flex;
  }
</style>

<div class="health-layout">
  <Health {actor} />
</div>
<div class="image-layout" style="top: {position[1]}; left: {position[0]}">
  <Image src={thiefGif} size="Medium" />
</div>
