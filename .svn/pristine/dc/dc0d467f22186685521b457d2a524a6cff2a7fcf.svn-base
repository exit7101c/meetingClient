<template>
  <div class="boost">
    <ion-img :src="'https://cmdg.speedycdn.net/202308/2023081015124486.gif'" style="position: absolute;"
             v-if="boostCheck" />
    <ion-img :src="boostIcon" class="icon-boost" />
    <div class="timer">
      <span class="time">{{ calTimeStr }}</span>
    </div>
  </div>
</template>
<script>
import IconBoost from "@/assets/img/choice/choice_boost.svg";

export default {
  name: "ChoiceBoost",
  props: {
    boostCheck: {
      type: Boolean
    },
    calTimeStr: {
      type: String
    }
  },
  data() {
    return {
      boostIcon: IconBoost
    };
  }
};
</script>
<style lang="scss" scoped>
.boost {
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 10;
  width: 82px;
  height: 82px;
  

  &::after {
    display: block;
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.25);
    filter: blur(10px);
    z-index: 0;
  }

  ion-img {
    position: relative;
    z-index: 1;
  }

  .icon-boost {
    background-color: var(--ion-color-primary);
    border-radius: 50%;
    transform: scale(0.7);
  }

  .timer {
    position: absolute;
    bottom: -4px;
    left: 0;
    right: 0;
    text-align: center;
    z-index: 2;

    .time {
      display: inline-block;
      font-size: 10px;
      font-weight: bold;
      background-color: var(--ion-color-dark);
      padding: 4px 8px;
      color: white;
      border-radius: 20px;
    }
  }
}
</style>
