<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <BackButton />
        </ion-buttons>
        <ion-title>알림 설정</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <JoinTitle>
        <template v-slot:title>
          새로운 비밀번호를<br />
          입력해주세요
        </template>
      </JoinTitle>
      <ion-list lines="none" class="form-wrapper">
        <ion-item counter="true" class="input-field">
          <ion-label position="stacked" class="input-label"
          >현재 비밀번호
          </ion-label
          >
          <ion-input
            :type="passwordType"
            maxlength="16"
            minlength="8"
            placeholder="현재 사용중인 비밀번호 입력"
            v-model="beforePw"
            @ionFocus="emptyBox=true"
            @ionBlur="emptyBox=false"
          ></ion-input>
        </ion-item>
        <ion-item counter="true" class="input-field">
          <ion-label position="stacked" class="input-label"
          >신규 비밀번호
          </ion-label
          >
          <ion-input
            type="password"
            maxlength="16"
            minlength="8"
            placeholder="8~16자리 이내 영문자, 숫자"
            v-model="afterPw1"
            @ionFocus="emptyBox=true"
            @ionBlur="emptyBox=false"
          ></ion-input>
          <ion-note slot="error">강력한 비밀번호를 만드세요</ion-note>
        </ion-item>
        <ion-item counter="true" class="input-field">
          <ion-label position="stacked" class="input-label"
          >신규 비밀번호 확인
          </ion-label
          >
          <ion-input
            type="password"
            maxlength="16"
            minlength="8"
            placeholder="8~16자리 이내 영문자, 숫자"
            v-model="afterPw2"
            @ionFocus="emptyBox=true"
            @ionBlur="emptyBox=false"
          ></ion-input>
          <ion-note slot="error">입력한 비밀번호와 일치하지 않습니다</ion-note>
        </ion-item>
      </ion-list>
      <EmptyBox :is-open="emptyBox" />
    </ion-content>
    <ion-footer>
      <div class="btn-group">
        <custom-button
          color="secondary"
          expand="block"
          size="large"
          :disabled="isValidateForm"
          @click="changePw"
        >
          비밀번호 변경
        </custom-button>
      </div>
      <div class="row-box">
        <ion-row class="ion-align-items-center ion-justify-content-center"
        >
          <ion-text class="text-sm" color="light"
          >비밀번호가 기억이 안 나시나요?
          </ion-text
          >
          <ion-text
            class="text-sm text-link"
            color="secondary"
            @click="$router.push('/findUserInfo')"
          >아이디/비밀번호 찾기
          </ion-text>
        </ion-row
        >
      </div>
    </ion-footer>
  </ion-page>
</template>

<script>
import { eyeOff, eye } from "ionicons/icons";

import { getData } from "@/assets/js/common";
import JoinTitle from "@/components/JoinTitle.vue";

import EmptyBox from "@/components/EmptyBox";

export default {
  name: "SettingPassword",
  inject: ["alertController"],
  components: {
    JoinTitle,
    EmptyBox
  },
  computed: {
    isValidateForm() {
      return (
        this.beforePw === "" || this.afterPw1 === "" || this.afterPw2 === ""
      );
    }
  },
  data() {
    return {
      passwordType: "password", // input 비밀번호 기본타입
      passwordIcon: eyeOff,

      beforePw: "",
      afterPw1: "",
      afterPw2: "",

      emptyBox: false
    };
  },
  methods: {
    /** 비밀번호 아이콘 **/
    togglePasswordVisibility() {
      this.passwordType =
        this.passwordType === "password" ? "text" : "password";
      this.passwordIcon = this.passwordIcon === eyeOff ? eye : eyeOff;
    },

    /** title bar **/
    updateProgressBar() {
      const inputs = document.querySelectorAll("ion-input");
      let filledInputs = 0;

      inputs.forEach((input) => {
        if (input.value.trim() !== "") {
          filledInputs++;
        }
      });

      const progressBar = document.querySelector(".progress-bar");
      const progressPercentage = (filledInputs / inputs.length) * 15;
      progressBar.style.width = progressPercentage + "%";
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

    changePw() {
      if (this.isValidateForm) {
        return;
      } else {
        // 비밀번호 8자리이상인지 체크
        if (
          this.afterPw1.trim().length >= 8 &&
          this.afterPw2.trim().length >= 8
        ) {
          if (
            this.beforePw.trim().length > 16 &&
            this.afterPw1.trim().length > 16 &&
            this.afterPw2.trim().length > 16
          ) {
            this.warningAlert("비밀번호는 16자리 이하로 입력해야합니다.");
            return;
          } else {
            // 비밀번호 변경
            getData({
              url: "/changePassword",
              param: {
                beforePw: this.beforePw,
                afterPw1: this.afterPw1,
                afterPw2: this.afterPw2
              },
              then: (data) => {
                if (data.successYn === "N") {
                  this.warningAlert(data.message);
                } else {
                  this.warningAlert(data.message);
                  this.$router.go(-1);
                }
              }
            });
          }
        } else {
          this.warningAlert("비밀번호는 8자리 이상으로 입력해야합니다.");
          return;
        }
      }
    }
  }
};
</script>

<style scoped></style>
