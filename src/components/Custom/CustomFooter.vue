<template>
  <ion-footer class="custom-footer" :class="{ 'is-absolute': absolute }">
    <ion-grid>

      <ion-row>
        <ion-col
          style="
                  display: flex;
                  justify-content: space-evenly;
                  align-items: center;
                "
        >
                <span
                  @click="SNSHandler('t')"
                  style="color: #fff; text-decoration: underline"
                >네이비 트위터 공식계정</span
                >
          <span>|</span>
          <span
            @click="SNSHandler('i')"
            style="color: #fff; text-decoration: underline"
          >네이비 인스타그램 공식계정</span
          >
        </ion-col>
      </ion-row>

      <ion-row>
        <ion-col>
          <span @click="terms('a')">이용약관</span> ｜
          <span @click="terms('b')">개인정보보호정책</span> ｜
          <span @click="terms('c')">홍보및마케팅목적</span> ｜
          <span @click="terms('d')">광고성정보수신</span>
        </ion-col>
      </ion-row>
      <ion-row>
        <ion-col> 주식회사 씨엠디지랩</ion-col>
      </ion-row>
      <ion-row>
        <ion-col>
          <p>
            대표이사 진의현 ｜ 사업자등록번호 : 893-86-02893<br />서울특별시
            용산구 한강대로102다길 25(후암동)<br />대표전화 : 02-848-3380 ｜
            이메일 : info@cmdg.co.kr
          </p>
        </ion-col>
      </ion-row>
    </ion-grid>
    <TermsModal
      :is-open="termModalOpen"
      :termsTitle="termsTitle"
      :termsType="termsType"
      @ionModalDidDismiss="termModalOpen = false"
    />
  </ion-footer>
</template>
<script>
import TermsModal from '@/components/Modal/TermsModal.vue';
import { Capacitor } from '@capacitor/core';

export default {
  name: 'CustomFooter',
  props: {
    absolute: {
      // 컨텐츠 본문영역에서 맨 하단에 위치하려고 할때 absoltue 속성 추가
      type: Boolean,
      default: false
    }
  },
  components: {
    TermsModal
  },
  data() {
    return {
      termsTitle: '',
      termsType: '',
      termModalOpen: false,

      snsTwitterUrl: '',
      snsInstargramUrl: ''
    };
  },
  methods: {
    terms(type) {
      if (type === 'a') {
        this.termsType = 'service';
        this.termsTitle = '서비스 이용약관';
      } else if (type === 'b') {
        this.termsType = 'info';
        this.termsTitle = '개인정보 보호정책';
      } else if (type === 'c') {
        this.termsType = 'marketing';
        this.termsTitle = '홍보 및 마케팅 목적';
      } else if (type === 'd') {
        this.termsType = 'push';
        this.termsTitle = '광고성 정보 수신';
      }
      this.termModalOpen = true;
    },
    SNSHandler(n) {
      const p = Capacitor.getPlatform();

      let appURL = '';
      let redirectURL = '';
      // if (p == 'ios') {
      if (n == 'i') {
        appURL = 'instagram://user?username=navy_app';
        if (p == 'ios' || p == 'web') {
          redirectURL =
            'https://itunes.apple.com/kr/app/instagram/id389801252?mt=8';
        }
      } else if (n == 't') {
        appURL = 'twitter://user?screen_name=navy_app';
        if (p == 'ios' || p == 'web') {
          redirectURL =
            'https://itunes.apple.com/kr/app/twitter/id333903271?mt=8';
        }
      }
      // } else if (p == 'android') {
      //   if (n == 'i') {
      //     appURL = "intent://instagram.com/#Intent;package=com.instagram.android;scheme=https;end";
      //   } else if (n == 't') {
      //     appURL = "intent://twitter/#Intent;scheme=twitter;package=com.twitter.android;end";
      //   }
      // } else if (p == 'web') {
      //   if (n == 'i') {
      //     appURL = "instagram://user?username=navy_app";
      //     redirectURL = "https://itunes.apple.com/kr/app/instagram/id389801252?mt=8";
      //   } else if (n == 't') {
      //     appURL = "twitter://user?screen_name=navy_app";
      //     redirectURL = "https://itunes.apple.com/kr/app/twitter/id333903271?mt=8";
      //   }
      // }

      open(appURL, '_blank');
      if (Object.keys(redirectURL).length > 0) {
        setTimeout(function () {
          open(redirectURL, '_blank');
        }, 1000);
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.custom-footer {
  background-color: #101010;
  color: white;
  font-size: 12px;

  &.is-absolute {
    position: absolute;
    top: 100vh;
  }

  p {
    line-height: 1.6;
    margin: 0;
  }
}
</style>
