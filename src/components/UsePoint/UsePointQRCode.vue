<template>

  <ion-card>
    <div div class="text-center">
      <ion-text color="light">
        “네이비 포인트 사용할게요” 라고 얘기해보세요!<br />
        제휴업소에서 QR코드를 촬영하면 결제가 완료돼요
      </ion-text>
    </div>
    <div>
      <vue-qrcode
      :value="value"
      :errorCorrectionLevel="errorCorrectionLevel"
      :margin="margin"
      :scale="scale"
      :color="color"
    />
    </div>
    <div class="text-center">
      <p>
        <ion-text color="light" v-if="diffSecondStr != ''">
          {{ diffSecondStr }} 남음 </ion-text><br />
        <ion-text color="light" class="text-link" @click="setQrCode">
        QR코드 다시 생성하기
      </ion-text>
    </p>
    </div>
  </ion-card>

</template>
<script>
import VueQrcode from "vue-qrcode";

export default {
  name: "UsePointQRCode",
  components: {
    VueQrcode
  },
  props: {
    value: {
      type: String
    },
    errorCorrectionLevel: {
      type: String
    },
    margin: {
      type: Number
    },
    scale: {
      type: Number
    },
    color: {
      type: Object
    },
    diffSecondStr: {
      type: String
    }
  },
  methods: {
    setQrCode() {
      this.$emit("setQrCode");
    }
  }
};
</script>
<style lang="scss" scoped>
ion-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  padding: 40px 20px;
  height: 380px;
  background: var(--ion-color-primary);
  border-radius: var(--ion-border-radius-lg);

  img {
    mix-blend-mode: screen;
    filter: invert(1);
  }
}
</style>
