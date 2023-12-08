<template>
  <ion-content class="ion-padding">
    <div class="row-bo">
      <UsePointQRCode
        :value="qrcode"
        :errorCorrectionLevel="correctionLevel"
        :margin="qrMargin"
        :scale="qrScale"
        :color="qrColor"
        :diffSecondStr="diffSecondStr"
        @setQrCode="setQrCode"
      />
    </div>
    <div class="row-box">
      <CardBox>
        <div class="text-left">
          <ion-text>
            적립된 포인트를
            <ion-text class="sub-text04 text-link">제휴 업소</ion-text>
            에서
            사용할 수 있어요
            <ion-icon :icon="clapIcon" size="small" />
          </ion-text>
          <br />
          <ion-text>
            출금기능은 은행전산망 자동이체를 위해 준비중이에요!<br />
            조금만 기다려 주세요
          </ion-text>
        </div>
      </CardBox>
    </div>
  </ion-content>
</template>

<script>
import { getData } from "@/assets/js/common.js";
import { alertController } from "@ionic/core";
import UsePointQRCode from "@/components/UsePoint/UsePointQRCode.vue";

import IconMyClap from "@/assets/img/icon/icon_my_clap.svg";

export default {
  name: "UsePoint_Use",
  components: {
    UsePointQRCode
  },
  data() {
    return {
      clapIcon: IconMyClap,
      ///////////// QR CODE
      qrcode: "",
      diffSecond: 0,
      diffSecondStr: "",
      correctionLevel: "H", // Low, Medium, Quartile, High
      qrMargin: 3, // int
      qrScale: 0, // int
      qrColor: {}, // Map
      /*
         {
            dark:"#8DFF33",
            light:"#00FFFF"
        }
        * */
      ///////////// /QR CODE
      interval: null
    };
  },
  ionViewWillEnter() {
    // 진입할 때 호출
    this.getQrCode();
  },
  ionViewDidLeave() {
    // 떠날 때 호출
  },
  created() {
    this.getQrCode();
  },
  beforeUnmount() {
    clearInterval(this.interval);
  },

  methods: {
    /** 경고 팝업창 **/
    async warningAlert(message) {
      const alert = await alertController.create({
        header: "",
        subHeader: "",
        message: message,
        buttons: ["OK"]
      });
      return alert.present();
    },
    getQrCode() {
      getData({
        url: "/getUserQrcode",
        param: {},
        target: this,
        then: (data) => {
          if (data.qrcode !== undefined) {
            this.qrcode = data.qrcode;
            this.diffSecond = data.diffSecond;
            this.setIntervalCalFn();
          } else {
            this.qrcode = "";
            this.diffSecond = 0;
            this.diffSecondStr = "";
            this.setQrCode();
          }
        }
      });
    },
    setQrCode() {
      clearInterval(this.interval);

      const chars =
        "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
      const stringLength = 6;
      let randomstring = "";
      for (let i = 0; i < stringLength; i++) {
        const rnum = Math.floor(Math.random() * chars.length);
        randomstring += chars.substring(rnum, rnum + 1);
      }

      getData({
        url: "/setUserQrcode",
        param: { qrcode: randomstring },
        then: (data) => {
          if (data.successYn === "Y") {
            this.qrcode = data.qrcode;
            this.diffSecond = data.diffSecond;
            this.setIntervalCalFn();
          } else {
            this.qrcode = "";
            this.diffSecond = 0;
            this.diffSecondStr = "";
            this.warningAlert(data.message);
          }
        }
      });
    },
    setIntervalCalFn() {
      clearInterval(this.interval);
      this.calQrcodeTime();
      this.interval = setInterval(() => {
        this.calQrcodeTime();
      }, 1000);
    },
    calQrcodeTime() {
      let min, sec;
      min = parseInt((this.diffSecond % 3600) / 60);
      sec = this.diffSecond % 60;

      if (min.toString().length === 1) {
        min = "0" + min;
      }
      if (sec.toString().length === 1) {
        sec = "0" + sec;
      }
      this.diffSecondStr = min + ":" + sec;

      if (this.diffSecond > 0) {
        this.diffSecond = parseInt(this.diffSecond) - 1;
      } else {
        clearInterval(this.interval);
      }
    }
  }
};
</script>

<style scoped>
ion-toolbar {
  --background: #fff;
}

ion-icon {
  color: black;
}

.image-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-container img {
  width: 200px;
}
</style>
