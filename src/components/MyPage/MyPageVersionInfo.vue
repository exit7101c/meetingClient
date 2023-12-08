<template lang="">
  <ion-grid>
    <div class="text-center">
      <ion-text color="light" class="text-link text-sm">
        {{ SS_VERSION }} 최신 버전입니다
      </ion-text>
    </div>
  </ion-grid>
</template>
<script>
import { SS_VERSION } from '@/assets/js/common.js';
export default {
  name: 'MyPageVersionInfo',
  data() {
    return {
      SS_VERSION
    };
  }
};
</script>
<style lang="scss" scoped></style>
