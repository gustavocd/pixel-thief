<script lang="ts">
  import { fastForwardToLevel1Events } from './fastForwardEvents'
  import Game from './index.svelte'
</script>

<Game fastForwardEvents={fastForwardToLevel1Events} />
