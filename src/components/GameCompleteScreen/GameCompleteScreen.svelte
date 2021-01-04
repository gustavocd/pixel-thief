<script lang="ts">
  import MenuScreen from '../MenuScreen/MenuScreen.svelte'
  import Heading from '../Heading/Heading.svelte'
  import Image from '../Image/Image.svelte'
  import Button from '../Button/Button.svelte'

  import treasurePng from '../../images/treasure.png'

  export let onStartButtonClick: () => void
</script>

<MenuScreen content>
  <Heading title="Quest Complete!" />
  <Image src={treasurePng} size="Large" />
  <Button onClick={onStartButtonClick} title="Go Home" />
</MenuScreen>
