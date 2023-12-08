<template>
  <h5>
    <ion-text class="sub-text01">{{ title }}</ion-text>
  </h5>
</template>
<script>
export default {
  name: 'CardBoxTitle',
  props: {
    title: {
      type: String
    }
  }
};
</script>
<style lang="scss" scoped>
h5 {
  padding-left: 10px;
  font-size: 14px;
  font-weight: bold;
}
</style>
