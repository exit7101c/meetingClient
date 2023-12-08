<template>
  <ion-content class="ion-padding">
    <div class="row-box">
      <ion-list>
        <UsePointPartnerItem
          v-for="(item, index) in partnersList"
          :key="index"
          :item="item"
          v-if="partnersList.length > 0"
        />
        <ion-item lines="none" class="nonImg" v-else>
          <ion-label>
            <ion-text color="light" class="text-md text-bold">
              아직 제휴업소가 없습니다 😥 <br />
              업체선정중이니 조금만 더 기다려주세요...!
            </ion-text>
          </ion-label>
        </ion-item>
      </ion-list>
    </div>
  </ion-content>
</template>

<script>
import { getData } from '@/assets/js/common';
import UsePointPartnerItem from '@/components/UsePoint/UsePointPartnerItem.vue';

export default {
  name: 'UsePoint_Withdraw',
  components: {
    UsePointPartnerItem
  },
  data() {
    return {
      partnersList: []
    };
  },

  created() {
    this.getPartnersList();
  },

  beforeUnmount() {},

  methods: {
    getPartnersList() {
      getData({
        url: '/getPartnersList',
        param: {},
        then: (data) => {
          this.partnersList = data;
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
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
  width: 300px;
}

ion-item {
  border: 1px solid var(--ion-border-color);
  border-radius: var(--ion-border-radius);
  --padding-top: 6px;
  --padding-bottom: 6px;

  + ion-item {
    margin-top: 10px;
  }

  ion-label {
    white-space: pre-wrap !important;

    display: flex;
    justify-content: center;
    align-items: center;

    ion-text {
      text-align: center;
    }
  }

  .nonImg {
    margin-top: 150px;
  }
}
</style>
