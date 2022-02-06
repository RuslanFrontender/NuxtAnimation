<template>
  <div class="scroll-down">
    <div class="scroll-down__inner">
      <div class="scroll-down__arrow scroll-down__arrow-1"></div>
      <div class="scroll-down__arrow scroll-down__arrow-2"></div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.scroll-down {
  position: absolute;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 1px solid black;
  left: 50%;
  bottom: 64px;
  pointer-events: none;
}
.scroll-down__inner {
  position: absolute;
  width: 16px;
  height: 16px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  animation: loop 1s infinite alternate-reverse;
}
.scroll-down__arrow {
  width: 100%;
  height: 100%;
  border-bottom: 1px solid black;
  border-left: 1px solid black;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) rotate(-45deg);
}
.scroll-down__arrow-2 {
  top: calc(50% - 4px);
}
@keyframes loop {
  to {
    transform: translate(-50%, -20%);
  }
}
</style>
