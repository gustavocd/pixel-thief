<script lang="ts">
  import MenuScreen from '../MenuScreen/MenuScreen.svelte'
  import Heading from '../Heading/Heading.svelte'
  import Image from '../Image/Image.svelte'
  import Button from '../Button/Button.svelte'

  import thiefGif from '../../images/thief.gif'

  export let onStartButtonClick: () => void
</script>

<MenuScreen content>
  <Heading title="Pixel Thief" />
  <Image src={thiefGif} size="Large" />
  <Button onClick={onStartButtonClick} />
</MenuScreen>
