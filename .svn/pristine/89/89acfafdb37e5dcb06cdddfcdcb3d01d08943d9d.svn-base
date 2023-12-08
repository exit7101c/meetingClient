<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <BackButton />
        </ion-buttons>
        <ion-title>뱃지 인증신청</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <div style="padding-top: 20px;">
        <div class="row-box">
          <CertificationInfo
            :icon="item.icon"
            title="고액자산"
            description="개인자산 5억원 이상"
          />
          <div class="mt-2">
            <CardBox color="medium">
              <p>
                <ion-text color="secondary"
                >금융, 부동산 등 개인자산 5억원 이상
                </ion-text
                >
              </p>
            </CardBox>
          </div>
        </div>
        <div class="row-box">
          <h4 class="text-xl">
            <ion-text color="light">인증방법</ion-text>
          </h4>
          <div class="mt-1">
            <h5 class="text-lg">
              <ion-row
                class="ion-align-items-center ion-justify-content-start gap-md flex-nowrap"
              >
                <ion-badge color="primary">택 1</ion-badge>
                <ion-text color="secondary">부동산의 경우</ion-text>
              </ion-row>
            </h5>
            <CardBox color="medium">
              <p>
                <ion-row
                  class="ion-align-items-start ion-justify-content-start gap-md flex-nowrap"
                >
                  <ion-text color="light">필수1</ion-text>
                  <ion-text color="secondary"
                  >소유권을 증멸할 수 있는 부동산 등기서류
                  </ion-text
                  >
                </ion-row>
              </p>
              <p>
                <ion-row
                  class="ion-align-items-start ion-justify-content-start gap-md flex-nowrap"
                >
                  <ion-text color="light">필수2</ion-text>
                  <ion-text color="secondary"
                  >네이버부동산 실거래가 캡쳐본(네이버부동산으로 가액 파악이
                    어려운 토지나 건물의 경우 공식 감정평가 자료 필요)
                  </ion-text
                  >
                </ion-row>
              </p>
            </CardBox>
          </div>
          <div class="row-box">
            <h5 class="text-lg">
              <ion-row
                class="ion-align-items-center ion-justify-content-start gap-md flex-nowrap"
              >
                <ion-badge color="primary">택 2</ion-badge>
                <ion-text color="secondary">현금의 경우</ion-text>
              </ion-row>
            </h5>
            <CardBox color="medium">
              <p>
                <ion-text color="secondary">
                  시중 은행에서 발행한 잔고/잔액 증명서<br />
                  (본인 성함이 표시되고 1개월 이내 발행된 서류)
                </ion-text>
              </p>
            </CardBox>
          </div>
        </div>
        <div class="row-box">
          <h4 class="text-xl">
            <ion-text color="light">인증예시</ion-text>
          </h4>
          <div class="mt-1">
            <table class="certification-table">
              <thead>
              <tr>
                <th colspan="2">부동산 등기서류</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td colspan="2">
                  <ion-img
                    :src="
                      require('@/assets/img/certification/certification_01.png')
                    "
                  />
                </td>
              </tr>
              <tr>
                <th>필수 노출</th>
                <td>성함</td>
              </tr>
              <tr>
                <th>필수 제거</th>
                <td>주민번호 뒷자리</td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div style="padding-top: 20px;">
        <div class="row-box">
          <CertificationInfo
            :icon="item.icon"
            title="사업가"
            description="연 소득 1억원 이상"
          />
          <div class="mt-2">
            <CardBox color="medium">
              <p>
                <ion-text color="secondary">연 소득 1억원 이상</ion-text>
              </p>
            </CardBox>
          </div>
        </div>
        <div class="row-box">
          <h4 class="text-xl">
            <ion-text color="light">인증방법</ion-text>
          </h4>
          <div class="mt-1">
            <h5 class="text-lg">
              <ion-row
                class="ion-align-items-center ion-justify-content-start gap-md flex-nowrap"
              >
                <ion-badge color="primary">택 1</ion-badge>
                <ion-text color="secondary">근로소득자의 경우</ion-text>
              </ion-row>
            </h5>
            <CardBox color="medium">
              <p>
                <ion-row
                  class="ion-align-items-start ion-justify-content-start gap-md flex-nowrap"
                >
                  <ion-text color="light">필수1</ion-text>
                  <ion-text color="secondary">원천징수영수증</ion-text>
                </ion-row>
              </p>
              <p>
                <ion-row
                  class="ion-align-items-start ion-justify-content-start gap-md flex-nowrap"
                >
                  <ion-text color="light">필수2</ion-text>
                  <ion-text color="secondary">연봉계약서</ion-text>
                </ion-row>
              </p>
            </CardBox>
          </div>
          <div class="row-box">
            <h5 class="text-lg">
              <ion-row
                class="ion-align-items-center ion-justify-content-start gap-md flex-nowrap"
              >
                <ion-badge color="primary">택 2</ion-badge>
                <ion-text color="secondary">자영업자의 경우</ion-text>
              </ion-row>
            </h5>
            <CardBox color="medium">
              <p>
                <ion-text color="secondary"> 소득금액증명원</ion-text>
              </p>
            </CardBox>
          </div>
        </div>
        <div class="row-box">
          <h4 class="text-xl">
            <ion-text color="light">인증예시</ion-text>
          </h4>
          <div class="mt-1">
            <div class="row-box">
              <table class="certification-table">
                <thead>
                <tr>
                  <th colspan="2">근로소득 원천징수영수증</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td colspan="2">
                    <ion-img
                      :src="
                        require('@/assets/img/certification/certification_02.png')
                      "
                    />
                  </td>
                </tr>
                <tr>
                  <th>필수 노출</th>
                  <td>성함, 생년월일, 근무기간, 연소득</td>
                </tr>
                <tr>
                  <th>필수 제거</th>
                  <td>주민번호 뒷자리</td>
                </tr>
                </tbody>
              </table>
            </div>
            <div class="row-box">
              <table class="certification-table">
                <thead>
                <tr>
                  <th colspan="2">사업자등록증</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td colspan="2">
                    <ion-img
                      :src="
                        require('@/assets/img/certification/certification_02.png')
                      "
                    />
                  </td>
                </tr>
                <tr>
                  <th>필수 노출</th>
                  <td>함, 생년월일, 근무기간, 연소득</td>
                </tr>
                <tr>
                  <th>필수 제거</th>
                  <td>주민번호 뒷자리</td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div class="row-box">
        <h4 class="text-xl">
          <ion-text color="light">인증자료1 첨부</ion-text>
        </h4>
        <BadgeAddPhotoButton :regPhoto="cdnNm1" @click="addPhoto('add1')" />
      </div>
      <div class="row-box">
        <h4 class="text-xl">
          <ion-text color="light">인증자료2 첨부</ion-text>
        </h4>
        <BadgeAddPhotoButton :regPhoto="cdnNm2" @click="addPhoto('add2')" />
      </div>
      <ion-footer>
        <custom-button color="primary" expand="block" size="large" v-if="isCertificate" @click="validateAndNavigate">
          저장
        </custom-button>
        <custom-button color="primary" expand="block" size="large" v-if="!isCertificate" @click="validateUser">
          본인인증하기
        </custom-button>
      </ion-footer>
    </ion-content>
  </ion-page>
</template>
<script>
import { badgeCertiMap, getData, getJoinData, setFile } from "@/assets/js/common";
import BadgeAddPhotoButton from "@/components/Badge/BadgeAddPhotoButton.vue";
import CertificationInfo from "@/components/Certification/CertificationInfo.vue";
import { Camera, CameraResultType, CameraSource } from "@capacitor/camera";
import { Capacitor } from "@capacitor/core";
import { Browser } from "@capacitor/browser";

export default {
  name: "CertificationPersonalAssetRegister",
  inject: ["alertController", "loadingController"],
  components: {
    BadgeAddPhotoButton, CertificationInfo
  },
  data() {
    return {
      item: badgeCertiMap.item,
      edit: badgeCertiMap.edit,
      attachfiles: [],
      add1imgFileId: "",
      cdnNm1: null,
      add2imgFileId: "",
      cdnNm2: null,
      isCertificate: false,
      token_version_id: "",
      userAuthData: {},
      uploadType: ""
    };
  },
  ionViewWillEnter() {
    this.add1imgFileId = "";
    this.cdnNm1 = null;
    this.isCertificate = false;
  },
  methods: {
    calculAge(birth) {
      let date = new Date(birth);
      // 생년월일을 '년', '월', '일'로 분리
      let birthYear = date.getFullYear();
      let birthMonth = date.getMonth() + 1; //javascript 월 계산시 0부터 시작하므로 +1
      let birthDay = date.getDate();

      // 현재 날짜를 가져옵니다.
      let currentDate = new Date();
      let currentYear = currentDate.getFullYear();
      let currentMonth = currentDate.getMonth() + 1; //javascript 월 계산시 0부터 시작하므로 +1
      let currentDay = currentDate.getDate();

      // 만 나이를 계산
      let age = currentYear - birthYear;

      // 현재 월과 생일의 월을 비교 후 현재 월과 생일의 월이 같은 경우, 현재 일과 생일의 일을 비교
      if (currentMonth < birthMonth) {
        age--;
      } else if (currentMonth == birthMonth && currentDay < birthDay) {
        age--;
      }
      return age;
    },
    /** 본인인증 **/
    validateUser() {
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
        getData({
          url: "/join/getUserAuthData",
          param: {
            token_version_id: self.token_version_id
          },
          then: (userAuth) => {
            //본인인증 unique데이터 받아왔을 때(ci: 주민등록번호 암호화)
            if (userAuth.ci) {
              //유저 성인 및 성별 체크 변수 초기화
              let message = "";
              let pass = false;

              // 유저 성인 체크(만 나이 계산)
              let age = this.calculAge(userAuth.birthDate);
              if (age < 19) {
                message = "만 19세 이상만 이용하실 수 있습니다.";
              } else {
                // 유저 성별 체크
                // gender  1:  남자, 0: 여자
                if (userAuth.gender == "0") {
                  message = "남자 이용자만 이용하실 수 있습니다.";
                } else {
                  //성인남자만 pass
                  pass = true;
                  userAuth.age = age;
                }
              }

              if (pass) {
                self.userAuthData = userAuth;
                self.isCertificate = true;
                self.warningAlert("본인인증이 완료되었습니다. 저장하여 인증신청을 완료해주세요!");
              } else {
                self.warningAlert(message);
              }
            } else {
              Browser.removeAllListeners();
            }
          }
        });
      };

      //niceapi 요청보낼 암호화 데이터 가져오기
      getData({
        url: "/join/getNiceAPI",
        param: {},
        then: (data) => {
          const OpenOptions = {
            url: `http://139.150.69.51:8034/join/startCerti.do?token_version_id=${encodeURIComponent(
              data.token_version_id
            )}&enc_data=${encodeURIComponent(
              data.enc_data
            )}&integrity_value=${encodeURIComponent(
              data.integrity_value
            )}&userAgent=${ua}`
            // url: `http://127.0.0.1:8080/join/startCerti.do?startCerti.do?token_version_id=${token_version_id}&enc_data=${enc_data}&integrity_value=${integrity_value}`,
            // windowName: '_blank',  //default : _blank
            // presentationStyle: "fullscreen" //'popover' //default : fullscreen
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
          if (ua == "ios" || ua == "web") {
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
    addPhoto(state) {
      switch (state) {
        case "add1":
          this.uploadType = "add1";
          break;
        case "add2":
          this.uploadType = "add2";
          break;
      }

      Camera.getPhoto({
        allowEditing: false,
        source: CameraSource.Photos,
        resultType: CameraResultType.Uri
      }).then(async (photo) => {
        let blob = await fetch(photo.webPath).then(r => r.blob());
        const file = new File([blob], "fileName." + photo.format, {
          lastModified: new Date(),
          type: blob.type
        });

        this.attachfiles.push(file);
        this.$nextTick(() => {
          this.insertFile(this.uploadType);
        });

      });
    },

    onFileChange: function onFileChange(e) {
      const files = e.target.files || e.dataTransfer.files;
      if (!files.length) {
        return;
      }

      const allowedTypes = [
        "image/jpg",
        "image/jpeg",
        "image/png"
      ];
      const file = files[0];
      if (!allowedTypes.includes(file.type)) {
        this.warningAlert("이미지 파일만 업로드 가능해요"); // 사용자에게 알림 메시지 출력
        return;
      }
      this.attachfiles.push(files[0]);

      this.$nextTick(() => {
        this.insertFile(this.uploadType);
      });
    },
    //사진 저장
    insertFile(e) {
      this.showLoading(0);

      setFile({
        url: "/setImage",
        param: {},
        file: this.attachfiles,
        then: (data) => {
          this.attachfiles = [];
          switch (e) {
            case "add1":
              this.add1imgFileId = data.fileId;
              this.cdnNm1 = data.cdnNm;
              break;
            case "add2":
              this.add2imgFileId = data.fileId;
              this.cdnNm2 = data.cdnNm;
              break;
          }
          this.loading.dismiss();
        }
      });
    },

    validateAndNavigate() {
      if (this.add1imgFileId !== "" || this.add2imgFileId !== "") {
        getData({
          url: "/setBadgeCertification",
          param: {
            ...this.item,
            ...this.userAuthData,
            fileId1: this.add1imgFileId,
            fileId2: this.add2imgFileId,
            edit: this.edit
          },
          then: (data) => {
            if (data.successYn == "N") {
              this.warningAlert(data.message);
            } else {
              this.warningAlert(data.message);
              this.$router.push("/myBadge");
            }
          }
        });
      } else {
        this.warningAlert("인증 사진은 필수입니다.");
      }
    },

    async showLoading(time) {
      this.loading = await this.loadingController.create({
        message: "Loading...",
        duration: time
      });
      await this.loading.present();
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

</style>