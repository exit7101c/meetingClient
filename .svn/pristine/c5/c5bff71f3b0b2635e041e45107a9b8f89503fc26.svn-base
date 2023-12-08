<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <BackButton @event="goRouter" :custom="true" />
        </ion-buttons>
        <ion-title>이벤트 공지</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">

      <!-- 1번 내용 -->
      <ion-list
        lines="none"
        v-for="(item, index) in bannerList"
        :key="index"
      >
        <ion-item>
          <ion-img
            v-bind:src="
              item.cdnNm !== '' && item.cdnNm !== null
                ? 'https://' + item.cdnNm
                : require('../../assets/img/Loading_icon.gif')
            "
            @ionError="
              $event.srcElement.src = require('../../assets/img/Loading_icon.gif')
            "
            @click="routerPush(item.path)"
          />
        </ion-item>
      </ion-list>

    </ion-content>
  </ion-page>
</template>

<script>

import { getData, storeMapFn } from "@/assets/js/common";

export default {
  components: {},
  data() {
    return {
      bannerList: []
    };
  },
  ionViewWillEnter() {
    // 진입할 때 호출
    this.getBannerList();
  },
  ionViewDidLeave() {
    // 떠날 때 호출
  },
  methods: {
    getBannerList() {
      getData({
        url: "/getBannerList",
        param: { bannerType: "HOME" },
        then: (data) => {
          this.$nextTick(() => {
            this.bannerList = data;
          });
        }
      });
    },
    routerPush(path) {
      if (path != "" && path != null) {
        if (path == "/subscription") {
          storeMapFn({ subscribeYn: "Y" });
          this.$router.push("/store");
        } else {
          this.$router.push(path);
        }
      }
    },
    goRouter() {
      this.$router.go(-1);
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

ion-item {
  --padding-top: 6px;
  --padding-bottom: 6px;
}

</style>
