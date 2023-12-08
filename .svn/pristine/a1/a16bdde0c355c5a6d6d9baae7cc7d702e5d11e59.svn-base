<template>
  <ion-item lines="none">
    <!--    <ion-img :src="'http://' + icon" slot="start" />-->
    <font-awesome-icon class="badgeIcon" :icon="computedIcon" />
    <ion-label>
      <ion-text color="light" class="text-lg">{{ title }}</ion-text>
      <p>
        <ion-text color="secondary" class="text-sm">{{ description }}</ion-text>
      </p>
    </ion-label>
  </ion-item>
</template>
<script>
export default {
  name: "",
  props: {
    icon: {
      type: String
    },
    title: {
      type: String
    },
    description: {
      type: String
    }
  },
  computed: {
    computedIcon() {
      if (this.$props.icon) {
        if (this.$props.icon == "youtube") {
          return ["fab", this.$props.icon];
        } else {
          return ["fas", this.$props.icon];
        }
      }
      return "";
    }
  }
};
</script>
<style lang="scss" scoped>
ion-item {
  --padding-start: 0;

  ion-img {
    width: 64px;
    height: 64px;
    margin-right: 16px;
  }

  .badgeIcon {
    width: 40px;
    height: 40px;
    margin-right: 14px;
    color: #fff;
  }
}
</style>
