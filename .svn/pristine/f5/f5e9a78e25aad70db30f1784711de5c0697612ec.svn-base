<template>
  <swiper
    :modules="modules"
    :pagination="{ clickable: true }"
    :slides-per-view="1"
    :autoplay="{
      delay: 3000,
      disableOnInteraction: false
    }"
    :loop="true"
  >
    <swiper-slide v-for="(item, index) in bannerList" :key="index">
      <ion-img
        v-bind:src="
            item.cdnNm != '' && item.cdnNm != null
              ? 'https://' + item.cdnNm
              : require('../../assets/img/Loading_icon.gif')
          "
        @ionError="
            $event.srcElement.src = require('../../assets/img/Loading_icon.gif')
          "
        @click="routerPush(item.path)"
      />
    </swiper-slide>
  </swiper>
</template>
<script>
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";

export default {
  props: {
    bannerList: { type: Array }
  },
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      modules: [Autoplay, Pagination, Navigation]
    };
  },
  created() {
  },
  methods: {
    routerPush(path) {
      if (path != "" && path != null) {
        this.$router.push(path);
      }
    }
  }
};
</script>
<style scoped lang="scss">
.swiper {
  padding: 0;
  margin: 0;

  ion-img {
    border-radius: 0;
  }
}
</style>
