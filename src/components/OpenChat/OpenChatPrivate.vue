<template>
  <ion-item lines="none">
    <div class="text-sm">
      <ion-text color="primary" v-if="privateYn == true">
        소모임 활성화 상태
      </ion-text>
      <ion-text color="danger" v-else> 소모임 비활성화 상태 </ion-text>
    </div>
    <ion-toggle
      slot="end"
      mode="ios"
      :checked="privateYn"
      @click="openChatPrivate"
    ></ion-toggle>
  </ion-item>
</template>
<script>
export default {
  name: 'OpenChatPrivate',
  props: {
    privateYn: {
      type: Boolean
    }
  },
  methods: {
    openChatPrivate() {
      this.$emit('toggle');
    }
  }
};
</script>
<style lang="scss" scoped>
ion-item {
  --padding-start: 0;
  --inner-padding-end: 0;
}
</style>
