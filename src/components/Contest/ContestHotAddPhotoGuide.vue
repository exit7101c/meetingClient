<template lang="">
  <ion-row>
    <ion-col size="6">
      <ion-thumbnail>
        <img src="../../assets/img/contest/contest_hot_guide01.png" alt="" />
      </ion-thumbnail>

      <p class="text-center">
        <ion-text color="light"><strong>몸매사진 (필수) 2장 </strong></ion-text>
      </p>
    </ion-col>
    <ion-col size="6">
      <ion-thumbnail>
        <img src="../../assets/img/contest/contest_hot_guide02.png" alt="" />
      </ion-thumbnail>
      <p class="text-center">
        <ion-text color="light"><strong>추가사진 (선택) 2장</strong> </ion-text>
      </p>
    </ion-col>
  </ion-row>
</template>
<script>
export default {
  name: 'ContestHotAddPhotoGuide'
};
</script>
<style lang="scss" scoped>
ion-thumbnail {
  width: 100%;
  height: 224px;
  object-fit: cover;
  overflow: hidden;
  border-radius: var(--ion-border-radius-lg);
}
</style>
