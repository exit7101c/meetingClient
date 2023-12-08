<template>
  <ion-list-header>
    <ion-text color="light" v-if="item.key != 'IT012'">{{ title }}</ion-text>
    <ion-text color="light" v-else
      >{{ title }} ( {{ 3 - item.values[0].buyCnt }}/3 )</ion-text
    >
    <ion-icon :icon="icon" />
  </ion-list-header>
</template>
<script>
export default {
  name: 'StoreListHeader',
  props: {
    title: {
      type: String
    },
    icon: {
      type: String
    },
    item: {
      type: Object
    },
    description: {
      type: String
    }
  }
};
</script>
<style lang="scss" scoped>
ion-list-header {
  margin: 20px 0;
  gap: 10px;

  ion-text {
    font-size: 16px;
    font-weight: bold;
  }

  ion-icon {
    width: 24px;
    height: 24px;
    vertical-align: middle;
    margin-left: 4px;
  }
}
</style>
