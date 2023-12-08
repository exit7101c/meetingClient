<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title style="font-size: 24px; font-weight: 700;">Daily Dating</ion-title>
        <ion-buttons slot="start">
          <ion-button @click="$router.push('/messageMain')">
            <ion-icon slot="icon-only" :icon="chatboxOutline" style="color: black;"></ion-icon>
          </ion-button>
          <ion-button @click="$router.push('/myLike')">
            <ion-icon slot="icon-only" :icon="heartCircleOutline" style="color: black;"></ion-icon>
          </ion-button>
        </ion-buttons>
        <ion-buttons slot="end">
          <ion-button @click="$router.push('/store')">
            <ion-icon slot="icon-only" :icon="storefrontOutline" style="color: black;"></ion-icon>
          </ion-button>
          <ion-button @click="$router.push('/alarm')">
            <ion-icon slot="icon-only" size="large" :icon="notificationsOutline" style="color: black;" />
            <ion-badge class="alarm" color="danger">90</ion-badge>
            <!--              <ion-icon slot="icon-only" :icon="alertOutline" style="color: black;"></ion-icon>-->
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-segment color="medium" @ionChange="changeSegment" :value="segmentValue">
        <ion-segment-button value="daily">
          <ion-label>오늘의 카드</ion-label>
        </ion-segment-button>
        <ion-segment-button value="wait">
          <ion-label>기다리는 카드</ion-label>
        </ion-segment-button>
      </ion-segment>
      <template v-if="segmentValue == 'daily'">


      </template>
      <template v-else-if="segmentValue == 'wait'">
        <ion-card>
          <ion-card-header>
            <ion-card-title>BBBB Card Title</ion-card-title>
            <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
          </ion-card-header>

          <ion-card-content>
            Here's a small text description for the card content. Nothing more, nothing less.
          </ion-card-content>
        </ion-card>
      </template>
      <!--      <div class="example-content">Library</div>-->
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonLabel, IonButtons, IonButton, IonIcon
  , IonCard, IonCardHeader, IonCardContent, IonCardSubtitle, IonCardTitle
  , IonSegment, IonSegmentButton, IonBadge
} from "@ionic/vue";
import {
  chatboxOutline,
  heartCircleOutline,
  storefrontOutline,
  alertOutline,
  notificationsOutline
} from "ionicons/icons";

export default {
  components: {
    IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonLabel, IonButtons, IonButton, IonIcon
    , IonCard, IonCardHeader, IonCardContent, IonCardSubtitle, IonCardTitle
    , IonSegment, IonSegmentButton, IonBadge
  },
  data() {
    return {
      chatboxOutline,
      heartCircleOutline,
      storefrontOutline,
      alertOutline,
      notificationsOutline,
      segmentValue: "daily"
    };
  },
  methods: {
    changeSegment(e) {
      // segment는 v-model, :value 를 적용해도 바뀌지않음 change로 체크해서 직접 변경해줘야함
      this.segmentValue = e.detail.value;
    },
    dailyClick() {
      // this.$router.push({name: "Msg",params:{'channelId':this.channelId,'contactId':this.seq, 'userName': this.userName}});
      this.$router.push({ name: "DailyCardInfo" });
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

</style>
