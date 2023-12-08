<template>
  <swiper
    @swiper="setSwiperRef"
    :modules="modules"
    :pagination="{ clickable: true }"
    :slides-per-view="1"
    :autoplay="{
      delay: 3000,
      disableOnInteraction: false
    }"
    :loop="true"
    :observer="true"
  >
    <swiper-slide v-for="(item, index) in bannerList" :key="index">
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
    </swiper-slide>
  </swiper>
</template>
<script>
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';

export default {
  name: 'StoreBanner',
  props: {
    bannerList: { type: Array }
  },
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      modules: [Autoplay, Pagination, Navigation],
      swiperRef: null
    };
  },
  mounted() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {
    // this.swiperRef.update();
    console.log(this.swiperRef);
    if (this.swiperRef != null) {
      this.swiperRef.slideNext(2000);
    }
  },
  beforeUnmount() {},
  methods: {
    routerPush(path) {
      // this.swiperRef.autoplay.start();
      // return;
      if (path != '' && path != null) {
        if(path == '/subscription'){
          // storeMapFn({subscribeYn: 'Y'});
          // this.$router.push('/store');
          this.$emit('storeCategory');
        } else {
          this.$router.push(path);
        }
      }
    },
    setSwiperRef(swiper) {
      this.swiperRef = swiper;
    }
  }
};
</script>
<style scoped lang="scss">
.swiper {
  padding: 0;
  margin: 0;

  ion-img {
    border-radius: var(--ion-border-radius);
  }
}
</style>
