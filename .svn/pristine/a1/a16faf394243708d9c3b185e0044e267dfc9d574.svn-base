<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <BackButton />
        </ion-buttons>
        <ion-title>아이디 / 비밀번호 찾기(변경)</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding" v-if="ci.length > 0">
      <JoinTitle>
        <template v-slot:title>
          {{ userName }}님 !<br />
          새로운 비밀번호를<br />
          입력해주세요
        </template>
      </JoinTitle>
      <ion-list lines="none" class="form-wrapper">
        <ion-item counter="false" class="input-field">
          <ion-label position="stacked" class="input-label"
          >{{ userName }}님의 아이디
          </ion-label
          >
          <ion-input
            type="text"
            readonly
            v-model="userEmail"
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
            v-model="password"
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
            v-model="passwordCheck"
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
    </ion-footer>
  </ion-page>
</template>

<script>
import { eyeOff, eye } from "ionicons/icons";

import { joinMap, getJoinData } from "@/assets/js/common";
import JoinTitle from "@/components/JoinTitle.vue";
import { Capacitor } from "@capacitor/core";
import { Browser } from "@capacitor/browser";

import EmptyBox from "@/components/EmptyBox";

export default {
  name: "FindUserInfo",
  inject: ["alertController"],
  components: {
    JoinTitle,
    EmptyBox
  },
  computed: {
    isValidateForm() {
      //null check
      return (
        Object.keys(this.password).length === 0 || Object.keys(this.passwordCheck).length === 0
      );
    }
  },
  ionViewWillEnter() {
    this.findUserInfo();
  },
  mounted() {
    // this.findUserInfo();
  },
  data() {
    return {
      passwordType: "password", // input 비밀번호 기본타입
      passwordIcon: eyeOff,

      password: "",
      passwordCheck: "",

      userEmail: "",
      userName: "",
      ci: "",

      emptyBox: false
    };
  },
  methods: {
    /** 본인인증 **/
    findUserInfo() {
      const self = this;

      //초기화 처리
      let interval = null;
      self.token_version_id = "";

      let ua = Capacitor.getPlatform().toString().toLowerCase();

      const authData = () => {
        // Interval 실행중이면 종료(ios 만 해당)
        if (interval) {
          clearInterval(interval);
        }
        getJoinData({
          url: "/join/getUserAuthData",
          param: {
            token_version_id: self.token_version_id
          },
          then: (userAuth) => {
            //본인인증 unique데이터 받아왔을 때(ci: 주민등록번호 암호화)
            if (userAuth.ci) {
              self.ci = userAuth.ci;
              self.userName = userAuth.name;

              // 본인인증 후
              getJoinData({
                url: "/join/selectGetCerti",
                param: {
                  ci: userAuth.ci
                },
                then: (exist) => {
                  if (exist.result === "exist") {
                    //가입 이력이 있을 때
                    self.userEmail = exist.email;
                    self.warningAlert("본인인증이 완료되었습니다.<br />이메일을 확인 후 비밀번호를 변경해주세요.");
                  } else if (exist.result === "possible") {
                    //가입 되어있는 정보가 없을 때
                    self.warningAlert("가입자 정보가 없습니다.<br />회원가입을 진행해 주세요.");
                    joinMap({ item: userAuth });
                    self.$router.push("/join");
                  }
                  //이벤트 리스너 제거
                  Browser.removeAllListeners();
                }
              });
            } else {
              Browser.removeAllListeners();
            }
          }
        });
      };

      //niceapi 요청보낼 암호화 데이터 가져오기
      getJoinData({
        url: "/join/getNiceAPI",
        param: {},
        then: (data) => {

          const OpenOptions = {
            url: `http://139.150.69.51:8034/join/startCerti.do?token_version_id=${encodeURIComponent(data.token_version_id)}&enc_data=${encodeURIComponent(data.enc_data)}&integrity_value=${encodeURIComponent(data.integrity_value)}&userAgent=${ua}`
            // windowName: '_blank',
            // presentationStyle: "fullscreen" //'popover'
          };

          self.token_version_id = data.token_version_id;

          //브라우저를 닫을 때 이벤트
          Browser.addListener("browserFinished", () => {
            //처리결과를 서버에서 조회한다.
            authData();
          });
          //browser open
          const openCapacitorSite = Browser.open(OpenOptions);

          //DB조회 Interval 추가(주기적으로 완료되었는지 감시하고 완료되었다면 팝업을 종료한다)
          //브라우저 닫을 때 처리 결과를 서버에서 조회한다. (ios)
          if (ua === "ios" || ua === "web") {
            if (!interval) {
              interval = setInterval(() => {
                //본인인증이 잘 저장되었는지 주기적으로 조회한다.
                getJoinData({
                  url: "/join/getUserAuthData",
                  param: {
                    token_version_id: self.token_version_id
                  },
                  then: (userAuth) => {
                    //값이 존재한다면 팝업창을 강제로 닫는다.
                    if (userAuth.ci) {
                      Browser.close().then(() => {
                        //처리결과를 서버에서 조회한다.
                        authData();
                      });
                    }
                  }
                });
              }, 1000);
            }
          }
        }
      });
    },
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
    checkPassword() {
      let result = false;
      // 비밀번호 8자리이상인지 체크
      if (this.password.trim().length >= 8 && this.passwordCheck.trim().length >= 8) {
        // 비밀번호와 비밀번호 확인 동일한지 체크
        if (this.password.toString() === this.passwordCheck.toString()) {
          result = true;
        } else {
          this.warningAlert("비밀번호와 비밀번호 확인이 일치하지 않습니다.");
        }
      } else {
        this.warningAlert("비밀번호는 8자리이상 16자리 이하로 입력해야합니다.");
      }
      return result;
    },
    changePw() {
      const self = this;

      //password null check
      if (this.isValidateForm) {
        this.warningAlert("입력되지 않은값이 있습니다.<br /> 다시 확인해 주세요.");
        return;
      } else {
        //password validation check
        if (this.checkPassword()) {
          let param = {};
          param.ci = this.ci;
          param.password = this.password;

          getJoinData({
            url: "/join/findUserInfoUpdate",
            param: param,
            then: (data) => {
              if (data.successYn === "N") {
                self.warningAlert(data.message);
              } else {
                self.warningAlert(data.message);
                self.$router.push("/login");
              }
            }
          });
        }
      }
    }
  }
};
</script>

<style scoped></style>
