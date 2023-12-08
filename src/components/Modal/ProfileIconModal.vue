<template>
  <ion-modal
    :is-open="isOpen"
    @ionModalDidDismiss="ionModalDidDismiss"
  >
    <ion-content class="ion-padding">
      <ion-toolbar mode="md">
        <ion-title class="main-header">
          대표 아이콘
        </ion-title>
      </ion-toolbar>

      <ion-list lines="none">
        <ion-radio-group :v-modal="selectedAvatar" class="img-radio-group">
          <ion-row>
            <ion-col size="4" v-for="data in iconList" :key="data.iconCd">
              <ion-item class="img-radio-button">
                <ion-label>
                  <ion-img :src="'https://' + data.cdnThumbNm" />
                  <ion-text color="light">{{ data.iconNm }}</ion-text>
                </ion-label>
                <ion-radio slot="start" :value="data.iconCd"></ion-radio>
              </ion-item>
            </ion-col>
          </ion-row>
        </ion-radio-group>
      </ion-list>

      <div>
        <div class="btn-group">
          <ion-button
            color="primary"
            size="large"
            expand="block"
            shape="round"
            @click="handleOkBtn(this.selectedAvatar)"
          >
            <ion-ripple-effect></ion-ripple-effect>
            저장
          </ion-button>
        </div>
      </div>
    </ion-content>
  </ion-modal>
</template>


<script>
export default {
  name: "ProfileIconModal",
  props: {
    isOpen: {
      type: Boolean
    },
    iconList: {
      type: Object
    },
    userIconCd: {
      type: String
    }

  },
  data() {
    return {
      selectedAvatar: this.userIconCd
    };
  },
  methods: {
    handleOkBtn(selectedAvatar) {
      this.$emit("handleOkBtn", selectedAvatar);
    },
    ionModalDidDismiss() {
      this.$emit("ionModalDidDismiss");
    }
  }
};
</script>
<style lang="scss" scoped>
ion-modal {
  padding: 0 18px;
  --height: 410px;
  --border-radius: 10px;

  ion-content {

    &::part(scroll) {
      overflow: hidden;
    }
  }
}
</style>
