<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <BackButton />
        </ion-buttons>
        <ion-title>Contest 지원서 제출하기</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true" class="ion-padding">
<!--      <ion-grid>
        <ContestHotTitle>
          <template #title> 도용 방지를<br />위한 검열/인증.</template>
          <template #desc>
            <p>하나의 방법으로 본인임을 증명하세요</p>
          </template>
        </ContestHotTitle>
        <div class="row-box">
          <div class="row-box">
            <ion-text class="text-sm sub-text01">
              01 본인 닉네임을 적은 종이와 몸사진 한 장
            </ion-text>
            <div class="row-box">
              <AddPhotoButton
                @click="addPhoto('add1')"
                :name="add1imgViewFileId"
                :required="true"
              />
              <input
                type="file"
                @change="onFileChange"
                ref="photo"
                class="is-blind"
              />
            </div>
          </div>
          <div class="row-box">
            <ion-text class="text-sm sub-text01">
              02 SNS DM(메세지)를 통한 인증
            </ion-text>
            <div class="row-box">
              <ion-radio-group value="sns" v-model="checkSns">
                <ion-row>
                  <ion-item lines="none" class="text-sm">
                    <ion-label color="light">인스타그램</ion-label>
                    <ion-radio slot="start" value="instagram"></ion-radio>
                  </ion-item>
                  <ion-item lines="none" class="text-sm">
                    <ion-label color="light">페이스북</ion-label>
                    <ion-radio slot="start" value="facebook"></ion-radio>
                  </ion-item>
                  <ion-item lines="none" class="text-sm">
                    <ion-label color="light">트위터</ion-label>
                    <ion-radio slot="start" value="twitter"></ion-radio>
                  </ion-item>
                </ion-row>
              </ion-radio-group>
            </div>
            <div class="row-box">
              <ion-item class="input-field">
                <ion-input
                  v-model="this.checkId"
                  type="text"
                  :clear-input="true"
                  placeholder="아이디 혹은 주소를 알려주세요."
                />
              </ion-item>
            </div>
          </div>
          <div class="row-box">
            <p class="text-sm">
              <ion-text color="light"
              >SNS인증서 추후 본인확용 DM발송 시 답장해주셔야 합니다.<br />검열용
                인증 사진은 도용방지용으로 콘테스트
                <span class="text-link"
                >참가 사진에 포함되지 않습니다.</span
                ></ion-text
              >
            </p>
          </div>
        </div>
      </ion-grid>-->
      <ion-grid>
        <ContestHotTitle>
          <template #title> 컨테스트 참가용<br />사진을 첨부하세요.</template>
          <template #desc>
            <p>*몸매가 드러난 사진 2장은 필수입니다.</p>*얼굴이 노출된 사진등록은 참가자의 자유입니다.
          </template>
        </ContestHotTitle>
        <div class="row-box">
          <ContestHotAddPhotoGuide />
          <ion-row>
            <ion-col size="6">
              <AddPhotoButton
                @click="addPhoto('add2')"
                :name="add2imgViewFileId"
                :required="true"
              />
            </ion-col>
            <ion-col size="6">
              <AddPhotoButton
                @click="addPhoto('add3')"
                :name="add3imgViewFileId"
                :required="true"
              />
            </ion-col>
          </ion-row>
        </div>
      </ion-grid>
      <ion-grid>
        <ContestHotTitle>
          <template #title
          >추가 어필 <br />
            사진이 있나요?
          </template
          >
          <template #desc>
            <p>
              *추가어필 사진 등록은 선택사항입니다.<br />
              *자신있는 표정이나 몸매를 더욱 어필할 수 있는<br />사진이 있다면 등록해보세요!
            </p>
          </template>
        </ContestHotTitle>
        <div class="row-box">
          <ion-row>
            <ion-col size="6">
              <p class="text-center">
                <ion-text color="light"><strong>추가어필1 (선택)</strong></ion-text>
              </p>
            </ion-col>
            <ion-col size="6">
              <p class="text-center">
                <ion-text color="light"><strong>추가어필2 (선택)</strong> </ion-text>
              </p>
            </ion-col>
          </ion-row>
<!--          <ContestHotAddPhotoGuide />-->
          <ion-row>
            <ion-col size="6">
              <AddPhotoButton
                @click="addPhoto('add4')"
                :name="add4imgViewFileId"
              />
            </ion-col>
            <ion-col size="6">
              <AddPhotoButton
                @click="addPhoto('add5')"
                :name="add5imgViewFileId"
              />
            </ion-col>
          </ion-row>
        </div>
      </ion-grid>
      <ion-grid>
        <ContestHotTitle>
          <template #title
          >참가에 임하는<br />
            각오 한 마디
          </template
          >
          <template #desc>
            <p>
              자기소개나 콘테스트 참여에 임하는 각오 한마디를<br />
              자유롭게 적어주세요
            </p>
          </template>
        </ContestHotTitle>
        <div class="row-box">
          <ion-item
            class="input-field"
            counter="true"
            :counterFormatter="COUNTE_FORMAT"
          >
            <ion-input
              v-model="resolution"
              :clear-input="true"
              maxlength="40"
              placeholder="ex) 운동한지 얼마 되진 않았지만 몸메에는 자신 있습니다."
            />
          </ion-item>
        </div>
      </ion-grid>
      <ion-grid>
        <ContestHotTitle>
          <template #title
          >개인정보 수집에 <br />
            동의해주세요
          </template
          >
          <template #desc>
            <p>아래의 내용을 꼼꼼하게 읽고 신청해주세요</p>
          </template>
        </ContestHotTitle>
        <div class="row-box">
          <p class="text-sm">
            <ion-text color="light">
              01 개인정보 수집 및 이용 목적 : 콘텐츠 지원 프로그램의 운영<br />
              02 수집하려는 개인정보 : 본인 사진<br />
              03 당사는 관련 법률에서 달리 정하고 있지 않는 한, 프로그램<br />
              종료 후 즉시 귀하의 개인정보를 파기합니다.
            </ion-text>
          </p>
          <p class="text-md text-bold">
            <ion-text color="light">
              귀하는 프로그램 수집 및 이용에 대해 동의하지 않을<br />
              수 있으나, 동의를 거부할 경우 프로그램 참여가 제한<br />
              될 수 있습니다.
            </ion-text>
          </p>
        </div>
      </ion-grid>
      <input
        type="file"
        @change="onFileChange"
        ref="photo"
        class="is-blind"
      />
    </ion-content>
    <ion-footer>
      <div class="row-box" @click="checkBox()">
        <ion-list lines="full">
          <ion-item lines="none" class="text-md pl-0">
            <ion-checkbox v-model="check" />
            <ion-label>개인정보 수집 및 이용에 동의합니다.</ion-label>
          </ion-item>
        </ion-list>
      </div>
      <div class="row-box">
        <custom-button
          color="primary"
          expand="block"
          size="large"
          @click="validateAndNavigate()"
          :disabled="isValidateForm"
        >
          신청완료
        </custom-button>
      </div>
    </ion-footer>
  </ion-page>
</template>

<script>
import { getData, setFile, COUNTE_FORMAT } from "@/assets/js/common";
import ContestHotTitle from "@/components/Contest/ContestHotTitle.vue";
import AddPhotoButton from "@/components/AddPhotoButton.vue";
import ContestHotAddPhotoGuide from "@/components/Contest/ContestHotAddPhotoGuide.vue";


import { Camera, CameraResultType, CameraSource } from "@capacitor/camera";

export default {
  name: "ContestSupport",
  inject: ["alertController", "loadingController"],
  components: {
    ContestHotTitle,
    AddPhotoButton,
    ContestHotAddPhotoGuide
  },
  computed: {
    isValidateForm() {
      return (
        // this.add1imgFileId == null ||
        this.add2imgFileId == null ||
        this.add3imgFileId == null ||
        // this.checkSns == "" ||
        // this.checkId == "" ||
        this.resolution == "" ||
        !this.check
      );
    }
  },
  data() {
    return {
      COUNTE_FORMAT,
      checkSns: "",
      checkId: "",
      resolution: "",

      imgFileId: null,

      add1imgFileId: null,
      add2imgFileId: null,
      add3imgFileId: null,
      add4imgFileId: null,
      add5imgFileId: null,
      add1imgViewFileId: null,
      add2imgViewFileId: null,
      add3imgViewFileId: null,
      add4imgViewFileId: null,
      add5imgViewFileId: null,

      Attachfiles: [],
      uploadType: "",
      check: false,
      contestType: 1
    };
  },
  ionViewWillEnter() {
    // 진입할 때 호출
  },
  ionViewDidLeave() {
    // 떠날 때 호출
  },
  mounted() {
  },
  methods: {
    getResult() {
      let resultObj = {};

      resultObj.proofType = this.checkSns;
      resultObj.proofInfo = this.checkId;
      resultObj.resolution = this.resolution ? this.resolution : null;
      resultObj.contestType = this.contestType;
      resultObj.photo1 = this.add1imgFileId;
      resultObj.photo2 = this.add2imgFileId;
      resultObj.photo3 = this.add3imgFileId;
      resultObj.photo4 = this.add4imgFileId ? this.add4imgFileId : null;
      resultObj.photo5 = this.add5imgFileId ? this.add5imgFileId : null;

      return resultObj;
    },
    goSave() {
      getData({
        url: "/getContestSupport",
        param: this.getResult(),
        then: (data) => {
          if (data.successYn === "Y") {
            this.warningAlert(data.message);
            this.$router.push("/home");
          } else {
            this.warningAlert(data.message);
          }
        }
      });
    },
    validateAndNavigate() {
      /*if (this.add1imgFileId === null) {
        this.warningAlert("도용 방지 검수 사진이 등록되지 않았습니다.");
      } else if (this.checkSns === "") {
        this.warningAlert("인증 방법을 선택하지 않았습니다.");
      } else if (this.checkId === "") {
        this.warningAlert("인증 아이디 혹은 주소를 입력하지 않았습니다.");
      } else */if (this.add2imgFileId === null || this.add3imgFileId === null) {
        this.warningAlert("컨텐츠 참가용 사진이 등록되지 않았습니다.");
      } else {
        this.goSave();
      }
    },

    checkBox() {
      console.log(this.check);
    },

    /** 사진 업로드 **/
    addPhoto(state) {
      switch (state) {
        case "add1":
          this.uploadType = "add1";
          break;
        case "add2":
          this.uploadType = "add2";
          break;
        case "add3":
          this.uploadType = "add3";
          break;
        case "add4":
          this.uploadType = "add4";
          break;
        case "add5":
          this.uploadType = "add5";
          break;
      }

      /** 사진첩 호출 & 파일객체 변환 **/
      Camera.getPhoto({
        allowEditing: false, //사진수정여부 (안드로이드만 가능, IOS는 카메라 촬영시만 수정)
        source: CameraSource.Photos, //사진첨, 촬영, 등 설정
        resultType: CameraResultType.Uri //사진 result Type
      }).then(async (photo) => {
        let blob = await fetch(photo.webPath).then(r => r.blob());
        const file = new File([blob], "fileName." + photo.format, {
          lastModified: new Date(),
          type: blob.type
        });

        this.Attachfiles.push(file);
        this.$nextTick(() => {
          this.insertFile(this.uploadType);
        });

      });
      /** //사진첩 호출 & 파일객체 변환 **/

      //this.$refs.photo.click();
    },

    onFileChange: function onFileChange(e) {
      const files = e.target.files || e.dataTransfer.files;
      if (!files.length) {
        return;
      }

      const allowedTypes = [
        "image/jpg",
        "image/jpeg",
        "image/png",
        "image/gif"
      ]; // 허용할 이미지 파일 확장자 목록
      const file = files[0];
      if (!allowedTypes.includes(file.type)) {
        // 선택한 파일이 허용된 이미지 파일 확장자 목록에 포함되지 않는 경우
        this.warningAlert("이미지 파일만 업로드 가능해요"); // 사용자에게 알림 메시지 출력
        return;
      }
      this.Attachfiles.push(files[0]);

      this.$nextTick(() => {
        this.insertFile(this.uploadType);
      });
    },
    /** 사진 저장 **/
    insertFile(e) {
      this.showLoading();

      //이미지 확장자 용량 체크
      setFile({
        url: "/setImage",
        param: {},
        file: this.Attachfiles,
        then: (data) => {
          //초기화
          this.Attachfiles = [];
          this.imgFileId = data.cdnNm;
          switch (e) {
            case "add1":
              this.add1imgFileId = data.fileId;
              this.add1imgViewFileId = data.cdnNm;
              break;
            case "add2":
              this.add2imgFileId = data.fileId;
              this.add2imgViewFileId = data.cdnNm;
              break;
            case "add3":
              this.add3imgFileId = data.fileId;
              this.add3imgViewFileId = data.cdnNm;
              break;
            case "add4":
              this.add4imgFileId = data.fileId;
              this.add4imgViewFileId = data.cdnNm;
              break;
            case "add5":
              this.add5imgFileId = data.fileId;
              this.add5imgViewFileId = data.cdnNm;
              break;
          }
          this.loading.dismiss();
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
    },
    /** 로딩 **/
    async showLoading() {
      this.loading = await this.loadingController.create({
        message: "Loading...",
        duration: 0
      });
      await this.loading.present();
    }
  }
};
</script>

<style lang="scss" scoped>
ion-grid {
  + ion-grid {
    margin-top: 100px;
  }
}
</style>
