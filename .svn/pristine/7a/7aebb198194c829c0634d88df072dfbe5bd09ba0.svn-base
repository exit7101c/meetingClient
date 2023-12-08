<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <BackButton @event="goRouter" :custom="true" />
        </ion-buttons>
        <ion-title>소모임 이용안내</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">

      <!-- 1번 내용 -->
      <ion-img :src="'https://cmdg.speedycdn.net/202308/2023081110210966.png'" />
      <br />

      <!-- 2번 내용 -->
      <ion-img :src="'https://cmdg.speedycdn.net/202308/2023081110205686.png'" />
      <br />

      <!-- 3번 내용 -->
      <ion-img :src="'https://cmdg.speedycdn.net/202308/2023081110211546.png'" />
      <br />

      <!-- 4번 내용 -->
      <ion-img :src="'https://cmdg.speedycdn.net/202308/2023081110212288.png'" />
      <br />

      <!-- 5번 내용 -->
      <ion-img :src="'https://cmdg.speedycdn.net/202308/2023081110212758.png'" />

      <!-- 공지/안내 -->
      <!--      <NotificationGuideItem-->
      <!--        v-for="item in itemList"-->
      <!--        :item="item"-->
      <!--      />-->
      <!-- 공지/안내 -->

    </ion-content>
  </ion-page>
</template>

<script>
import { openChatWriteMap, openChatWriteMapFn } from "@/assets/js/common.js";
import NotificationGuideItem from "@/components/Notification/NotificationGuideItem.vue";

export default {
  inject: ["alertController"],
  components: {
    NotificationGuideItem
  },
  data() {
    return {};
  },
  ionViewWillEnter() {
    // 진입할 때 호출
  },
  ionViewDidLeave() {
    // 떠날 때 호출
  },
  methods: {

    goRouter() {
      if (openChatWriteMap.page === "openChatWrite") {
        openChatWriteMapFn({ type: "guide", openChatKey: "" });
        this.$router.push("/openChatWrite");
      } else {
        this.$router.go(-1);
      }
    }
  }
};
</script>


<style scoped lang="scss">
</style>
