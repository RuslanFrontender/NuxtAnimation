<template>
  <div v-tftl-tl:popup="{ name: 'close' }" class="popup__close-button">
    <CloseButton @click.native="closePopup" />
  </div>
</template>

<script>
// eslint-disable-next-line
import { mapMutations } from 'vuex'
import CloseButton from '~/components/common/CloseButton.vue'

export default {
  components: {
    CloseButton,
  },
  methods: {
    closePopup() {
      this.setPopupVisibility(false)
    },
    ...mapMutations('project', ['setPopupVisibility']),
  },
}
</script>

<style lang="scss" scoped>
.popup__close-button {
  position: absolute;
  top: 48px;
  right: 48px;
  z-index: 20;
}
</style>
