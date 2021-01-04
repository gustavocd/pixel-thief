<script lang="ts">
  import Image from '../Image/Image.svelte'
  import monsterGif from '../../images/monster.gif'
  import { coordsToPosition } from '../../util/coordsToPosition'

  export let actor: any
  let position: string[] = []

  const { coords } = actor.state.context
  position = coordsToPosition(coords)

  actor.onTransition((state: any) => {
    const { coords } = state.context
    position = coordsToPosition(coords)
  })
</script>

<style>
  div {
    position: absolute;
  }
</style>

<div style="top: {position[1]}; left: {position[0]}">
  <Image src={monsterGif} size="Medium" />
</div>
