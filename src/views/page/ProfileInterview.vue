<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-button @click="presentAlertConfirm()">
            <ion-icon slot="icon-only" :icon="chevronBack" />
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <!--  메인  -->
    <ion-content>
      <ion-grid class="ion-padding">
        <ion-row
          style="
            font-weight: bolder;
            font-size: 24px;
            text-align: left;
            color: black;
          "
        >
          <ion-col>
            인터뷰를<br />
            해주세요!
          </ion-col>
        </ion-row>
      </ion-grid>

      <div class="info-text">인터뷰</div>

      <ion-grid class="ion-padding" style="margin-top: -20px">
        <ion-row
          style="
            font-weight: bolder;
            font-size: 18px;
            text-align: left;
            color: black;
          "
        >
          <ion-col>1. 당신의 성격유형(MBTI)를 알려주세요!</ion-col>
        </ion-row>
        <ion-row>
          <ion-col
            size="auto"
            class="col-box"
            v-for="(data, index) in mbtiList"
            :key="index"
            :class="{ 'selected-col-box': isSelectedMbtis(data) }"
            @click="toggleItem('1', data)"
          >
            {{ data }}
          </ion-col>
        </ion-row>
      </ion-grid>

      <ion-grid class="ion-padding" style="margin-top: -20px">
        <ion-row
          style="
            font-weight: bolder;
            font-size: 18px;
            text-align: left;
            color: black;
          "
        >
          <ion-col>2-1. 이상형이 어떻게 되세요? (외모)</ion-col>
        </ion-row>
        <ion-row>
          <ion-col
            size="auto"
            class="col-box"
            v-for="(data, index) in faceList"
            :key="index"
            :class="{ 'selected-col-box': isSelectedFace(data) }"
            @click="toggleItem('2-1', data)"
          >
            {{ data }}
          </ion-col>
        </ion-row>
      </ion-grid>

      <ion-grid class="ion-padding" style="margin-top: -20px">
        <ion-row
          style="
            font-weight: bolder;
            font-size: 18px;
            text-align: left;
            color: black;
          "
        >
          <ion-col>2-2. 이상형이 어떻게 되세요? (체형)</ion-col>
        </ion-row>
        <ion-row>
          <ion-col
            size="auto"
            class="col-box"
            v-for="(data, index) in bodyList"
            :key="index"
            :class="{ 'selected-col-box': isSelectedBody(data) }"
            @click="toggleItem('2-2', data)"
          >
            {{ data }}
          </ion-col>
        </ion-row>
      </ion-grid>

      <ion-grid class="ion-padding" style="margin-top: -20px">
        <ion-row
          style="
            font-weight: bolder;
            font-size: 18px;
            text-align: left;
            color: black;
          "
        >
          <ion-col>2-3. 이상형이 어떻게 되세요? (성격)</ion-col>
        </ion-row>
        <ion-row>
          <ion-col
            size="auto"
            class="col-box"
            v-for="(data, index) in personalityList"
            :key="index"
            :class="{ 'selected-col-box': isSelectedPer(data) }"
            @click="toggleItem('2-3', data)"
          >
            {{ data }}
          </ion-col>
        </ion-row>
      </ion-grid>

      <ion-grid class="ion-padding" style="margin-top: -20px">
        <ion-row
          style="
            font-weight: bolder;
            font-size: 18px;
            text-align: left;
            color: black;
          "
        >
          <ion-col>3. 요즘 어떤것에 관심이 있으신가요?</ion-col>
        </ion-row>
        <ion-row>
          <ion-col
            size="auto"
            class="col-box"
            v-for="(data, index) in interestList"
            :key="index"
            :class="{ 'selected-col-box': isSelectedInterest(data) }"
            @click="toggleItem('3', data)"
          >
            {{ data }}
          </ion-col>
        </ion-row>
      </ion-grid>

      <ion-grid
        class="ion-padding"
        style="margin-top: -20px; margin-bottom: 20px"
      >
        <ion-row
          style="
            font-weight: bolder;
            font-size: 18px;
            text-align: left;
            color: black;
          "
        >
          <ion-col>4. 가장 좋아하는 음악은 무엇인가요?</ion-col>
        </ion-row>
        <ion-row>
          <ion-col size="4">
            <p style="margin-top: 9px; text-align: left; font-size: 18px">
              가수, 작곡가
            </p>
          </ion-col>
          <ion-col size="8">
            <ion-item counter="true" :counterFormatter="customFormatter">
              <ion-input
                type="text"
                maxlength="20"
                placeholder="직접입력"
                class="custom-input"
                v-model="singer"
              ></ion-input>
            </ion-item>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col size="4">
            <p style="margin-top: 9px; text-align: left; font-size: 18px">
              제 목
            </p>
          </ion-col>
          <ion-col size="8">
            <ion-item counter="true" :counterFormatter="customFormatter">
              <ion-input
                type="text"
                maxlength="20"
                placeholder="직접입력"
                class="custom-input"
                v-model="singTitle"
              ></ion-input>
            </ion-item>
          </ion-col>
        </ion-row>
      </ion-grid>

      <ion-grid class="ion-padding">
        <ion-row>
          <ion-col size="12" style="bottom: 25px">
            <div class="btn-pwd" @click="checkBth()">저장</div>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonButtons,
  IonButton,
  IonIcon,
  IonInput,
  IonToolbar,
  IonContent,
  IonPage,
  IonRow,
  IonCol,
  IonGrid,
  IonItem,
  alertController
} from '@ionic/vue';
import {
  chevronBack,
  addOutline,
  calendarClearOutline,
  locationOutline,
  starOutline,
  ellipsisVertical
} from 'ionicons/icons';
import { getData } from '@/assets/js/common';

export default {
  components: {
    IonButtons,
    IonButton,
    IonIcon,
    IonInput,
    IonToolbar,
    IonContent,
    IonPage,
    IonRow,
    IonCol,
    IonGrid,
    IonItem
  },

  data() {
    return {
      chevronBack,
      addOutline,
      calendarClearOutline,
      locationOutline,
      starOutline,
      ellipsisVertical,

      title: '',
      content: '',
      nick: '',
      profile: '',

      selectMbtis: [],
      selectFaces: [],
      selectBodys: [],
      selectPers: [],
      selectInterests: [],

      singer: '',
      singTitle: ''
    };
  },
  ionViewWillEnter() {
    // 진입할 때 호출
    this.getSelectList();
  },

  ionViewDidLeave() {
    // 떠날 때 호출
  },
  mounted() {},
  methods: {
    getResult() {
      let resultObj = {};

      resultObj.profile = this.profile;

      return resultObj;
    },

    /** 수정 버튼을 눌러서 페이지 진입했을때 .**/
    getSelectList() {
      getData({
        url: '/getSettingUserInfo',
        param: {},
        then: (data) => {
          this.profile = data.profile;
        }
      });
    },

    /** 완료 or 수정 버튼 **/
    async confirmBtn() {
      const alert = await alertController.create({
        //cssClass: 'my-custom-class',
        header: '',
        message: '저장하시겠습니까?',
        buttons: [
          {
            text: '취소',
            role: 'cancel',
            cssClass: 'secondary',
            handler: () => {}
          },
          {
            text: '저장',
            handler: () => {
              let url = '/getUserDetailUpdate';
              getData({
                url: url,
                param: this.getResult(),
                then: (data) => {
                  if (data.successYn === 'Y') {
                    this.$router.push('/profile');
                    this.warningAlert('수정완료');
                  } else {
                    this.warningAlert('수정실패');
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
      if (this.profile === '') {
        this.warningAlert('내용이 입력되지 않았습니다');
      } else {
        this.confirmBtn();
      }
    },

    async warningAlert(message) {
      const alert = await alertController.create({
        header: '',
        subHeader: '',
        message: message,
        buttons: ['OK']
      });
      return alert.present();
    },

    async presentAlertConfirm() {
      const alert = await alertController.create({
        //cssClass: 'my-custom-class',
        header: '',
        message: '이 화면에서 나가면 입력한 내용은 저장되지 않습니다.',
        buttons: [
          {
            text: '취소',
            role: 'cancel',
            cssClass: 'secondary',
            handler: () => {}
          },
          {
            text: '나가기',
            handler: () => {
              this.$router.go(-1);
            }
          }
        ]
      });
      return alert.present();
    },

    /** 선택아이템 **/
    isSelectedMbtis(item) {
      return this.selectMbtis.includes(item);
    },
    isSelectedFace(item) {
      return this.selectFaces.includes(item);
    },
    isSelectedBody(item) {
      return this.selectBodys.includes(item);
    },
    isSelectedPer(item) {
      return this.selectPers.includes(item);
    },
    isSelectedInterest(item) {
      return this.selectInterests.includes(item);
    },

    /** 선택 아이템들 **/
    toggleItem(state, item) {
      if (state === '1') {
        if (this.isSelectedMbtis(item)) {
          this.selectMbtis.splice(this.selectMbtis.indexOf(item), 1);
        } else if (this.selectMbtis.length < 1) {
          this.selectMbtis.push(item);
        }
      } else if (state === '2-1') {
        if (this.isSelectedFace(item)) {
          this.selectFaces.splice(this.selectFaces.indexOf(item), 1);
        } else if (this.selectFaces.length < 2) {
          this.selectFaces.push(item);
        }
      } else if (state === '2-2') {
        if (this.isSelectedBody(item)) {
          this.selectBodys.splice(this.selectBodys.indexOf(item), 1);
        } else if (this.selectBodys.length < 2) {
          this.selectBodys.push(item);
        }
      } else if (state === '2-3') {
        if (this.isSelectedPer(item)) {
          this.selectPers.splice(this.selectPers.indexOf(item), 1);
        } else if (this.selectPers.length < 2) {
          this.selectPers.push(item);
        }
      } else {
        if (this.isSelectedInterest(item)) {
          this.selectInterests.splice(this.selectInterests.indexOf(item), 1);
        } else if (this.selectInterests.length < 3) {
          this.selectInterests.push(item);
        }
      }
    },

    /** 글자수 체크 **/
    customFormatter(inputLength, maxLength) {
      if (inputLength > maxLength) {
        return '더이상 입력할수 없습니다.';
      } else if (inputLength < 1) {
        return `최소 ${1 - inputLength}자 / 최대 ${maxLength}자`;
      } else {
        return `최소 글자수 완료 / 최대 ${maxLength - inputLength}자`;
      }
    }
  }
};
</script>

<style scoped>
ion-toolbar {
  --background: #fff;
}

ion-item {
  --border-style: none;
  width: 97%;
}

.info-text {
  text-align: left;
  font-size: 15px;
  font-weight: bold;
  color: #cccccc;
  margin-bottom: 30px;
  margin-left: 5%;
}

/* 본문 입력창*/
ion-textarea.custom-textarea {
  --background: #ffffff;
  --color: #343434;
  --padding-end: 10px;
  --padding-start: 10px;
  --placeholder-color: #343434;
  font-size: 12px;
  border: solid 1px #d7d7d7;
}

.btn-pwd {
  text-align: center;
  font-weight: bolder;
  font-size: 22px;
  width: 100%;
  color: gray;
  padding: 15px;
  background-color: #e2ded9;
}

.btn-pwd:active {
  color: white;
  background-color: #b3afa8;
}

.col-box {
  font-size: 13px;
  font-weight: bolder;
  border: 1px solid #cccccc;
  text-align: center;
  padding: 5px 20px;
  border-radius: 20px;
  margin: 5px 5px;
  word-wrap: break-word;
  white-space: normal;
  color: #8c8c8c;
}
.selected-col-box {
  background-color: #110d57;
  color: white;
}
.custom-input {
  font-size: 15px;
  margin-top: 0px;
  font-weight: bolder;
  border-bottom: 2px solid #cccccc;
  width: 110%;
}
</style>
