<template>
  <ion-page>
    <ion-header>
      <ion-toolbar class="join-toolbar">
        <ion-buttons slot="start">
          <BackButton />
        </ion-buttons>
        <ion-title>공지/안내</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <div class="ion-padding">
        <div class="row-box">
          <CardBox padding="sm" shadow="light">
            <ion-list lines="none">
              <MyPageNavItem
                title="공지 사항"
                @click="$router.push('/notificationAnnouncement')"
              />
              <MyPageNavItem
                title="규정 안내"
                @click="$router.push('/notificationRule')"
              />
              <!--              <MyPageNavItem-->
              <!--                title="이벤트 공지"-->
              <!--                @click="$router.push('/NotificationEvent')"-->
              <!--              />-->
              <MyPageNavItem
                title="NAVY 알아보기"
                @click="$router.push('/notificationWhoIsNAVY')"
              />
            </ion-list>
          </CardBox>
        </div>
        <div class="row-box">
          <CardBox padding="sm" shadow="light">
            <ion-list lines="none">
              <!--              <MyPageNavItem-->
              <!--                title="초이스 이용안내"-->
              <!--                @click="$router.push('/notificationChoiceGuide')"-->
              <!--              />-->
              <MyPageNavItem
                title="소모임 이용안내"
                @click="$router.push('/notificationOpenChatGuide')"
              />
              <MyPageNavItem
                title="커뮤니티 이용안내"
                @click="$router.push('/notificationCommunityGuide')"
              />
              <!--              <MyPageNavItem-->
              <!--                title="VIP라운지 이용안내"-->
              <!--                @click="$router.push('/loungeGuide')"-->
              <!--              />-->
              <!--              <MyPageNavItem-->
              <!--                title="스토어 이용안내"-->
              <!--                @click="$router.push('/loungeGuide')"-->
              <!--              />-->
            </ion-list>
          </CardBox>
        </div>
        <div class="row-box">
          <CardBox shadow="light" @click="inquiryClick">
            <ion-row>
              <ion-col size="4">
                <ion-text>문의하기</ion-text>
              </ion-col>
              <ion-col size="8" class="text-right">
                <ion-text>평일 AM 10:00 ~ PM 18:00</ion-text>
              </ion-col>
            </ion-row>
          </CardBox>
        </div>
      </div>
      <custom-footer absolute></custom-footer>
    </ion-content>
    <ion-footer>
      <MyPageVersionInfo />
    </ion-footer>
  </ion-page>
</template>

<script>
import CardBox from "@/components/CardBox.vue";
import MyPageNavItem from "@/components/MyPage/MyPageNavItem.vue";
import MyPageVersionInfo from "@/components/MyPage/MyPageVersionInfo.vue";

export default {
  name: "Notification",
  components: {
    CardBox,
    MyPageNavItem,
    MyPageVersionInfo
  },
  methods: {
    inquiryClick() {
      location.href="mailto:info@cmdg.co.kr";
    }
  }
};
</script>

<style scoped></style>
