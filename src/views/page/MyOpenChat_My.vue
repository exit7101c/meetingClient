<template>
  <ion-list>
    <OpenChatMessageItem
      :thumbnail="data.cdnThumbNm"
      v-for="(data, index) in myOpenChatList"
      :key="index"
      @click="goOpenChatView(data)"
    >
      <template #content>
        <h3>
          <ion-text color="light" class="text-bold text-lg"
          >{{ data.title }}
          </ion-text>
        </h3>
        <p>
          <ion-text class="sub-text01">참여 신청 수 :</ion-text>
          <ion-text color="light">{{ data.attendCnt }}명</ion-text>
        </p>
        <p>
          <ion-text class="sub-text01 text-sm">개설일 :</ion-text>
          <ion-text color="light" class="text-sm">
            {{ data.regDateStr }}
          </ion-text>
          <ion-text color="light" class="text-bold text-sm" v-if="data.privateYn == 'Y'">
            <span style="color: #000cff">&nbsp;활성</span>
            <span style="color: #616267">&nbsp;비활성</span>
          </ion-text>
          <ion-text color="light" class="text-bold text-sm" v-else>
            <span style="color: #616267">&nbsp;활성</span>
            <span style="color: #ff0000">&nbsp;비활성</span>
          </ion-text>
        </p>
      </template>
    </OpenChatMessageItem>
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
import { IonInfiniteScroll, IonInfiniteScrollContent } from "@ionic/vue";
import { getData, openChatViewMapFn } from "@/assets/js/common";
import OpenChatMessageItem from "@/components/OpenChat/OpenChatMessageItem.vue";

export default {
  name: "MyOpenChat_My",
  inject: ["alertController"],
  components: {
    IonInfiniteScroll,
    IonInfiniteScrollContent,
    OpenChatMessageItem
  },
  data() {
    return {
      myOpenChatList: [],
      pageNo: 1,
      pageSize: 9,
      currentPageNo: 1,
      totalCount: 0,
      isEndScroll: false,
      privateYn: ""
    };
  },
  ionViewWillEnter() {
    //시작
    //파티션조회
    this.mounted();

  },
  ionViewDidLeave() {
    // 초기화
  },
  mounted() {
    this.getOpenChatMyList();
  },

  methods: {
    created() {
    },

    /** 해당 페이지로 이동 **/
    goOpenChatView(item) {
      if (item.delYn === "N") {
        openChatViewMapFn({
          openChatKey: item.openChatKey,
          type: "myOpenChat"
        });
        this.$router.push("/openChatView");
        // this.$router.push('/myOpenChatView');
      } else {
        this.warningAlert("❌", "삭제된 게시글입니다.");
      }
    },

    /** 나의 오픈쳇 리스트 **/
    getOpenChatMyList() {
      // 초기화
      this.pageNo = 1;
      this.pageSize = 9;
      this.currentPageNo = 1;
      this.openChatList = [];
      this.totalCount = 0;
      this.isEndScroll = false;

      getData({
        url: "/getOpenChatMyList",
        param: {
          pageNo: this.pageNo,
          pageSize: this.pageSize
        },
        target: this,
        then: (data) => {
          this.myOpenChatList = data.result;
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
          url: "/getOpenChatMyList",
          param: {
            pageNo: self.pageNo,
            pageSize: self.pageSize
          },
          then: (data) => {
            for (let i in data.result) {
              self.myOpenChatList.push(data.result[i]);
            }
            self.currentPageNo += 1;
            self.$nextTick(() => {
              if (self.myOpenChatList.length === self.totalCount)
                self.isEndScroll = true;
            });
          }
        });
        event.target.complete();
      }, 1000);
    },

    /** 경고 팝업창 **/
    async warningAlert(title, message) {
      const alert = await this.alertController.create({
        header: title,
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
