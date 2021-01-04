<script lang="ts">
  import { onMount } from 'svelte'
  import { fade } from 'svelte/transition'

  import { interpret } from 'xstate'
  import { gameMachine } from '../../machines/gameMachine'

  import HomeScreen from '../HomeScreen/HomeScreen.svelte'
  import Grid from '../Grid/Grid.svelte'
  import Player from '../Player/Player.svelte'
  import LevelBackgroundImage from '../LevelBackgroundImage/LevelBackgroundImage.svelte'
  import GameOverScreen from '../GameOverScreen/GameOverScreen.svelte'
  import GameCompleteScreen from '../GameCompleteScreen/GameCompleteScreen.svelte'
  import level1BackgroundPng from '../../images/level1Background.png'
  import level2BackgroundPng from '../../images/level2Background.png'
  import level3BackgroundPng from '../../images/level3Background.png'
  import Treasure from '../Treasure/Treasure.svelte'
  import Monster from '../Monster/Monster.svelte'
  // import { GameEventType } from '../../machines/gameMachine/types'

  const gameService = interpret(gameMachine).start()
  let playerActor: any
  let monsterActor: any

  onMount(() => {
    gameService.onTransition(state => {
      if (!state.changed) {
        return
      }
      playerActor = state.children?.playerActor
      monsterActor = state.children?.monsterActor
    })
  })
</script>

{#if $gameService.matches('home')}
  <HomeScreen
    onStartButtonClick={() => gameService.send('START_BUTTON_CLICKED')} />
{/if}

{#if $gameService.matches('playing')}
  {#if $gameService.matches('playing.level1')}
    <main transition:fade>
      <LevelBackgroundImage src={level1BackgroundPng} />
      <Grid>
        {#if playerActor}
          <Player actor={playerActor} />
        {/if}
      </Grid>
    </main>
  {/if}

  {#if $gameService.matches('playing.level2')}
    <main transition:fade>
      <LevelBackgroundImage src={level2BackgroundPng} />
      <Grid>
        {#if playerActor}
          <Player actor={playerActor} />
        {/if}
        {#if monsterActor}
          <Monster actor={monsterActor} />
        {/if}
      </Grid>
    </main>
  {/if}

  {#if $gameService.matches('playing.level3')}
    <main transition:fade>
      <LevelBackgroundImage src={level3BackgroundPng} />
      <Grid>
        {#if playerActor}
          <Player actor={playerActor} />
          <Treasure />
        {/if}
      </Grid>
    </main>
  {/if}
{/if}

{#if $gameService.matches('gameOver')}
  <GameOverScreen
    onStartButtonClick={() => gameService.send('RESTART_BUTTON_CLICKED')} />
{/if}

{#if $gameService.matches('gameComplete')}
  <GameCompleteScreen
    onStartButtonClick={() => gameService.send('HOME_BUTTON_CLICKED')} />
{/if}
