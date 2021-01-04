<script lang="ts">
  import { GRID_SQUARE_SIZE } from '../../constants'
  export let x: number
  export let y: number
</script>

<style>
  div {
    position: absolute;
  }
</style>

<div
  style="width: {GRID_SQUARE_SIZE}px; height: {GRID_SQUARE_SIZE}px; top: {y * GRID_SQUARE_SIZE}px; left: {x * GRID_SQUARE_SIZE}px" />
