<script lang="ts">
  export let content: any
</script>

<style>
  section {
    width: 100%;
    flex-grow: 1;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  :global(.spacing > *:not(:first-child)) {
    margin-top: calc(var(--space) * 8px);
  }
</style>

<section class="spacing">
  <slot {content} />
</section>
