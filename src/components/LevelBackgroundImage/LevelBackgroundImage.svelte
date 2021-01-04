<script lang="ts">
  export let src: string
  export let alt: string = 'Dungeon room'
</script>

<style>
  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    pointer-events: none;
  }
</style>

<img {src} {alt} />
