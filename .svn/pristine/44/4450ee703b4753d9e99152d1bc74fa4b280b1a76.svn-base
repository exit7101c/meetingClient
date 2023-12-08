<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-button @click="$router.go(-1)">
            <ion-icon slot="icon-only" :icon="chevronBack" />
          </ion-button>
        </ion-buttons>
        <ion-title>MY 호감 목록</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-segment color="medium" @ionChange="changeSegment" :value="segmentValue">
        <ion-segment-button value="received">
          <ion-label>내가 받은호감</ion-label>
        </ion-segment-button>
        <ion-segment-button value="send">
          <ion-label>내가 보낸호감</ion-label>
        </ion-segment-button>
      </ion-segment>
      <template v-if="segmentValue === 'received'">
        <ion-content>
          <div class="ion-padding">
            <ion-label v-for="(present, idx) in presentList" v-bind:key="idx">
              <p>2023.03.07 23:38</p>
              <h2 style="font-weight: 700;">호감을 받았어요🥰</h2>
              <h3>토끼님이 호감과 함께 2,500다이아를 선물했어요</h3>
              <h3>받은 호감을 수락하면 보낸 다이아를 받고 상대방과</h3>
              <h3>대화를 이어 나갈 수 있어요</h3>
              <div>
                <h2 style="font-weight: 700;">
                  토끼님
                  <ion-badge style="vertical-align: middle; --background: #dd7c7c; margin-top: -5px;"
                             @click="$router.push('/dailyCardInfo')">프로필보기
                  </ion-badge>
                </h2>
                <div style="display: flex;">
                  <ion-avatar slot="start">
                    <img alt="Silhouette of a person's head"
                         src="https://ionicframework.com/docs/img/demos/avatar.svg" />
                  </ion-avatar>
                  <ion-card style="margin-top:5px; --background: #cbcbcb; color:black;">
                    <ion-card-content>
                      <p>안녕하세요</p>
                      <p>만나서 반가워요!</p>
                    </ion-card-content>
                  </ion-card>
                </div>
                <div style="margin-top: -30px;">
                  <ion-card>
                    <ion-card-content>
                      <div style="margin-top: -5px;">
                        <ion-button style="width: 50px; height: 15px; font-size: 10px; --background: #eb4f34;"
                                    expand="full">받은선물
                        </ion-button>
                      </div>
                      <div style="text-align: center;">
                        <ion-icon slot="start" size="large" style="color: black;" :icon="diamondOutline" />
                        <span style="font-size: 30px; font-weight: 700;"> 2,500</span><span> 다이아</span>
                      </div>
                      <div v-if="present.received === 'default'" style="display: flex;">
                        <ion-button style="flex: 1; height: 30px;" @click="presentReceive(idx, present.id)">수락하기
                        </ion-button>
                        <ion-button style="flex: 1; height: 30px; --background: #cbcbcb; color:white;"
                                    @click="presentReject(idx, present.id)">거절하기
                        </ion-button>
                      </div>
                      <div v-else-if="present.received === true" style="text-align: center;">
                        <ion-badge style="height: 20px; --background: #cbcbcb; color:white;">수락됨</ion-badge>
                        <ion-badge style="--background: white; color: gray;">03/07 23:38</ion-badge>
                        <div style="display: flex;">
                          <div style="flex: 1; text-align: left;">
                            <p style="font-size: 16px; font-weight: 600;">선물 다이아 지급</p>
                            <ion-badge style="--background: white; color: gray; padding: 0;">03/07 23:38</ion-badge>
                          </div>
                          <div style="flex: 1; text-align: right; align-self: center;">
                            <p style="color: #4977df; font-size: 18px; font-weight: 600;">+300</p>
                          </div>
                        </div>
                        <div>
                          <ion-button style="font-size: 15px; height: 20px;" @click="$router.push('/messageTalk')">대화
                            시작하기
                          </ion-button>
                        </div>
                      </div>
                      <div v-else-if="present.received === false" style="text-align: center;">
                        <ion-badge style="height: 20px; --background: #cbcbcb; color:white;">거절됨</ion-badge>
                        <ion-badge style="--background: white; color: gray;">03/07 23:38</ion-badge>
                      </div>
                    </ion-card-content>
                  </ion-card>
                </div>
              </div>
            </ion-label>
          </div>
        </ion-content>
      </template>
      <template v-else-if="segmentValue === 'send'">
      </template>
      <!--      <div class="example-content">Library</div>-->
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonLabel, IonButtons, IonButton,
  IonIcon, IonAvatar, IonBadge, IonCard, IonCardContent, IonSegment, IonSegmentButton
} from "@ionic/vue";

import { chevronBack, happyOutline, diamondOutline } from "ionicons/icons";

export default {
  components: {
    IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonLabel, IonButtons
    , IonButton, IonIcon, IonAvatar, IonBadge, IonCard, IonCardContent, IonSegment, IonSegmentButton
  },
  data() {
    return {
      chevronBack
      , happyOutline
      , diamondOutline
      , segmentValue: "received"
      , presentList: [{ id: 1, received: "default" }, { id: 2, received: "default" }]
    };
  },
  methods: {
    changeSegment(e) {
      // segment는 v-model, :value 를 적용해도 바뀌지않음 change로 체크해서 직접 변경해줘야함
      this.segmentValue = e.detail.value;
    },
    presentReceive(idx, id) {
      this.presentList[idx].received = true;
    },
    presentReject(idx, id) {
      this.presentList[idx].received = false;
    }
  }
};
</script>

<style scoped>

</style>
