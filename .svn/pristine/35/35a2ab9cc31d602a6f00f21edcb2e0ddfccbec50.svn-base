<template>
  <div class="row-box text-center" @click="terms">
    <ion-text color="light" class="text-sm text-link text-bold"
      >이용정책 보기</ion-text
    >
  </div>
  <TermsModal
    :is-open="termModalOpen"
    :termsTitle="termsTitle"
    :termsType="termsType"
    @ionModalDidDismiss="termModalOpen = false"
  />
</template>
<script>
import TermsModal from '@/components/Modal/TermsModal.vue';

export default {
  name: 'UsePointUseagePolicy',
  components: {
    TermsModal
  },
  data() {
    return {
      termsTitle: '',
      termsType: '',
      termModalOpen: false
    };
  },
  methods: {
    terms() {
      this.termsType = 'use';
      this.termsTitle = '이용정책';
      this.termModalOpen = true;
    }
  }
};
</script>
<style lang="scss" scoped></style>
