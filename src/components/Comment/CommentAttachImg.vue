<template>
  <ion-img v-if="data.cdnNm != null" @click="handleZoomImg" ref="image" :src="'https://' + data.cdnNm" />
</template>
<script>
export default {
  name: 'CommentAttachImg',
  props: {
    data: {
      type: Object
    }
  },
  methods: {
    handleZoomImg() {
      this.$emit('zoomImg');
    }
  }
};
</script>
<style lang="scss" scoped>
ion-img {
  width: 40px;
  height: 40px;
  object-fit: cover;
}
</style>
