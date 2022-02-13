<template>
  <div class="timelines__section1">
    <button class="popup__open-button" @click="openPopup">OPEN POPUP</button>
  </div>
</template>

<script>
// eslint-disable-next-line
import { mapState, mapMutations } from 'vuex'

export default {
  computed: {
    ...mapState('project', ['is_popup_opened']),
  },
  methods: {
    openPopup() {
      this.setPopupVisibility(true)
    },
    ...mapMutations('project', ['setPopupVisibility']),
  },
}
</script>

<style lang="scss" scoped>
.timelines__section1 {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.popup__open-button {
  all: unset;
  display: block;
  text-transform: uppercase;
  font-size: 24px;
  text-align: center;
  padding: 8px;
  cursor: pointer;
}
</style>
