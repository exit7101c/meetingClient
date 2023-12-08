<template>
  <ion-content class="ion-padding" style="display: flex; align-items: flex-start; justify-content: center;">
    <div class="row-box">
      <ion-toolbar>
        <div class="text-center">
          <ion-text class="text-lg">
            내 포인트 <strong class="text-bold"> {{ point }} P</strong>
          </ion-text>
        </div>
      </ion-toolbar>
    </div>
    <div class="row-box" v-if="historyItems.length > 0">
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
    <div class="row-box non-items" v-else>
      <ion-text color="light">
        포인트 이용내역이<br />없습니다.
      </ion-text>
    </div>
  </ion-content>
  <!--  <ion-footer>-->
  <!--    <div class="row-box">-->
  <!--      <CardBox>-->
  <!--        <div class="text-center">-->
  <!--          <ion-text class="sub-text01">-->
  <!--            추가 조회를 원하시면 아래를 선택해 주세요-->
  <!--          </ion-text>-->
  <!--          <br />-->
  <!--          <ion-text color="light" class="text-link text-bold">-->
  <!--            이전 내역 조회하기-->
  <!--          </ion-text>-->
  <!--        </div>-->
  <!--      </CardBox>-->
  <!--    </div>-->
  <!--    <div class="row-box">-->
  <!--      <UsePointUseagePolicy />-->
  <!--    </div>-->
  <!--  </ion-footer>-->
</template>
<script>
import { getData } from "@/assets/js/common";
import UsePointHistoryHeader from "@/components/UsePoint/UsePointHistoryHeader.vue";
import UsePointHistoryItem from "@/components/UsePoint/UsePointHistoryItem.vue";
import UsePointUseagePolicy from "@/components/UsePoint/UsePointUseagePolicy.vue";

export default {
  name: "UserPoint_History",
  components: {
    UsePointHistoryHeader,
    UsePointHistoryItem,
    UsePointUseagePolicy
  },
  data() {
    return {
      historyItems: [{}],
      groupedItems: [], // 더미 데이터 날짜별로 그룹분류,
      point: 0
    };
  },

  created() {
    this.getUserLastInvitePoint();
  },

  methods: {
    // setComma(arg) {
    //   return arg.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    // },
    getUserLastInvitePoint() {
      getData({
        url: "/getUserInvitePoint",
        param: {},
        then: (data) => {
          this.point = data.invitePoint;
          // this.point = this.setComma(data.invitePoint);
          this.getPointHistory();
        }
      });
    },
    getPointHistory() {
      getData({
        url: "/getPointHistory",
        param: {},
        then: (data) => {
          this.historyItems = data;
          if (data.length > 0) {
            this.groupItems();
          }
        }
      });
    },
    groupItems() {
      this.groupedItems = [];
      const groups = {};
      this.historyItems.forEach((item) => {
        const date = item.lineDate;
        item["type"] = parseInt(item.amount) > 0 ? "puls" : "minus";

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
    }
  }
};
</script>

<style scoped>
.non-items {
  width: 100%;

  font-size: 18px;
  font-weight: 700;
  text-align: center;

  margin-top: 120px;
}
</style>
