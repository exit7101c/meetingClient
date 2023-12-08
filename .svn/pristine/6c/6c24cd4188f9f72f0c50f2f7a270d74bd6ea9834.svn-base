<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <BackButton />
        </ion-buttons>
        <ion-title>내 포인트 관리</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <div class="sticky-top">
        <ion-segment
          v-model="segmentValue"
          mode="md"
          :scrollable="true"
          @ionChange="changeSegment"
        >
          <ion-segment-button value="history"> 이용내역</ion-segment-button>
          <ion-segment-button value="use"> 사용하기</ion-segment-button>
          <ion-segment-button value="partners"> 제휴업소</ion-segment-button>
          <ion-segment-button value="withdraw"> 출금하기</ion-segment-button>
        </ion-segment>
      </div>
      <template v-if="segmentValue == 'history'">
        <UsePoint_History ref="history" />
      </template>
      <template v-if="segmentValue == 'use'">
        <UsePoint_Use ref="use" />
      </template>
      <template v-if="segmentValue == 'partners'">
        <UsePoint_Partners ref="partners" />
      </template>
      <template v-if="segmentValue == 'withdraw'">
        <UsePoint_Withdraw ref="withdraw" />
      </template>
    </ion-content>
    <ion-footer>
      <!--      <template v-if="segmentValue == 'history'">-->
      <!--        <div class="row-box">-->
      <!--          <div class="row-box">-->
      <!--            <CardBox>-->
      <!--              <div class="text-center">-->
      <!--                <ion-text class="sub-text01">-->
      <!--                  추가 조회를 원하시면 아래를 선택해 주세요</ion-text-->
      <!--                ><br />-->
      <!--                <ion-text color="light" class="text-link text-bold">-->
      <!--                  이전 내역 조회하기</ion-text-->
      <!--                >-->
      <!--              </div>-->
      <!--            </CardBox>-->
      <!--          </div>-->
      <!--        </div>-->
      <!--      </template>-->
      <UsePointUseagePolicy />
    </ion-footer>
  </ion-page>
</template>

<script>
import UsePoint_Use from "./UsePoint_Use";
import UsePoint_History from "./UsePoint_History";
import UsePoint_Withdraw from "./UsePoint_Withdraw";
import UsePoint_Partners from "./UsePoint_Partners";
import UsePointUseagePolicy from "@/components/UsePoint/UsePointUseagePolicy.vue";

export default {
  name: "UsePointDetails",
  components: {
    UsePoint_Use,
    UsePoint_History,
    UsePoint_Withdraw,
    UsePoint_Partners,
    UsePointUseagePolicy
  },
  data() {
    return {
      UsePoint_Use,
      UsePoint_History,
      UsePoint_Withdraw,
      UsePoint_Partners,
      segmentValue: "history"
    };
  },

  created() {
  },

  methods: {
    changeSegment(event) {
      this.segmentValue = event.detail.value;
    }
  }
};
</script>

<style scoped></style>
