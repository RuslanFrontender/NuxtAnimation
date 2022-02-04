<template>
  <section class="section">
    <TheColumn>
      <slot></slot>
    </TheColumn>
    <TheColumn>
      <slot name="desc"></slot>
    </TheColumn>
  </section>
</template>

<script>
import TheColumn from './TheColumn.vue'

export default {
  components: {
    TheColumn,
  },
}
</script>

<style lang="scss" scoped>
.section {
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}
</style>
