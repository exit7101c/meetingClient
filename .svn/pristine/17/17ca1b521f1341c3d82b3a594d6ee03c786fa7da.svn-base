<template>
  <ion-item>
    <ion-label>
      <p style="position: relative;">
        <ion-icon :icon="pointIcon"></ion-icon>
        <ion-text color="light">
          {{ item.pointNm }}
        </ion-text>
        <ion-text v-if="item.pointCd === 'CHARGE' || item.pointCd === 'REWARD'" color="success"
                  style="font-size: 18px; position: absolute; right: 0px;">
          + {{ item.changePoint }}
        </ion-text>
        <ion-text v-else color="danger" style="font-size: 18px; position: absolute; right: 0px;">
          - {{ item.changePoint }}
        </ion-text>
      </p>
      <p>
        <ion-icon :icon="historyIcon"></ion-icon>
        <ion-text color="light">
          {{ item.regTime }}
        </ion-text>
      </p>
    </ion-label>
    <div slot="end">
      <slot name="point"></slot>
    </div>
  </ion-item>
</template>
<script>
import IconMyPoint from "@/assets/img/icon/icon_my_point.svg";
import IconMyHistory from "@/assets/img/icon/icon_my_history.svg";

export default {
  name: "UsePointHistoryItem",
  props: {
    item: {
      type: Object
    }
  },
  data() {
    return {
      pointIcon: IconMyPoint,
      historyIcon: IconMyHistory
    };
  }
};
</script>
<style lang="scss" scoped>
ion-item {
  --padding-start: 0;
  --inner-padding-end: 0;
  --padding-top: 0;
  --padding-bottom: 0;

  + ion-item {
    margin-top: 10px;
  }

  ion-label {
    margin: 0;

    p {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 10px;

      ion-icon {
        width: 32px;
        height: 32px;
      }
    }
  }
}
</style>
