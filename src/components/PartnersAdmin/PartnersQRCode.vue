<template>
  <ion-card>
    <div div class="text-center">
      <ion-text color="light">
        <h4>사업장 명</h4>
      </ion-text>
    </div>
    <div>
      <img src="../../assets/img/imageQRcheck.png" alt="" />
    </div>
    <div class="text-center">
      <p>
        <ion-text color="light" class="text-link" @click="goRouter">
          스캔하기
        </ion-text>
      </p>
    </div>
  </ion-card>
</template>
<script>
// import VueQrcode from 'vue-qrcode';
export default {
  name: "UsePointQRCode",
  components: {
    // VueQrcode
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
    goRouter() {
      this.$router.push("/partnersAdminUseCheck");
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
  background: var(--ion-color-primary);
  border-radius: var(--ion-border-radius-lg);

  h5 {
    line-height: 1.6;
  }

  img {
    mix-blend-mode: screen;
    filter: invert(1);
    max-height: 200px;
  }
}
</style>
