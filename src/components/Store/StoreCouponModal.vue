<template>
  <ion-modal
    :is-open="isOpen"
    @ionModalDidDismiss="dismissedModal"
    @ionModalWillPresent="ionModalWillPresent"
    :initial-breakpoint="1"
    :breakpoints="[0, 1]"
    class="custom-modal slideup-modal"
  >
    <ion-content>
      <CustomModalLayout hideFooter>
        <template #header>
          <ion-toolbar>
            <ion-buttons slot="start">
              <ion-text class="text-bold">쿠폰보관함</ion-text>
            </ion-buttons>
            <ion-buttons slot="end">
              <ion-text @click="dismissedModal"> 닫기</ion-text>
            </ion-buttons>
          </ion-toolbar>
        </template>
        <template #content>
          <ion-list lines="none">
            <StoreCouponListItem
              v-for="(item, index) in couponList"
              :key="index"
              :item="item"
              :icon="heartIcon"
            />
          </ion-list>
        </template>
      </CustomModalLayout>
    </ion-content>
  </ion-modal>
</template>
<script>
import StoreCouponListItem from "@/components/Store/StoreCouponListItem.vue";
import { getData } from "@/assets/js/common";
import IconHeart from "@/assets/img/icon/icon_store_heart.svg";

export default {
  name: "StoreCouponModal",
  components: {
    StoreCouponListItem
  },
  props: {
    isOpen: {
      type: Boolean
    },
    icon: {
      type: String
    }
  },
  data() {
    return {
      heartIcon: IconHeart,
      couponList: []

    };
  },
  methods: {
    dismissedModal() {
      this.$emit("dismissedModal");
    },
    ionModalWillPresent() {
      getData({
        url: "/getUserCurrentCouponList",
        param: {},
        then: (data) => {
          this.couponList = data;
        }
      });
    }
  }

};
</script>
<style lang="scss" scoped>
ion-modal {
  --height: 60%;
}
</style>
