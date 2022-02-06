<template>
  <TheSection>
    <TheText
      v-tftl-down="{
        scrollTrigger: {
          toggleActions: 'play none none reset',
        },
      }"
    />
    <template #desc>
      <div class="description">
        <span><strong>v-tftl-down</strong></span
        ><br /><br />
        //
        <br /><br />
        <pre>
  v-tftl-down="{
   scrollTrigger: {
     toggleActions: 'play none none reset',
   }
  }"
        </pre>
      </div>
    </template>
  </TheSection>
</template>

<script>
import TheText from '../../TheText.vue'
import TheSection from '../../TheSection.vue'

export default {
  components: {
    TheSection,
    TheText,
  },
}
</script>
