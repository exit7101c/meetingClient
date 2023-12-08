<template lang="">
  <ion-row class="ion-align-items-center ion-justify-content-center gap-lg">
    <div>
      <ion-row class="ion-align-items-center ion-justify-content-center gap-md">
        <ion-text color="light" class="ttext-sm text-bold">
          {{ likeCnt || 0 }}
        </ion-text>
        <ion-fab-button @click="handleThumbsUp" class="btn-thumbs-up">
          <ion-icon size="large" :icon="thumbsUpOutline"></ion-icon>
        </ion-fab-button>
      </ion-row>
    </div>
    <div>
      <ion-row class="ion-align-items-center ion-justify-content-center gap-md">
        <ion-fab-button @click="handleThumbsDown" class="btn-thumbs-down">
          <ion-icon size="large" :icon="thumbsDownOutline"></ion-icon>
        </ion-fab-button>
        <ion-text color="light" class="ttext-sm text-bold">
          {{ badCnt || 0 }}
        </ion-text>
      </ion-row>
    </div>
  </ion-row>
</template>
<script>
import { thumbsUpOutline, thumbsDownOutline } from 'ionicons/icons';

export default {
  name: 'CummunityViewThumbsUpDown',
  props: {
    likeCnt: {
      type: Number
    },
    badCnt: {
      type: Number
    }
  },
  data() {
    return {
      thumbsUpOutline,
      thumbsDownOutline
    };
  },
  methods: {
    handleThumbsUp() {
      this.$emit('up');
    },
    handleThumbsDown() {
      this.$emit('down');
    }
  }
};
</script>
<style lang="scss" scoped>
.btn-thumbs-up {
  --background: #ff747b;
}
.btn-thumbs-down {
  --background: #569ef8;
}
</style>
