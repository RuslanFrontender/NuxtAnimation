<template>
  <TheSection>
    <TheText
      v-tftl-text-lines:mask.down="{
        autoAlpha: 0,
        duration: 0.5,
        y: 120,
        scrollTrigger: {
          toggleActions: 'play none none reset',
        },
      }"
    />
    <template #desc>
      <div class="description">
        <span><strong>v-tftl-text-lines:mask.down</strong></span
        ><br /><br />
        //
        <br /><br />
        <pre>
  v-tftl-text-lines:mask.down="{
    autoAlpha: 0,
    duration: 0.5,
    y: 120,
    scrollTrigger: {
      toggleActions: 'play none none reset',
    },
  }"
        </pre>
      </div>
    </template>
  </TheSection>
</template>

<script>
import TheText from './TheText.vue'
import TheSection from './TheSection.vue'

export default {
  components: {
    TheSection,
    TheText,
  },
}
</script>
