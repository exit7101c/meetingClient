<template>
  <div class="text-center mt-4">
    <!-- TODO: 뱃지 샘플 -->
    <CertificationBadgeItem v-if="userBadgeInfo.length > 0" v-for="(item, index) in userBadgeInfo"
                            :key="index"
                            :item="item" />
  </div>
  <div class="section-header">PROFILE & ASK ME</div>
  <div class="row-box">
    <ion-card v-if="info.totalAskMeCnt">
      <ion-card-content>
        <ion-row>
          <template v-if="info.totalAskMeCnt">
            <ion-col size="2">
              <ion-text color="secondary">누적</ion-text>
            </ion-col>
            <ion-col size="4">{{ info.totalAskMeCnt }}건</ion-col>
          </template>
          <template v-if="info.todayAskMeCnt">
            <ion-col size="2">
              <ion-text color="secondary">오늘</ion-text>
            </ion-col>
            <ion-col size="4">{{ info.todayAskMeCnt }}건</ion-col>
          </template>
          <template v-if="info.bestThink != null">
            <ion-col size="12">
              <ion-text color="secondary"
              >사람들이 생각하는 {{ info.nick }} 님의 상은?
              </ion-text>
              <ion-col>{{ info.bestThink }}</ion-col>
            </ion-col>
          </template>
          <template v-if="info.bestDo != null">
            <ion-col size="12">
              <ion-text color="secondary"
              >사람들이 {{ info.nick }} 님과 가장 하고싶은것은?
              </ion-text>
              <ion-col>{{ info.bestDo }}</ion-col>
            </ion-col>
          </template>
        </ion-row>
      </ion-card-content>
    </ion-card>
    <!--<div class="section-header">{{ info.nick }}님의 소개란입니다 :)</div>-->
    <ion-card>
      <ion-card-content>
        <ion-row>
          <template v-if="info.age">
            <ion-col size="2">
              <ion-text color="secondary">나이</ion-text>
            </ion-col>
            <ion-col size="4">{{ info.age }}</ion-col>
          </template>
          <template v-if="info.addrLiveSum">
            <ion-col size="2">
              <ion-text color="secondary">거주</ion-text>
            </ion-col>
            <ion-col size="4">{{ info.addrLiveSum }}</ion-col>
          </template>
        </ion-row>
        <ion-row>
          <template v-if="info.tall">
            <ion-col size="2">
              <ion-text color="secondary">키</ion-text>
            </ion-col>
            <ion-col size="4">{{ info.tall }}cm</ion-col>
          </template>
          <template v-if="info.weight">
            <!--            <ion-col size="2">-->
            <!--              <ion-text color="secondary">체형</ion-text></ion-col-->
            <!--            >-->
            <ion-col size="2">
              <ion-text color="secondary">몸무게</ion-text>
            </ion-col>
            <ion-col size="4">{{ info.weight }}kg</ion-col>
            <!--            <ion-col size="4">{{ info.formNm }}</ion-col>-->
          </template>
        </ion-row>
        <ion-row>
          <template v-if="info.drinkNm">
            <ion-col size="2">
              <ion-text color="secondary">음주</ion-text>
            </ion-col>
            <ion-col size="4">{{ info.drinkNm }}</ion-col>
          </template>
          <template v-if="info.smokeNm">
            <ion-col size="2">
              <ion-text color="secondary">흡연</ion-text>
            </ion-col>
            <ion-col size="4">{{ info.smokeNm }}</ion-col>
          </template>
        </ion-row>
      </ion-card-content>
    </ion-card>
  </div>
</template>
<script>
import CertificationBadgeItem from "@/components/Certification/CertificationBadgeItem.vue";
import { dailyCardInfoMap, getData } from "@/assets/js/common";

export default {
  name: "UserDetailProfile",
  components: {
    CertificationBadgeItem
  },
  props: {
    info: {
      type: Object
    }
  },
  data() {
    return {
      userBadgeInfo: []
    };
  },
  mounted() {
    this.getUserBadgeInfo();
  },
  methods: {
    getUserBadgeInfo() {
      getData({
        url: "/getUserBadgeInfo",
        param: { userKey: dailyCardInfoMap.userKey },
        then: (data) => {
          this.userBadgeInfo = data;
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
ion-card {
  --color: white;
  border-radius: var(--ion-border-radius);
  border: 1px solid var(--ion-border-color);
  background-color: var(--ion-border-color);
  padding: 14px;
  line-height: 1.5;
  font-size: 12px;
  padding: 0;
  margin: 0;

  + ion-card {
    margin-top: 20px;
  }

  ion-row {
    + ion-row {
      margin-top: 4px;
    }

    ion-col {
      font-weight: bold;
      font-size: 12px;

      ion-text {
        font-weight: normal;
      }
    }
  }
}

.section-header {
  text-align: center;
  color: white;
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 7px;
  margin-top: 20px;
  letter-spacing: 4px;
}
</style>
