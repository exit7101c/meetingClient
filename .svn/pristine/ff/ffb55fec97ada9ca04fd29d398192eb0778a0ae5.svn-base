<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <BackButton />
        </ion-buttons>
        <ion-title>Contest</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-grid class="ion-padding" color="dark">
        <div class="row-box">
          <h1>
            <ion-text color="light">
              <strong>
                HOT<br />
                Contest.</strong
              >
            </ion-text>
          </h1>
          <p class="text-lg">
            <ion-text color="light"
              >참가 모집중. 참가만 해도 보상이 와르르~<br />
              역대급 콘테스트 보상 지원. 네이비에서 제시한<br />
              테마로 컨테스트 참여하고 하트랑 뱃지 받자!!</ion-text
            >
          </p>
        </div>
        <div class="row-box">
          <custom-button
            color="primary"
            @click="goRouter('support')"
          >
            지원하기
          </custom-button>
        </div>
      </ion-grid>

      <ContestHotInfo />
      <ContestHotGuide />
    </ion-content>
    <ion-footer class="ion-padding">
      <div class="btn-group">
        <custom-button
          color="primary"
          size="large"
          expand="block"
          :disabled="!check"
          @click="goRouter('support')"
        >
          지원하기
        </custom-button>
      </div>
    </ion-footer>
  </ion-page>
</template>

<script>
import { getData } from '@/assets/js/common';
import ContestHotInfo from '@/components/Contest/ContestHotInfo.vue';
import ContestHotGuide from '@/components/Contest/ContestHotGuide.vue';

export default {
  name: 'ContestHot',
  inject: ['alertController'],
  components: {
    ContestHotInfo,
    ContestHotGuide
  },
  data() {
    return {
      check: true,
    };
  },
  ionViewWillEnter() {
    // 진입할 때 호출
  },
  ionViewDidLeave() {
    // 떠날 때 호출
  },
  mounted() {},
  methods: {
    goRouter(type) {
      if (type === 'support') {
        this.checkContest();
        // this.$router.push('/contestSupport')
      } else if (type === 'home') {
        this.$router.go(-1);
      }
    },
    checkContest() {
      getData({
        url: '/getContestCheck',
        param: { contestType: 1 },
        then: (data) => {
          if (data.successYn === 'Y') {
            this.$router.push('/contestSupport');
          } else {
            this.warningAlert(data.message);
            this.$router.push('/home');
          }
        }
      });
    },
    async warningAlert(message) {
      const alert = await this.alertController.create({
        header: '',
        subHeader: '',
        message: message,
        buttons: ['OK']
      });
      return alert.present();
    }
  }
};
</script>

<style scoped></style>
