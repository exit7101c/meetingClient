<template>
  <swiper
    :modules="modules"
    :free-mode="true"
    :space-between="16"
    slides-per-view="auto"
  >
    <swiper-slide v-for="(item, index) in itemList" :key="index">
      <StoreVoteListItem
        :key="index"
        :item="item"
        :title="title"
        @itemConfirmBtn="itemConfirmBtn(item)"
      />
    </swiper-slide>
  </swiper>
</template>
<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { FreeMode, Autoplay, Pagination, Navigation } from "swiper/modules";
import StoreVoteListItem from "@/components/Store/StoreVoteListItem.vue";

export default {
  name: "StoreVoteList",
  components: {
    StoreVoteListItem,
    Swiper,
    SwiperSlide
  },
  props: {
    itemList: {
      type: Array
    },
    title: {
      type: String
    }
  },
  data() {
    return {
      modules: [FreeMode, Autoplay, Pagination, Navigation]
    };
  },
  methods: {
    itemConfirmBtn(item) {
      this.$emit("itemConfirmBtn", item, "USE");
    }
  }
};
</script>
<style lang="scss" scoped>
.swiper-slide {
  width: auto;
}
</style>
