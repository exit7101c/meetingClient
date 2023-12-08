<template>
  <ion-page style="z-index: 999999" v-if="isOpen">
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-button @click="goBack()">
            <ion-icon slot="icon-only" :icon="chevronBack" />
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <!--      <ion-refresher slot="fixed" @ionRefresh="doRefresh($event)">-->
      <!--        <ion-refresher-content refreshing-spinner="circles"-->
      <!--                               :pulling-icon="chevronDownCircleOutline"></ion-refresher-content>-->
      <!--      </ion-refresher>-->

      <!-- title -->
      <ion-grid class="ion-padding">
        <ion-row style="font-weight: bolder; font-size: 20px; text-align: left; color: black">
          <ion-col size="12">세컨드 이용안내</ion-col>
        </ion-row>
      </ion-grid>
      <!-- title -->
      <ion-grid class="ion-padding">
        <ion-row style="color: #acacac; font-size: 15px; text-align: left; margin-bottom: 20px;">
          <ion-col size="12">
            세컨드 이용안내
          </ion-col>
        </ion-row>
      </ion-grid>
      <!-- 공지/안내 -->
      <ion-list lines="none">
        <ion-item>
          <ion-col style="margin-left: -5px; margin-bottom: 10px">
            <ion-text>
              <p style="font-weight: bolder; font-size: 18px;">
                <span
                  style="font-size: 15px; padding: 1px 7px 3px 7px; background-color: black; color: white;">01</span>
                &nbsp;세컨드 이용안내
              </p>
              <span>세컨드 이용안내 세컨드 이용안내 세컨드 이용안내 세컨드 이용안내 세컨드 이용안내 </span>
            </ion-text>
          </ion-col>
        </ion-item>
        <ion-item>
          <ion-col style="margin-left: -5px; margin-bottom: 10px">
            <ion-text>
              <p style="font-weight: bolder; font-size: 18px;">
                <span
                  style="font-size: 15px; padding: 1px 7px 3px 7px; background-color: black; color: white;">02</span>
                &nbsp;세컨드 이용안내
              </p>
              <span>세컨드 이용안내 세컨드 이용안내 세컨드 이용안내 세컨드 이용안내 세컨드ㄴ 이용안내 </span>
            </ion-text>
          </ion-col>
        </ion-item>
      </ion-list>
      <!-- 공지/안내 -->

    </ion-content>
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
    this.isOpen = true;
  },
  ionViewDidLeave() {
    // 떠날 때 호출
  },
  methods: {
    goBack() {
      this.$router.go(-1);
      this.isOpen = false;
    }
  }
};
</script>

<style scoped>

ion-icon {
  color: black;
}

</style>
