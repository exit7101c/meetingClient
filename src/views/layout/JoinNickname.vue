<template>
  <ion-page>
    <ion-header>
      <ion-toolbar class="join-toolbar">
        <ion-buttons slot="start">
          <BackButton />
        </ion-buttons>
        <ion-title>닉네임설정</ion-title>
      </ion-toolbar>
      <ProgressBar :currIdx="joinNick.length > 0 ? 4 : 3"></ProgressBar>
    </ion-header>
    <ion-content>
      <div class="layout-container">
        <JoinTitle>
          <template v-slot:title>
            회원님의 <br />
            닉네임을 알려주세요!
          </template>
          <template v-slot:desc
          >앱 내에서 회원님의 실명은 노출되지 않아요
          </template
          >
        </JoinTitle>
        <ion-list lines="none">
          <ion-item
            class="input-field"
            ref="nick"
            counter="true"
            :counterFormatter="COUNTE_FORMAT"
          >
            <ion-label position="stacked" class="input-label join-label"
            >닉네임설정
            </ion-label
            >
            <ion-input
              type="text"
              maxlength="8"
              placeholder="나를 잘 표현할 수 있는 닉네임을 입력해 보세요"
              v-model="joinNick"
              @focusout="validateCheckNickname"
              @ionChange="COM_VALIDATION(joinNick, 'nick', this)"
            />
            <ion-note slot="error">닉네임이 올바르지 않아요</ion-note>
            <ion-text
              class="validation-message"
              v-if="validate"
              :class="{ impossible: nickNameValidationMessage === '중복된 닉네임 입니다.' }"
            >
              {{ nickNameValidationMessage }}
            </ion-text>
          </ion-item>
          <custom-button
            color="primary"
          >
            중복확인
          </custom-button>
        </ion-list>
      </div>
    </ion-content>
    <ion-footer class="join-footer">
      <div class="layout-container">
        <div class="btn-group">
          <custom-button
            fill="outline"
            color="primary"
            size="large"
            expand="block"
            shape="round"
            :disabled="!checkDisabled"
            @click="validateAndNavigate"
          >
            다음으로
          </custom-button>
        </div>
      </div>
    </ion-footer>
  </ion-page>
</template>

<script>
import {
  getData,
  COM_VALIDATION,
  COUNTE_FORMAT
} from "@/assets/js/common";
import JoinTitle from "@/components/JoinTitle.vue";
import ProgressBar from "@/components/ProgressBar.vue";

export default {
  name: "JoinNickname",
  inject: ["alertController"],
  components: {
    JoinTitle,
    ProgressBar
  },
  data() {
    return {
      COUNTE_FORMAT,
      COM_VALIDATION,
      iconList: "",
      selectedAvatar: "A",
      isNicknameValid: true,
      joinNick: "",
      nickNameValidationMessage: "",
      checkNick: false

    };
  },
  ionViewWillEnter() {
    // 진입할 때 호출
    // if (tempMap.state !== "ing") {
      this.joinNick = "";
    // }

  },

  ionViewDidLeave() {
    // 떠날 때 호출
  },
  mounted() {
  },
  computed: {
    validate() {
      return this.COM_VALIDATION([{ value: this.joinNick, type: "nick" }]);
    },
    checkDisabled() {
      return (
        this.checkNick === true &&
        this.validate
      );
    }
  },
  methods: {

    goRouter() {
      // tempMap.item.nick = this.joinNick; // 닉네임

      this.$store.state.joinMap['nick'] = this.joinNick;

      this.$router.push("/joinInfo");
    },

    /** 중복 체크 **/
    validateCheckNickname() {
      getData({
        url: "/join/getCheckNick",
        param: { nick: this.joinNick },
        then: (data) => {
          if (data.successYn === "N") {
            this.nickNameValidationMessage = "중복된 닉네임 입니다.";
            this.checkNick = false;
          } else {
            this.nickNameValidationMessage = "사용가능한 닉네임 입니다.";
            this.checkNick = true;
          }
        }
      });
    },

    /** next btn **/
    validateAndNavigate() {
      if (this.joinNick === "") {
        this.warningAlert("닉네임을 입력하지 않았습니다.");
      } else {
        this.goRouter();
      }
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

    /** 글자수 체크 **/
    customFormatter(inputLength, maxLength) {
      if (inputLength > maxLength) {
        return "더이상 입력할수 없습니다.";
      } else if (inputLength < 1) {
        return `최소 ${1 - inputLength}자 / 최대 8자`;
      } else {
        return `최소 글자수 완료 / 최대 ${maxLength - inputLength}자`;
      }
    },

    /** 특수문자 및 띄어쓰기, 자음+모음 체크 정규식 **/
    validateNickname(e) {
      // 정규식을 사용하여 특수문자 및 자음/모음만 있는지 확인합니다.
      const regex = /[{}[\]/?.,;:|)*~`!^\\-_+<>@#$%&()='"]/g;
      const regex2 = /\s/g;
      // const regex3 = /([^가-힣a-z\x20])/i;
      const regex3 = /[^가-힣a-zA-Z0-9_\s]/g;

      this.isNicknameValid =
        !regex.test(e.target.value) &&
        !regex2.test(e.target.value) &&
        !regex3.test(e.target.value);
    }
  }
};
</script>

<style scoped></style>
