<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <BackButton />
        </ion-buttons>
        <ion-title>설정</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <div class="ion-padding">
        <div class="row-box">
          <CardBox padding="sm" shadow="light">
            <ion-list lines="none">
              <ion-item class="text-md">
                <ion-text class="sub-text01">이메일 ID</ion-text>
                <ion-text slot="end" color="light">
                  {{ email }}
                </ion-text>
              </ion-item>
              <!--<ion-item class="text-md">
                <ion-text class="sub-text01">휴대폰 번호</ion-text>
                <ion-text slot="end" color="light">
                  {{ phoneNumber() }}
                </ion-text>
              </ion-item>-->
            </ion-list>
          </CardBox>
        </div>
        <div class="row-box">
          <CardBox padding="sm" shadow="light">
            <ion-list lines="none">
              <MyPageNavItem
                title="알림 설정"
                @click="$router.push('/settingAlarm')"
              />

              <MyPageNavItem
                title="비밀번호 변경"
                @click="$router.push('/settingPassword')"
              />

              <MyPageNavItem
                title="서비스 이용약관"
                @click="$router.push('/settingService')"
              />

              <MyPageNavItem
                title="계정 관리"
                @click="$router.push('/settingAccount')"
              />

              <MyPageNavItem title="로그아웃" @click="messageModal = true" />
            </ion-list>
          </CardBox>
        </div>
      </div>
      <custom-footer absolute />
    </ion-content>
    <ion-footer>
      <MyPageVersionInfo />
    </ion-footer>
    <AlertMessageModal
      :is-open="messageModal"
      :title="'로그아웃'"
      :message="'로그아웃 하시겠습니까?'"
      :subMessage="''"
      :btnName="'로그아웃'"
      :height="210"
      :disabledCheck="false"
      @ionModalDidDismiss="messageModal = false"
      @handleClickBtn="logout"
    />
  </ion-page>
</template>

<script>
import { chevronBack, pencilOutline, chevronForward } from "ionicons/icons";
import { defineComponent } from "vue";
import { getData, SS_USER_SEQ, IMAGE_BASE_URL } from "@/assets/js/common.js";
import { useRouter } from "vue-router";
import Info from "@/views/modals/Info";
import AlertMessageModal from "@/components/Modal/AlertMessageModal.vue";


import CardBox from "@/components/CardBox.vue";
import MyPageNavItem from "@/components/MyPage/MyPageNavItem.vue";
import MyPageVersionInfo from "@/components/MyPage/MyPageVersionInfo.vue";

export default defineComponent({
  name: "Setting",
  inject: ["alertController", "modalController", "toastController"],
  components: {
    CardBox,
    MyPageNavItem,
    MyPageVersionInfo,
    AlertMessageModal
  },

  data() {
    return {
      chevronBack,
      pencilOutline,
      chevronForward,

      messageModal: false,
      router: useRouter(),
      userSeq: "",
      userName: "",
      sex: "",
      email: "",
      phone: "",
      birth: "",
      serverFileNm: "",
      mainYn: "",
      mainPath: "",
      path: IMAGE_BASE_URL + "/img/",
      photos: []
    };
  },
  ionViewWillEnter() {
    // 진입할 때 호출
    //현재 로그인한 회원 정보 불러오기
    this.selectOne();
  },
  ionViewDidLeave() {
    // 떠날 때 호출
  },
  mounted() {
  },
  updated() {
    this.selectOne();
  },
  methods: {
    //현재 로그인한 회원 정보 불러오기
    selectOne() {
      getData({
        url: "/getSettingUserBaseInfo",
        param: {},
        then: (data) => {
          this.email = data.email;
          this.phone = data.phon;
        }
      });
    },
    /** 전화번호 정규식 **/
    phoneNumber() {
      /*let phon;
      if (this.phone != null) {
        phon = this.phone;
      } else {
        phon = "00000000000";
      }
      return phon.replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3");*/
      return "정보를 저장하지 않습니다.";
    },
    //비밀번호 변경시, 현재 비밀번호 확인하기 >> 현재 비밀번호와 같을 경우 변경창으로 넘어감
    async presentAlertPrompt() {
      const alert = await this.alertController.create({
        cssClass: "my-custom-class",
        header: "현재 비밀번호를 입력하세요",
        inputs: [
          {
            name: "password",
            type: "password",
            placeholder: "현재 비밀번호",
            attributes: {
              minlength: 10,
              maxlength: 16
              //inputmode: 'decimal'
            }
          }
        ],
        buttons: [
          {
            text: "Cancel",
            role: "cancel",
            cssClass: "secondary",
            handler: () => {
            }
          },
          {
            text: "Ok",
            handler: (data) => {
              //입력값이 현재 비밀번호와 같을 경우
              if (this.pw === data.password) {
                this.$router.push("/password");
              } else {
                //틀린경우 알림창출력
                this.presentAlert();
              }
            }
          }
        ]
      });
      return alert.present();
    },
    // 현재 비밀번호 비교했을때 틀렸을 경우 뜨는 알림창
    async presentAlert() {
      const alert = await this.alertController.create({
        cssClass: "my-custom-class",
        header: "",
        subHeader: "비밀번호가 틀렸습니다.",
        message: "확인하고 다시 입력해주세요.",
        buttons: ["OK"]
      });
      return alert.present();
    },

    //안내 모달창
    async openModal() {
      const modal = await this.modalController.create({
        component: Info,
        cssClass: "my-custom-class"
        /*componentProps: {
            data: {
              content: 'New Content',
            },
            propsData: {
              title: 'New title',
            },
          },*/
      });
      return modal.present();
    },

    logout() {
      // const okFn = () => {
      getData({
        url: "/logout",
        param: {},
        then: (data) => {
          if (data.success === "Y") {
            localStorage.removeItem("SS_USER_TOKEN");
            localStorage.removeItem("SS_USER_KEY");
            localStorage.removeItem("SS_USER_COMMUNITY_NICK");
            //this.$router.push('/');
            location.replace("/");
            // this.$router.go("/login");
            // this.nomalAlert(data.message);
            this.messageModal = false;
          } else {
            this.nomalAlert("로그아웃에 실패했습니다.<br />문제가 반복된다면 고객센터로 문의바랍니다.");
          }
        }
      });
      // };
      // this.confrimAlert("로그아웃 하시겠습니까?", okFn);
    },

    /* GPS */
    getLocation() {
      const objparam = {};
      if (navigator.geolocation) {
        // GPS를 지원 할 경우
        navigator.geolocation.getCurrentPosition(
          (position) => {
            //alert("위치 정보가 등록되었습니다.");
            objparam.lat = position.coords.latitude;
            objparam.lng = position.coords.longitude;
            objparam.userSeq = SS_USER_SEQ;
            getData({
              url: "/setting/updateUserLocation",
              param: objparam,
              then: (data) => {
                if (data.result > 0) {
                  // 업데이트 성공
                  this.openToast("위치 정보가 등록되었습니다.");
                } else {
                  // 업데이트 실패
                  this.openToast("사용할 수 없는 위치 정보입니다.");
                }
              }
            });
          },
          function(error) {
            console.error(error);
          },
          {
            enableHighAccuracy: false,
            maximumAge: 0,
            timeout: Infinity
          }
        );
      } else {
        this.openToast("해당 기종은 GPS를 지원하지 않습니다");
      }
    },

    async openToast(msg) {
      const toast = await this.toastController.create({
        //  header: '위치 정보가 등록되었습니다.', // 토스트 알림 명
        message: msg,
        position: "top",
        duration: 1800, // 토스트 표시되는 시간
        color: "dark"
      });
      await toast.present();
    },

    async confrimAlert(message, okFn) {
      const alert = await this.alertController.create({
        header: "",
        subHeader: "",
        message: message,
        buttons: [
          {
            text: "CANCEL",
            cssClass: "secondary",
            handler: () => {
            }
          },
          {
            text: "OK",
            handler: () => {
              okFn();
            }
          }
        ]
      });
      return alert.present();
    },

    async nomalAlert(message) {
      const alert = await this.alertController.create({
        header: "",
        subHeader: "",
        message: message,
        buttons: ["OK"]
      });
      return alert.present();
    }
  }
});
</script>
<style scoped></style>
