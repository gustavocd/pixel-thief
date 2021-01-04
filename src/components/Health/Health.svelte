<script lang="ts">
  import Image from '../Image/Image.svelte'
  import heartImg from '../../images/heart.png'

  // export let health: number
  export let actor: any
  const { health } = actor.state.context
  let items: undefined[] = Array(health).fill(undefined)

  actor.onTransition((state: any) => {
    const { health } = state.context
    items = Array(health).fill(undefined)
  })
</script>

<style>
  div {
    display: flex;
  }

  :global(.image > :not(:first-child)) {
    margin-left: calc(var(--space) * 2px);
  }
</style>

<div class="image">
  {#each items as _}
    <Image src={heartImg} size="Small" />
  {/each}
</div>
