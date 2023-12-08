<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-button @click="$router.go(-1)">
            <ion-icon slot="icon-only" :icon="chevronBack"/>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-refresher slot="fixed" @ionRefresh="doRefresh($event)">
        <ion-refresher-content refreshing-spinner="circles"
                               :pulling-icon="chevronDownCircleOutline"></ion-refresher-content>
      </ion-refresher>

      <!-- title -->
      <ion-grid class="ion-padding">
        <ion-row style="font-weight: bolder; font-size: 24px; text-align: left; color: black">
          <ion-col size="12">라운지 이용안내</ion-col>
        </ion-row>
      </ion-grid>
      <!-- title -->

      <!-- 공지/안내 -->
      <ion-list lines="none">
        <ion-item style="border-bottom: 1px solid #cccccc; margin-top: 10px"
                  v-for="item in dataList" :key="item.id">
          <ion-col style="margin-left: -5px; margin-bottom: 10px">
            <ion-text>
              <span>{{ item.title }}</span><br/>
              <span style="color: #cccccc; font-size: 12px; ">{{ item.createdDtStr }}</span>
            </ion-text>
          </ion-col>
        </ion-item>
      </ion-list>
      <!-- 공지/안내 -->


      <ion-infinite-scroll :disabled="isEndScroll" threshold="100px" @ionInfinite="ionInfinite">
        <ion-infinite-scroll-content></ion-infinite-scroll-content>
      </ion-infinite-scroll>
    </ion-content>
  </ion-page>
</template>

<script>
  import {
    IonButtons, IonHeader, IonToolbar, IonContent, IonPage
    , IonInfiniteScroll, IonInfiniteScrollContent, IonRefresher, IonRefresherContent
    , IonList, IonItem, IonIcon, IonButton, IonGrid, IonRow, IonText, IonCol
  } from '@ionic/vue';
  import {chevronBack, chevronForward, chevronDownCircleOutline} from 'ionicons/icons';
  import {getData} from '@/assets/js/common.js';
  import {alertController} from "@ionic/core";

  export default {
    components: {
      IonButtons, IonHeader, IonToolbar, IonContent, IonPage, IonInfiniteScroll, IonInfiniteScrollContent, IonRefresher,
      IonRefresherContent, IonList, IonItem, IonIcon, IonButton, IonGrid, IonRow, IonText, IonCol
    },
    data() {
      return {
        chevronBack
        , chevronForward
        , chevronDownCircleOutline
        , dataList: []
        , pageNo: 1
        , pageSize: 30
        , currentPageNo: 1
        , totalCount: 0
        , isEndScroll: false
      };
    },
    ionViewWillEnter() {
      // 진입할 때 호출
      this.getLoungeList();
    },
    ionViewDidLeave() {
      // 떠날 때 호출
    },
    methods: {
      /** 경고 팝업창 **/
      async warningAlert(message) {
        const alert = await alertController
          .create({
            header: '',
            subHeader: '',
            message: message,
            buttons: ['OK'],
          });
        return alert.present();
      },
      //공지사항 조회
      getLoungeList() {
        // 초기화
        this.pageNo = 1;
        this.pageSize = 30;
        this.currentPageNo = 1;
        this.openChatList = [];
        this.totalCount = 0;
        this.isEndScroll = false;

        getData({
          url: '/getLoungeList',
          param: {pageNo: this.pageNo, pageSize: this.pageSize},
          then: (data) => {
            this.dataList = data.result;
            this.totalCount = data.totalCount;
          }
        });
      },
      /* Refresh */
      doRefresh(e) {
        this.getNoticeList();
        setTimeout(() => {
          e.target.complete();
        }, 500);
      },
      ionInfinite(event) {
        let self = this;

        // 스크롤 로딩 셋타임아웃
        setTimeout(function () {
          self.pageNo = self.currentPageNo + 1;

          getData({
            url: '/getNoticeList',
            param: {pageNo: this.pageNo, pageSize: this.pageSize},
            then: (data) => {
              for (let i in data.result) {
                self.dataList.push(data.result[i]);
              }
              self.currentPageNo += 1;
              self.$nextTick(() => {
                if (self.dataList.length == self.totalCount)
                  self.isEndScroll = true;
              });
            }
          });
          event.target.complete();
        }, 1000);
      },
    },
  };
</script>

<style scoped>

  ion-icon {
    color: black;
  }

</style>