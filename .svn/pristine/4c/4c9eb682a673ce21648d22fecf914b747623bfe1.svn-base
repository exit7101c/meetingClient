<template>
  <ion-card style="--background: transparent;">
    <ion-text class="icon-rank-crown" v-if="index === 0">
      <div class="is-hiddden">{{ index + 1 }}</div>
    </ion-text>
    <ion-text class="icon-rank-badge" v-else>
      {{ index + 1 }}
    </ion-text>
    <ion-thumbnail>
      <ion-img :src="'https://' + item.photo2" alt="" />
    </ion-thumbnail>
    <ion-text color="light">
      <h5>
        {{ item.nick }}
      </h5>
      <p>{{ item.votesCnt }}표</p>
    </ion-text>
  </ion-card>
</template>
<script>
export default {
  name: "ContestBestItem",
  props: {
    index: {
      type: Number
    },
    item: {
      type: Object
    }
  }
};
</script>
<style lang="scss" scoped>
ion-card {
  margin: 0;
  position: relative;
  z-index: 1;
  --background: transparent;
  width: 160px;
  contain: inherit;
  overflow: visible;
  margin: 0 25px;
  box-shadow: none;
  top: 20px;

  ion-thumbnail {
    position: relative;
    left: 50%;
    width: 160px;
    height: 160px;
    margin: 0 auto;
    transform: translateX(-50%);
    overflow: hidden;
    --border-radius: 50%;
    border: 2px solid var(--ion-color-secondary);
    margin: 0 auto;

    :nth-of-type(1) {
      border-color: red;
    }
  }

  &:nth-child(1) {
    order: 2;
    z-index: 2;
    margin: 0 -70px;
    top: 0;

    ion-thumbnail {
      box-shadow: 0 0 50px rgba(255, 255, 255, 0.5);
    }
  }

  &:nth-child(2) {
    order: 1;
    transform: scale(0.8);
  }

  &:nth-child(3) {
    order: 3;
    transform: scale(0.8);
  }

  .icon-rank-crown {
    display: block;
    margin: 0 auto 10px;
    width: 53px;
    height: 35px;
    background-image: url('@/assets/img/contest/icon_rank_crown.svg');
    background-position: center center;
    background-repeat: no-repeat;
    background-size: 53px 35px;
  }

  .icon-rank-badge {
    display: block;
    margin: 0 auto 10px;
    width: 48px;
    height: 52px;
    background-image: url('@/assets/img/contest/icon_rank_badge.svg');
    background-position: right top;
    background-repeat: no-repeat;
    background-size: 42px 52px;
    color: #fff;
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    padding: 10px 0;
  }

  ion-text {
    text-align: center;

    p {
      margin: 0;
    }
  }
}
</style>
