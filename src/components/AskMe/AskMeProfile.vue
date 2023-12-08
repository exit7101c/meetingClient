<template>
  <ion-grid>
    <ion-row>
      <ion-col size="12">
        <ion-chip color="light">{{ userInfo.nick }}님</ion-chip>
      </ion-col>
      <ion-col size="12">
        <ion-img
          v-bind:src="'https://' + userInfo.cdnNm"
        />
      </ion-col>
      <ion-col size="12" class="text-center">
        <ion-text class="text-xs sub-text04">타인의 프로필을 캡쳐 및 공유할 시 법적인 처벌을 받을 수 있습니다.</ion-text>
      </ion-col>
    </ion-row>
  </ion-grid>
</template>
<script>
export default {
  name: 'AskMeProfile',
  props: {
    userInfo: {
      type: Object
    }
  }
};
</script>
<style lang="scss" scoped>
ion-grid {
  border: 1px solid rgba($color: white, $alpha: 0.25);
  border-radius: var(--ion-border-radius);
  padding: 1rem;
  ion-chip {
    width: 100%;
    justify-content: center;
    font-size: 18px;
    height: 38px;
    font-weight: bold;
  }
  ion-img {
    border-radius: var(--ion-border-radius);
  }
  ion-text {
    line-height: 1;
  }
}
</style>
