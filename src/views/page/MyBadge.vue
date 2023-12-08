<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <BackButton @evnet="this.$router.push('/mypage')" />
        </ion-buttons>
        <ion-title>나의 뱃지</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <div class="row-box">
        <ion-list>
          <ion-card>
            <BadgeCardTitle title="획득한 뱃지" />
            <BadgeCardItem
              v-for="(item, index) in myBadgeList"
              :item="item"
              :key="index"
              :edit="false"
              @click=""
            />
          </ion-card>
        </ion-list>
      </div>
      <div class="row-box">
        <ion-list>
          <ion-card>
            <BadgeCardTitle title="인증 반려된 뱃지" />
            <BadgeCardItem
              v-for="(item, index) in rejectBadgeList"
              :item="item"
              :key="index"
              :edit="true"
              @editCertified="editCertified(item)"
            />
          </ion-card>
        </ion-list>
      </div>
      <div class="row-box">
        <ion-list>
          <ion-card>
            <BadgeCardTitle title="인증 대기중인 뱃지" />
            <BadgeCardItem
              v-for="(item, index) in vertifyWaitList"
              :item="item"
              :key="index"
              :edit="false"
              @click=""
            />
          </ion-card>
        </ion-list>
      </div>
    </ion-content>
    <ion-footer>
      <custom-button color="primary" expand="block" size="large" @click="goRouter">
        추가 신청하러 가기
      </custom-button>
    </ion-footer>
  </ion-page>
</template>
<script>
import { badgeCertiMapFn, getData } from "@/assets/js/common";
import BadgeCardTitle from "@/components/Badge/BadgeCardTitle";
import BadgeCardItem from "@/components/Badge/BadgeCardItem";

export default {
  name: "MyBadge",
  components: {
    BadgeCardTitle,
    BadgeCardItem
  },
  ionViewWillEnter() {
    this.getMyBadgeInfo();
  },
  data() {
    return {
      myBadgeList: [],
      rejectBadgeList: [],
      vertifyWaitList: []
    };
  },
  methods: {
    getMyBadgeInfo() {
      getData({
        url: "/getMyBadgeInfo",
        param: {},
        then: (data) => {
          this.myBadgeList = data.filter(item => item.vertificateYn == "Y" && item.reject == "N");
          this.rejectBadgeList = data.filter(item => item.vertificateYn == "N" && item.reject == "Y");
          this.vertifyWaitList = data.filter(item => item.vertificateYn == "N" && item.reject == "N");
        }
      });
    },
    editCertified(item) {
      badgeCertiMapFn({ item: item, edit: true });
      this.$router.push("/certificationRegister");
    },
    goRouter() {
      this.$router.push("/certification");
    }
  }
};
</script>
<style lang="scss" scoped>
ion-card {
  margin: 5px;
  border-radius: var(--ion-border-radius);
  border: 1px solid var(--ion-border-color);
  box-shadow: none;
  padding: 0px 10px 10px 10px;
}
</style>