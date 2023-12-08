<template>
  <ion-grid class="ion-padding">
    <div class="row-box">
      <ion-icon color="warning" size="large" :icon="checkmarkCircleOutline" />
      <br />
      <ion-text color="light" class="text-xl text-bold"
        >역대급 콘테스트 보상지원</ion-text
      >
    </div>
    <div class="row-box">
      <ion-icon color="warning" size="large" :icon="checkmarkCircleOutline" />
      <br />
      <ion-text color="light" class="text-xl text-bold"
        >정해진 테마로 콘테스트 지원하면 끝!!!
      </ion-text
      >
    </div>
    <div class="row-box">
      <ion-icon
        color="warning"
        size="large"
        :icon="checkmarkCircleOutline"
      /><br />
      <ion-text color="light" class="text-xl text-bold"
        >테마는 HOT BODY,<br /><br />모집기간 -9월 내 선착순 정원 마감까지<br />진행기간 -모집마감 ~ 2주간
      </ion-text
      >
    </div>
  </ion-grid>
</template>
<script>
import { checkmarkCircleOutline } from 'ionicons/icons';
export default {
  name: 'ContestHotInfo',
  data() {
    return {
      checkmarkCircleOutline
    };
  }
};
</script>
<style lang="scss" scoped>
ion-grid {
  background: #000000;
  padding-top: 40px;
  padding-bottom: 40px;
}
</style>
