<template>
  <div class="ion-padding">
    <div class="row-box">
      <CardBox>
        <ion-item lines="none" class="pl-0 pr-0">
          <ion-label>
            <ion-text color="light" class="text-lg"
              ><strong>광고노출여부</strong></ion-text
            >
          </ion-label>
          <ion-toggle
            slot="end"
            mode="ios"
            :checked="isAdSelect"
            @click="ageChange"
          ></ion-toggle>
        </ion-item>
      </CardBox>
    </div>
    <div class="row-box">
      <CardBox>
        <ion-text color="light" class="text-lg"
          ><strong>노출 시간대 설정</strong></ion-text
        >
        <div class="mt-1">
          <ion-row
            class="ion-align-items-center ion-justify-content-between gap-sm flex-nowrap"
          >
            <ion-label color="light" class="text-md">시작시간</ion-label>
            <ion-select v-model="hourMin">
              <ion-select-option value="">선택하세요</ion-select-option>
              <ion-select-option
                v-for="(item, index) in hourArr"
                :key="index"
                :value="item.value"
                >{{ item.text }}시
              </ion-select-option>
            </ion-select>
          </ion-row>
        </div>
        <ion-row
          class="ion-align-items-center ion-justify-content-between gap-sm flex-nowrap"
        >
          <ion-label color="light" class="text-md">종료시간</ion-label>
          <ion-select v-model="hourMax">
            <ion-select-option value="">선택하세요</ion-select-option>
            <ion-select-option
              v-for="(item, index) in hourArr"
              :key="index"
              :value="item.value"
              >{{ item.text }}시
            </ion-select-option>
          </ion-select>
        </ion-row>
      </CardBox>
    </div>
    <div class="row-box">
      <CardBox>
        <ion-row
          class="ion-align-items-center ion-justify-content-between gap-sm flex-nowrap"
        >
          <ion-col size="8">
            <ion-text color="light" class="text-lg"
              ><strong>재 노출 주기</strong></ion-text
            >
            <div class="mt1">
              <ion-text class="text-sm sub-text01">
                설명글 작성 설명글 작성 설명글 작성
              </ion-text>
            </div>
          </ion-col>
          <ion-col size="4">
            <ion-select v-model="exposureCycle" style="color: #fff">
              <ion-select-option value="">선택하세요</ion-select-option>
              <ion-select-option
                v-for="(item, index) in minuteArr"
                :key="index"
                :value="item.value"
                >{{ item.text }}분
              </ion-select-option>
            </ion-select>
          </ion-col>
        </ion-row>
      </CardBox>
    </div>
    <div class="row-box">
      <CardBox>
        <ion-text color="light" class="text-lg"
          ><strong>노출 거리 지정</strong></ion-text
        >
        <div class="mt1">
          <ion-text class="text-sm sub-text01">
            설명글 작성 설명글 작성 설명글 작성
          </ion-text>
        </div>
        <div class="mt-1" v-if="!isKmMaxSelect">
          <ion-range min="0" max="500" step="5" v-model="kmMax">
            <ion-label color="light" slot="end" class="text-lg"
              >{{ kmMax }} km</ion-label
            >
          </ion-range>
        </div>
      </CardBox>
    </div>
    <div class="row-box">
      <CardBox>
        <ion-text color="light" class="text-lg"
          ><strong>노출 나이대 설정</strong></ion-text
        >
        <div class="mt1">
          <ion-text class="text-sm sub-text01">
            설명글 작성 설명글 작성 설명글 작성
          </ion-text>
        </div>
        <div class="row" v-if="!isAgeSelect">
          <ion-range
            min="19"
            max="60"
            step="1"
            :dual-knobs="true"
            :value="{ lower: ageMin, upper: ageMax }"
            @ionChange="ageRangeChange"
          >
            <ion-label color="light" slot="end" class="text-lg">
              {{ ageMin }} ~ {{ ageMax }} 세
            </ion-label>
          </ion-range>
        </div>
      </CardBox>
    </div>
    <div class="row-box">
      <CardBox>
        <div class="row">
          <div>
            <ion-text color="light" class="text-lg"
              ><strong>사업장 사진</strong></ion-text
            >
            <ion-label color="light"
              >&nbsp;&nbsp;(첫번째 사진이 대표 사진이 됩니다.)
            </ion-label>
          </div>
          <div class="mt1">
            <ion-text class="text-sm sub-text01">
              설명글 작성 설명글 작성 설명글 작성
            </ion-text>
          </div>
          <div class="row-box">
            <ion-grid>
              <ion-row>
                <ion-col size="4">
                  <AddPhotoButton
                    @click="addPhoto('add1')"
                    @photoDelete="deletePhoto('add1')"
                    :name="cdnNm1"
                    :delPhoto="true"
                  />
                </ion-col>
                <ion-col size="4">
                  <AddPhotoButton
                    @click="addPhoto('add2')"
                    @photoDelete="deletePhoto('add2')"
                    :name="cdnNm2"
                    :delPhoto="true"
                  />
                </ion-col>
                <ion-col size="4">
                  <AddPhotoButton
                    @click="addPhoto('add3')"
                    @photoDelete="deletePhoto('add3')"
                    :name="cdnNm3"
                    :delPhoto="true"
                  />
                </ion-col>
                <ion-col size="4">
                  <AddPhotoButton
                    @click="addPhoto('add4')"
                    @photoDelete="deletePhoto('add4')"
                    :name="cdnNm4"
                    :delPhoto="true"
                  />
                </ion-col>
                <ion-col size="4">
                  <AddPhotoButton
                    @click="addPhoto('add5')"
                    @photoDelete="deletePhoto('add5')"
                    :name="cdnNm5"
                    :delPhoto="true"
                  />
                </ion-col>
                <ion-col size="4">
                  <AddPhotoButton
                    @click="addPhoto('add6')"
                    @photoDelete="deletePhoto('add6')"
                    :name="cdnNm6"
                    :delPhoto="true"
                  />
                </ion-col>
              </ion-row>
            </ion-grid>
            <input
              type="file"
              @change="onFileChange"
              ref="photo"
              class="is-blind"
            />
          </div>
        </div>
      </CardBox>
    </div>
    <div class="row-box">
      <custom-button
        color="primary"
        size="large"
        expand="block"
        shape="round"
        @click="save"
        >저장하기</custom-button
      >
    </div>
  </div>
</template>

<script>
import { getData, setFile } from '@/assets/js/common';
import AddPhotoButton from '@/components/AddPhotoButton.vue';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import {
  chevronBack,
  swapHorizontalOutline,
  locationOutline,
  mapOutline
} from 'ionicons/icons';

export default {
  inject: ['alertController', 'loadingController'],
  components: {
    AddPhotoButton
  },
  data() {
    return {
      chevronBack,
      swapHorizontalOutline,
      locationOutline,
      mapOutline,

      isAdSelect: true,

      hourArr: [],
      minuteArr: [],

      businessAllTime: false,
      openTime: '',
      closeTime: '',

      exposureAllTime: false,
      hourMin: '',
      hourMax: '',

      isKmMaxSelect: true,
      kmMax: '',

      isAgeSelect: true,
      ageMin: '',
      ageMax: '',

      exposureCycle: '',

      Attachfiles: [],
      mainFileId: '',

      uploadType: '',
      cdnNm1: null,
      cdnNm2: null,
      cdnNm3: null,
      cdnNm4: null,
      cdnNm5: null,
      cdnNm6: null,

      add1imgFileId: null,
      add2imgFileId: null,
      add3imgFileId: null,
      add4imgFileId: null,
      add5imgFileId: null,
      add6imgFileId: null,

      partnersMap: {},

      modalOpen: false,
      showMap: '',
      location: '',
      locationView: '',
      locationDetail: '',

      currLat: 37.5666612,
      currLon: 126.9783785,

      selectedLat: null,
      selectedLng: null,

      selectedjibunAddress: null,
      selectedroadAddress: null,

      selectedAddressGu: null,
      selectedjibunAddressDong: null,
      selectedroadAddressDong: null,

      checkBtn: 'dong',
      checkBtnText: '구까지 표시',
      routerType: '',
      checkSubCategory: '',
      lodingCheck: false,

      activeTimeToggle: false,
      activeToggle: false,

      gpsLat: '',
      gpsLon: ''
    };
  },

  created() {
    // 진입할 때 호출
    for (let i = 0, len = 24; i <= len; i++) {
      let obj = {};
      obj['text'] = i.toString().length == 1 ? '0' + i : i;
      obj['value'] = i;
      this.hourArr.push(obj);
    }
    for (let i = 0, len = 60; i <= len; i++) {
      let obj = {};
      obj['text'] = i.toString().length == 1 ? '0' + i : i;
      obj['value'] = i;
      this.minuteArr.push(obj);
    }

    this.partnersInfo();
  },

  methods: {
    partnersMapFn(data) {
      this.partnersCode = data.partnersCode;
      this.partnersName = data.partnersName;
      this.partnersNumber = data.partnersNumber;
      this.shortWord = data.shortWord;
      this.introduce = data.introduce;
      this.currLat = data.lat ? data.lat : 37.5666612;
      this.currLon = data.lon ? data.lon : 126.9783785;
      this.openTime = data.openTime;
      this.closeTime = data.closeTime;
      this.hourMin = data.hourMin;
      this.hourMax = data.hourMax;
      this.kmMax = data.kmMax;
      this.ageMin = data.ageMin;
      this.ageMax = data.ageMax;
      this.exposureCycle = data.exposureCycle;
      this.cdnNm1 = data.cdnNm1;
      this.cdnNm2 = data.cdnNm2;
      this.cdnNm3 = data.cdnNm3;
      this.cdnNm4 = data.cdnNm4;
      this.cdnNm5 = data.cdnNm5;
      this.cdnNm6 = data.cdnNm6;
      this.add1imgFileId = data.photo1;
      this.add2imgFileId = data.photo2;
      this.add3imgFileId = data.photo3;
      this.add4imgFileId = data.photo4;
      this.add5imgFileId = data.photo5;
      this.add6imgFileId = data.photo6;

      this.partnersMap = data;
    },
    partnersInfo() {
      getData({
        url: '/partnersInfo',
        param: {
          partnersCode: this.partnersCode
        },
        then: (data) => {
          if (data.successYn == 'Y') {
            this.partnersMapFn(data.result);
            this.businessAllTime =
              data.result.openTime == 0 && data.result.closeTime == 24;
            this.exposureAllTime =
              data.result.hourMin == 0 && data.result.hourMax == 24;
            this.isAgeSelect =
              data.result.ageMin == 0 && data.result.ageMax == 0;
            this.isKmMaxSelect = data.result.kmMax == 0;
          }
        }
      });
    },
    prevPage() {
      // 페이지 넘어가는 방향... push: 오 -> 왼, go: 왼 -> 오
      // 뒤로가기 표현할 때는 go가 맞는듯....
      // this.$router.push("/myPage");
      this.$router.go(-1);
    },
    businessChange() {
      this.businessAllTime = this.businessAllTime === true ? false : true;
      if (this.businessAllTime) {
        this.openTime = 0;
        this.closeTime = 24;
      }
    },
    exposureChange() {
      this.exposureAllTime = this.exposureAllTime === true ? false : true;
      if (this.exposureAllTime) {
        this.hourMin = 0;
        this.hourMax = 24;
      }
    },
    kmMaxChange() {
      this.isKmMaxSelect = this.isKmMaxSelect === true ? false : true;
      if (this.isKmMaxSelect) {
        this.kmMax = 0;
      }
    },
    ageChange() {
      this.isAgeSelect = this.isAgeSelect === true ? false : true;
      if (this.isAgeSelect) {
        this.ageMin = 0;
        this.ageMax = 0;
      }
    },
    ageRangeChange($event) {
      this.ageMin = $event.detail.value.lower;
      this.ageMax = $event.detail.value.upper;
    },
    addPhoto(state) {
      switch (state) {
        case 'add1':
          this.uploadType = 'add1';
          break;
        case 'add2':
          this.uploadType = 'add2';
          break;
        case 'add3':
          this.uploadType = 'add3';
          break;
        case 'add4':
          this.uploadType = 'add4';
          break;
        case 'add5':
          this.uploadType = 'add5';
          break;
        case 'add6':
          this.uploadType = 'add6';
          break;
      }

      /** 사진첩 호출 & 파일객체 변환 **/
      Camera.getPhoto({
        allowEditing: false, //사진수정여부 (안드로이드만 가능, IOS는 카메라 촬영시만 수정)
        source: CameraSource.Photos, //사진첨, 촬영, 등 설정
        resultType: CameraResultType.Uri //사진 result Type
      }).then(async (photo) => {
        let blob = await fetch(photo.webPath).then((r) => r.blob());
        const file = new File([blob], 'fileName.' + photo.format, {
          lastModified: new Date(),
          type: blob.type
        });

        this.Attachfiles.push(file);
        this.$nextTick(() => {
          this.insertFile(this.uploadType);
        });
      });
      /** //사진첩 호출 & 파일객체 변환 **/
    },
    onFileChange: function onFileChange(e) {
      const files = e.target.files || e.dataTransfer.files;
      if (!files.length) {
        return;
      }

      const allowedTypes = [
        'image/jpg',
        'image/jpeg',
        'image/png',
        'image/gif'
      ]; // 허용할 이미지 파일 확장자 목록
      const file = files[0];
      if (!allowedTypes.includes(file.type)) {
        // 선택한 파일이 허용된 이미지 파일 확장자 목록에 포함되지 않는 경우
        this.warningAlert('이미지 파일만 업로드 가능해요'); // 사용자에게 알림 메시지 출력
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
        url: '/setImage',
        param: {},
        file: this.Attachfiles,
        then: (data) => {
          //초기화
          this.Attachfiles = [];
          /** 상태값 확인후 해당 사진 변경 **/
          switch (e) {
            case 'add1':
              this.add1imgFileId = data.fileId;
              this.cdnNm1 = data.cdnNm;
              break;
            case 'add2':
              this.add2imgFileId = data.fileId;
              this.cdnNm2 = data.cdnNm;
              break;
            case 'add3':
              this.add3imgFileId = data.fileId;
              this.cdnNm3 = data.cdnNm;
              break;
            case 'add4':
              this.add4imgFileId = data.fileId;
              this.cdnNm4 = data.cdnNm;
              break;
            case 'add5':
              this.add5imgFileId = data.fileId;
              this.cdnNm5 = data.cdnNm;
              break;
            case 'add6':
              this.add6imgFileId = data.fileId;
              this.cdnNm6 = data.cdnNm;
              break;
          }
          this.getUpdateImg();
        }
      });
    },
    getUpdateImg() {
      getData({
        url: '/partnersPhotoUpdate',
        param: {
          photo1: this.add1imgFileId ? this.add2imgFileId : null,
          photo2: this.add2imgFileId ? this.add2imgFileId : null,
          photo3: this.add3imgFileId ? this.add3imgFileId : null,
          photo4: this.add4imgFileId ? this.add4imgFileId : null,
          photo5: this.add5imgFileId ? this.add5imgFileId : null,
          photo6: this.add6imgFileId ? this.add6imgFileId : null,
          partnersCode: this.partnersCode
        },
        target: this,
        then: (data) => {
          if (data.isUpdate === true) {
            this.loading.dismiss();
            this.warningAlert('사진등록성공');
            this.partnersInfo();
          }
        }
      });
    },
    deletePhoto(state) {
      this.showLoading();
      getData({
        url: '/partnersPhotoDelete',
        param: {
          deletePhoto: state,
          partnersCode: this.partnersCode
        },
        target: this,
        then: (data) => {
          this.loading.dismiss();
          this.warningAlert(data.message);
          this.partnersInfo();
        }
      });
    },
    save() {
      this.showLoading();

      let param = {};
      param['partnersCode'] = this.partnersCode;
      param['partnersName'] = this.partnersName;
      param['partnersNumber'] = this.partnersNumber;
      param['shortWord'] = this.shortWord;
      param['introduce'] = this.introduce;
      param['lat'] = this.selectedLat;
      param['lon'] = this.selectedLng;
      param['partnersAddress'] = !this.isEmpty(this.locationView)
        ? this.nullToBlank(this.locationView)
        : null;
      param['partnersAddressDetail'] = !this.isEmpty(this.locationDetail)
        ? this.nullToBlank(this.locationDetail)
        : null;
      param['openTime'] = this.openTime;
      param['closeTime'] = this.closeTime;
      param['hourMin'] = this.hourMin;
      param['hourMax'] = this.hourMax;
      param['kmMax'] = this.kmMax;
      param['ageMin'] = this.ageMin;
      param['ageMax'] = this.ageMax;
      param['exposureCycle'] = this.exposureCycle;

      getData({
        url: '/partnersInfoSave',
        param: param,
        then: (data) => {
          this.loading.dismiss();
          this.warningAlert(data.message);
          this.partnersInfo();
        }
      });
    },
    isEmpty(s) {
      return Object.keys(s).length == 0;
    },
    nullToBlank(s) {
      if (Object.keys(s).length == 0) {
        return ' ';
      } else {
        return s;
      }
    },

    async showLoading() {
      this.loading = await this.loadingController.create({
        message: 'Loading...',
        duration: 0
      });
      await this.loading.present();
    },
    async warningAlert(message) {
      const alert = await this.alertController.create({
        header: '',
        subHeader: '',
        message: message,
        buttons: ['OK']
      });
      return alert.present();
    }
  }
};
</script>

<style scoped></style>
