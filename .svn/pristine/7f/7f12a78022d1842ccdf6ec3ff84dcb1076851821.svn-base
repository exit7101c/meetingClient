<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <BackButton />
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <swiper
        :pagination="{ clickable: true }"
        :navigation="false"
        :modules="modules"
        style="margin-top: 30px"
      >
        <swiper-slide
          class="user-img"
          v-for="(item, idx) in itemList"
          v-bind:key="idx"
        >
          <ion-grid
            style="
              font-weight: bolder;
              color: white;
              text-align: left;
              white-space: pre-wrap;
              word-wrap: break-word;
            "
          >
            <h4>
              <strong>{{ item.title }}</strong>
            </h4>
            <p>
              <ion-text class="sub-text01 text-sm">{{
                  item.subTitle
                }}
              </ion-text>
            </p>
            <div class="row-box text-center">
              <img :src="item.image" alt="" />
            </div>
          </ion-grid>
          <br />
        </swiper-slide>
      </swiper>
    </ion-content>
    <ion-footer>
      <div class="btn-group">
        <custom-button
          color="primary"
          size="large"
          expand="block"
          @click="goRouter('s')"
        >
          플랜 보기
        </custom-button>
      </div>
      <div class="btn-group">
        <custom-button
          color="light"
          fill="clear"
          size="large"
          expand="block"
          @click="goRouter('b')"
        >
          뒤로가기
        </custom-button>
      </div>
    </ion-footer>
  </ion-page>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper/modules";
import BackButton from "@/components/BackButton.vue";

export default {
  name: "Subscription",
  components: {
    BackButton,
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      modules: [Navigation, Pagination],

      itemList: [
        {
          title: "모든 기능을\n무제한으로 이용해보세요!",
          subTitle: "30일동안 뱃지와 함께 이용해보세요",
          image: require("../../assets/img/banner/subscription/subscription_01.png")
        },
        {
          title: "월9,900원 부터\n다양하게.",
          subTitle: "더 많은 플랜은 아래 버튼을 눌러보세요!",
          image: require("../../assets/img/banner/subscription/subscription_02.png")
        }
      ]
    };
  },
  ionViewWillEnter() {
    // 진입할 때 호출
  },
  ionViewDidLeave() {
    // 떠날 때 호출
  },
  mounted() {
  },
  methods: {
    goRouter(type) {
      if (type === "s") {
        this.$router.push("/subscription_Shop");
      } else if (type === "b") {
        this.$router.go(-1);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
ion-content {
  --background: radial-gradient(
      circle,
      rgba(19, 36, 103, 1) 0%,
      transparent 50%
  );
}
</style>
