<template>
  <div>
    <TheCover ref="cover" />
    <Nuxt />
  </div>
</template>

<script>
import { gsap } from 'gsap'
import TheCover from '~/components/common/TheCover.vue'

export default {
  components: {
    TheCover,
  },
  mounted() {
    this.$nextTick(() => {
      gsap.set(this.$refs.cover.$el, {
        scaleX: 0,
      })
    })
  },
}
</script>
