<template>
  <div class="ion-padding">
    <div class="row-box">
      <PartnersQRCode />
    </div>
    <div class="row-box">
      <CardBox>
        <ion-text color="light" class="text-md">
          사용문의 담당자 연락처
        </ion-text>
        <br />
        <ion-text class="sub-text01">고광원 010-9838-7133</ion-text>
      </CardBox>
      <CardBox>
        <ion-text color="light" class="text-md">
          장애발생시 긴급연락처
        </ion-text>
        <br />
        <ion-text class="sub-text01">
          진의현 010-2231-3380 <br />
          이동주 010-2550-4933
        </ion-text>
      </CardBox>
    </div>
  </div>
</template>

<script>
import PartnersQRCode from "@/components/PartnersAdmin/PartnersQRCode.vue";

export default {
  components: {
    PartnersQRCode
  },
  data() {
  },
  created() {
  },
  methods: {}
};
</script>

<style scoped></style>
