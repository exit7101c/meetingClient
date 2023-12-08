<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <BackButton @event="presentAlertConfirm" custom />
        </ion-buttons>
        <ion-title>기본설정</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <div class="layout-container">
        <!-- title -->
        <JoinTitle>
          <template v-slot:title>
            자기소개를<br />
            해주세요
          </template>
          <template v-slot:desc>나에대해 보다 잘 알려줄 수 있어요!</template>
        </JoinTitle>
        <ion-list class="form-wrapper">
          <ion-item
            class="input-field"
            counter="true"
            :counterFormatter="customFormatter"
          >
            <ion-input
              type="text"
              :clear-input="true"
              maxlength="50"
              placeholder="한줄소개는 50자까지 가능해요!"
              class="custom-input"
              v-model="shortWord"
            />
          </ion-item>
        </ion-list>
      </div>
    </ion-content>
    <ion-footer class="join-footer">
      <div class="layout-container">
        <div class="btn-group">
          <ion-button
            color="primary"
            size="large"
            expand="block"
            shape="round"
            :disabled="!shortWord.length"
            @click="checkBth"
          >
            <ion-ripple-effect></ion-ripple-effect>
            저장
          </ion-button>
        </div>
      </div>
    </ion-footer>
  </ion-page>
</template>

<script>
import {
  chevronBack,
  addOutline,
  calendarClearOutline,
  locationOutline,
  starOutline,
  ellipsisVertical
} from "ionicons/icons";
import { getData, profileMapFn } from "@/assets/js/common";
import JoinTitle from "@/components/JoinTitle.vue";

export default {
  name: "ProfileShortWord",
  inject: ["alertController"],
  components: {
    JoinTitle
  },
  data() {
    return {
      chevronBack,
      addOutline,
      calendarClearOutline,
      locationOutline,
      starOutline,
      ellipsisVertical,

      title: "",
      content: "",
      nick: "",

      shortWord: "",
      profile: ""
    };
  },
  ionViewWillEnter() {
    // 진입할 때 호출
    this.getSelectList();
  },

  ionViewDidLeave() {
    // 떠날 때 호출
  },
  mounted() {
  },
  methods: {
    getResult() {
      let resultObj = {};
      resultObj.shortWord = this.shortWord;
      resultObj.profile = this.profile;

      return resultObj;
    },

    /** 수정 버튼을 눌러서 페이지 진입했을때 .**/
    getSelectList() {
      getData({
        url: "/getSettingUserInfo",
        param: {},
        then: (data) => {
          this.shortWord = data.shortWord;
          this.profile = data.profile;
        }
      });
    },

    /** 완료 or 수정 버튼 **/
    async confirmBtn() {
      const alert = await this.alertController.create({
        //cssClass: 'my-custom-class',
        header: "",
        message: "저장하시겠습니까?",
        buttons: [
          {
            text: "취소",
            role: "cancel",
            cssClass: "secondary",
            handler: () => {
            }
          },
          {
            text: "저장",
            handler: () => {
              let url = "/getUserDetailUpdate";
              getData({
                url: url,
                param: this.getResult(),
                then: (data) => {
                  if (data.successYn === "Y") {
                    profileMapFn({ pageType: "profileEdit" });
                    this.$router.push("/profile");
                    this.warningAlert("수정완료");
                  } else {
                    this.warningAlert("수정실패");
                  }
                }
              });
            }
          }
        ]
      });
      return alert.present();
    },

    /** 완료 or 수정 버튼 **/
    checkBth() {
      if (this.shortWord === "") {
        this.warningAlert("내용이 입력되지 않았습니다");
      } else {
        this.confirmBtn();
      }
    },

    async warningAlert(message) {
      const alert = await this.alertController.create({
        header: "",
        subHeader: "",
        message: message,
        buttons: ["OK"]
      });
      return alert.present();
    },

    async presentAlertConfirm() {
      const alert = await this.alertController.create({
        //cssClass: 'my-custom-class',
        header: "",
        message: "이 화면에서 나가면 입력한 내용은 저장되지 않습니다.",
        buttons: [
          {
            text: "취소",
            role: "cancel",
            cssClass: "secondary",
            handler: () => {
            }
          },
          {
            text: "나가기",
            handler: () => {
              this.$router.go(-1);
            }
          }
        ]
      });
      return alert.present();
    },

    /** 글자수 체크 **/
    customFormatter(inputLength, maxLength) {
      if (inputLength > maxLength) {
        return "더이상 입력할수 없습니다.";
      } else if (inputLength < 1) {
        return `최소 ${1 - inputLength}자 / 최대 ${maxLength}자`;
      } else {
        return `최대 ${maxLength - inputLength}자`;
      }
    }
  }
};
</script>

<style scoped></style>
