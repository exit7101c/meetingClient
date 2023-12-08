<template>
  <div>
    <swiper
      :modules="modules"
      :free-mode="true"
      :space-between="8"
      slides-per-view="auto"
    >
      <swiper-slide v-for="(item, index) in itemList" :key="index">
        <ion-card @click="goRouter(item)" mode="md">
          <ion-skeleton-text
            :animated="true"
            v-if="!loaded"
            class="skeleton-img"
          />
          <ion-img
            v-else
            :src="'https://' + item.cdnThumbNm"
            @ionError="
              $event.srcElement.src = require('../../assets/img/Loading_icon.gif')
            "
          />
          <ion-card-header>
            <ion-card-title>
              {{ item.nick }}
            </ion-card-title>
            <ion-card-subtitle v-if="item.likeCnt">
              <ion-icon :icon="heartOutline" size="small"></ion-icon>
              <ion-text>{{ item.likeCnt < 900 ? item.likeCnt : item.likeCnt + "+" }}</ion-text>
            </ion-card-subtitle>
          </ion-card-header>
          <RankBadge :index="item.rownum-1" />
        </ion-card>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
import { dailyCardInfoMapFn } from "@/assets/js/common";
import { Swiper, SwiperSlide } from "swiper/vue";
import { FreeMode, Autoplay, Pagination, Navigation } from "swiper/modules";
import IconCalCheck from "@/assets/img/icon/icon_cal_check.svg";
import IconOpenChat from "@/assets/img/icon/icon_tabs_open_chat.svg";
import RankBadge from "@/components/Common/RankBadge.vue";
import { heartOutline } from "ionicons/icons";

export default {
  name: "MainHotPeopleSlider",
  components: {
    Swiper,
    SwiperSlide,
    RankBadge
  },
  props: {
    category: {
      type: String
    },
    itemList: {
      type: Array
    },
    loaded: {
      type: Boolean
    }
  },
  computed: {
    rankClass() {
      return 1;
    }
  },
  data() {
    return {
      heartOutline,
      openChatIcon: IconOpenChat,
      calendarCheck: IconCalCheck,
      modules: [FreeMode, Autoplay, Pagination, Navigation]
    };
  },
  methods: {

    goRouter(item) {
      /** 프로필로 보내기 **/
      dailyCardInfoMapFn({ userKey: item.userKey, type: "home" });
      this.$router.push("/dailyCardInfo");
      /** 근처로 보내기 **/
      // dailyCardInfoMapFn({ userKey: item.userKey, pageType: "home", likeSeq: item.likeSeq, nick: item.nick });
      // this.$router.push("/imsiTapCardDetail");
    }
  }
};
</script>
<style scoped lang="scss">
$width: 104px;
$height: 104px;
.category {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 12px;
  font-weight: bold;
  gap: 6px;

  ion-icon {
    width: 20px;
    height: 20px;
  }

  .breadcrumb {
    margin: 0 4px;
  }
}

.swiper {
  padding: 0;
  margin: 0;


  .swiper-slide {
    width: 40%;
    max-width: $width;
    padding-top: 4px;
  }

  ion-card {
    position: relative;
    margin: 0;
    box-shadow: none;
    background: transparent !important;
    overflow: visible;
    contain: inherit;

    ion-img,
    .skeleton-img {
      position: relative;
      width: $width;
      height: $height;
      object-fit: cover;
      border-radius: var(--ion-border-radius);
      overflow: hidden;
    }

    ion-card-header {
      margin-top: 10px;
      padding: 0;
      text-align: left;

      ion-card-title {
        --color: white;
        font-size: 12px;
      }

      ion-card-subtitle {
        display: inline-flex;
        gap: 4px;
        align-items: center;
        --color: var(--ion-color-primary);
        font-size: 12px;
        width: 100%;
        margin-top: 4px;

        ion-text {
          width: 100%;
        }
      }
    }
  }
}
</style>
