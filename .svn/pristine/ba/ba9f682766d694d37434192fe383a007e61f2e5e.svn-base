<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <BackButton @event="goRouter" :custom="true" />
        </ion-buttons>
        <ion-title>초이스 이용안내</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      
      <ion-item lines="none">
        <ion-label>
          <ion-text color="light">
            <h3>초이스를 100% 활용해보자!</h3>
          </ion-text>
          <ion-text color="light" class="text-md">
            초이스는 내 주변사람을 바탕으로 이상형의 남자를 찾고 매칭까지 이어질 수 있는 공간입니다.
          </ion-text>
        </ion-label>
      </ion-item>

      <!-- 공지/안내 -->
      <NotificationGuideItem
        v-for="item in itemList"
        :item="item"
      />
      <!-- 공지/안내 -->

    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonButtons, IonHeader, IonToolbar, IonContent, IonPage,
  IonList, IonItem, IonIcon, IonButton, IonGrid, IonRow, IonText, IonCol
} from "@ionic/vue";
import { chevronBack, chevronForward, chevronDownCircleOutline } from "ionicons/icons";
import { getData, communityWriteMapFn, communityWriteMap } from "@/assets/js/common.js";
import NotificationGuideItem from "@/components/Notification/NotificationGuideItem.vue";

export default {
  inject: ["alertController"],
  components: {
    NotificationGuideItem,
    IonButtons, IonHeader, IonToolbar, IonContent,
    IonPage, IonList, IonItem, IonIcon, IonButton, IonGrid, IonRow, IonText, IonCol
  },

  data() {
    return {
      itemList: []
    };
  },
  ionViewWillEnter() {
    // 진입할 때 호출
  },
  ionViewDidLeave() {
    // 떠날 때 호출
  },
  methods: {
    goRouter() {
      if (communityWriteMap.page === "communityWrite") {
        communityWriteMapFn({ type: communityWriteMap.type });
        this.$router.push("/communityWrite");
      } else {
        this.$router.go(-1);
      }
    },
    /** 경고 팝업창 **/
    async warningAlert(message) {
      const alert = await this.alertController
        .create({
          header: "",
          subHeader: "",
          message: message,
          buttons: ["OK"]
        });
      return alert.present();
    },

  }
};
</script>


<style scoped lang="scss">
ion-item {
  --padding-top: 6px;
  --padding-bottom: 6px;

  ion-label {
    h3 {
      font-size: 18px;
      font-weight: bold;
      text-overflow: ellipsis;
      overflow: hidden;
    }

    span {
      font-size: 14px;
      display: inline-block;
      min-width: 24px;

      + span {
        margin-left: 10px;
      }
    }
  }
}

</style>
