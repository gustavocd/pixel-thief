<script lang="ts">
  import { fastForwardToLevel2Events } from './fastForwardEvents'
  import Game from './index.svelte'
</script>

<Game fastForwardEvents={fastForwardToLevel2Events} />
