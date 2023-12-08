<template>
  <ion-item button :class="{ 'has-icon': icon }" mode="ios">
    <ion-icon v-if="icon" slot="start" color="light" :icon="icon"></ion-icon>
    <ion-text color="light" class="text-md">{{ title }}</ion-text>
  </ion-item>
</template>
<script>
export default {
  name: 'MyPageNavItem',
  props: {
    icon: {
      type: String
    },
    title: {
      type: String
    }
  }
};
</script>
<style lang="scss" scoped>
ion-item {
  --detail-icon-color: white;
  --detail-icon-opacity: 1;
  --detail-icon-font-size: 20px;
  &.has-icon {
    --padding-start: 0;
  }
}
</style>
