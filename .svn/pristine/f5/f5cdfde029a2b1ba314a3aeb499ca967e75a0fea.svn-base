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
            어떤일을 하시나요?
          </ion-col>
        </ion-row>
      </ion-grid>
      <!-- title -->

      <!-- title bar -->
      <div class="progress-container">
        <div class="progress-bar"></div>
      </div>
      <div class="info-text">
        간단한 정보 몇 개만 물어볼게요!🙂
      </div>
      <!-- title bar -->

      <ion-list lines="none" style="margin-top: -10px; margin-bottom: 20px">
        <ion-item counter="true">
          <ion-input type="text" v-model="job" class="custom-input" style="font-size: 16px">
            <ion-icon slot="start" size="large" style="color: black" :icon="search"/>&nbsp;&nbsp;
          </ion-input>
        </ion-item>
      </ion-list>

      <!-- 직업 -->
      <ion-grid class="ion-padding" style="margin-top: -20px;">
        <ion-row class="job-container">
          <ion-col size="auto" class="job-box" v-for="(jobItem, index) in jobList" :key="index"
                   :class="{ 'selected-job': selectedJob === jobItem }" @click="selectJob(jobItem)">
            {{ jobItem.jobNm }}
          </ion-col>
        </ion-row>
      </ion-grid>
      <!-- 직업 -->

      <!-- 다음 버튼 -->
      <ion-grid class="ion-padding">
        <ion-row>
          <ion-col size="12" style="position:absolute; bottom: 10%;">
            <div class="btn-pwd" @click="validateAndNavigate">다음</div>
          </ion-col>
        </ion-row>
      </ion-grid>
      <!-- 다음 버튼 -->

    </ion-content>
  </ion-page>
</template>

<script>
  import {
    IonPage, IonHeader, IonToolbar, IonButtons, IonContent, IonInput, IonItem, IonButton
  } from "@ionic/vue";
  import {alertController} from '@ionic/core';
  import {chevronBack, search} from 'ionicons/icons'
  import {getData, tempMap} from "@/assets/js/common";

  export default {
    name: "Register",
    components: {
      IonPage,
      IonHeader,
      IonToolbar,
      IonButtons,
      IonContent,
      IonInput,
      IonItem,
      IonButton,
    },
    data() {
      return {
        chevronBack,
        search,

        job: '',
        jobList: [],
        selectedJob: null,
      }
    },
    mounted() {
      this.created();
    },

    methods: {

      created() {
        this.getJobList();
      },

      getResult() {
        var resultObj = {};

        resultObj.jobCd = this.selectedJob.jobCd; // 선택된 직업 코드
        resultObj.jobNm = this.selectedJob.jobNm; // 선택된 직업 이름
        resultObj.userKey = tempMap.key; // userKey

        return resultObj;
      },

      async goJoin() {
        await getData({
          url: '/join/setUserStep4',
          param: this.getResult(),
          then: (data) => {
            if (data.successYn === 'N') {
              this.warningAlert('실패');
            } else {
              this.$router.push('/joinLocation');
            }
          }
        });
      },

      /** 직업 리스트 **/
      async getJobList() {
        await getData({
          url: '/join/getJobList',
          param: {},
          target: this,
          then: data => {
            this.jobList = data;
          }
        });
      },
      /* title bar */
      updateProgressBar() {
        const input = document.querySelector('ion-input');
        const progressBar = document.querySelector('.progress-bar');

        if (input.value.trim() !== '') {
          progressBar.style.width = '60%';
        } else {
          progressBar.style.width = '45%';
        }
      },

      /* next btn */
      validateAndNavigate() {
        if (this.job.trim() !== '') {
          this.goJoin();
        } else {
          this.warningAlert('직업을 선택하지 않았습니다.');
        }
      },

      /* 경고 팝업창 */
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

      /* 직업 선택 */
      selectJob(jobItem) {
        if (this.selectedJob === jobItem) {
          this.selectedJob = null;
          this.job = '';
        } else {
          this.selectedJob = jobItem;
          this.job = jobItem.jobNm; // 선택된 직업 이름 저장
        }
        this.$nextTick(() => {
          this.updateProgressBar();
        });
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

  .custom-input {
    font-size: 16px;
    margin-top: -5px;
    font-weight: bolder;
    border-bottom: 2px solid #cccccc;
    width: 100%;
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
    width: 45%;
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

  .job-box {
    border: 1px solid #cccccc;
    text-align: center;
    padding: 5px 20px;
    border-radius: 10px;
    margin: 5px 5px;
    word-wrap: break-word;
    white-space: normal;
    color: #8c8c8c;
  }

  .selected-job {
    background-color: #110d57;
    color: white;
  }
</style>