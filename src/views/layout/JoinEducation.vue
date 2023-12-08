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
            학력을 알려주세요
          </ion-col>
        </ion-row>
      </ion-grid>
      <!-- title -->

      <!-- title bar -->
      <div class="progress-container">
        <div class="progress-bar"></div>
      </div>
      <div class="info-text">
        거의 끝났어요 최종 학력을 알려주세요
      </div>
      <!-- title bar -->

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

      <!-- next btn -->
      <ion-grid class="ion-padding">
        <ion-row>
          <ion-col size="12" style="position:absolute; bottom: 25px; left:15px; ">
            <div class="btn-pwd" @click="validateAndNavigate">다음</div>
          </ion-col>
        </ion-row>
      </ion-grid>
      <!-- next btn -->

    </ion-content>
  </ion-page>
</template>

<script>
  import {
    IonPage, IonHeader, IonToolbar, IonButtons, IonContent, IonButton
  } from "@ionic/vue";
  import {alertController} from '@ionic/core';
  import {chevronBack} from 'ionicons/icons';
  import {getData, tempMap} from "@/assets/js/common";

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

        resultObj.schoolNm = this.selectedSchoolList.schoolNm;
        resultObj.schoolCd = this.selectedSchoolList.schoolCd;
        resultObj.userKey = tempMap.key; // userKey

        return resultObj;
      },

      /** 학력 리스트 **/
      async getSchoolList() {
        await getData({
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
        this.updateProgressBar();
      },

      /** title bar **/
      updateProgressBar() {
        const progressBar = document.querySelector('.progress-bar');
        let progressPercentage = 75;

        if (this.selectedSchoolList !== null) {
          progressPercentage += 15;
        }
        progressBar.style.width = progressPercentage + '%';
      },

      /** next btn **/
      validateAndNavigate() {
        this.$router.push('/joinProfile');
        // if (this.selectedSchoolList === null) {
        //   this.warningAlert('최종 학력을 선택해주세요.');
        // } else {
        //   this.goJoin();
        // }
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
    padding: 10px;
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

  /* title bar */
  .progress-container {
    position: relative;
    width: 90%;
    height: 5px;
    background-color: #f1f1f1;
    margin-bottom: 10px;
    margin-left: 5%;
  }

  .progress-bar {
    position: absolute;
    height: 100%;
    width: 75%;
    background-color: #ffac41;
    transition: width 1s;
  }

  /* title bar */

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