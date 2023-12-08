<template>
  <div class="bonus">
    <div>
      <span
      ></span>
      <ion-text color="light" class="text-sm">지우기</ion-text>
    </div>
  </div>
</template>
<script>

export default {
  name: "PhotoDelete",
  props: {}
};
</script>
<style lang="scss" scoped>
.bonus {
  z-index: 9999;
  min-width: inherit;
  height: inherit;
  top: 0;
  right: 0;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    padding: 0 4px;
    height: 100%;
    font-weight: bolder;
    border-radius: 2px;
    background: linear-gradient(135deg, #230e3b 0%, #6a268b 100%);
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
    background: linear-gradient(135deg, #1e032b 0%, #320c60 100%);
    z-index: 0;
    left: 2px;
    top: 2px;
    border-radius: 2px;
  }
}
</style>
