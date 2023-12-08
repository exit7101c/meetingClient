<template>
  <ion-progress-bar :value="calValue"></ion-progress-bar>
</template>
<script>
import { IonProgressBar } from '@ionic/vue';

export default {
  name: 'ProgressBar',
  props: {
    currIdx: { type: Number, default: 0 },
    totalIdx: { type: Number, default: 10 }
  },
  components: {
    IonProgressBar
  },
  computed: {
    calValue() {
      return this.currIdx / this.totalIdx;
    }
  }
};
</script>
<style lang="scss" scoped></style>
