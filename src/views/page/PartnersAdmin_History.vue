<template>
  <div class="ion-padding">
    <div class="row-box">
      <ion-toolbar>
        <div class="text-center">
          <ion-text class="text-lg">
            잔여 금액 <strong class="text-bold">{{ currentPoint }} P</strong>
          </ion-text>
        </div>
      </ion-toolbar>

      <ion-list lines="none">
        <item-group v-for="(group, index) in groupedItems" :key="index">
          <!-- 이용 날짜 -->
          <UsePointHistoryHeader :title="group.date" />
          <!-- 날짜별 사용 내역 -->
          <UsePointHistoryItem
            v-for="item in group.items"
            :key="item.id"
            :item="item"
          />
        </item-group>
      </ion-list>
    </div>
    <div class="row-box" v-if="partnersPointList.length <= pageSize">
      <CardBox>
        <div class="text-center">
          <ion-text class="sub-text01">
            추가 조회를 원하시면 아래를 선택해 주세요
          </ion-text
          >
          <br />
          <ion-text color="light" class="text-link text-bold" @click="addBtn">
            이전 내역 조회하기
          </ion-text
          >
        </div>
      </CardBox>
    </div>
  </div>
</template>

<script>
import UsePointHistoryHeader from "@/components/UsePoint/UsePointHistoryHeader.vue";
import UsePointHistoryItem from "@/components/UsePoint/UsePointHistoryItem.vue";
import { getData } from "@/assets/js/common";

export default {
  inject: ["loadingController"],
  components: {
    UsePointHistoryHeader,
    UsePointHistoryItem
  },
  data() {
    return {
      groupedItems: [],
      partnersPointList: [],
      currentPoint: "",
      partnersCheck: "",
      message: "",

      /** 페이징 **/
      pageNo: 1,
      pageSize: 10,
      currentPageNo: 1,
      totalCount: 0
      /** 페이징 **/
    };
  },
  ionViewWillEnter() {
    // 진입할 때 호출
  },
  ionViewDidLeave() {
    // 떠날 때 호출
  },
  created() {
    this.partnersPointHis();
  },

  methods: {
    groupItems() {
      const groups = {};
      this.partnersPointList.forEach((item) => {
        const date = item.regTime;
        if (!groups[date]) {
          groups[date] = [];
        }
        groups[date].push(item);
      });
      const sortedDates = Object.keys(groups).sort(
        (a, b) => new Date(b) - new Date(a)
      );
      const groupedItems = sortedDates.map((date) => ({
        date,
        items: groups[date]
      }));
      this.groupedItems = groupedItems;
    },
    getResult() {
      let resultObj = {};

      resultObj.pageNo = this.pageNo;
      resultObj.pageSize = this.pageSize;

      return resultObj;
    },

    partnersPointHis() {
      this.pageNo = 1;
      this.pageSize = 10;
      this.currentPageNo = 1;
      this.totalCount = 0;
      getData({
        url: "/getPartnersPointHisList",
        param: this.getResult(),
        then: (data) => {
          console.log(data);
          this.partnersPointList = data.result;
          this.currentPoint = data.currentPoint;
          this.totalCount = data.totalCount;
          this.groupItems();
        }
      });
    },
    addBtn() {
      let self = this;
      self.showLoading();
      // 스크롤 로딩 셋타임아웃
      setTimeout(function() {
        self.pageNo = self.currentPageNo + 1;

        let url = "/getPartnersPointHisList";

        getData({
          url: url,
          param: self.getResult(),
          then: (data) => {
            for (let i in data.result) {
              self.partnersPointList.push(data.result[i]);
            }
            self.currentPageNo += 1;

            self.groupItems();
          }
        });
        self.loading.dismiss();

      }, 500);

    },
    /** 로딩창 **/
    async showLoading() {
      this.loading = await this.loadingController.create({
        message: "Loading...",
        duration: 0
      });
      await this.loading.present();
    }

  }
};
</script>

<style scoped></style>
