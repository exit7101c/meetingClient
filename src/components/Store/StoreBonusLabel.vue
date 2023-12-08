<template>
  <div class="bonus" v-if="percent > 0">
    <div>
      <span
        v-if="index > 0"
        class="bg-opacity"
        :style="{ opacity: 1 - 0.5 * ((index + 4) / 5) }"
      ></span>
      <ion-text color="light" class="text-sm"> {{ percent }}% </ion-text>
    </div>
  </div>
</template>
<script>
export default {
  name: 'StoreBonusLabel',
  props: {
    index: {
      type: Number,
      default: 0
    },
    percent: {
      type: Number
    }
  }
};
</script>
<style lang="scss" scoped>
.bonus {
  min-width: inherit;
  height: inherit;
  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    padding: 0 4px;
    height: 100%;
    font-weight: bolder;
    border-radius: 2px;
    background: linear-gradient(135deg, #f5644d 0%, #e22744 100%);
    text-align: center;
    z-index: 1;
    overflow: hidden;
    ion-text {
      position: relative;
      z-index: 2;
    }
    .bg-opacity {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: white;
      z-index: 1;
    }
  }

  &:before {
    display: block;
    content: '';
    width: 20px;
    height: 10px;
    position: absolute;
    left: -4px;
    top: -4px;
    border-color: #c14f65;
    border-style: solid;
    border-top-width: 2px;
    border-left-width: 2px;
    border-right-width: 0;
    border-bottom-width: 0;
    border-top-left-radius: 6px;
  }
  &::after {
    position: absolute;
    display: block;
    content: '';
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, #f5644d 0%, #ef6f48 100%);
    z-index: 0;
    left: 2px;
    top: 2px;
    border-radius: 2px;
  }
}
</style>
