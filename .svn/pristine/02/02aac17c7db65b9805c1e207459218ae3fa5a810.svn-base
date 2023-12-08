<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-button @click="$router.go(-1)">
            <ion-icon slot="icon-only" :icon="chevronBack"/>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <!-- title -->
      <ion-grid class="ion-padding">
        <ion-row style="font-weight: bolder; font-size: 24px; text-align: left; color: black">
          <ion-col>
            학력을 <br>
            알려주세요 :)
          </ion-col>
        </ion-row>
      </ion-grid>
      <!-- title -->


      <!-- select box -->
      <ion-grid class="ion-padding">
        <ion-row
            v-for="(SchoolList, index) in SchoolList" :key="index"
            style="border: 1px solid #cccccc; margin-bottom: 10px" @click="selectSchoolList(SchoolList)">
          <ion-col class="ion-col-font" :class="{ 'selected-Education': selectedSchoolList === SchoolList }">
            {{ SchoolList.schoolNm }}
          </ion-col>
        </ion-row>
      </ion-grid>
      <!-- select box -->

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
    IonPage, IonHeader, IonToolbar, IonButtons, IonContent, IonButton
  } from "@ionic/vue";
  import {alertController} from '@ionic/core';
  import {chevronBack} from 'ionicons/icons'
  import {getData} from "@/assets/js/common";

  export default {
    name: "Register",
    components: {
      IonPage,
      IonHeader,
      IonToolbar,
      IonButtons,
      IonContent,
      IonButton,
    },
    data() {
      return {
        chevronBack,

        SchoolList: [],

        selectedSchoolList: null,
      }
    },
    mounted() {
      this.created();
    },

    methods: {
      created() {
        this.getSchoolList()
      },

      getResult() {
        var resultObj = {};

        resultObj.schoolCd = this.selectedSchoolList.schoolCd;

        return resultObj;
      },

      /** 학력 리스트 **/
      getSchoolList() {
        getData({
          url: '/join/getSchoolList',
          param: {},
          target: this,
          then: data => {
            this.SchoolList = data;
          }
        });
      },


      /** select box **/
      selectSchoolList(SchoolList) {
        this.selectedSchoolList = SchoolList;
      },


      /** next btn **/
      checkBth() {
        if (this.selectedSchoolList === null) {
          this.warningAlert('최종 학력을 선택해주세요.');
        } else {
          this.confirmBtn();
        }
      },

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
                  let url = '/getUserUpdate';
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

      /** 경고 팝업창 **/
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

    },
  }
</script>


<style scoped>
  ion-icon {
    color: black;
  }

  ion-toolbar {
    --background: #fff;
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

  .ion-col-font {
    font-weight: bolder;
    font-size: 24px;
    text-align: center;
    color: black;
    padding: 10px
  }


  .info-text {
    text-align: left;
    font-size: 13px;
    font-weight: bold;
    color: #cccccc;
    margin-bottom: 30px;
    margin-left: 7%;
  }

  .selected-Education {
    background-color: #8c8c8c;
    color: white;
  }
</style>