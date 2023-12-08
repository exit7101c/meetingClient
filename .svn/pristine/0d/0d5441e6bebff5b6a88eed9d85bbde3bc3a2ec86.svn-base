<template>
  <ion-item-divider>
    <ion-label>
      <ion-text class="sub-text01 text-xs">{{ title }}</ion-text>
    </ion-label>
  </ion-item-divider>
</template>
<script>
export default {
  name: 'AlarmListHeader',
  props: {
    title: {
      type: String
    }
  }
};
</script>
<style lang="scss" scoped>
ion-item-divider {
  position: relative;
  text-align: center;
  align-items: center;
  margin: 20px 0;
  padding: 0 0;
  border: 0;
  --background: transparent;
  &:before {
    display: block;
    content: '';
    width: 100%;
    height: 1px;
    background-color: var(--ion-color-primary);
    position: absolute;
    top: 50%;
  }
  ion-label {
    display: inline-block;
    font-size: 14px;
    margin: 0 auto;
    ion-text {
      position: relative;
      padding: 0 16px;
      background-color: var(--ion-background-color);
      font-weight: bold;
      z-index: 1;
    }
  }
}
</style>
