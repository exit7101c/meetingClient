<template>
  <ion-page id="test">

    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-button @click="$router.go(-1)">
            <ion-icon slot="icon-only" :icon="chevronBack" />
          </ion-button>
        </ion-buttons>
        <ion-buttons slot="end">
          <ion-button @click="$router.push('/store')">
            <ion-icon slot="icon-only" size="large" :icon="storefrontOutline" style="color: black;" />
          </ion-button>
          <ion-button @click="$router.push('/alarm')">
            <ion-icon slot="icon-only" size="large" :icon="notificationsOutline" style="color: black;" />
            <div class="sticker" />
          </ion-button>
        </ion-buttons>
      </ion-toolbar>

      <!-- 배너 -->
      <ion-card>
        <ion-card-content style="padding:0px; height:80px">
          <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
        </ion-card-content>
      </ion-card>
      <!-- /배너 -->

      <ion-toolbar>
        <ion-title style="font-weight: bolder; text-align: center; color: black">쪽지함<br>
          <span style="font-size: 14px; text-align: center; color: #cccccc;">익명으로 쪽지를 주고 받으세요</span>
        </ion-title>
      </ion-toolbar>

    </ion-header>

    <ion-content style="top: 15px;">

      <!-- 메뉴 탭 -->
      <ion-segment v-model="segmentValue">
        <ion-segment-button value="light" @click="changeSegment($event)">
          <ion-label style="font-weight: bolder">받은 쪽지</ion-label>
        </ion-segment-button>
        <ion-segment-button value="segment" @click="changeSegment($event)">
          <ion-label style="font-weight: bolder">보낸 쪽지</ion-label>
        </ion-segment-button>
      </ion-segment>
      <!-- 메뉴 탭 -->

      <!-- 받은 쪽지 -->
      <template v-if="segmentValue == 'light'">
        <ion-content>
          <ion-list lines="none">
            <ion-item v-for="(data, index) in postList" :key="index" style="margin-top: -10px;">
              <ion-label>
                <ion-row style="border: 1px solid #cccccc; ">
                  <ion-item button @click="goLetterDetailView(data.letterKey)" style="width: 100%">
                    <ion-icon size="large" :icon="mailOutline" />&nbsp;
                    <div v-if="data.isRed" class="letter-sticker" />
                    <span style="font-size: 16px; ">{{ data.title }}</span>
                    <span style="font-size: 10px; color: #cccccc;">&nbsp;&nbsp;{{ data.sendTimeStr }}</span>
                    <ion-buttons slot="end" style="font-size: 14px;">
                      <ion-subtitle style="display: flex; align-items: center;">
                        <!-- 아이콘 이미지 수정 예정 -->
                        <img src="" style="width: 30px; height: 30px; " />
                        &nbsp;{{ data.sendNm }}
                      </ion-subtitle>
                    </ion-buttons>
                  </ion-item>
                </ion-row>
              </ion-label>
            </ion-item>
          </ion-list>
        </ion-content>
      </template>
      <!-- 받은 쪽지 -->

      <!-- 보낸 쪽지 -->
      <template v-else-if="segmentValue == 'segment'">
        <ion-content>
          <ion-list lines="none">
            <ion-item v-for="(data, index) in sendList" :key="index" style="margin-top: -10px;">
              <ion-label>
                <ion-row style="border: 1px solid #cccccc; ">
                  <ion-item button @click="goLetterDetailView(data.letterKey)" style="width: 100%">
                    <ion-icon size="large" :icon="mailOutline" />&nbsp;
                    <div v-if="data.isRed" class="sticker" />
                    <span style="font-size: 16px; ">{{ data.title }}</span>
                    <span style="font-size: 13px; color: #cccccc;">&nbsp;&nbsp;{{ data.sendTimeStr }}</span>
                    <ion-buttons slot="end" style="font-size: 14px;">
                      <ion-subtitle style="display: flex; align-items: center;">
                        <img src="" style="width: 30px; height: 30px;" />
                        &nbsp;{{ data.receptNm }}
                      </ion-subtitle>
                    </ion-buttons>
                  </ion-item>
                </ion-row>
              </ion-label>
            </ion-item>
          </ion-list>
        </ion-content>
      </template>
      <!-- 보낸 쪽지 -->
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonButtons, IonToolbar, IonTitle, IonContent, IonPage, IonLabel, IonSegment, IonRow,
  IonList, IonItem, IonSegmentButton, IonCard, IonCardContent, IonButton, IonIcon
} from "@ionic/vue";
import { chevronBack, storefrontOutline, notificationsOutline, mailOutline } from "ionicons/icons";

import { IonRouterOutlet } from "@ionic/vue";
import { getData, joinMap } from "@/assets/js/common";
//import { createGesture } from '@ionic/vue';


export default {
  components: {
    IonButtons, IonToolbar, IonTitle, IonContent, IonLabel, IonSegment, IonPage, IonRow,
    IonList, IonItem, IonSegmentButton, IonCard, IonCardContent, IonButton, IonIcon
  },
  data() {
    return {
      chevronBack,
      storefrontOutline,
      notificationsOutline,
      mailOutline,

      IonRouterOutlet,

      showSticker: true,
      segmentValue: "light",

      postList: [],
      sendList: []
    };
  },
  ionViewWillEnter() {
    // 진입할 때 호출
    this.getPostLetterList();
  },
  ionViewDidLeave() {
    // 떠날 때 호출
  },
  mounted() {
  },
  methods: {

    goLetterDetailView(letterKey) {
      joinMap({ "letterKey": letterKey });
      this.$router.push({ name: "Note", params: { letterKey: letterKey } });
    },

    /** 받은 쪽지 리스트 **/
    async getPostLetterList() {
      await getData({
        url: "/getReceptLetterList",
        param: {},
        target: this,
        then: data => {
          this.postList = data;
        }
      });
    },

    /** 보낸 쪽지 리스트 **/
    async getSendLetterList() {
      await getData({
        url: "/getSendLetterList",
        param: {},
        target: this,
        then: data => {
          this.sendList = data;
        }
      });
    },

    /** 받은/보낸쪽지 변경바 **/
    changeSegment(e) {
      this.segmentValue = e.detail.value;
      // 버튼눌렀을때 새로 불러옴.
      if (this.segmentValue !== "light") {
        this.getSendLetterList();
      } else {
        this.getPostLetterList();
      }
    }
  }

};
</script>

<style scoped>
.example-content {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.alarm {
  position: absolute;
  top: 1px;
  right: -5px;
  font-size: 4px;
}

ion-toolbar {
  --background: #fff;
}

ion-icon {
  color: black;
}

.letter-sticker::after {
  content: "";
  position: absolute;
  top: 8px;
  left: 20px;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: red;
}
</style>
  