<template>
  <div class="ion-padding">
    <div class="row-box">
      <CardBoxTitle title="고객정보" />
      <CardBox>
        <div class="text-center">
          <ion-button fill="clear">
            <ion-label class="text-bold text-xxl">NY0815</ion-label>
            <ion-icon slot="end" color="light" :icon="copyOutline" />
          </ion-button>
        </div>
      </CardBox>
    </div>
    <div class="row-box">
      <CardBoxTitle title="사용 가능한 포인트" />
      <CardBox>
        <div class="text-center">
          <ion-text color="light" class="text-bold text-xxl">
            31,000 P
          </ion-text>
        </div>
      </CardBox>
    </div>
    <div class="row-box">
      <CardBoxTitle title="사용할 포인트" />
      <CardBox padding="sm">
        <ion-row
          class="ion-align-items-center ion-justify-content-start gap-sm flex-nowrap"
        >
          <ion-col size="8">
            <ion-text color="light" class="text-bold text-xxl">
              <ion-row
                class="ion-align-items-center ion-justify-content-start gap-sm flex-nowrap"
              >
                <ion-col size="10">
                  <ion-input type="text" placeholder="31,000" class="p-0" />
                </ion-col>
                <ion-col size="2">P</ion-col>
              </ion-row>
            </ion-text>
          </ion-col>
          <ion-col size="4" class="text-center">
            <ion-text color="light" class="text-link text-sm nowrap"
            >전액사용
            </ion-text
            >
          </ion-col>
        </ion-row>
      </CardBox>
    </div>
    <div class="row-box">
      <div class="text-center">
        <h4>
          <ion-text class="sub-text01"> 정산 하기</ion-text>
        </h4>
      </div>
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
  </div>
</template>

<script>
import { copyOutline } from "ionicons/icons";

import UsePointHistoryHeader from "@/components/UsePoint/UsePointHistoryHeader.vue";
import UsePointHistoryItem from "@/components/UsePoint/UsePointHistoryItem.vue";

export default {
  name: "PartnersAdmin_Withdraw",
  components: {
    UsePointHistoryHeader,
    UsePointHistoryItem
  },
  data() {
    return {
      copyOutline,
      dummyitems: [
        {
          id: 1,
          pointNm: "정산",
          regTime: "2022-06-06",
          pointCd: "minus",
          changePoint: 700000
        },
        {
          id: 2,
          pointNm: "포인트처리 - D3N6MHR",
          regTime: "2022-06-06",
          pointCd: "CHARGE",
          changePoint: 500
        },
        {
          id: 3,
          pointNm: "포인트처리 - D3N6MHR",
          regTime: "2022-06-02",
          pointCd: "CHARGE",
          changePoint: 25000
        },
        {
          id: 4,
          pointNm: "포인트처리 - YGN8DSQ",
          regTime: "2022-06-02",
          pointCd: "CHARGE",
          changePoint: 13000
        },
        {
          id: 5,
          pointNm: "포인트처리 - B9DDYa55",
          regTime: "2022-06-02",
          pointCd: "CHARGE",
          changePoint: 35000
        }
      ],
      groupedItems: [] // 더미 데이터 날짜별로 그룹분류
    };
  },
  created() {
    this.groupItems();
  },
  methods: {
    groupItems() {
      const groups = {};
      this.dummyitems.forEach((item) => {
        const date = item.date;
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

<style scoped></style>
