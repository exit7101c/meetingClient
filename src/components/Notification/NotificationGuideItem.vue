<template>
  <ion-list lines="none">
    <ion-item>
      <ion-label>
        <ion-text color="light">
          <h3>
            <span class="custom-box">{{ item.num }}</span>
            <span>{{ item.title }}</span>
          </h3>
        </ion-text>
        <ion-text color="light" class="text-md">
          <span>{{ item.content }}</span>
        </ion-text>
      </ion-label>
    </ion-item>
  </ion-list>
</template>
<script>
export default {
  name: "CommunityItem",
  props: {
    item: {
      type: Object
    }
  }
};
</script>


<style scoped lang="scss">
ion-item {
  --padding-top: 6px;
  --padding-bottom: 6px;

  ion-label {
    h3 {
      font-size: 18px;
      font-weight: bold;
      text-overflow: ellipsis;
      overflow: hidden;
    }

    span {
      font-size: 14px;
      display: inline-block;
      min-width: 24px;

      + span {
        margin-left: 10px;
      }
    }
  }

  ion-row {
    width: 100%;
    align-items: flex-start;
    justify-content: center;
    gap: 10px;

    ion-text {
      padding-top: 4px;
    }
  }
}

.custom-box {
  font-size: 14px;
  padding: 1px 7px 3px 7px;
  background-color: white;
  color: black;
  font-weight: bold;
}
</style>