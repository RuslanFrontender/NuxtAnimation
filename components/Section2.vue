<template>
  <TheSection>
    <TheText
      v-tftl-letters="{
        duration: 0.05,
        stagger: 0.01,
        scrollTrigger: {
          toggleActions: 'play none none reset',
        },
      }"
    />
    <template #desc>
      <div class="description">
        <span><strong>v-tftl-letters</strong></span
        ><br /><br />
        //
        <br /><br />
        <pre>
  v-tftl-letters="{
    duration: 0.05,
    stagger: 0.01,
    scrollTrigger: {
      toggleActions: 'play none none reset'
    }
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
