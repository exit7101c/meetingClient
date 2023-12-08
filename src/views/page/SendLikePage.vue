<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-button @click="$router.go(-1)">
            <ion-icon slot="icon-only" :icon="chevronBack" />
          </ion-button>
        </ion-buttons>
        <ion-title>호감보내기</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>

      <div style="display: flex;">
        <ion-card style="flex: 1; height: 230px;" v-on:click="changeRadio('1')" v-bind:style="this.radioValue === 1 ? '--background: #c3ffd9' : ''">
          <ion-card-header>
            <ion-card-title style="width: 100%; text-align: center;">🥰</ion-card-title>
            <ion-card-subtitle style="font-size: 20px; text-align: center; color: black;">매너호감</ion-card-subtitle>
            <div style="text-align: center;">상대 수락 시</div>
            <div style="font-size: 18px; font-weight: 600; text-align: center; color: black;">연락가능</div>
          </ion-card-header>

          <ion-card-content style="top: 45px;">
            <div style="text-align: center;">
              <ion-icon :icon="diamondOutline"></ion-icon>
              <span> 무료</span>
            </div>
          </ion-card-content>
        </ion-card>

        <ion-card style="flex: 1;" v-on:click="changeRadio('2')" v-bind:style="this.radioValue === 2 ? '--background: #c3ffd9' : ''">
          <ion-card-header>
            <ion-card-title style="width: 100%; text-align: center;">🥰</ion-card-title>
            <ion-card-subtitle style="font-size: 20px; text-align: center; color: black;">직진호감</ion-card-subtitle>
            <div style="text-align: center;">상대 수락 시</div>
            <div style="font-size: 18px; font-weight: 600; text-align: center; color: black;">연락가능</div>
          </ion-card-header>

          <ion-card-content>
            <div style="text-align: center; color: yellowgreen;">다이아를</div>
            <div style="text-align: center; color: yellowgreen;">선물해요</div>
            <ion-icon :icon="diamondOutline"></ion-icon>
            <span> 500개 선물</span>
          </ion-card-content>
        </ion-card>
      </div>

      <div style="display: flex; margin-top: -20px;">
        <ion-card style="flex: 1;" v-on:click="changeRadio('3')" v-bind:style="this.radioValue === 3 ? '--background: #c3ffd9' : ''">
          <ion-card-header>
            <ion-card-title style="width: 100%; text-align: center;">🥰</ion-card-title>
            <ion-card-subtitle style="font-size: 20px; text-align: center; color: black;">ㅁㅁ호감</ion-card-subtitle>
            <div style="text-align: center;">상대 수락 시</div>
            <div style="font-size: 18px; font-weight: 600; text-align: center; color: black;">연락가능</div>
          </ion-card-header>

          <ion-card-content>
            <div style="text-align: center; color: yellowgreen;">다이아를</div>
            <div style="text-align: center; color: yellowgreen;">선물해요</div>
            <ion-icon :icon="diamondOutline"></ion-icon>
            <span> 1,500개 선물</span>
          </ion-card-content>
        </ion-card>

        <ion-card style="flex: 1;" v-on:click="changeRadio('4')" v-bind:style="this.radioValue === 4 ? '--background: #c3ffd9' : ''">
          <ion-card-header>
            <ion-card-title style="width: 100%; text-align: center;">🥰</ion-card-title>
            <ion-card-subtitle style="font-size: 20px; text-align: center; color: black;">ㅂㅂ호감</ion-card-subtitle>
            <div style="text-align: center;">상대 수락 시</div>
            <div style="font-size: 18px; font-weight: 600; text-align: center; color: black;">연락가능</div>
          </ion-card-header>

          <ion-card-content>
            <div style="text-align: center; color: yellowgreen;">다이아를</div>
            <div style="text-align: center; color: yellowgreen;">선물해요</div>
            <ion-icon :icon="diamondOutline"></ion-icon>
            <span> 2,500개 선물</span>
          </ion-card-content>
        </ion-card>
      </div>

      <div style="padding-left: 15px;">
        <div style="flex: 1;">
          <ion-icon :icon="checkmarkCircle" size="small"></ion-icon>
          <span style="font-size: 13px;">좋은 호감을 보낼수록 상대방이 수락 할 확률이 올라가요!</span>
        </div>
        <div style="flex: 1;">
          <ion-icon :icon="checkmarkCircle" size="small"></ion-icon>
          <span style="font-size: 13px;">보낸 다이아는 상대방이 수락 시 상대방에게 선물되며 거부 시 다이아는 반환됩니다.</span>
        </div>
      </div>

      <div>
        <ion-item style="width: 93%;">
          <ion-icon :icon="mailOutline"></ion-icon>
          <ion-input style="margin-left: 5px;" placeholder="간단한 인사말을 적어보세요" ></ion-input>
        </ion-item>
        <ion-button style="margin-left: 20px; width: 90%; color:white;" expand="full" color="warning">보내기</ion-button>
      </div>


      <div>
        <ion-radio-group v-model="radioValue" :value="radioValue" style="display:block; width: 100%; height: 100%;">
            <ion-radio style="position: absolute; top:30px; left: 155px;" value="1"></ion-radio>
            <ion-radio style="position: absolute; top:30px; left: 350px;" value="2"></ion-radio>
            <ion-radio style="position: absolute; top:310px; left: 155px;" value="3"></ion-radio>
            <ion-radio style="position: absolute; top:310px; left: 350px;" value="4"></ion-radio>
        </ion-radio-group>
      </div>

    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonIcon, IonButton
  , IonButtons
  , IonRadio, IonRadioGroup
  , IonItem, IonInput
  , IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle
} from '@ionic/vue';

import {happyOutline, diamondOutline, checkmarkCircle, mailOutline, chevronBack} from 'ionicons/icons';

export default {
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonIcon, IonButton
                , IonButtons
                , IonRadio, IonRadioGroup
                , IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle
                , IonItem, IonInput
  },
  data() {
    return {
      radioValue: '1'
      , happyOutline, diamondOutline, checkmarkCircle, mailOutline, chevronBack
    };
  },
  methods: {
    changeRadio(value){
      this.radioValue = value;
    }
  },
};
</script>

<style scoped>

</style>
