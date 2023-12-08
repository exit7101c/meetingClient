<template>
  <ion-item lines="none">
    <ion-icon
      :icon="checkIcon"
      size="large"
      :color="subscribedItem === 'GOLD_PASS' ? 'warning' : 'light'"
    ></ion-icon>
    <ion-label>
      <ion-text
        :color="
          index >= 0 && index <= 3
            ? 'danger'
            : index >= 1 && index <= 4 && subscribedItem === 'GOLD_PASS'
            ? 'danger'
            : 'light'
        "
        class="text-bold text-sm"
      >
        {{ item }} </ion-text
      ><br />
      <ion-text color="light" class="text-sm sub-text01">{{
        subDescription[item.trim()]
      }}</ion-text>
    </ion-label>
  </ion-item>
</template>
<script>
import IconCheck from '@/assets/img/icon/icon_check.svg';

export default {
  name: 'SubscriptionDescItem',
  props: {
    item: {
      type: String
    },
    index: {
      type: Number
    },
    subscribedItem: {
      type: String
    },
    subDescription: {
      type: Object
    }
  },
  data() {
    return {
      checkIcon: IconCheck
    };
  }
};
</script>
<style lang="scss" scoped>
ion-item {
  --padding-top: 0;
  --padding-bottom: 0;
  --padding-start: 0;

  ion-label {
    white-space: pre-line !important;
    overflow: visible;
    line-height: 1.2;
  }

  &::part(native) {
    min-height: 0;
  }
}
</style>
