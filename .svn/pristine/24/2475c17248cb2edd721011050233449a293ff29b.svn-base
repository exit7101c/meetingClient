<template>
  <ion-list>
    <MyCommunityItem
      :delYn="data.delYn"
      :thumbnail="data.cdnThumbNm"
      v-for="(data, index) in myCommentList"
      :key="index"
      @click="goCommuView(data)"
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
              data.contents.split(/[\n]/)[0].slice(0, 13) +
              (data.contents.split(/[\n]/)[0].length > 13 ? " ...." : "")
            }}
          </ion-text>
        </p>
        <p>
          <ion-row class="gap-md">
            <ion-text color="light" class="text-sm">
              {{ data.regTimeStr }}
            </ion-text>
            <ion-text color="light" class="text-sm">
              좋아요 {{ data.likeCnt }} | 싫어요 {{ data.badCnt }}
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
import MyCommunityItem from "@/components/MyCommunity/MyCommunityItem.vue";

export default {
  name: "MyCommunity_Comment",
  inject: ["alertController"],
  components: {
    IonInfiniteScroll,
    IonInfiniteScrollContent,
    MyCommunityItem
  },
  data() {
    return {
      myCommentList: [],
      pageNo: 1,
      pageSize: 20,
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
      this.getCommunityCommentList();
    },

    /** 해당 페이지로 이동 **/
    goCommuView(data) {
      if (data.delYn === "N") {
        communityViewMapFn({ article: data.articleKey, type: "myCommunity" });
        this.$router.push("/communityView");
      } else {
        this.warningAlert("삭제된 게시글입니다.");
      }
    },

    /** 나의 오픈쳇 리스트 **/
    async getCommunityCommentList() {
      // 초기화
      this.pageNo = 1;
      this.pageSize = 20;
      this.currentPageNo = 1;
      this.myCommentList = [];
      this.totalCount = 0;
      this.isEndScroll = false;

      await getData({
        url: "/getCommunityCommentList",
        param: {
          pageNo: this.pageNo,
          pageSize: this.pageSize
        },
        target: this,
        then: (data) => {
          this.myCommentList = data.result;
          this.totalCount = data.totalCount;
        }
      });
    },

    ionInfinite(event) {
      let self = this;

      // 스크롤 로딩 셋타임아웃
      setTimeout(function() {
        self.pageNo = self.currentPageNo + 1;

        getData({
          url: "/getCommunityCommentList",
          param: {
            pageNo: self.pageNo,
            pageSize: self.pageSize
          },
          then: (data) => {
            for (let i in data.result) {
              self.myCommentList.push(data.result[i]);
            }
            self.currentPageNo += 1;
            self.$nextTick(() => {
              if (self.myCommentList.length === self.totalCount)
                self.isEndScroll = true;
            });
          }
        });

        event.target.complete();
      }, 1000);
    },

    /** Alert창 **/
    async warningAlert(message) {
      const alert = await this.alertController.create({
        header: "",
        subHeader: "",
        message: message,
        buttons: ["OK"]
      });
      return alert.present();
    }
  }
};
</script>

<style scoped></style>
