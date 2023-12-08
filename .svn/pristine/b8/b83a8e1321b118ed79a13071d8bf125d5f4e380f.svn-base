<template>
  <ion-page>
    <ion-content>
      <div class="login-container">
        <div>
          <h1 class="logo">
            <LogoSymbol />
          </h1>
          <IntroTitle />
          <!-- <div class="login-slides">
            <swiper
              ref="mySwiper"
              :modules="modules"
              :initialSlide="3"
              :zoom="true"
              :slides-per-view="3"
              :centered-slides="true"
              :loop="true"
              :space-between="8"
              :autoplay="{
                delay: 0,
                disableOnInteraction: false
              }"
              :speed="2000"
              :breakpoints="{
                '640': {
                  slidesPerView: 5
                },
                '768': {
                  slidesPerView: 7
                }
              }"
            >
              <swiper-slide v-for="(image, index) in slides" :key="index">
                <ion-card>
                  <ion-img :src="image.url" />
                </ion-card>
              </swiper-slide>
            </swiper>
          </div> -->

          <!-- 아이디, 비번 -->
          <ion-list class="form-wrapper login-form">
            <ion-item lines="none" class="input-field">
              <ion-input
                ref="inputId"
                type="email"
                placeholder="아이디"
                v-model="id"
                maxlength="50"
                inputmode="email"
                enterkeyhint="send"
                @keyup.enter="moveInput"
                @ionFocus="emptyBox=true"
                @ionBlur="emptyBox=false"
              />
            </ion-item>
            <!--@input="updateValue($event.target.value)"-->
            <ion-item lines="none" class="input-field">
              <ion-input
                type="password"
                placeholder="비밀번호"
                :value="displayValue"
                v-model="pw"
                @keyup.enter="checkInput"
                aria-required="true"
                lines="none"
                maxlength="20"
                inputmode="search"
                enterkeyhint="send"
                @ionFocus="emptyBox=true"
                @ionBlur="emptyBox=false"
              />
            </ion-item>
            
          </ion-list>
          <div class="mt-4">
              <ion-row class="ion-align-items-center ion-justify-content-start">
                <ion-checkbox labelPlacement="end" v-model="checkValue" mode="ios"></ion-checkbox>
                <ion-label>아이디 저장</ion-label>
              </ion-row>
            </div>
          <!-- 로그인 버튼 -->
          <div class="btn-group">
            <custom-button
              color="primary"
              size="large"
              expand="block"
              shape="round"
              @click="checkInput"
              :disabled="!checkDisabled"
            >
              로그인
            </custom-button>
          </div>
          <ion-row class="ion-align-items-center ion-justify-content-center">
            <ion-text
              color="light"
              @click="register"
              class="text-md text-link"
            >회원가입
            </ion-text>
          </ion-row>
        <!-- 아이디, 비번 찾기-->
        <ion-row class="ion-align-items-center ion-justify-content-center forgot-id-pwd">
          <ion-text
            class="text-sm sub-text01"
            @click="findUserInfo"
          >아이디 | 비밀번호 찾기
          </ion-text>
        </ion-row>
        </div>
      </div>
      <EmptyBox :is-open="emptyBox" />
    </ion-content>
  </ion-page>
</template>

<script>

import {IonCheckbox} from '@ionic/vue';

import { getData } from "@/assets/js/common";
// import { Swiper, SwiperSlide } from "swiper/vue";

import { Autoplay } from "swiper/modules";
import LogoSymbol from "@/components/LogoSymbol.vue";
import IntroTitle from "@/components/IntroTitle.vue";
import EmptyBox from "@/components/EmptyBox.vue";

import { PushNotifications } from "@capacitor/push-notifications";
import { Capacitor } from "@capacitor/core";
import { Geolocation } from "@capacitor/geolocation";

import { AdMob } from '@capacitor-community/admob';

export default {
  name: "Login",
  inject: ["alertController"],
  components: {
    EmptyBox,
    LogoSymbol,
    IntroTitle,
    IonCheckbox,
    // Swiper,
    // SwiperSlide
  },
  data() {
    return {
      emptySpace: false,
      id: "",
      pw: "",
      isLogin: "",
      showPassword: false,
      actualValue: "",
      checkValue: false,

      modules: [Autoplay],
      checkDisabled: true,
      slides: [
        { url: require("@/assets/img/login8.jpg") },
        { url: require("@/assets/img/login5.jpg") },
        { url: require("@/assets/img/login10.jpg") },
        { url: require("@/assets/img/login7.jpg") },
        { url: require("@/assets/img/login4.jpg") },
        /*{ url: require("@/assets/img/login2.jpg") },*/
        { url: require("@/assets/img/login6.jpg") },
        /*{ url: require("@/assets/img/login3.jpg") },*/
        // { url: require("@/assets/img/login11.jpg") },
        /*{ url: require("@/assets/img/login1.jpg") },*/
        { url: require("@/assets/img/login9.jpg") },
        { url: require("@/assets/img/plushuman1.jpg") },
        { url: require("@/assets/img/plushuman2.jpg") },
        { url: require("@/assets/img/plushuman3.jpg") },
        { url: require("@/assets/img/plushuman4.jpg") },
        { url: require("@/assets/img/plushuman5.jpg") },
        { url: require("@/assets/img/plushuman6.jpg") }
      ],
      emptyBox: false
    };
  },
  ionViewWillEnter() {
    //세션이 있는지 체크하고 이미 로그인이 되어있다면 home으로 이동시킨다.
    let userToken = localStorage.getItem("SS_USER_TOKEN");
    if (userToken != "" && userToken != null && userToken != undefined) {
      this.$router.push("/home");
    }

    this.checkValue = localStorage.getItem("NAVY_ID_REMEMBER_CHECK") == 'Y' ? true : false;
    if(this.checkValue){
      this.id = localStorage.getItem("NAVY_REMEMBER_ID");
    }
  },
  mounted() {
    //푸쉬알림 권한
    this.registerNotifications();
    //GPS권한
    this.getGps();
    //아이폰 광고 트래킹 허용 권한
    this.initPopAd();
  },
  computed: {
    /** 비밀번호 마지막글자 보이기 **/
    displayValue() {
      if (this.pw.length <= 1) return this.pw;
      let hiddenPart = "•".repeat(this.pw.length - 1);
      return hiddenPart + this.pw.slice(-1);
    }
  },
  methods: {
    async initPopAd(){
      await AdMob.initialize();

      const [trackingInfo, consentInfo] = await Promise.all([
        AdMob.trackingAuthorizationStatus(),
        //AdMob.requestConsentInfo(),
      ]);

      if (trackingInfo.status === 'notDetermined') {
        /**
         * If you want to explain TrackingAuthorization before showing the iOS dialog,
         * you can show the modal here.
         * ex)
         * const modal = await this.modalCtrl.create({
         *   component: RequestTrackingPage,
         * });
         * await modal.present();
         * await modal.onDidDismiss();  // Wait for close modal
         **/

        //await AdMob.requestTrackingAuthorization();
      }

      //const authorizationStatus = await AdMob.trackingAuthorizationStatus();
      /*if (
        authorizationStatus.status === 'authorized' &&
        consentInfo.isConsentFormAvailable &&
        consentInfo.status === AdmobConsentStatus.REQUIRED
      ) {
        await AdMob.showConsentForm();
      }*/

      //this.showPopAd();
    },
    async registerNotifications() {
      let permStatus = await PushNotifications.checkPermissions();

      if (permStatus.receive === 'prompt') {
        permStatus = await PushNotifications.requestPermissions();
      }

      //alert(JSON.stringify(permStatus));
      if (permStatus.receive !== 'granted') {
        //alert('권한이 거부됨.');
        //alert('푸쉬알림을 허용해요주세요. 거부할 경우 정상적인 서비스 이용이 어렵습니다.');
        //throw new Error('User denied permissions!');
      }

      await PushNotifications.register();
    },
    async getGps() {
      if (Capacitor.getPlatform() !== "web") {
        await Geolocation.getCurrentPosition().then((position) => {
        });
      } else {
        console.log("[개발환경] web 에서 GPS는 활성화 되지 않습니다.");
      }
    },
    onClickButton: function(e) { // 클릭 이벤트 핸들러라 가정한다.
      textarea.focus(); // 원하는 textarea의 포커스 이벤트를 호출하면 키패드가 열린다.
    },
    moveInput() {
      const password = document.querySelector(
        ".form-wrapper .input-field:nth-child(2) input"
      );
      password.focus();
    },

    disableSlideMove(e) {
      e.stopPropagation();
      e.preventDefault();
    },

    /** 비밀번호 마지막글자 보이기 **/
    updateValue(e) {
      let newValue = e.replace(/•/g, "");
      if (newValue.length > 1) {
        this.pw = this.pw.slice(0, -1) + newValue;
      } else {
        this.pw = newValue;
      }
    },
    /** 비밀빈호 눈알 **/
    toggleShowPassword() {
      this.showPassword = !this.showPassword;
    },

    checkInput() {
      if (this.id === null || this.id === "") {
        this.warningAlert("아이디를 입력해주세요.");
      } else if (this.pw === null || this.pw === "") {
        this.warningAlert("비밀번호를 입력해주세요.");
      } else {
        this.goLogin((this.checkDisabled = false));
      }
    },

    goLogin() {
      getData({
        url: "/setLogin",
        param: {
          email: this.id,
          pw: this.pw
        },
        then: (data) => {
          if (data.successYn === "N") {
            this.warningAlert(data.message);
          } else {
            //로그인 성공
            this.getUserInfo(data);
          }

          setTimeout(() => {
            this.checkDisabled = true;
          }, 500);
        }
      });
    },
    findUserInfo() {
      this.$router.push("/findUserInfo");
    },
    getUserInfo(item) {
      // 로그인 성공 > 저장 후 페이지 리로딩
      localStorage.setItem("SS_USER_TOKEN", item.token);
      localStorage.setItem("SS_USER_KEY", item.userKey);
      localStorage.setItem("NAVY_ID_REMEMBER_CHECK", this.checkValue == true ? 'Y' : 'N');
      if(this.checkValue){
        localStorage.setItem("NAVY_REMEMBER_ID", this.id);
      }

      //this.$router.push('/home');
      location.replace("/home");
    },

    /* 로그인 실패 안내 경고 alert창 */
    async warningAlert(message) {
      const alert = await this.alertController.create({
        header: "",
        subHeader: "Warning",
        message: message,
        buttons: ["OK"]
      });
      return alert.present();
    },

    validateEmail(email) {
      return email.match(
        /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
      );
    },

    register() {
      // joinMap({ state: "new" });
      this.$router.push({ name: "Register" });
    }
  }
};
</script>

<style scoped lang="scss">
.login-container {
  display: grid;
  align-items: center;
  width: 100%;
  min-height: 100vh;

  > div {
    display: block;
    padding: 30px 16px;
    overflow: hidden;
  }
}

.logo {
  width: 120px;
  margin: 0 auto;

  svg {
    width: 100%;
    height: 100%;
  }
}

.login-form {
  padding: 0;
  margin-bottom: 9px;
}

.login-slides {
  margin: 37px 0;
  overflow: hidden;

  .swiper {
    margin: 0 -16px;

    .swiper-slide {
      ion-card {
        position: relative;
        overflow: hidden;
        width: 100%;
        max-width: 136px;
        border-radius: 10px;
        margin: 0;
        transform: scale(0.95);

        ion-img {
          width: 136px;
          height: 180px;
          object-fit: cover;
          opacity: 0.5;
          border-radius: 10px;
        }
      }
    }

    .swiper-slide-active {
      ion-card {
        transform: scale(1);

        ion-img {
          opacity: 1;
        }
      }
    }
  }
}

.btn-group {
  margin-top: 30px;
  margin-bottom: 20px;
}

.forgot-id-pwd {
  padding-top: 35px;
  margin-top:35px;
  border-top: 1px solid var(--ion-border-color);
}
</style>
