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

    <ion-content class="ion-padding">
      <ion-toolbar style="margin-top: -30px;">
        <ion-text style="font-weight: bolder; font-size: 25px">ASK ME</ion-text>
        <ion-buttons slot="end">
          <ion-button style="font-size: 12px; --color: black;">
            이용정책 보기
          </ion-button>
        </ion-buttons>
      </ion-toolbar>

      <ion-grid style="border: 2px solid #d3d3d3; border-radius: 5px; margin-top: 10px;">
        <ion-row style="font-size: 13px;">
          <ion-col>
            <ion-item lines="none" style="margin: -10px 0px -10px -10px;">
              <ion-avatar slot="start" style="margin-right: 10px; width: 30px; height: 30px; "  >
                <img src="../../assets/img/attackicon.png" />
              </ion-avatar>
              <ion-label >
                <span style="font-family: ‘appfontB’;font-size: 14px; color: #000;">자영업하는</span>
                <span style="position: absolute; right: 15px; font-size: 14px;">5월 14일</span>
              </ion-label>
            </ion-item>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col size="3">
            <img src="../../assets/img/dockingImg.png" style="max-width: 100%; ;overflow: hidden; width:60px; height: 60px; object-fit: cover;"/>
          </ion-col>
          <ion-col style="margin-top: -10px;">
            <h3 class="commu_title1">DOCKING</h3>
            <span style="letter-spacing: -1px; font-size: 15px; color: black;">노출수 15만</span>
            <span style="position: absolute; right: 15px; font-size: 14px; bottom: 5px; border-bottom: 1px solid blue; color: blue;"
                  @click="$router.push('/')">이 스레드 보기</span>
          </ion-col>
        </ion-row>
      </ion-grid>

      <ion-grid style=" background-color: #fff6c6; margin: 0 10px 10px 10px; text-align: center; border-radius: 5px; border: 2px solid #ffb926; margin-top: 10px;" >
        <ion-row>
          <ion-col size="12" style="font-weight: bolder;">
            이 스레드 주소
          </ion-col>
          <ion-col size="12">
            <a style="color: blue;">url 주소</a>&nbsp;<ion-icon style="color: #ffb839;" :icon="copyOutline"/>
          </ion-col>
          <ion-col size="12" >
            <ion-text style="font-size: 12px; border-bottom: 1px solid black;">주소변경하기</ion-text>
          </ion-col>
        </ion-row>
      </ion-grid>

      <ion-grid style="border: 2px solid #d3d3d3; border-radius: 5px; text-align: center; font-weight: bolder;">
        <ion-row style="font-size: 15px;">
          <ion-col size="6">
            노출수
          </ion-col>
          <ion-col size="6">
            참여수
          </ion-col>
        </ion-row>
        <ion-row style="font-size: 23px; margin-top: -5px;">
          <ion-col size="6">
            15만
          </ion-col>
          <ion-col size="6">
            35,613
          </ion-col>
        </ion-row>
        <ion-row style="font-size: 15px;">
          <ion-col size="6">
            평가점수
          </ion-col>
          <ion-col size="6">
            가입자수
          </ion-col>
        </ion-row>
        <ion-row style="font-size: 23px; margin-top: -5px;">
          <ion-col size="6">
            87점
          </ion-col>
          <ion-col size="6">
            207명
          </ion-col>
        </ion-row>
      </ion-grid>

      <ion-grid style="border: 2px solid #d3d3d3; border-radius: 5px; margin-top: 10px;">
        <ion-row style="font-size: 13px;">
          <ion-col>
            자영업하는 정로 님에게 도착한 익명 메시지
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col>
            “재미니 우리 언제마셔 ㅠ"
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col>
            같이 하고 싶은 것 : 술마시기🍷
          </ion-col>
        </ion-row>
        <ion-row style="text-align: center;">
          <ion-col>
            <span style="letter-spacing: -1px; font-size: 15px; color: #888888;">2023년 06월 14일 10:22</span>
          </ion-col>
        </ion-row>
      </ion-grid>
      <ion-grid style="border: 2px solid #d3d3d3; border-radius: 5px; margin-top: 10px;">
        <ion-row style="font-size: 13px;">
          <ion-col>
            자영업하는 정로 님에게 도착한 익명 메시지
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col>
            “재미니 우리 언제마셔 ㅠ"
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col>
            같이 하고 싶은 것 : 술마시기🍷
          </ion-col>
        </ion-row>
        <ion-row style="text-align: center;">
          <ion-col>
            <span style="letter-spacing: -1px; font-size: 15px; color: #888888;">2023년 06월 14일 10:22</span>
          </ion-col>
        </ion-row>
      </ion-grid>

      <ion-grid style="margin: 15px; text-align: center;">
        <ion-row>
          <ion-col>
            <ion-text style="font-size: 13px; border-bottom: 1px solid black;">
              더 조회하기
            </ion-text>
          </ion-col>
        </ion-row>
      </ion-grid>

    </ion-content>


  </ion-page>
</template>

<script>
  import {
    IonItem, IonIcon, IonButtons, IonToolbar, IonContent,
    IonPage, IonButton, IonLabel, IonAvatar,
  } from '@ionic/vue';
  import {chevronBack, copyOutline} from 'ionicons/icons';

  export default {
    components: {
      IonItem, IonIcon, IonButtons, IonToolbar, IonContent,
      IonPage, IonButton, IonLabel, IonAvatar,
    },
    data() {
      return {
        copyOutline, chevronBack,

        segmentValue: 'use'
      };
    },

    created() {

    },

    methods: {

      changeSegment(event) {
        this.segmentValue = event.detail.value;

      },
    },
  };
</script>

<style scoped>


  ion-toolbar {
    --background: #fff;
  }

  ion-icon {
    color: black;
  }
.ioncols {
  height: 100%;
  display: flex;
  align-items: center;
}
</style>
