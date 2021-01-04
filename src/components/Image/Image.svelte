<script lang="ts">
  import { GRID_SQUARE_SIZE } from '../../constants'
  import { space } from '../../util/space'

  export let size: ImageSizeType
  export let src: string

  type ImageSizeType = 'Small' | 'Medium' | 'Large'

  interface PropsType {
    size?: ImageSizeType
  }

  const getDimension = (size: PropsType['size']) => {
    if (size === 'Large') {
      return space(20)
    }

    if (size === 'Small') {
      return space(10)
    }

    return `${GRID_SQUARE_SIZE}px`
  }

  let width = getDimension(size)
  let height = getDimension(size)
</script>

<style>
  img {
    object-fit: contain;
  }
</style>

<img {src} {width} {height} alt="thief" />
