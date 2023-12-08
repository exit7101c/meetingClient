<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>참여자 목록</ion-title>
        <ion-buttons slot="end">
          <ion-button @click="$emit('close')">
            <ion-icon slot="icon-only" :icon="close" />
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list>
        <ion-item
            v-for="data in userRoomList"
            :key="data.userId"
            @click="openProfile(data.userId, data.nick)" >
          {{ data.nick }}
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonIcon, IonContent, IonList, IonItem } from '@ionic/vue';
import { close } from "ionicons/icons";

export default {
  name: "MessageTalkUserListModal",
  components: {
    IonPage, IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonIcon,
    IonContent, IonList, IonItem,
  },
  props: {
    userRoomList: Array,
  },
  ionViewWillEnter() {

  },
  setup() {
    return {
      close,
    };
  },
  methods: {
    openProfile(userId, userNick) {
      this.$emit("open-profile", { userId, userNick });
    },
  },
}
</script>

<style scoped>

/*:host {*/
/*  --width: 75%;*/
/*  --height: 100%;*/
/*  --border-radius: 0;*/
/*  --box-shadow: none;*/
/*}*/

</style>
