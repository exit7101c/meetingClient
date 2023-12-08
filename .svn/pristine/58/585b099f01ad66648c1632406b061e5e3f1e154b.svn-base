<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <BackButton @event="goRouter" :custom="true" />
        </ion-buttons>
        <ion-title>신고처리 방안</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">

      <!-- 1번 내용 -->
      <ion-img :src="'https://cmdg.speedycdn.net/202308/2023081115432865.png'" />

    </ion-content>
    <ion-footer>
      <ion-grid>
        <div class="text-center">
          <ion-text color="light" class="text-md">
            - NAVY -
          </ion-text>
        </div>
      </ion-grid>
    </ion-footer>
  </ion-page>
</template>

<script>

export default {
  components: {},
  data() {
    return {};
  },
  ionViewWillEnter() {
    // 진입할 때 호출
  },
  ionViewDidLeave() {
    // 떠날 때 호출
  },
  methods: {

    goRouter() {
      this.$router.go(-1);
    }
  }
};
</script>


<style scoped lang="scss">

ion-item {
  --padding-top: 6px;
  --padding-bottom: 6px;

  ion-label {
    h3 {
      font-size: 18px;
      font-weight: bold;
      text-overflow: ellipsis;
      overflow: hidden;
    }

    span {
      font-size: 14px;
      display: inline-block;
      min-width: 24px;

      + span {
        margin-left: 10px;
      }
    }
  }
}

</style>
