<template>
  <div class="timelines-page">
    <TheHero :is-page="true" />
  </div>
</template>

<script>
import TheHero from '~/components/TheHero.vue'

export default {
  components: {
    TheHero,
  },
}
</script>
