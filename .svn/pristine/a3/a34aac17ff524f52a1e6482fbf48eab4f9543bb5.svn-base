<template>
  <!-- TODO : 텍스트 및 점수 변수 개발-->
  <ion-item lines="none">
    <ion-icon slot="start" :icon="alertIcon" color="light"> </ion-icon>
    <ion-label>
      <p>
        <ion-text color="danger">“수위 높은 발언” 경고</ion-text>
      </p>
      <p>
        <ion-text color="light">
          수위 높은 발언으로 인해 경고 1점이 누적되었습니다
        </ion-text>
      </p>
    </ion-label>
  </ion-item>
</template>
<script>
import IconAlert from '@/assets/img/icon/icon_alert.svg';
export default {
  name: 'AlarmAlertNotice',
  data() {
    return {
      alertIcon: IconAlert
    };
  }
};
</script>
<style lang="scss" scoped>
ion-item {
  --padding-start: 0;
  margin: 14px 0 20px;
  ion-icon {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background: var(--ion-color-danger);
    margin-right: 10px;
  }
  ion-label {
    white-space: pre-wrap !important;
    p {
      font-weight: bold;
      font-size: 14px;
    }
  }
}
</style>
