<template>
  <div class="row-box">
    <Countdown
      deadline="2023-10-09 00:00:00"
      mainColor="white"
      countdownSize="33px"
      :showDays="true"
      :showLabels="false"
    />
    <p class="days-info" v-if="type === 'testHome'">
<!--      <ion-text color="light">종료 까지 D-2</ion-text>-->
    </p>
  </div>
</template>
<script>
import { Countdown } from 'vue3-flip-countdown';

export default {
  name: 'ContestCountDown',
  components: {
    Countdown
  },
  props: {
    type: {
      type: String
    }
  }
};
</script>
<style>
.flip-card {
  margin: 0 5px;
}
</style>
<style lang="scss" scoped>
.days-info {
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  padding-bottom: 14px;
  background: url('../../assets/img/contest/text_line.svg') no-repeat center
    bottom;
  background-size: 126px 8px;
}
</style>
