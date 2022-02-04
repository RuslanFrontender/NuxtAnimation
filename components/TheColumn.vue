<template>
  <div class="column">
    <slot></slot>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.column {
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 0 5rem;
}
</style>
