<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <BackButton @event="goRouter" :custom="true" />
        </ion-buttons>
        <ion-title>커뮤니티 이용안내</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>

      <!-- 0번 내용 -->
      <ion-img :src="'https://cmdg.speedycdn.net/202308/2023081019564312.png'" />

      <!-- 1번 내용 -->
      <ion-img :src="'https://cmdg.speedycdn.net/202308/2023081019450798.png'" />

      <!-- 2번 내용 -->
      <ion-img :src="'https://cmdg.speedycdn.net/202308/2023081019451461.png'" />

      <!-- 3번 내용 -->
      <ion-img :src="'https://cmdg.speedycdn.net/202308/2023081019452331.png'" />

      <!-- 4번 내용 -->
      <ion-img :src="'https://cmdg.speedycdn.net/202308/2023081019452942.png'" />

      <!-- 5번 내용 -->
      <ion-img :src="'https://cmdg.speedycdn.net/202308/2023081019453638.png'" />

      <!-- 6번 내용 -->
      <ion-img :src="'https://cmdg.speedycdn.net/202308/2023081019454880.png'" />

      <!-- 7번 내용 -->
      <ion-img :src="'https://cmdg.speedycdn.net/202308/2023081019455456.png'" />

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
import { communityWriteMapFn, communityWriteMap } from "@/assets/js/common.js";
import NotificationGuideItem from "@/components/Notification/NotificationGuideItem.vue";

export default {
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
      if (communityWriteMap.page === "communityWrite") {
        communityWriteMapFn({ type: communityWriteMap.type });
        this.$router.push("/communityWrite");
      } else {
        this.$router.go(-1);
      }
    }

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
