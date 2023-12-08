<template>
    <ion-page>
        <ion-header>
            <!-- 툴바 -->
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-button @click="$router.go(-1)">
                        <ion-icon slot="icon-only" :icon="chevronBack" />
                    </ion-button>
                </ion-buttons>
                <ion-title style="text-align: center; font-weight: bolder;">익명님의 쪽지</ion-title>
                <ion-buttons slot="end">
                    <ion-button @click="$router.go(-1)">
                        <ion-label style="font-size: 20px; font-weight: bolder; color: #8c8c8c;">답장</ion-label>
                    </ion-button>
                </ion-buttons>
            </ion-toolbar>
            <!-- 툴바 -->
        </ion-header>

        <!-- 쪽지 -->
        <ion-content v-if="dataMap != null">
            <ion-grid>
                <ion-row>
                    <ion-col size="12" style="text-align: center;" >
                        <span class="timebox">{{ dataMap.sendTimeStr }}</span>
                    </ion-col>
                </ion-row>
            </ion-grid>

            <ion-card class="message-card">

                <ion-grid>
                    <ion-row>
                        <ion-col size="12" class="nickname">
                            <span style="font-weight: bolder; font-size: 20px;">{{ dataMap.title }}</span>
<!--                            <span class="date">3월 10일</span>-->
                        </ion-col>
                    </ion-row>
                </ion-grid>

                <ion-grid>
                    <ion-row>
                        <ion-col size="12" class="wrap-text">
                          {{ dataMap.contents }}
                        </ion-col>
                    </ion-row>
                </ion-grid>

            </ion-card>

        </ion-content>
        <!-- 쪽지 -->

    </ion-page>
</template>
  
<script>
import { IonButtons, IonHeader, IonToolbar, IonTitle, IonContent, IonPage } from '@ionic/vue';
import { chevronBack } from 'ionicons/icons';
import {getData, tempMap} from "@/assets/js/common";

export default {
  components: {
    IonButtons, IonHeader, IonToolbar, IonTitle, IonContent, IonPage,
  },
  data() {
    return {
      chevronBack
      , letterKey: ''
      , dataMap: null
    };
  },
  ionViewWillEnter() {
    // 진입할 때 호출
    this.letterKey = tempMap.letterKey;
    this.getLetterDetail();
  },
  ionViewDidLeave() {
    // 떠날 때 호출
  },
  mounted() {
  },

  methods: {

    getResult() {
      var resultObj = {};

      return resultObj;
    },

    /** 받은 쪽지 리스트 **/
    async getLetterDetail() {
      await getData({
        url: '/getLetterDetail',
        param: {letterKey: this.letterKey},
        target: this,
        then: data => {
          this.dataMap = data;
        }
      });
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
.timebox{
    color: white;
    font-size: 15px;
    padding: 2px 30px 2px 30px;
    background-color: grey;
    border-radius: 10px;
}
.message-card {
    background-color: #ededed;
    border-radius: 10px;
    margin: 10px 20px 20px 20px;
    padding: 10px;
}

.nickname {
    margin-top: -5px;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    font-size: 18px;
    font-weight: bold;
}

.date {
    font-size: 12px;
}

.message {
    margin-top: 10px;
}
ion-row{
    font-weight: bolder;
    font-size: 15px;
    text-align: left;
    color: black
}

.wrap-text {
    white-space: pre-wrap;
    word-wrap: break-word;
}
</style>
  