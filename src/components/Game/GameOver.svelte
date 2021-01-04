<script lang="ts">
  import { fastForwardToGameOverEvents } from './fastForwardEvents'
  import Game from './index.svelte'
</script>

<Game fastForwardEvents={fastForwardToGameOverEvents} />
