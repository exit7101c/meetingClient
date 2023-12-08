<template>
  <ion-item>
    <!--    <ion-icon slot="start" v-if="icon" :icon="icon"></ion-icon>-->
    <ion-avatar>
      <ion-img
        :src="'https://' + item.cdnThumbNm"
        @ionError="
          $event.srcElement.src = require('../../assets/img/Loading_icon.gif')
        "
      />
    </ion-avatar>
    <ion-label>
      <ion-text color="light" class="text-bold text-md">{{
          item.couponNm
        }}
      </ion-text>
    </ion-label>
    <ion-label slot="end">
      <ion-text color="light" class="text-bold text-md"
      >{{ item.quantity }} 개
      </ion-text
      >
    </ion-label>
  </ion-item>
</template>
<script>
export default {
  name: "StoreCouponListItem",
  props: {
    item: {
      type: Object
    },
    icon: {
      type: String
    }
  }
};
</script>
<style lang="scss" scoped>
ion-item {
  --padding-start: 0;
  --inner-padding-end: 0;

  ion-icon {
    width: 36px;
    height: 36px;
  }

  ion-img {
    width: 30px;
    height: 30px;
    margin: 5px 0 0 0;
  }
}
</style>
