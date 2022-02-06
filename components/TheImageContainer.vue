<template>
  <div class="image-container">
    <slot></slot>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.image-container {
  width: calc(80 / 16 * 12 * 1vh);
  height: 80vh;
  overflow: hidden;
}
</style>
