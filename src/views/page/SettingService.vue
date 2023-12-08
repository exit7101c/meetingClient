<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <BackButton />
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <div class="row-box">
        <CardBox padding="sm" shadow="light">
          <ion-list lines="none">
            <MyPageNavItem
              title="서비스 이용약관"
              @click="terms('a')"
            />
            <!--              @click="$router.push('/settingTermsAndConditions')"-->
            <!--            />-->
            <MyPageNavItem
              title="개인정보 처리방침"
              @click="terms('b')"
            />
          </ion-list>
        </CardBox>
      </div>
      <div class="row-box">
        <ion-list lines="none" class="ion-padding">
          <SettingAlarmItem
            v-for="(item, index) in alarmList"
            :key="index"
            :item="item"
            @toggle="setSettingUserSet($event, item.type)"
          />
        </ion-list>
      </div>
    </ion-content>
    <TermsModal
      :is-open="termModalOpen"
      :termsTitle="termsTitle"
      :termsType="termsType"
      @ionModalDidDismiss="termModalOpen = false"
    />
  </ion-page>
</template>

<script>
import { defineComponent } from "vue";
import { getData } from "@/assets/js/common.js";
import CardBox from "@/components/CardBox.vue";
import MyPageNavItem from "@/components/MyPage/MyPageNavItem.vue";
import SettingAlarmItem from "@/components/Setting/SettingAlarmItem.vue";
import TermsModal from "@/components/Modal/TermsModal.vue";

export default defineComponent({
  name: "Setting",
  inject: ["alertController"],
  components: {
    TermsModal,
    CardBox,
    MyPageNavItem,
    SettingAlarmItem
  },
  data() {
    return {
      termsTitle: "",
      termsType: "",
      termModalOpen: false,

      alarmList: [
        {
          type: "MARKETING",
          setNm: "홍보 및 마케팅 목적의",
          setDesc: "개인정보 수집 및 이용동의",
          valBoolean: false
        },
        {
          type: "PUSH",
          setNm: "광고성 정보",
          setDesc: "수신동의",
          valBoolean: false
        }
      ]
    };
  },
  ionViewWillEnter() {
    // 진입할 때 호출
    this.getSettingUserSet();
  },
  ionViewDidLeave() {
    // 떠날 때 호출
  },
  methods: {
    terms(type) {
      if (type === "a") {
        this.termsType = "service";
        this.termsTitle = "서비스 이용약관";
      } else if (type === "b") {
        this.termsType = "info";
        this.termsTitle = "개인정보 보호정책";
      } else if (type === "c") {
        this.termsType = "marketing";
        this.termsTitle = "홍보 및 마케팅 목적";
      } else if (type === "d") {
        this.termsType = "push";
        this.termsTitle = "광고성 정보 수신";
      }
      this.termModalOpen = true;
    },
    //알람정보 조회
    getSettingUserSet() {
      getData({
        url: "/getSettingUserTerm",
        param: {},
        then: (data) => {
          this.alarmList[0].valBoolean =
            data.termMarketing === "Y" ? true : false;
          this.alarmList[1].valBoolean = data.termPush === "Y" ? true : false;
        }
      });
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
    },
    //알람정보 수정
    setSettingUserSet(e, codeType) {
      getData({
        url: "/setSettingUserTerm",
        param: { codeType: codeType },
        then: (data) => {
          if (data.successYn === "N") {
            this.warningAlert(data.message);
          } else {
            if (codeType === "MARKETING") {
              this.alarmList[0].valBoolean =
                data.updatedValue === "Y" ? true : false;
            } else if (codeType === "PUSH") {
              this.alarmList[1].valBoolean =
                data.updatedValue === "Y" ? true : false;
            }
          }
        }
      });
    }
  }
});
</script>
<style scoped></style>
