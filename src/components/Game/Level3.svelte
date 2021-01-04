<script lang="ts">
  import { fastForwardToLevel3Events } from './fastForwardEvents'
  import Game from './index.svelte'
</script>

<Game fastForwardEvents={fastForwardToLevel3Events} />
