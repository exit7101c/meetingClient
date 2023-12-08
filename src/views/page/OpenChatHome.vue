<template>
  <div class="ion-padding">
    <div class="row-box">
      <ion-text color="light" class="text-xl text-bold">소개</ion-text>
      <div class="row-box">
        <p>
          <ion-text
            color="light"
            class="text-md"
            v-html="chatDetailMap.replaceContent"
          ></ion-text>
        </p>
      </div>
    </div>
    <!-- 참여 신청자 -->
    <div
      class="row-box"
      v-if="chatDetailMap.regUserKey == chatDetailMap.ssUserKey"
    >
      <ion-text color="light" class="text-xl text-bold">참여신청자</ion-text>
      <OpenChatViewAttendList>
        <template #content>
          <OpenChatViewAttendItem
            v-for="(item, idx) in attendInfoList"
            :key="idx"
            :item="item"
            @event="profileInfo(item.userKey)"
            @ok="agreeYn('Y', item.userKey)"
            @cancel="agreeYn('N', item.userKey)"
          />
        </template>
      </OpenChatViewAttendList>
    </div>
    <!-- 오픈챗 방 활성/ 비활성화 -->
    <div
      class="row-box"
      v-if="chatDetailMap.regUserKey == chatDetailMap.ssUserKey"
    >
      <CustomCardItem :clear="true">
        <ion-label style="margin: 0">
          <OpenChatPrivate
            :privateYn="privateYn"
            @toggle="setCheckPrivateYn($event)"
          />
        </ion-label>
      </CustomCardItem>
    </div>
    <div class="row-box" v-if="meetList.length > 0">
      <ion-text color="light" class="text-xl text-bold">일정</ion-text>
      <div class="row-box">
        <OpenChatMeetItem
          v-for="item in meetList"
          :key="item"
          :item="item"
          :btnDisabled="btnDisabled"
          @btnAdd="btnHandle(item, 'add')"
          @btnCancel="btnHandle(item, 'delete')"
          @btnAttend="onAttendListMoalOpen(item)"
        />
      </div>
    </div>
    <!--   /하단 시간 및 장소   -->
  </div>
</template>

<script>
import { locationOutline } from "ionicons/icons";
import {
  dailyCardInfoMapFn,
  getData,
  openChatMeetMap
} from "@/assets/js/common";
import OpenChatPrivate from "@/components/OpenChat/OpenChatPrivate.vue";
import IconCalCheck from "@/assets/img/icon/icon_cal_check.svg";
import OpenChatViewAttendList from "@/components/OpenChatView/OpenChatViewAttendList.vue";
import OpenChatViewAttendItem from "@/components/OpenChatView/OpenChatViewAttendItem.vue";
import OpenChatMeetItem from "@/components/OpenChatMeet/OpenChatMeetItem.vue";

import IconMyUser from "@/assets/img/icon/icon_my_user.svg";

export default {
  name: "OpenChatHome",
  inject: ["alertController", "loadingController"],
  components: {
    OpenChatPrivate,
    OpenChatViewAttendItem,
    OpenChatViewAttendList,
    OpenChatMeetItem
  },
  props: {
    recentTime: {
      type: String
    },
    openchatRank: {
      type: String
    },
    chatDetailMap: {
      type: Object
    },
    attendInfoList: {
      type: Object
    },
    meetList: {
      type: Object
    },
    privateYn: {
      type: Boolean
    },
    totalUserCount: {
      type: Number
    }
  },
  data() {
    return {
      locationOutline,
      calendarCheck: IconCalCheck,
      userIcon: IconMyUser,
      loading: null,
      cdnThumbNmProfile: "",
      btnDisabled: false
    };
  },

  methods: {
    setCheckPrivateYn() {
      this.$emit("setCheckPrivateYn");
    },
    profileInfo(userKey) {
      dailyCardInfoMapFn({ userKey: userKey, type: "openChatView" });
      this.$router.push("/dailyCardInfo");
    },
    dismiss() {
      this.$refs.modal.$el.dismiss();
    },

    agreeYn(type, userKey) {
      this.showLoading();
      /** 수락/거절 이벤트
       * param으로 참여신청자ID, 오픈챗ID, 타입 **/
      getData({
        url: "/updateOpenChatAttendYn",
        param: {
          openChatKey: openChatMeetMap.openChatKey,
          userKey: userKey,
          type: type,
          fileId: 0
        },
        then: (data) => {
          if (data.successYn == "Y") {
            if (data.confirmYn == "Y") {
              this.warningAlert("수락 처리 되었습니다");
            } else {
              this.warningAlert("거절 처리 되었습니다");
            }
          } else {
            this.warningAlert(data.message);
          }
          this.loading.dismiss();
          this.$nextTick(() => {
            this.$emit("getAttendInfo");
          });
        }
      });
    },

    // 알림창
    async presentAlert(msg) {
      const alert = await this.alertController.create({
        header: "",
        message: msg,
        buttons: [
          {
            text: "OK",
            role: "Okay",
            handler: () => {
            }
          }
        ]
      });
      return alert.present();
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

    async warningConfirm(message, callback) {
      const alert = await this.alertController.create({
        header: "",
        subHeader: "",
        message: message,
        buttons: [
          {
            text: "아니요",
            role: "cancel",
            cssClass: "secondary",
            handler: () => {
            }
          },
          {
            text: "네",
            handler: () => {
              callback();
            }
          }
        ]
      });
      return alert.present();
    },

    async warningAlertNH(message) {
      const alert = await this.alertController.create({
        header: "",
        subHeader: "",
        message: message,
        buttons: [
          {
            text: "취소",
            role: "cancel",
            cssClass: "secondary",
            handler: () => {
            }
          },
          {
            text: "이동",
            handler: () => {
              this.$router.push("/store");
              this.boostModal = false;
            }
          }
        ]
      });
      return alert.present();
    },

    /** 로딩 **/
    async showLoading() {
      this.loading = await this.loadingController.create({
        message: "Loading...",
        duration: 0
      });
      await this.loading.present();
    },
    // TODO : 참석 이벤트
    btnHandle(item, state) {
      setTimeout(() => {
        this.btnDisabled = false;
      }, 500);
      /** 참여자 */
      if (state == "add") {
        this.btnDisabled = true;
        getData({
          url: "/addMeetUser",
          param: {
            meetId: item.meetId,
            openChatId: item.openchatId
          },
          then: (data) => {
            this.warningAlert(data.message);
            // this.getOpenChatMeetList();
            this.$emit("getMeetList");
          }
        });
      } else if (state == "delete") {
        /** 참여 취소 */
        this.btnDisabled = true;
        getData({
          url: "/deleteMeetUser",
          param: {
            meetId: item.meetId,
            openChatId: item.openchatId
          },
          then: (data) => {
            this.warningAlert(data.message);
            // this.getOpenChatMeetList();
            this.$emit("getMeetList");
          }
        });
      }
    },
    onAttendListMoalOpen(item) {
      this.$emit("openAttendUserModal", item);
    }
  }
};
</script>

<style lang="scss" scoped>
ion-grid {
  /* background-color: rgba($color: white, $alpha: 0.5); */
  border: 1px solid var(--ion-border-color);
  border-radius: var(--ion-border-radius);
  padding: 1rem;

  + ion-grid {
    margin-top: 1rem;
  }

  .info {
    color: white;

    .date {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 0.5rem;
      font-size: 10px;
      margin: 0.5rem 0 0;
    }
  }

  .content {
    margin: 0.5rem 0 0;

    .message {
      background-color: #272847;
      border-radius: var(--ion-border-radius);
      font-size: 14px;
      padding: 0.75rem 1rem;
      color: white;
      border-top-left-radius: 0;
    }

    .something {
      display: inline-flex;
      align-items: center;
      justify-content: flex-start;
      gap: 0.5rem;
      margin: 1rem 0 0;

      ion-chip {
        font-weight: bold;
      }

      ion-text {
        font-size: 12px;
      }
    }
  }
}
</style>
