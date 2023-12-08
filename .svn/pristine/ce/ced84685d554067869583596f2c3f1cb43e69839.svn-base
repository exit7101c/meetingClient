<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <BackButton @event="$router.push('/community')" :custom="true" />
        </ion-buttons>
        <ion-title>나의 커뮤니티</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <div class="sticky-top">
        <ion-segment
          v-model="segmentValue"
          mode="md"
          @ionChange="changeSegment"
        >
          <ion-segment-button value="post">
            <ion-row
              class="ion-align-items-center ion-justify-content-center gap-sm flex-nowrap"
            >
              <ion-icon :icon="communityIcon"></ion-icon>
              <ion-text>작성한 글</ion-text>
            </ion-row>
          </ion-segment-button>
          <ion-segment-button value="comment"
            ><ion-row
              class="ion-align-items-center ion-justify-content-center gap-sm flex-nowrap"
            >
              <ion-icon :icon="messageIcon"></ion-icon>
              <ion-text>댓글단 글</ion-text>
            </ion-row>
          </ion-segment-button>
          <ion-segment-button value="bookmark">
            <ion-row
              class="ion-align-items-center ion-justify-content-center gap-sm flex-nowrap"
            >
              <ion-icon :icon="bookmarkOutline"></ion-icon>
              <ion-text>북마크</ion-text>
            </ion-row>
          </ion-segment-button>
        </ion-segment>
      </div>
      <div class="ion-padding">
        <template v-if="segmentValue === 'post'">
          <MyCommunity_My ref="my" />
        </template>
        <template v-if="segmentValue === 'comment'">
          <MyCommunity_Comment ref="comment" />
        </template>
        <template v-if="segmentValue === 'bookmark'">
          <MyCommunity_Bookmark ref="bookmark" />
        </template>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { bookmarkOutline } from 'ionicons/icons';
import MyCommunity_My from './MyCommunity_My';
import MyCommunity_Comment from './MyCommunity_Comment';
import MyCommunity_Bookmark from './MyCommunity_Bookmark';
import IconCommunity from '@/assets/img/icon/icon_tabs_community.svg';
import IconMessage from '@/assets/img/icon/icon_tabs_message.svg';

export default {
  name: 'MyCommunity',
  components: {
    MyCommunity_My,
    MyCommunity_Comment,
    MyCommunity_Bookmark
  },
  data() {
    return {
      communityIcon: IconCommunity,
      messageIcon: IconMessage,
      bookmarkOutline,
      currentTab: '',
      segmentValue: 'post'
    };
  },
  ionViewWillEnter() {
    // 진입할 때 호출
    if (this.$route.params.routerType === 'doRefrash') {
      this.segmentValue = '';
      this.$nextTick(() => {
        this.segmentValue = 'post';
      });
    }
  },
  ionViewDidLeave() {
    // 떠날 때 호출
  },
  mounted() {},
  methods: {
    created() {},
    changeSegment(event) {
      this.segmentValue = event.detail.value;
    }
  }
};
</script>

<style scoped></style>
