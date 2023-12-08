<template>
  <ion-item>
    <ion-icon slot="start" :icon="voteIcon" color="light"></ion-icon>
    <ion-label>
      <ion-text color="light" class="text-bold text-md">
        {{ item.nick }}님에게 투표 받았습니다.
      </ion-text>
    </ion-label>
    <div slot="end">
      <ion-text color="light" class="text-xs">
        {{ item.regTimeStr }}
      </ion-text>
    </div>
  </ion-item>
</template>
<script>
import IconVote from "@/assets/img/icon/icon_vote.svg";

export default {
  name: "AlarmListItem",
  props: {
    item: {
      type: Object
    }
  },
  data() {
    return {
      voteIcon: IconVote
    };
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
ion-item {
  --padding-start: 0;
  --inner-padding-end: 0;
  --background: #242541;

  ion-icon {
    width: 28px;
    height: 28px;
    background-color: #3b3b67;
    border-radius: 50%;
    padding: 4px;
    margin-right: 16px;
  }

  &::part(native) {
    align-items: center;
    padding: 10px 20px;
    border-radius: var(--ion-border-radius-lg);
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.18);
  }

  + ion-item {
    margin-top: 10px;
  }

  ion-label {
    margin: 0;
    margin-right: 20px;
    white-space: pre-wrap !important;
  }

  .btn-more {
    display: block;
    margin-top: 4px;
  }
}
</style>
