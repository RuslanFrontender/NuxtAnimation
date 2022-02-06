<template>
  <main>
    <TheHero />
  </main>
</template>

<script>
import TheHero from '~/components/TheHero.vue'

export default {
  components: {
    TheHero,
  },
  mounted() {
    this.$nextTick(() => {
      this.$tftl.start()
    })
  },
  destroyed() {
    this.$tftl.reset()
  },
}
</script>
