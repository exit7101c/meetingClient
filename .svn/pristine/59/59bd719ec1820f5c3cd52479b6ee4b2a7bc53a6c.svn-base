<template>
  <ion-list>
    <ion-list-header>
      <ion-row
        class="ion-align-items-center ion-justify-content-between gap-lg flex-nowrap"
      >
        <ion-text color="light" class="text-md text-bold">
          <slot name="title"></slot>
        </ion-text>
        <slot name="actions"></slot>
      </ion-row>
    </ion-list-header>
    <ion-item-group>
      <slot name="content"></slot>
    </ion-item-group>
  </ion-list>
</template>
<script>
export default {
  name: 'MessageTalkAttendList'
};
</script>
<style lang="scss" scoped>
ion-list {
  ion-list-header {
    padding: 0;
    min-height: 0;
    margin-top: 10px;
    margin-bottom: 10px;
    ion-row {
      width: 100%;
    }
  }
}
</style>
