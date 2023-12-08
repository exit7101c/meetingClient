<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <BackButton @event="this.$router.go(-1)" :custom="true" />
        </ion-buttons>
        <ion-title class="text-center">
          {{ infoMap.partnersName }}
        </ion-title>
        <ion-buttons slot="end">
          <ion-button id="profile-popover-button">
            <ion-icon slot="icon-only" :icon="menuIcon" color="light" />
          </ion-button>
          <ion-popover
            trigger="profile-popover-button"
            :dismiss-on-select="true"
            mode="ios"
          >
            <ion-content>
              <ion-list lines="full"></ion-list>
            </ion-content>
          </ion-popover>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding" ref="content">
      <div>
        <div class="row-box">
          <ion-img
            :src="'https://' + infoMap.cdnNm1"
            v-if="infoMap.cdnNm1"
            alt=""
          />
        </div>
        <div class="row-box">
          <CardBox>
            <ion-text class="sub-text01">파트너 소개</ion-text>
            <div class="mt-2"></div>
            <ion-text>
              {{ infoMap.introduce }}
            </ion-text>
          </CardBox>
        </div>
        <div class="row-box">
          <CardBox>
            <ion-text class="sub-text01"> 파트너 주소</ion-text>
            <div class="mt-2">
              <ion-text>
                {{ infoMap.partnersAddress }} &nbsp;
                {{ infoMap.partnersAddressDetail }}
              </ion-text>
            </div>
          </CardBox>
        </div>
        <div class="row-box">
          <CardBox>
            <ion-row
              class="ion-align-items-center ion-justify-content-between gap-sm flex-nowrap"
            >
              <ion-text class="sub-text01"> 영업 시간</ion-text>
              <ion-text>
                {{ infoMap.openTime }}시 ~ {{ infoMap.closeTime }}시
              </ion-text>
            </ion-row>
          </CardBox>
        </div>
        <div class="row-box">
          <CardBox>
            <ion-row
              class="ion-align-items-center ion-justify-content-between gap-sm flex-nowrap"
            >
              <ion-text class="sub-text01"> 파트너 번호</ion-text>
              <ion-text>
                {{ infoMap.partnersNumber }}
              </ion-text>
            </ion-row>
          </CardBox>
        </div>
        <div class="row-box">
          <div class="btn-group">
            <custom-button shape="round" size="large" expand="block" @click="btnContact">
<!--              1:1 문의하기-->
              자세히보기
            </custom-button>
          </div>
        </div>
        <div class="row-box">
          <div class="row-box">
            <ion-img
              :src="'https://' + infoMap.cdnNm2"
              v-if="infoMap.cdnNm2"
              alt=""
            />
          </div>
          <div class="row-box">
            <ion-img
              :src="'https://' + infoMap.cdnNm3"
              v-if="infoMap.cdnNm3"
              alt=""
            />
          </div>
          <div class="row-box">
            <ion-img
              :src="'https://' + infoMap.cdnNm4"
              v-if="infoMap.cdnNm4"
              alt=""
            />
          </div>
          <div class="row-box">
            <ion-img
              :src="'https://' + infoMap.cdnNm5"
              v-if="infoMap.cdnNm5"
              alt=""
            />
          </div>
          <div class="row-box">
            <ion-img
              :src="'https://' + infoMap.cdnNm6"
              v-if="infoMap.cdnNm6"
              alt=""
            />
          </div>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  getData,
  API_BASE_URL,
  SS_USER_KEY, messageTalkMapFn
} from "@/assets/js/common.js";
import IconMenu from "@/assets/img/icon/icon_menu.svg";

export default {
  name: "partnersProfile",
  inject: ["alertController"],
  data() {
    return {
      SS_USER_KEY,
      menuIcon: IconMenu,
      API_BASE_URL,

      infoMap: {}
    };
  },
  ionViewWillEnter() {
    // 진입할 때 호출
    this.infoMap = {};
    this.partnersInfo();
  },
  methods: {
    partnersInfo() {
      getData({
        url: "/partnersInfo",
        param: {
          partnersCode: this.$store.state.partnerInfoMap.partnersCode,
          userKey: this.$store.state.partnerInfoMap.userKey
        },
        then: (data) => {
          this.infoMap = data.result;
        }
      });
    },

    btnContact() {
      window.open(this.infoMap.linkUrl, '_blank');
      return;
      getData({
        url: "/setCommunityChatRoom",
        param: {
          partnersCode: this.infoMap.partnersCode,
          userNick: localStorage.getItem("SS_USER_COMMUNITY_NICK"),
          userIconCd: localStorage.getItem("SS_USER_COMMUNITY_ICON"),
          messageType: "chat"
        },
        then: (data) => {
          if (data.successYn === "Y") {
            messageTalkMapFn({ chatroomId: data.chatroomId, type: "Community", chatroomType: "anonymous" });
            this.$router.push("/messageTalk");
          } else {
            this.warningAlert(data.message);
          }
        }
      });
    },
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

<style lang="scss" scoped>
ion-row {
  padding: 0;
  margin: 0;

  + ion-row {
    margin-top: 40px;
  }

  ion-img {
    border-radius: 10px;
    overflow: hidden;
  }

  CardBox {
    border-radius: var(--ion-border-radius);
    border: 1px solid var(--ion-border-color);
    padding: 20px;
    margin: 0;
    margin-top: 20px;
    --color: white;
    line-height: 1.5;
    font-size: 15px;
  }
}
</style>
