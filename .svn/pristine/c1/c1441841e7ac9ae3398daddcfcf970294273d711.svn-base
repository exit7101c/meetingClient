<template>
  <ion-page>
    <ion-header>
      <ion-toolbar class="join-toolbar">
        <ion-buttons slot="start">
          <BackButton />
        </ion-buttons>
        <ion-title>규정 안내</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <div class="ion-padding">
        <div class="row-box">
          <CardBox padding="sm" shadow="light">
            <ion-list lines="none">
              <MyPageNavItem
                title="신고처리 방안"
                @click="$router.push('/notificationPolice')"
              />
              <MyPageNavItem
                title="소모임 인기도 안내"
                @click="$router.push('/notificationOpenChat')"
              />
            </ion-list>
          </CardBox>
        </div>
      </div>
      <!--      <custom-footer absolute></custom-footer>-->
    </ion-content>
    <!--    <ion-footer>-->
    <!--      <MyPageVersionInfo />-->
    <!--    </ion-footer>-->
  </ion-page>
</template>

<script>
import CardBox from "@/components/CardBox.vue";
import MyPageNavItem from "@/components/MyPage/MyPageNavItem.vue";
import MyPageVersionInfo from "@/components/MyPage/MyPageVersionInfo.vue";

export default {
  name: "NotificationRule",
  components: {
    CardBox,
    MyPageNavItem,
    MyPageVersionInfo
  },
  methods: {
    routerBtn(type) {
      switch (type) {
        case "choice":
          this.$router.push("/notificationChoiceGuide");
          break; // 초이스 가이드
        case "open":
          this.$router.push("/notificationOpenChatGuide");
          break; // 소모임 가이드
        case "community":
          this.$router.push("/notificationCommunityGuide");
          break; // 소모임 가이드
      }
    }
  }
};
</script>

<style scoped lang="scss">
ion-content {
  &::part(scroll) {
    overflow: hidden;
  }
}
</style>
