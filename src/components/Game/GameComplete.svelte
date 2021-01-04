<script lang="ts">
  import { fastForwardToGameCompleteEvents } from './fastForwardEvents'
  import Game from './index.svelte'
</script>

<Game fastForwardEvents={fastForwardToGameCompleteEvents} />
