<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-button @click="presentAlertConfirm()">
            <ion-icon slot="icon-only" :icon="chevronBack"/>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <!--  메인  -->
    <ion-content>

      <ion-grid class="ion-padding">
        <ion-row style="font-weight: bolder; font-size: 24px; text-align: left; color: black">
          <ion-col>
            자기소개를<br>
            해주세요!
          </ion-col>
        </ion-row>
      </ion-grid>

      <div class="info-text">
        내 성격은 어떤지, 보통 휴일을 어떻게 보내는지 등에 대해 자유롭게 작성해주세요!<br>
        자세하게 작성할수록 꼭 맞는 이성을 만날수 있어요😊
      </div>

      <ion-item counter="true" :counterFormatter="customFormatter">
        <ion-textarea v-model="profile" @input="limitComment($event)"
                      :rows="15" :clear-on-edit="false" class="custom-textarea" maxlength="500"
                      placeholder="내용을 입력해주세요.">

        </ion-textarea>
      </ion-item>

      <ion-grid class="ion-padding">
        <ion-row>
          <ion-col size="12" style="position:absolute; bottom: 25px; left:15px; ">
            <div class="btn-pwd" @click="checkBth()">저장</div>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script>
  import {
    IonButtons, IonButton, IonIcon, IonToolbar, IonContent,
    IonPage, IonTextarea, IonRow, IonCol, IonGrid, IonItem, alertController,
  } from '@ionic/vue';
  import {chevronBack, addOutline, calendarClearOutline, locationOutline, starOutline, ellipsisVertical} from 'ionicons/icons';
  import {getData} from "@/assets/js/common";

  export default {
    components: {
      IonButtons, IonButton, IonIcon, IonToolbar, IonContent,
      IonPage, IonTextarea, IonRow, IonCol, IonGrid, IonItem,
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

        resultObj.profile = this.profile;

        return resultObj;
      },

      /** 수정 버튼을 눌러서 페이지 진입했을때 .**/
      getSelectList() {
        getData({
          url: '/getSettingUserInfo',
          param: {},
          then: data => {

            this.profile = data.profile;
          },
        });
      },

      limitComment(e){
        const text = e.target.value;
        const rows = (text.match(/\n/g) || []).length + 1;
        if (rows > 10) {
          if (e.inputType !== 'deleteContentBackward') {
            e.preventDefault(); // 줄바꿈을 막는다
            this.warningAlert('줄바꿈은 10줄까지만 가능합니다');
            return;
          }
        }
        if (text !== this.prevText) { // 이전에 입력된 텍스트와 비교하여 변경된 경우에만 행 수를 계산하도록 수정
          this.dynamicRow = rows;

        }
        this.prevText = text; // 현재 입력된 텍스트를 저장하여 다음 비교 시 사용
      },

      /** 완료 or 수정 버튼 **/
      async confirmBtn() {

        const alert = await alertController
          .create({
            //cssClass: 'my-custom-class',
            header: '',
            message: '저장하시겠습니까?',
            buttons: [
              {
                text: '취소',
                role: 'cancel',
                cssClass: 'secondary',
                handler: () => {

                },
              },
              {
                text: '저장',
                handler: () => {

                  let url = '/getUserDetailUpdate';
                  getData({
                    url: url,
                    param: this.getResult(),
                    then: (data) => {

                      if( data.successYn === 'Y' ){
                        this.$router.push('/profile');
                        this.warningAlert('수정완료');
                      } else {
                        this.warningAlert('수정실패')
                      }
                    }
                  });
                },
              },
            ],
          })
        return alert.present();
      },

      /** 완료 or 수정 버튼 **/
      checkBth() {
        if (this.profile === '' ) {
          this.warningAlert('내용이 입력되지 않았습니다');
        } else {
          this.confirmBtn();
        }
      },

      async warningAlert(message) {
        const alert = await alertController
          .create({
            header: '',
            subHeader: '',
            message: message,
            buttons: ['OK'],
          });
        return alert.present();
      },

      async presentAlertConfirm() {
        const alert = await alertController
          .create({
            //cssClass: 'my-custom-class',
            header: '',
            message: '이 화면에서 나가면 입력한 내용은 저장되지 않습니다.',
            buttons: [
              {
                text: '취소',
                role: 'cancel',
                cssClass: 'secondary',
                handler: () => {

                },
              },
              {
                text: '나가기',
                handler: () => {

                  this.$router.go(-1);
                },
              },
            ],
          })
        return alert.present();
      },


      /** 글자수 체크 **/
      customFormatter(inputLength, maxLength) {
        if (inputLength > maxLength) {
          return '더이상 입력할수 없습니다.';
        } else if (inputLength < 1) {
          return `최소 ${1 - inputLength}자 / 최대 2000자`;
        } else {
          return `최소 글자수 완료 / 최대 ${maxLength - inputLength}자`;
        }
      },

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
    margin: 0 5% 30px 5%;
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
    width: 91%;
    color: gray;
    padding: 15px;
    background-color: #e2ded9;
  }
  .btn-pwd:active {
    color: white;
    background-color: #b3afa8;
  }
</style>
