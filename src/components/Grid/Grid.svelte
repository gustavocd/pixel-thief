<script lang="ts">
  import {
    NUMBER_OF_GRID_COLUMNS,
    NUMBER_OF_GRID_ROWS,
    GRID_SQUARE_SIZE,
  } from '../../constants'
  import { gridCoordsList } from '../../util/gridCoordsList'
  import GridSquare from './GridSquare.svelte'

  export let content: any = null
</script>

<style>
  section {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style>

<section
  style="width: {NUMBER_OF_GRID_COLUMNS * GRID_SQUARE_SIZE}px; height: {NUMBER_OF_GRID_ROWS * GRID_SQUARE_SIZE}px">
  {#each gridCoordsList as [x, y]}
    <GridSquare {x} {y} />
  {/each}
  <slot {content} />
</section>
