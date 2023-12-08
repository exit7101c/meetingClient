<template>
  <ion-list>
    <MyCommunityItem
      :delYn="data.delYn"
      :thumbnail="data.cdnThumbNm"
      v-for="(data, index) in BookmarkCommunityList"
      :key="index"
      @click="goCommuView(data.articleKey)"
    >
      <template #content>
        <h3>
          <ion-text color="light" class="text-bold text-lg">{{
              data.title
            }}
          </ion-text>
        </h3>
        <p>
          <ion-text class="sub-text01"
          >{{
              data.content.split(/[\n]/)[0].slice(0, 13) +
              (data.content.split(/[\n]/)[0].length > 13 ? " ...." : "")
            }}
          </ion-text>
        </p>
        <p>
          <ion-row class="gap-md">
            <ion-text color="light" class="text-sm">
              {{ data.regTimeStr }}
            </ion-text>
          </ion-row>
        </p>
      </template>
    </MyCommunityItem>
  </ion-list>
  <ion-infinite-scroll
    :disabled="isEndScroll"
    threshold="100px"
    @ionInfinite="ionInfinite"
  >
    <ion-infinite-scroll-content></ion-infinite-scroll-content>
  </ion-infinite-scroll>
</template>

<script>
import { getData, communityViewMapFn } from "@/assets/js/common";
import { IonInfiniteScroll, IonInfiniteScrollContent } from "@ionic/vue";
import {
  chevronBack,
  calendarClearOutline,
  pencilOutline,
  chevronDownCircleOutline,
  notificationsOutline,
  storefrontOutline,
  volumeMediumOutline,
  personOutline,
  optionsOutline
} from "ionicons/icons";
import MyCommunityItem from "@/components/MyCommunity/MyCommunityItem.vue";

export default {
  name: "MyCommunity_Bookmark",
  components: { IonInfiniteScroll, IonInfiniteScrollContent, MyCommunityItem },
  data() {
    return {
      chevronBack,
      calendarClearOutline,
      pencilOutline,
      chevronDownCircleOutline,
      storefrontOutline,
      volumeMediumOutline,
      personOutline,
      notificationsOutline,
      optionsOutline,
      BookmarkCommunityList: [],
      pageNo: 1,
      pageSize: 9,
      currentPageNo: 1,
      totalCount: 0,
      isEndScroll: false
    };
  },
  ionViewWillEnter() {
    // 진입할 때 호출
  },
  ionViewDidLeave() {
    // 떠날 때 호출
  },
  mounted() {
    this.created();
  },

  methods: {
    created() {
      this.getCommunityMyBookmarkList();
    },

    /** 해당 페이지로 이동 **/
    goCommuView(key) {
      communityViewMapFn({ article: key, type: "myCommunity" });
      this.$router.push("/communityView");
    },

    /** 찜한 오픈쳇 리스트 **/
    async getCommunityMyBookmarkList() {
      // 초기화
      this.pageNo = 1;
      this.pageSize = 20;
      this.currentPageNo = 1;
      this.BookmarkCommunityList = [];
      this.totalCount = 0;
      this.isEndScroll = false;

      await getData({
        url: "/getCommunityMyBookmarkList",
        param: {
          pageNo: this.pageNo,
          pageSize: this.pageSize
        },
        target: this,
        then: (data) => {
          this.BookmarkCommunityList = data.result;
          this.totalCount = data.totalCount;
        }
      });
    },

    ionInfinite(event) {
      let self = this;

      // 스크롤 로딩 셋타임아웃
      setTimeout(function() {
        self.pageNo = self.currentPageNo + 1;
        //console.log("\n\nthis.pageNo ::: " + self.pageNo + "\n\n");

        getData({
          url: "/getCommunityMyBookmarkList",
          param: {
            pageNo: self.pageNo,
            pageSize: self.pageSize
          },
          then: (data) => {
            for (let i in data.result) {
              self.BookmarkCommunityList.push(data.result[i]);
            }
            self.currentPageNo += 1;
            self.$nextTick(() => {
              if (self.BookmarkCommunityList.length === self.totalCount)
                self.isEndScroll = true;
            });
          }
        });
        event.target.complete();
      }, 1000);
    }
  }
};
</script>

<style scoped>
.message-card {
  background-color: #ededed;
  border-radius: 10px;
  margin: 10px 20px 20px 20px;
  padding: 10px;
}

.nickname {
  margin-top: -5px;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  font-size: 18px;
  font-weight: bold;
}

.date {
  font-size: 12px;
}

.wrap-text {
  white-space: pre-wrap;
  word-wrap: break-word;
}
</style>
