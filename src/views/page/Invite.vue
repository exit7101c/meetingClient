<template>
  <ion-page>
    <ion-header>
      <ion-toolbar class="join-toolbar">
        <ion-buttons slot="start">
          <BackButton />
        </ion-buttons>
        <ion-title>친구초대</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <JoinTitle>
        <template v-slot:title>
          <ion-text class="text-bold v-middle">친구 초대</ion-text>
          <ion-icon
            :icon="friendsIcon"
            size="large"
            class="v-middle"
          ></ion-icon>
        </template>
        <template #desc>
          <p>
            <ion-text class="text-lg text-bold v-middle">
              친구를 초대할 때 마다 1000 포인트 씩!
            </ion-text>
            <ion-icon :icon="giftIcon" size="large" class="v-middle"></ion-icon>
          </p>
          <p>
            <ion-text>
              친구가 내 초대코드를 입력하면<br />
              1000 포인트를 무제한으로 지급합니다 !
              <!--              20하트를 무제한으로 지급합니다!-->
            </ion-text>
          </p>
        </template>
      </JoinTitle>
      <div class="row-box">
        <CardBox padding="none" class="my-point-info">
          <ion-list lines="none">
            <ion-item>
              <ion-icon
                slot="start"
                :icon="pointIcon"
                color="light"
                size="large"
              ></ion-icon>
              <ion-text class="text-md" color="light"
              >내 포인트
                <strong class="text-bold">{{ point }}</strong> P
              </ion-text
              >
              <ion-text
                slot="end"
                color="light"
                class="text-md text-bold text-link"
                @click="$router.push('/usePointDetails')"
              >자세히보기
              </ion-text
              >
            </ion-item>
          </ion-list>
        </CardBox>
      </div>
      <div class="row-box">
        <CardBox>
          <div class="text-center">
            <h6>
              <ion-text class="sub-text01 text-bold">내 초대코드</ion-text>
            </h6>
            <ion-button fill="clear" @click="setClipBoard">
              <ion-label class="text-bold text-xxl">{{ inviteCode }}</ion-label>
              <ion-icon slot="end" :icon="copyOutline" />
            </ion-button>
          </div>
        </CardBox>
      </div>
      <div class="row-box">
        <CardBox>
          <div class="text-center">
            <h6>
              <ion-text class="sub-text01 text-bold">
                초대코드 등록하기
              </ion-text>
            </h6>
            <template v-if="inviteInfo.isInputInvite == 'N'">
              <ion-input
                v-model="inputCode"
                placeholder="X X X X X X"
                class="text-xxl"
              ></ion-input>
            </template>
            <template v-else>
              <p>초대코드를 이미 입력하셨습니다.</p>
            </template>
          </div>
        </CardBox>
      </div>
      <div class="row-box">
        <custom-button
          color="secondary"
          fill="outline"
          expand="block"
          size="large"
          @click="saveTargetInviteCode"
          v-if="inviteInfo.isInputInvite == 'N'"
        >
          <label>등록하기</label>
        </custom-button>
        <!--        <custom-button-->
        <!--          v-else-->
        <!--          color="secondary"-->
        <!--          fill="outline"-->
        <!--          expand="block"-->
        <!--          size="large"-->
        <!--        >-->
        <!--          코드확인하기-->
        <!--        </custom-button>-->
      </div>
      <div class="row-box">
        <ion-text color="secondary" class="text-xs">
          <span>
            - 보상 지급 대상은 최초 가입한 이용자로, 재가입 시에는 보상을 받을 수 없습니다.
          </span>
          <br />
          <span>
            - 가입 완료 후 별도로 초대코드를 입력할 수 없습니다.
          </span>
          <br />
          <span>
            - 스토어 리뷰 및 앱 내에서의 초대코드 강요 목적인 게시물이 적발될 시 <br />
              앱 이용에 제재가 생길 수 있습니다.
          </span>
        </ion-text>
      </div>
      <div style="height: 300px;"></div>
    </ion-content>
  </ion-page>
</template>

<script>
import { copyOutline } from "ionicons/icons";
import { getData } from "@/assets/js/common";
import { Clipboard } from "@capacitor/clipboard";
import JoinTitle from "@/components/JoinTitle.vue";
import CardBox from "@/components/CardBox.vue";

import IconGift from "@/assets/img/icon/icon_gift.svg";
import IconFriends from "@/assets/img/icon/icon_friends.svg";
import IconMyPoint from "@/assets/img/icon/icon_my_point.svg";

export default {
  name: "Invite",
  inject: ["alertController", "toastController"],
  components: {
    JoinTitle,
    CardBox
  },
  data() {
    return {
      pointIcon: IconMyPoint,
      giftIcon: IconGift,
      friendsIcon: IconFriends,
      copyOutline,

      inviteInfo: {},
      inviteCode: "",
      inputCode: "",
      point: 0
    };
  },
  ionViewWillEnter() {
    // 진입할 때 호출
    this.getUserInviteCode();
    this.getUser();
  },
  ionViewDidLeave() {
    // 떠날 때 호출
  },
  methods: {

    getUser() {
      getData({
        url: "/getSettingMainUserInfo",
        param: {},
        target: this,
        then: (data) => {
          this.point = data.invitePoint ? data.invitePoint : 0;
        }
      });
    },
    getUserInviteCode() {
      getData({
        url: "/getUserInviteCode",
        param: {},
        then: (data) => {
          if (data.successYn === "N") {
            this.warningAlert(data.message);
          } else {
            this.inviteInfo = data;
            this.inviteCode = data.inviteCode;
          }
        }
      });
    },
    saveTargetInviteCode() {
      if (this.inputCode.length < 6) {
        this.warningAlert("유효하지 않은 상대방 코드입니다.");
        return;
      } else {
        getData({
          url: "/saveTargetInviteCode",
          param: {
            inviteCode: this.inputCode,
            pointCd: "NAVY01",
            changePoint: 1000
          },
          then: (data) => {
            this.warningAlert(data.message);

            if (data.successYn == "Y") {
              this.inviteInfo = data;
            }
          }
        });
      }
    },

    async setClipBoard() {
      await Clipboard.write({
        string: this.inviteCode
      });
      await this.presentToast("복사되었습니다.");
    },
    /** 경고 alert창 **/
    async warningAlert(title, message) {
      const alert = await this.alertController.create({
        header: title,
        subHeader: "",
        message: message,
        buttons: ["OK"]
      });
      return alert.present();
    },
    /** 토스트팝업 **/
    async presentToast(message) {
      const toast = await this.toastController.create({
        message: message,
        duration: 1000,
        position: "middle" // top, middle, bottom
      });
      await toast.present();
    }
  }
};
</script>

<style scoped lang="scss">
ion-content {
  //&::part(scroll) {
  //  overflow: hidden;
  //}
}
</style>
