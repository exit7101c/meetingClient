<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <BackButton />
        </ion-buttons>
        <ion-title>파트너스 관리자</ion-title>
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
          <ion-segment-button value="use"> 스캔하기</ion-segment-button>
          <ion-segment-button value="history"> 이력조회</ion-segment-button>
          <ion-segment-button value="withdraw"> 정산하기</ion-segment-button>
          <ion-segment-button value="setting"> 광고설정</ion-segment-button>
          <ion-segment-button value="board"> 노출이력</ion-segment-button>
        </ion-segment>
      </div>
      <template v-if="segmentValue === 'use'">
        <PartnersAdmin_Use ref="use" />
      </template>
      <template v-if="segmentValue === 'history'">
        <PartnersAdmin_History ref="histroy" />
      </template>
      <template v-if="segmentValue === 'withdraw'">
        <PartnersAdmin_Withdraw ref="withdraw" />
      </template>
      <template v-if="segmentValue === 'setting'">
        <PartnersAdmin_Setting ref="setting" />
      </template>
      <template v-if="segmentValue === 'board'">
        <PartnersAdmin_Board ref="board" />
      </template>
    </ion-content>
    <ion-footer>
      <template v-if="segmentValue === 'withdraw'">
        <div class="row-box">
          <CardBox>
            <div class="text-center">
              <ion-text class="sub-text01">
                사용완료 후 취소처리가 불가능합니다.<br />
                다시 한 번 확인해 주세요
              </ion-text
              >
            </div>
          </CardBox>
        </div>
        <div class="row-box text-center">
          <custom-button
            color="primary"
            expand="block"
            size="large"
            shape="round"
          >
            사용 완료
          </custom-button>
        </div>
      </template>
      <div class="row-box">
        <UsePointUseagePolicy />
      </div>
    </ion-footer>
  </ion-page>
</template>

<script>
import PartnersAdmin_Use from "./PartnersAdmin_Use";
import PartnersAdmin_History from "./PartnersAdmin_History";
import PartnersAdmin_Withdraw from "./PartnersAdmin_Withdraw";
import PartnersAdmin_Setting from "./PartnersAdmin_Setting";
import PartnersAdmin_Board from "./PartnersAdmin_Board";
import UsePointUseagePolicy from "@/components/UsePoint/UsePointUseagePolicy.vue";

export default {
  components: {
    PartnersAdmin_Use,
    PartnersAdmin_History,
    PartnersAdmin_Withdraw,
    PartnersAdmin_Setting,
    PartnersAdmin_Board,
    UsePointUseagePolicy
  },
  data() {
    return {
      PartnersAdmin_Use,
      PartnersAdmin_History,
      PartnersAdmin_Withdraw,
      PartnersAdmin_Setting,
      PartnersAdmin_Board,

      segmentValue: "use"
    };
  },
  ionViewWillEnter() {
    // 진입할 때 호출
  },
  ionViewDidLeave() {
    // 떠날 때 호출
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
