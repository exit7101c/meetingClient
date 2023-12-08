<template>
  <ion-item>
    <div>
      <ion-text color="light" class="text-md text-bold">
        {{ item.setNm }}
      </ion-text>
      <br />
      <ion-text class="sub-text01 text-sm">
        {{ item.setDesc }}
      </ion-text>
    </div>
    <ion-toggle
      slot="end"
      mode="ios"
      :checked="item.valBoolean"
      @click="setSettingUserSet"
    ></ion-toggle>
  </ion-item>
</template>
<script>
export default {
  name: "SettingAlarmItem",
  props: {
    item: {
      type: Object
    }
  },
  methods: {
    setSettingUserSet() {
      this.$emit("toggle", this.item);
    }
  }
};
</script>
<style lang="scss" scoped>
ion-item {
  --padding-start: 0;
  --inner-padding-end: 0;

  + ion-item {
    margin-top: 20px;
  }
}
</style>
