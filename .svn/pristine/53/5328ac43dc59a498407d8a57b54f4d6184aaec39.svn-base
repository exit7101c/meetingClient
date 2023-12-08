<template>
  <ion-modal class="contestModal" :is-open="isOpen" ref="modal">
    <CustomModalLayout>
      <template #header>
        <ion-toolbar>
          <ion-title>{{ item.nick }}님</ion-title>
          <!--          <ion-title @click="goUserProfileView(item.userKey)"-->
          <!--            >{{ item.nick }}님</ion-title-->
          <!--          >-->
          <ion-buttons slot="end">
            <ion-text @click="ionModalDidDismiss()">
              <ion-icon :icon="closeIcon" size="large" />
            </ion-text>
          </ion-buttons>
        </ion-toolbar>
      </template>
      <template #content>
        <div class="row-box">
          <swiper
            :pagination="{ clickable: true }"
            :modules="modules"
            :autoplay="{
              delay: 2000,
              disableOnInteraction: false,
              running: true
            }"
            style="border-radius: 15px"
          >
            <swiper-slide>
              <ion-img v-bind:src="'https://' + item.photo2" />
            </swiper-slide>
            <swiper-slide v-if="item.photo3 !== null && item.photo3 !== ''">
              <ion-img v-bind:src="'https://' + item.photo3" />
            </swiper-slide>
            <swiper-slide v-if="item.photo4 !== null && item.photo4 !== ''">
              <ion-img v-bind:src="'https://' + item.photo4" />
            </swiper-slide>
            <swiper-slide v-if="item.photo5 !== null && item.photo5 !== ''">
              <ion-img v-bind:src="'https://' + item.photo5" />
            </swiper-slide>
          </swiper>
        </div>
        <div class="row-box">
          <ion-text color="light">
            {{ item.resolution || "기본 문구" }}
          </ion-text>
        </div>
      </template>
      <template #footer>
        <custom-button
          color="primary"
          expand="block"
          size="large"
          :disabled="!checkDisabled"
          @click="useContestVote"
        >
          <span>투표하기 X</span>
          <span v-if="coupon.quantity > 0"> {{ coupon.quantity }}</span>
          <span v-else>(하트사용)</span>
          <ion-icon slot="end" :icon="voteIcon" />
        </custom-button>
      </template>
    </CustomModalLayout>
  </ion-modal>
</template>
<script>
import { dailyCardInfoMapFn } from "@/assets/js/common";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import IconVote from "@/assets/img/icon/icon_vote.svg";
import IconClose from "@/assets/img/icon/icon_close.svg";

export default {
  name: "HotConestVoteModal",
  components: {
    Swiper,
    SwiperSlide
  },
  props: {
    isOpen: {
      type: Boolean
    },
    item: {
      props: Object
    },
    coupon: {
      props: Object
    },
    checkDisabled: {
      type: Boolean
    }
  },
  data() {
    return {
      closeIcon: IconClose,
      voteIcon: IconVote,
      modules: [Autoplay, Pagination, Navigation]
    };
  },
  methods: {
    ionModalDidDismiss() {
      this.$emit("ionModalDidDismiss");
    },
    goUserProfileView(userKey) {
      dailyCardInfoMapFn({ userKey: userKey, type: "home" });
      this.$router.push("/dailyCardInfo");
      this.modalContest = false;
      this.$refs.modal.$el.dismiss();
    },
    useContestVote() {
      this.$emit("useContestVote");
    }
  }
};
</script>
<style lang="scss" scoped>
ion-modal {
  --height: 680px;
  --width: 345px;
  --border-radius: 15px;
  --box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1),
  0 4px 6px -4px rgb(0 0 0 / 0.1);

  ion-toolbar {
    ion-buttons {
      margin: 0;
    }
  }

  .swiper-slide {
    ion-img {
      height: 400px;
      object-fit: cover;
    }
  }
}
</style>
