<script lang="ts">
  import MenuScreen from '../MenuScreen/MenuScreen.svelte'
  import Heading from '../Heading/Heading.svelte'
  import Image from '../Image/Image.svelte'
  import Button from '../Button/Button.svelte'

  import skullPng from '../../images/skull.png'

  export let onStartButtonClick: () => void
</script>

<MenuScreen content>
  <Heading title="Game Over" />
  <Image src={skullPng} size="Large" />
  <Button onClick={onStartButtonClick} title="Restart" />
</MenuScreen>
