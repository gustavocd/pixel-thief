<script lang="ts">
  import Image from '../Image/Image.svelte'
  import { TREASURE_COORDS } from '../../constants'
  import { coordsToPosition } from '../../util/coordsToPosition'
  import treasurePng from '../../images/treasure.png'

  let position = coordsToPosition(TREASURE_COORDS)
</script>

<style>
  div {
    position: absolute;
  }
</style>

<div style="top: {position[1]}; left: {position[0]}">
  <Image src={treasurePng} size="Medium" />
</div>
