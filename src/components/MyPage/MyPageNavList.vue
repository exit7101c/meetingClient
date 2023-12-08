<template>
  <ion-list lines="none">
    <MyPageNavItem
      v-if="isPartner == 'Y'"
      :icon="pencilIcon"
      title="파트너 정보 수정"
      @click="$router.push('/partnersSetting')"
    />
    <MyPageNavItem
      :icon="pencilIcon"
      title="프로필 수정"
      @click="$router.push('/profile')"
    />
    <MyPageNavItem
      :icon="notificationIcon"
      title="공지 / 안내"
      @click="$router.push('/notification')"
    />
    <MyPageNavItem
      :icon="userIcon"
      title="친구 초대"
      @click="$router.push('/invite')"
    />
    <!--    <MyPageNavItem-->
    <!--      :icon="userVanIcon"-->
    <!--      title="지인 연락처 차단"-->
    <!--      @click="$router.push('/invite')"-->
    <!--    />-->
    <MyPageNavItem
      :icon="settingIcon"
      title="설정"
      @click="$router.push('/setting')"
    />
    <MyPageNavItem :icon="adIcon" title="프로필AD" @click="profileModalBtn" />
    <MyPageNavItem :icon="mailIcon" title="문의하기" @click="inquiryClick" />
    <MyPageNavItem
      :icon="userIcon"
      title="차단목록"
      @click="$router.push('/blockList')"
    />
    <!--    <MyPageNavItem-->
    <!--      :icon="diamondIcon"-->
    <!--      title="인증뱃지"-->
    <!--      @click="$router.push('/certification')"-->
    <!--    />-->
    <!--     <MyPageNavItem-->
    <!--      :icon="adIcon"-->
    <!--      title="ASK ME"-->
    <!--      @click="$router.push('/askMeList')"-->
    <!--    />-->
  </ion-list>
</template>
<script>
import MyPageNavItem from "@/components/MyPage/MyPageNavItem.vue";
import IconMyPencil from "@/assets/img/icon/icon_my_pencil.svg";
import IconMyUser from "@/assets/img/icon/icon_my_user.svg";
import IconMyUserVan from "@/assets/img/icon/icon_my_user_van.svg";
import IconMyNotification from "@/assets/img/icon/icon_my_notification.svg";
import IconMySetting from "@/assets/img/icon/icon_my_setting.svg";
import IconMyAd from "@/assets/img/icon/icon_my_ad.svg";
import IconMailOutline from "@/assets/img/icon/icon_my_mail.svg";
import IconDiamond from "@/assets/img/icon/icon_diamond.svg";

export default {
  name: "MyPageNavList",
  props: {
    isPartner: {
      type: String
    }
  },
  components: {
    MyPageNavItem
  },
  data() {
    return {
      pencilIcon: IconMyPencil,
      userIcon: IconMyUser,
      userVanIcon: IconMyUserVan,
      notificationIcon: IconMyNotification,
      settingIcon: IconMySetting,
      adIcon: IconMyAd,
      mailIcon: IconMailOutline,
      diamondIcon: IconDiamond
    };
  },
  methods: {
    profileModalBtn() {
      this.$emit("profileModalBtn");
    },
    inquiryClick() {
      location.href = "mailto:info@cmdg.co.kr";
      // <a href="mailto:info@cmdg.co.kr">링크걸릴 텍스트</a>
    }
  }
};
</script>
<style lang="scss" scoped></style>
