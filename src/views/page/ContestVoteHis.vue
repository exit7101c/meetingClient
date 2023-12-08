<template>
  <ion-page>
    <ion-header>
      <ion-toolbar class="join-toolbar">
        <ion-buttons slot="start">
          <BackButton />
        </ion-buttons>
        <ion-title>투표현황</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-list lines="none">
        <ion-item-group>
          <ContestVoteHisListItem
            v-for="item in voteHisList"
            :key="item"
            :item="item"
          />
        </ion-item-group>
      </ion-list>
      <ion-infinite-scroll threshold="100px" @ionInfinite="ionInfinite">
        <ion-infinite-scroll-content
          loadingText="Please wait..."
          loadingSpinner="bubbles"
        ></ion-infinite-scroll-content>
      </ion-infinite-scroll>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  contestDetailMapFn,
  contestDetailMap,
  getData
} from "@/assets/js/common";
import { IonInfiniteScroll, IonInfiniteScrollContent } from "@ionic/vue";
import ContestVoteHisListItem from "@/components/Contest/ContestVoteHisListItem.vue";

export default {
  name: "Alarm",
  inject: ["alertController", "loadingController"],
  components: {
    IonInfiniteScroll,
    IonInfiniteScrollContent,
    ContestVoteHisListItem
  },
  computed: {},
  data() {
    return {
      voteHisList: [],

      pageNo: 1,
      pageSize: 30,
      currentPageNo: 1,
      totalCount: 0,
      isEndScroll: false
    };
  },
  ionViewWillEnter() {
    this.getVoteHis();
  },
  mounted() {
  },
  beforeUnmount() {
  },
  methods: {
    getResult() {
      let resultObj = {};
      resultObj.targetUserId = contestDetailMap.targetUserId;
      resultObj.contestType = 1; // 진행중인 contest_type
      resultObj.pageNo = this.pageNo;
      resultObj.pageSize = this.pageSize;

      return resultObj;
    },

    getVoteHis() {
      this.pageNo = 1;
      this.pageSize = 30;
      this.currentPageNo = 1;
      this.voteHisList = [];
      this.totalCount = 0;
      this.isEndScroll = false;

      getData({
        url: "/getVoteHis",
        param: this.getResult(),
        then: (data) => {
          this.voteHisList = data.result;
          this.totalCount = data.totalCount;
        }
      });
    },

    ionInfinite(event) {
      let self = this;

      // 스크롤 로딩 셋타임아웃
      setTimeout(function() {
        self.pageNo = self.currentPageNo + 1;

        getData({
          url: "/getVoteHis",
          param: self.getResult(),
          then: (data) => {
            for (let i in data.result) {
              self.voteHisList.push(data.result[i]);
            }
            self.currentPageNo += 1;
            self.$nextTick(() => {
              if (self.voteHisList.length === self.totalCount)
                self.isEndScroll = true;
            });
          }
        });
        event.target.complete();
      }, 1000);
    },


    /** 경고 팝업창 **/
    async warningAlert(message) {
      const alert = await this.alertController.create({
        header: "",
        subHeader: "",
        message: message,
        buttons: ["OK"]
      });
      return alert.present();
    }
  }
};
</script>

<style scoped></style>
