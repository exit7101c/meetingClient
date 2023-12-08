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


      <ion-list lines="none" style="margin-top: 50px; margin-bottom: 20px">
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
    IonPage, IonHeader, IonToolbar, IonButtons, IonContent, IonInput, IonItem, IonButton
  } from "@ionic/vue";
  import {alertController} from '@ionic/core';
  import {chevronBack, search} from 'ionicons/icons';
  import {getData} from "@/assets/js/common";

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
    ionViewWillEnter() {
      // 진입할 때 호출
      this.getJobList();
    },
    ionViewDidLeave() {
      // 떠날 때 호출
    },
    mounted() {
    },

    methods: {
      /** 직업 리스트 **/
      getJobList() {
        getData({
          url: '/join/getJobList',
          param: {},
          target: this,
          then: data => {
            this.jobList = data;
          }
        });
      },

      /** 직업 선택 **/
      selectJob(jobItem) {
        if (this.selectedJob === jobItem) {
          this.selectedJob = null;
          this.job = '';
        } else {
          this.selectedJob = jobItem;
          this.job = jobItem.jobNm; // 선택된 직업 이름 저장
        }
      },

      getResult() {
        var resultObj = {};

        resultObj.jobCd = this.selectedJob.jobCd; // 선택된 직업 코드

        return resultObj;
      },

      /** next btn **/
      checkBth() {
        if (this.job.trim() !== '') {
          this.confirmBtn();
        } else {
          this.warningAlert('직업을 선택하지 않았습니다.');
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
    width: 95%;
    color: gray;
    padding: 15px;
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