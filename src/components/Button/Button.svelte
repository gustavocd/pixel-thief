<script lang="ts">
  export let onClick: () => void
  export let title = 'Start Game'
</script>

<style>
  button {
    padding: calc(var(--space) * 3px) calc(var(--space) * 6px);
    border: 2px solid var(--color-white);
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }
</style>

<button on:click={onClick}>{title}</button>
