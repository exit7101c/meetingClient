<template>
  <ion-item lines="none" class="community-ion-item" @click="handleClick">
    <ion-avatar slot="start" style="margin: 0">
      <img
        v-if="thumbnail !== null"
        :src="'https://' + thumbnail"
        @ionError="
          $event.srcElement.src = require('../../assets/img/Loading_icon.gif')
        "
      />
      <ion-img
        v-if="thumbnail === null"
        :src="'https://cmdg.speedycdn.net/202308/20230807145058_a09c4c1d-0775-4559-bb58-e1926296b702.jpeg'"
        @ionError="
          $event.srcElement.src = require('../../assets/img/Loading_icon.gif')
        "
      />
    </ion-avatar>
    <ion-label style="margin-left: 10px;">
      <ion-text color="light" class="text-lg">{{ detail.nick }}</ion-text>
      <!--      <ion-text color="light" class="text-lg" id="community-profile-popover-button">{{-->
      <!--          detail.communityNick-->
      <!--        }}-->
      <!--      </ion-text>-->
      <ion-chip class="chip-sm chip-secondary" v-if="detail?.isRegYn === 'Y'" style="padding: 3px; background: #6349a0">
        내가작성
      </ion-chip>
    </ion-label>
    <!--    <ion-text color="light" class="text-xs"-->
    <!--    >{{ detail.createdDtMm }} · 읽음 {{ detail.viewCnt }}-->
    <!--    </ion-text-->
    <!--    >-->
    <!--    <ion-button fill="clear" @click="handleBookmark">-->
    <!--      <ion-icon-->
    <!--        color="light"-->
    <!--        slot="icon-only"-->
    <!--        :icon="bookmarkYn === 'Y' ? bookmark : bookmarkOutline"-->
    <!--      />-->
    <!--    </ion-button>-->
  </ion-item>
  <!--  <ion-popover-->
  <!--    trigger="community-profile-popover-button"-->
  <!--    :dismiss-on-select="true"-->
  <!--    mode="ios"-->
  <!--    v-if="detail?.isRegYn === 'N'"-->
  <!--  >-->
  <!--    <ion-content>-->
  <!--      <ion-list lines="full">-->
  <!--        <ion-item-->
  <!--          :button="true"-->
  <!--          :detail="false"-->
  <!--          @click="handleLetterBtn"-->
  <!--          class="appfontB"-->
  <!--        >익명 메세지-->
  <!--        </ion-item-->
  <!--        >-->
  <!--      </ion-list>-->
  <!--    </ion-content>-->
  <!--  </ion-popover>-->
</template>
<script>
import { bookmark, bookmarkOutline } from "ionicons/icons";

export default {
  name: "CommunityViewUserInfo",
  props: {
    thumbnail: {
      type: String
    },
    detail: {
      type: Object
    },
    bookmarkYn: {
      type: String
    },
    dropYn: {
      type: String
    }
  },
  data() {
    return {
      bookmark,
      bookmarkOutline
    };
  },
  methods: {
    handleClick() {
      this.$emit("handleClick");
    },
    handleBookmark() {
      this.$emit("bookmark");
    },
    handleLetterBtn() {
      this.$emit("handleLetterBtn");
    }
  }
};
</script>
<style lang="scss" scoped>
.community-ion-item {
  padding: 10px 0;
  --padding-start: 0;
  --inner-padding-end: 0;
}
</style>
